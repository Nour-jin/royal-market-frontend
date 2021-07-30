import axios from "axios";
import { API_ROOT } from "./service-info";

export const putReq = (body, id) => {
    return axios.put(`${API_ROOT}/${id}`, body).then(result => result)
};

export const postReq = (body) => {
    return axios.post(`${API_ROOT}/`, body)
};

export const getReq = (id) => {
 return axios.get(`${API_ROOT}/${id}`)
};

export const deleteReq = (id) => {
   return axios.delete(`${API_ROOT}/${id}`)
}

export const getsReq = (userId) => {
    return axios.get(`${API_ROOT}/`);
};

export const auth = (data) => {
    let token = JSON.parse(localStorage.getItem('x-auth'));
    axios.defaults.headers.common['x-auth'] = token;
    return token
}


export const asyncLocalStorage = {
    setItem: function (key, value) {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, JSON.stringify(value));
        });
    },
    getItem: function (key) {
        return Promise.resolve().then(function () {
            return localStorage.getItem(key);
        });
    }
};
  
export const likes = (postId, userId) => {
    let data = { like: postId };
   return axios.put(`http://localhost:3001/products/${userId}/like`, data)
  };



