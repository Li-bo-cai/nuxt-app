import Ax from "../server";

export default (selfHeader) => {
    return {
        //获取热门资讯
        getHotInformation(params) {
            return Ax.get("/web/homepage/index", params, selfHeader);
        }
    }
}

