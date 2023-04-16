<script setup>
import { miStore } from '../../data/store'
import  { ref } from 'vue'
const mipinia = miStore()

const selected = ref();
//selectedLoc.value = mipinia.datafiltradoLoc
console.log(mipinia);

function updateSelectedValue(){

}
</script>

<template src="./searchbox.html" />

<style src="./searchbox.scss" />