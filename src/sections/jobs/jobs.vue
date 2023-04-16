<script setup>
import jobsData from '../../data/apifake.js'
import { ref,computed } from 'vue'
import { miStore } from '../../data/store'
import Swal from 'sweetalert2/dist/sweetalert2';
const mipinia = miStore()
const detail = ref()
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

function getsingleJOB(ID) {
    const justonejob = jobsData.filter(j => j.id === ID)
    console.log('dato de api', justonejob);

    justonejob.forEach(function (arrayItem) {
        Swal.fire({
            title: arrayItem.job,
            text: arrayItem.description,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Apply',
            footer: `<div class="d-flex justify-content-between w-100">
            <span class="fw-bold text-capitalize">Location: ${arrayItem.location}</span>
                     <span class="fw-bold text-capitalize">Role: ${arrayItem.role}</span>
                     </div>`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'You Applied',
                    'Successful Application Simulation',
                    'success'
                )
            }
        })
        console.log(arrayItem);
    });
}

</script>

<template src="./jobs.html" />

<style src="./jobs.scss" />