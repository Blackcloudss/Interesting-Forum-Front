App({
  globalData: {
    atoken: wx.getStorageSync('atoken') || '',
    rtoken: wx.getStorageSync('rtoken') || '',
    role: null,
    cloudEnv: 'zouyanqing-8gcva3coe0f95523'
  },

  onLaunch() {
    this.initCloud();
    const atoken = wx.getStorageSync('atoken');
    const rtoken = wx.getStorageSync('rtoken');
    if (atoken && rtoken) {
      this.globalData.atoken = atoken;
      this.globalData.rtoken = rtoken;
    } else {
      this.login().catch(err => console.error('启动时登录失败:', err));
    }
  },

  initCloud() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
      return;
    }
    wx.cloud.init({
      env: this.globalData.cloudEnv,
      traceUser: true
    });
  },

  async request(options) {
    console.log('[API] 发起请求:', {
      url: url,
      method: method,
      data: data
    });
    const { url, method = 'GET', data = {}, header = {}, noAuth = false} = options;
    const doRequest = async () => {
      const headers = { ...header };
      if (!noAuth && this.globalData.atoken) {
        headers.Authorization = this.globalData.atoken; // 无 Bearer 前缀
        console.log('请求使用的 atoken:', this.globalData.atoken);
      }
      console.log('请求详情:', { url, method, data, headers });

      return new Promise((resolve, reject) => {
          wx.request({
            url,
            method,
            data:typeof data === 'string' ? data : JSON.stringify(data),
            header: headers,
            success: (res) => {
              let result = res.data;
              console.log('请求响应原始数据:', res.data);
              if (!res.data) {
                reject(new Error('后端返回空响应'));
                return;
              }
              if (typeof res.data !== 'object') {
                try {
                  result = JSON.parse(res.data || '{}');
                } catch (e) {
                  reject(new Error('响应数据解析失败: ' + e.message));
                  return;
                }
              }
              console.log('请求响应解析后数据:', result);
              if (typeof result !== 'object' || result === null) {
                reject(new Error('响应数据不是有效对象: ' + JSON.stringify(result)));
                return;
              }
              if (res.statusCode === 200 && result.code === 20000) {
                if (!result.data || typeof result.data !== 'object') {
                  reject(new Error('响应数据缺少有效 data 字段: ' + JSON.stringify(result)));
                } else {
                  resolve(result);
                }
              } else if (result.code === -20000 || result.message?.includes('token已过期')) {
                reject(new Error('token已过期'));
              } else if (result.code === -20002 || result.code === -20003) {
                reject(new Error('token无效或类型错误'));
              } else if (result.code < 0) {
                reject(new Error('请求失败，错误码: ' + result.code));
              } else {
                reject(new Error('请求失败，未预期状态: ' + JSON.stringify(result)));
              }
            },
            fail: (err) => reject(new Error('请求失败: ' + err.errMsg))
          });
      });
    };

    try {
      return await doRequest();
    } catch (error) {
      console.log('请求错误:', error.message);
      if (error.message === 'token已过期') {
        try {
          console.log('尝试刷新 Token...');
          const refreshResult = await this.refreshToken();
          console.log('Token 刷新成功:', refreshResult);
          return await doRequest();
        } catch (refreshError) {
          console.error('刷新 Token 失败详情:', refreshError);
          console.log('尝试重新登录...');
          try {
            const loginResult = await this.login();
            console.log('重新登录成功:', loginResult);
            return await doRequest();
          } catch (loginError) {
            console.error('重新登录失败:', loginError);
            throw new Error('无法刷新 Token 或重新登录: ' + loginError.message);
          }
        }
      } else if (error.message === 'token无效或类型错误') {
        console.log('Token 无效，尝试重新登录...');
        try {
          const loginResult = await this.login();
          console.log('重新登录成功:', loginResult);
          return await doRequest();
        } catch (loginError) {
          console.error('重新登录失败:', loginError);
          throw new Error('无法重新登录: ' + loginError.message);
        }
      }
      throw error;
    }
  },

  async login() {
    try {
      const res = await wx.login();
      console.log('wx.login 成功, code:', res.code);
      const loginRes = await this.request({
        url: 'http://117.50.46.248:8085/api/wxlogin/login',
        method: 'GET',
        data: { js_code: res.code },
        noAuth: true
      });
      console.log('登录接口返回值:', loginRes);
      if (typeof loginRes.code !== 'number' || loginRes.code !== 20000) {
        throw new Error(`登录返回码无效或非 20000: ${JSON.stringify(loginRes)}`);
      }
      if (!loginRes.data || typeof loginRes.data !== 'object') {
        throw new Error('登录返回数据格式错误: ' + JSON.stringify(loginRes.data));
      }
      this._saveTokens(loginRes.data);
      return loginRes.data;
    } catch (error) {
      console.error('登录失败详情:', error);
      this._clearTokens();
      throw new Error(`登录失败: ${error.message}`);
    }
  },

  async refreshToken() {
    try {
      console.log('刷新 Token 请求开始，当前 rtoken:', this.globalData.rtoken);
      const res = await this.request({
        url: 'http://117.50.46.248:8085/api/common/rtoken',
        method: 'POST',
        data: { token: this.globalData.rtoken },
        noAuth: true
      });
      console.log('刷新 Token 返回值:', res);
      if (typeof res.code !== 'number' || res.code !== 20000) {
        throw new Error(`刷新返回码无效或非 20000: ${JSON.stringify(res)}`);
      }
      if (!res.data || typeof res.data !== 'object') {
        throw new Error('刷新返回数据格式错误: ' + JSON.stringify(res.data));
      }
      this._saveTokens(res.data);
      return res;
    } catch (error) {
      console.error('Token 刷新失败详情:', error);
      throw new Error(`Token 刷新失败: ${error.message}`);
    }
  },

  _saveTokens(data) {
    this.globalData.atoken = data.Atoken || data.atoken || ''; // 支持大小写字段
    this.globalData.rtoken = data.Rtoken || data.rtoken || '';
    this.globalData.role = data.Role || data.role || '';
    if (!this.globalData.atoken || !this.globalData.rtoken) {
      console.warn('Token 为空警告:', {
        atoken: this.globalData.atoken,
        rtoken: this.globalData.rtoken
      });
    }
    wx.setStorageSync('atoken', this.globalData.atoken);
    wx.setStorageSync('rtoken', this.globalData.rtoken);
    console.log('保存 atoken:', this.globalData.atoken);
    console.log('保存 rtoken:', this.globalData.rtoken);
  },

  _clearTokens() {
    this.globalData.atoken = '';
    this.globalData.rtoken = '';
    this.globalData.role = null;
    wx.removeStorageSync('atoken');
    wx.removeStorageSync('rtoken');
  }
});