<script setup>
import navbar from    './sections/navbar/navbar.vue'
import hero from      './sections/hero/hero.vue'
import searchbox from './sections/searchbox/searchbox.vue'
import jobs from      './sections/jobs/jobs.vue'
import join from      './sections/JoinUs/Join.vue'
import banner from    './sections/banner/banner.vue'
import footeri from   './sections/footer/footer.vue'
</script>

<template>
  <header>
    <navbar />
  </header>
  <main>
   <hero />
   <searchbox />
   <jobs />
   <join />
   <banner/>
  </main>
  <footeri/>
</template>

<style scoped>
</style>
