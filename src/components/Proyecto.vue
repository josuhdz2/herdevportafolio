<template>
    <div class="card m-3">
        <div class="row g-0">
            <div class="col-md-4 fondo img-fluid" :style="imgUrl">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ nombre }}</h5>
                    <p class="card-text">
                        {{ descripcion }}
                    </p>
                    <strong>Tecnologías:</strong>
                    <li v-for="tecno in tecnologias">{{ tecno }}</li>
                    <div v-if="url" class="enlace">
                        <a :href="url" target="_blank">Enlace</a> (La respuesta del sitio puede demorar)
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        nombre:{type:String, required:true},
        descripcion:{type:String, required:true},
        tecnologias:{type:Array, required:true},
        imagen:{type:String, required:true},
        url:{type:String, required:false}
    },
    computed:{
        imgUrl(){
            return `background-image: url('/${this.imagen}');min-height: 250px;`;
        }
    }
}
</script>
<style>
    .fondo{
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .enlace{
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>