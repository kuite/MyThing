
export function authHeader() {
    // return authorization header with jwt token
    const user = JSON.parse(localStorage.getItem('user'));

    const userparsed = JSON.parse(user)

    console.log('Auth Token', userparsed.auth_token);
    console.log(user)
        return { 'Authorization': 'Bearer ' + user.token };
}
