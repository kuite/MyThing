
export function authHeader() {
    // return authorization header with jwt token
    const user = JSON.parse(localStorage.getItem('user'));
    const userparsed = JSON.parse(user)

        return { 'Authorization': 'Bearer ' + userparsed.auth_token };
}
