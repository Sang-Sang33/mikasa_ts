export  interface UserID {
    username: string;
    password: string;
}

export  interface UserInfo { 
    avator: string;
    nickname: string;
    tt_count: number;
    article_count: number;
    user_id: string;
    oauth_expire_time: string;
    oauth_token?: string;
}

export interface SureAction {
    (userId: UserID):void;
}