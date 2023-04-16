<script setup>
import jobsData from '../../data/apifake.js'
import { computed } from 'vue'
import { miStore } from '../../data/store'
const mipinia = miStore()

const LOCATION_FILTERS = {
  USA: 'usa',
  NICARAGUA: 'nicaragua',
  COLOMBIA: 'colombia'
}
const LOCATION_FILTERS2 = {
    DOCTOR: 'doctor',
    CALL_CENTER_AGENT: 'call center agent',
    SUPPORT_ROLE: 'support role',
}

const jobs = computed(() => {
    if(mipinia.datafiltradoLoc == 'null'){
        return jobsData
    }else{
        const filter1 = LOCATION_FILTERS[mipinia.datafiltradoLoc] || ''
        const firstFiltered = jobsData.filter(j => j.location === filter1)

            if(mipinia.datafiltradoRol != 'null'){
                const filter2 = LOCATION_FILTERS2[mipinia.datafiltradoRol] || ''
                 return firstFiltered.filter(j => j.role === filter2)
            }else{
                return firstFiltered
            }
    }
 
})



</script>

<template src="./jobs.html" />

<style src="./jobs.scss" />