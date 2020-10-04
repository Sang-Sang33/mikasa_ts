const state: any = {
    userInfo : JSON.parse(
        localStorage.getItem('userInfo')
        || `{
            "avator": "",
            "nickname": "",
            "tt_count": 0,
            "article_count": 0,
            "user_id": "",
            "oauth_expire_time": "",
            "oauth_token": ""
        }`
    ),
    data:"store的数据"
}
export default state