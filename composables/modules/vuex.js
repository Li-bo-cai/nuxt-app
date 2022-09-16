let lifeData = {};

try {
    // 尝试获取本地是否存在lifeData变量，第一次启动APP时是不存在的
    lifeData = locStorage('lifeData');
} catch (e) {

}
// 需要永久存储，且下次APP启动需要取出的，在state中的变量名
let saveStateKeys = ['userInfo', 'TIM', 'whereTab', 'tabIndex'];

// 保存变量到本地存储中
const saveLifeData = function (key, value) {
    // 判断变量名是否在需要存储的数组中
    if (saveStateKeys.indexOf(key) != -1) {
        // 获取本地存储的lifeData对象，将变量添加到对象中
        let tmp = locStorage('lifeData');
        // 第一次打开APP，不存在lifeData变量，故放一个{}空对象
        tmp = tmp ? tmp : {};
        tmp[key] = value;
        // 执行这一步后，所有需要存储的变量，都挂载在本地的lifeData对象中
        locStorage('lifeData', tmp);
    }
}

export default {
    state: {},
    commit(name, payload) {
        this[name](payload);
    },
    $uStore(payload) {
        let nameArr = payload.name.split('.');
        let saveKey = '';
        let len = nameArr.length;
        if (nameArr.length >= 2) {
            let obj = this.state[nameArr[0]];
            for (let i = 1; i < len - 1; i++) {
                obj = obj[nameArr[i]];
            }
            obj[nameArr[len - 1]] = payload.value;
            saveKey = nameArr[0];
        } else {
            this.state[payload.name] = payload.value;
            saveKey = payload.name;
        }
        saveLifeData('whereTab', payload)
    },
    UP_DATE_WHERE_TAB(payload) {
        this.state.whereTab = payload
        saveLifeData('whereTab', payload)
    },
    UP_DATA_TAB_INDEX(payload) {
        this.state.tabIndex = payload
        saveLifeData('tabIndex', payload)
    }

}