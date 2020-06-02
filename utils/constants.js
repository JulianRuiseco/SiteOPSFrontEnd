export const AUTH_TOKEN = 'auth-token'

export const getAuthenticationKey = () =>{
  if(typeof window === 'undefined') {
    return null;
  }else{
    return localStorage.getItem(AUTH_TOKEN);
  }
}
