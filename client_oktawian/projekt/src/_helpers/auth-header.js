
export function authHeader() {
    // return authorization header with jwt token
    const user = JSON.parse(localStorage.getItem('user'));

    console.log('Auth Token', user.auth_token);
    console.log(user)
        return { 'Authorization': 'Bearer ' + user.token };
}
