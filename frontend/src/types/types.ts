export interface PostType{
    id: string;
    title: string;
    body: string;
    userId: string;
};

export interface LinkType{
    id: number;
    name: string;
    url: string;
};

export interface UserType{
    id: number;
    fullname: string;
    username: string;
    password: string;
};

export interface LoginType{
    username: string;
    password: string;
};



