<script setup>


function updateSelectedValue3(e){
    let selectElement = document.getElementById("floatingSelect3");
    let selectedOption = selectElement.options[selectElement.selectedIndex].value;
  console.log(selectedOption);
  googleTranslateElementInit(selectedOption)
}

function googleTranslateElementInit(la) {
              new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'es'}, 'app');
            }
</script>

<template src="./navbar.html" />

<style src="./navbar.scss" />