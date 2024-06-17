<template>
  <div class="card my-2">
    <div class="card-body">
      <h5 class="card-title">{{ nombre }}</h5>
      <h6 class="card-subtitle text-muted">{{ fechas }}</h6>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      nombre:{type:String, required:true},
      fechas:{type:String, required:true}
    }
  }
</script>