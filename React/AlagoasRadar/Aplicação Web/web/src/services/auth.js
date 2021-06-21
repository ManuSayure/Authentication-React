export const TOKEN_KEY = "@alRadar-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null; //boolean
export const getToken = () => localStorage.getItem(TOKEN_KEY);

/** Ao fazer login guarda o token no local storage */
export const login = token => { 
    
    localStorage.setItem(TOKEN_KEY, token);
}

/** Quando fizer logout remove o token do local storage */
export const logout = token => {
    localStorage.removeItem(TOKEN_KEY);
}