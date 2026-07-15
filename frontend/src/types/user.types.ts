export type User = {
    username: string,
    email: string,
    token: string
}

export type loginResponse = {
    message: string;
    token: string;
    user: User;
}