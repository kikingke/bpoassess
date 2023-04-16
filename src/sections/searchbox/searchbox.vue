<script setup>
import { miStore } from '../../data/store'
const mipinia = miStore()

function updateSelectedValue(e){
    var selectElement = document.getElementById("floatingSelect1");
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;
  console.log(selectedOption);
 mipinia.datafiltradoLoc = selectedOption
 
}
function updateSelectedValue2(e){
  var selectElement2 = document.getElementById("floatingSelect2");
  var selectedOption2 = selectElement2.options[selectElement2.selectedIndex].value;
  console.log(selectedOption2);
 mipinia.datafiltradoRol = selectedOption2
 
}

function allj(){
  mipinia.datafiltradoRol = 'null'
  mipinia.datafiltradoLoc = 'null'
  var selectElement = document.getElementById("floatingSelect1");
  selectElement.selectedIndex = 'null'
  var selectElement2 = document.getElementById("floatingSelect2");
  selectElement2.selectedIndex = 'null'
}
</script>

<template src="./searchbox.html" />

<style src="./searchbox.scss" />