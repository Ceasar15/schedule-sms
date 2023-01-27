
import axios from 'axios';

// // const state = {
// //   user: null,
// // };

// // const getters = {
// //   isAuthenticated: state => !!state.user,
// //   stateUser: state => state.user,
// // };

// // const actions = {
// //   async register({dispatch}, form) {
// //     await axios.post('register', form);
// //     let UserForm = new FormData();
// //     UserForm.append('username', form.username);
// //     UserForm.append('password', form.password);
// //     await dispatch('logIn', UserForm);
// //   },
// //   async logIn({dispatch}, user) {
// //     await axios.post('login', user);
// //     await dispatch('viewMe');
// //   },
// //   async viewMe({commit}) {
// //     let {data} = await axios.get('users/whoami');
// //     await commit('setUser', data);
// //   },
// //   // eslint-disable-next-line no-empty-pattern
// //   async deleteUser({}, id) {
// //     await axios.delete(`user/${id}`);
// //   },
// //   async logOut({commit}) {
// //     let user = null;
// //     commit('logout', user);
// //   }
// // };

// // const mutations = {
// //   setUser(state, username) {
// //     state.user = username;
// //   },
// //   logout(state, user){
// //     state.user = user;
// //   },
// // };

// // export default {
// //   state,
// //   getters,
// //   actions,
// //   mutations
// // };

// // /store/user.js

import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
        token: null
    }),
    getters: {
        isAuthenticated: state => !!state.user,
        stateUser: state => state.user,
    },
    actions: {
        async fetchUser() {
            const res = await fetch("https://localhost:5000/users/whoami");

            const user = await res.json();
            this.user = user;
        },
        async signUp(username, password) {
            const juu = await axios.post('register', { username, password })
            return juu
            // showTooltip(`Welcome back ${this.userData.name}!`)
        },
        async signIn({
            commit
        }, username, password) {
            let UserForm = new FormData();
            UserForm.append('username', username);
            UserForm.append('password', password);
            await axios.post('login', UserForm)
                .then((response) => {
                    console.log(`Welcome`, response)
                    return response
                    // VueCookies.set('accessToken', response.data.access)
                    // VueCookies.set('refreshToken', response.data.refresh)
                    // commit('setUser', User.username)
                })
        },
        async signIIn(username = "user1", password = "edem1234") {
            let UserForm = new FormData();
            UserForm.append('username', username);
            UserForm.append('password', password);
            // axios.post('login', UserForm).then( response => {
            //     console.log("res",response)
            //     this.token = response
            //     console.log("token", this.token)
            // }).catch( error => {
            //     console.log("error again", error)
            //     return error
            // })
            const res = await axios.post('login', UserForm)

        },
        async logOut() {
            try {
                this.user
            }
            catch (error) {
                console.log(error)
            }

        }
    },
});