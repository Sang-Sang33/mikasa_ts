const state: any = {
    userInfo: JSON.parse(
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
    navList: [
        { index: "2", content: "推荐", icon: "el-icon-menu" },
        { index: "3", content: "动漫", icon: "el-icon-s-promotion" },
        { index: "4", content: "悬疑", icon: "el-icon-s-opportunity" },
        { index: "5", content: "热血", icon: "el-icon-s-flag" },
        { index: "6", content: "体育", icon: "el-icon-basketball" },
        { index: "7", content: "音乐", icon: "el-icon-lollipop" },
        { index: "8", content: "风景", icon: "el-icon-picture-outline" },
        { index: "9", content: "风景", icon: "el-icon-picture-outline" },
        { index: "10", content: "风景", icon: "el-icon-picture-outline" },
        { index: "11", content: "风景", icon: "el-icon-picture-outline" },
    ],
    subList: [
        {
            title: '分组一',
            list: [
                { index: "1-1", content: "主页", icon: "el-icon-files" },
                { index: "1-2", content: "登录", icon: "el-icon-mobile" },
            ]
        },
        {
            title: '分组二',
            list: [
                { index: "1-3", content: "文章列表", icon: "el-icon-reading" }
            ]
        },
        {
            title: '分组三',
            list: [
                { index: "1-4", content: "用户信息", icon: "el-icon-s-custom" },
                { index: "1-5", content: "文章详情", icon: "el-icon-tickets" }
            ]
        },
    ],
    iconData: [
        {
            titleClass: "userMsg",
            icon: [
                {
                    iconClass: "el-icon-user-solid",
                    iconMsg: "昵称：",
                    value:"",
                    btnEvent() {
                        console.log(111111111)
                    }
                },
                {
                    iconClass: "el-icon-setting",
                    iconMsg: "暂无",
                    value:"",
                    btnEvent() {
                        console.log(22222)
                    }
                },
            ]
        }, {
            titleClass: "article",
            icon: [
                {
                    iconClass: "el-icon-s-comment",
                    iconMsg: "头条数：",
                    value:"",
                    btnEvent() {
                        console.log(33333)
                    }
                },
                {
                    iconClass: "el-icon-document",
                    iconMsg: "文章数：",
                    value:"",
                    btnEvent() {
                        console.log(4444)
                    }
                },
            ]
        }, {
            titleClass: "setting",
            icon: [
                {
                    iconClass: "el-icon-setting",
                    iconMsg: "设置",
                    value:"",
                    btnEvent() { 
                        console.log(5555)
                    }
                },
                {
                    iconClass: "el-icon-s-home",
                    iconMsg: "返回首页",
                    value:"",
                    btnEvent() {
                        console.log(6666)
                    }
                },
            ]
        },
    ]
}
export default state