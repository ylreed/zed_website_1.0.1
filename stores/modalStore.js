import { defineStore } from "pinia";

export const useModalStore = defineStore( 'modal' , () => {
    const isOpen = ref(false) //state property
    function toggle() { //setter
        this.isOpen = !this.isOpen;
        }
  
    return { isOpen, toggle }
  })