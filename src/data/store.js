import { defineStore } from 'pinia'

export const miStore = defineStore('datos',{
  state: () => ({
    datafiltradoLoc: 'null',
    datafiltradoRol:'null'
  }),
  actions: {
    increment() {
     
    }
  }
  });