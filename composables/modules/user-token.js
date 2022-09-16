export default {
    state: {
        token: "",
        isLogin: false
    },
    setToken(payload) {
        this.state.token = payload;
        this.isLogin = this.token ? true : false;
    },
}