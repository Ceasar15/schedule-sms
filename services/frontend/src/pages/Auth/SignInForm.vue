<!-- eslint-disable vue/no-mutating-props -->
<template>
    <card>
        <h5 slot="header" class="title">Sign In</h5>
        <div class="row">
            <div class="col-md-3 pr-md-1">
                <base-input label="Username" v-model="userData.username" placeholder="Username" required>
                </base-input>
            </div>
            <div class="col-md-4 pl-md-1">
                <base-input label="Email address" type="email" placeholder="example@mail.com">
                </base-input>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 pr-md-1">
                <base-input label="Password" v-model="userData.password" type="password" placeholder="Password"
                    required>
                </base-input>
            </div>
        </div>
        <base-button @click="submit()" slot="footer" type="primary" fill>SignIn</base-button>
    </card>
</template>
<script>
import { reactive } from 'vue'
import axios from 'axios';

import useUserStore from "../../store";

export default {
    setup() {
        const authStore = reactive(useUserStore.useUserStore());
        const userName = authStore.user
        return { userName, authStore };

    },
    props: {
        model: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },

    data() {
        return {
            userData: {
                username: "",
                password: ""
            }

        }
    },
    methods: {
        async submit() {
            await this.authStore.signIn(
                this.userData.username, this.userData.password
            ).then((d) => { 
                console.log("success",d)
            })
            // console.log(rr.then((d) => console.log('d', d)))

        },
    },
};
</script>
<style>

</style>
