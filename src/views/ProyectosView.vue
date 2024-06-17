<script setup>
</script>
<template>
    <div class="container mt-5 mb-5">
        <div class="text-start">
            <h2>PROYECTOS</h2>
        </div>
        <p class="lh-base">
            Estos son los proyectos más importantes que he podido desarrollar dentro del escolar y laboral.
        </p>
        <Proyecto
        nombre="LFB Store (proyecto escolar)"
        descripcion="Tienda online con carrito de compras, catálogo, envió de notificaciones por email, apartado de administrador, entre otras funciones."
        :tecnologias="['NodeJS', 'ExpressJS', 'MongoDB', 'EJS', 'JavaScript']"
        imagen="lfbstore.png"
        url="http://lfbstore.onrender.com"/>
        <Proyecto
        nombre="Musas Hair Salon"
        descripcion="Sistema de administración para estética con control de inventario, punto de venta y agenda digital"
        :tecnologias="['NodeJS', 'ElectronJS', 'MongoDB', 'HTML', 'JavaScript']"
        imagen="musashairsalon.png"/>
        <Proyecto
        nombre="DoorMaid (proyecto escolar)"
        descripcion="Sistema IOT para timbre inteligente. Transmisión de audio y video en tiempo real aplicación web."
        :tecnologias="['NodeJS', 'MongoDB', 'ExpressJS', 'EJS', 'JavaScript', 'Python']"
        imagen="doormaid.png"/>
        <Proyecto
        nombre="ForkLift VR Simulator"
        descripcion="Simulador de realidad virtual de montacargas para el sector manufacturero."
        :tecnologias="['Unreal Engine 5']"
        imagen="forkliftSimulator.png "/>
    </div>
</template>
<script>
    import Proyecto from '../components/Proyecto.vue';
    export default {
        components:{
            Proyecto
        }
    }
</script>
