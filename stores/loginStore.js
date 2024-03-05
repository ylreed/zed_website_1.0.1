import { defineStore } from "pinia";

export const useLoginStore = defineStore( 'login' , () => {
    const isLogin = ref(false) //state property
    function toggle() { //setter
        this.isLogin = !this.isLogin;
        }
  
    return { isLogin, toggle }
  })