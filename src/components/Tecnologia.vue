<template>
  <div class="card border-start border-end border-top-0 border-bottom-0">
    <div class="card-body">
      <div class="tex-center">
        <img style="height: 50px;" :src="'/'+imagen">
      </div>
      <h6>{{ nombre }}</h6>
      <p class="card-text">{{ descripcion }}</p>
      <strong>Nivel de dominio:</strong> {{ nivel }}
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      nombre:{type:String, required:true},
      descripcion:{type:String, required:true},
      nivel:{type:String, required:true},
      imagen:{type:String, required:true}
    }
  }
</script>