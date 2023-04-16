import { defineStore } from 'pinia'

export const miStore = defineStore('datos',{
    state: () => ({
      datafiltradoLoc: null,
      isnicaragua: false,
      iscolombia: false,
      isusa: false,
    }),
  
    actions: {
     


    }
  });