<template>
  <div class="my-2">
    <strong>{{ nombre }}</strong>
    <div class="progress">
      <div class="progress-bar bg-secondary" role="progressbar" :style="{width: porcentaje+'%'}" :aria-valuenow="porcentaje" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      nombre:{type:String, required:true},
      porcentaje:{type:Number, required:true}
    }
  }
</script>