<template>
  <div class="card my-2">
    <div class="card-body">
      <h5 class="card-title">{{ titulo }}</h5>
      <p class="card-text">
        {{ descripcion }}
      </p>
      <h6 class="card-subtitle text-muted">{{ fechas }}</h6>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      titulo:{type:String, required:true},
      descripcion:{type:String, required:true},
      fechas:{type:String, required:true}
    }
  }
</script>