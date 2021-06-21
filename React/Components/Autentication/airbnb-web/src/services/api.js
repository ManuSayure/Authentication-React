import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({ 

    baseURL : "string de concexao da api"

});

/** interceptando a requisição e caso existindo o token no local storage,
 *  o mesmo será adicionado  header de autorização */

api.interceptors.request.use(async config => {

    const token = getToken();

    if(token){
        
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;