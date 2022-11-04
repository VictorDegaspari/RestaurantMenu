import { defineStore } from 'pinia';
import api from '../api.js';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: '',
        user: {}
    }),

    getters: {
        getToken: (state) => {
            if (!state.token || state.token == 'undefined') {
                state.token = localStorage.getItem('token');
            }
            return state.token;
        },
        getAuthUser: (state) =>  {
            return state.user;
        }
    },
  
    actions: {
        setToken(token) {
            const localToken = localStorage.getItem('token');

            if (!localToken || localToken == 'undefined') localStorage.setItem('token', token);

            this.token = token;
        },
        
        setAuthUser(token) {
            this.setToken(token);
            if (this.getAuthUser?.email) return;
            api.get('api/loggedUser').then(response => {
                this.user = response.data;
                localStorage.setItem('user', JSON.stringify(this.user));
            });
        },

        logout() {
            const localToken = this.getToken;

            if (localToken) localStorage.removeItem('token');
            
            this.token = null;
        },
    },
});