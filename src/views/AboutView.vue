<template>
  <div class="container mt-5 mb-5">
    <div class="text-start">
      <h2>CURRICULUM</h2>
    </div>
    <p class="lh-base">
      Ingeniero en <strong>Desarrollo y Gestión de Software</strong>. He podido destacar por mis habilidades 
      para el desarrollo de software. Disfruto mucho los aspectos relacionados con la tecnología y la programación. Me considero 
      una persona enfocada a la tarea, muy centrada y con muchas ganas de aprender nuevas cosas. Me gustan los retos y soy capaz de asumir responsabilidades. 
      Mis habilidades de desarrollo incluyen aplicaciones web, móviles, API's, IoT, etc. 
    </p>
    <h4>Información de contacto:</h4>
    <div class="row">
      <div class="col-md-6">
        <div>
          <strong>Dirección:</strong> Tequisquiapan, Querétaro. México.
        </div>
        <div>
          <strong>Teléfono:</strong> <a href="tel:+524141008878">(+52) 414-1008-878</a>
        </div>
      </div>
      <div class="col-md-6">
        <div>
          <strong>Correo electrónico:</strong> <a href="mailto:josueherdeveloper@gmail.com">josueherdeveloper@gmail.com</a>
        </div>
        <div>
          <strong>GitHub:</strong> <a target="_blank" href="https://github.com/josuhdz2">JosuHdz2</a>
        </div>
      </div>
    </div>
    <h4 class="my-4">Experiencia laboral.</h4>
    <div class="my-2 card">
      <div class="card-body">
        <h5 class="card-title">Desarrollador</h5>
        <h6 class="card-subtitle text-muted">Mussas Hair Salon (Abril 2022 - Mayo 2023)</h6>
        <p class="card-text">
          Fui encargado del desarrollo de cada aspecto de un sistema que incluía punto de venta, administración de inventario, 
          gestión de propinas y empleados, así como una agenda digital.
        </p>
      </div>
    </div>
    <h4 class="my-4">Formación académica.</h4>
    <Educacion
    titulo="Ing. en Desarrollo y Gestión de Software"
    descripcion="En la Universidad Tecnológica de San Juan del Río. Recientemente finalicé el curso."
    fechas="Agosto 2022 - Abril 2024 (San Juan del Río, Qro.)"/>
    <Educacion
    titulo="T.S.U. en Tecnologías de la Información."
    descripcion="Por la Universidad Tecnológica de San Juan del Río. Desarrolle múltiples proyectos de software."
    fechas="Agosto 2020 - Agosto 2023 (San Juan del Río, Qro.)"/>
    <Educacion
    titulo="Capacitación en Tecnologías de la Información y la Comunicación."
    descripcion="Por el Colegio de Bachilleres del Estado de Querétaro plantel 12, como alumno destacado."
    fechas="Agosto 2017 - Julio 2020 (Tequisquiapan, Qro.)"/>
    <h4 class="my-4">Competencias.</h4>
    <div class="row">
      <div class="col-md-6">
        <h5>Duras</h5>
        <Habilidad nombre="Ofimática" porcentaje="80"/>
        <Habilidad nombre="Desarrollo backend" porcentaje="60"/>
        <Habilidad nombre="Desarrollo frontend" porcentaje="40"/>
        <Habilidad nombre="Desarrollo móvil" porcentaje="40"/>
        <Habilidad nombre="Interconexión de redes" porcentaje="20"/>
      </div>
      <div class="col-md-6">
        <h5>Blandas</h5>
        <Habilidad nombre="Resolución de problemas" porcentaje="80"/>
        <Habilidad nombre="Adaptabilidad" porcentaje="60"/>
        <Habilidad nombre="Trabajo en equipo" porcentaje="80"/>
      </div>
    </div>
    <h4 class="my-4">Idiomas</h4>
    <Habilidad nombre="Espaniol (Nativo)" porcentaje="100"/>
    <Habilidad nombre="Ingles (B2 by British Council)" porcentaje="66"/>
    <h4 class="my-4">Cursos</h4>
    <Curso
    nombre="Introducción al control de versiones con Git (Microsoft Learn)"
    fechas="Mayo 2023"/>
    <Curso
    nombre="Introduction to MongoDB (MongoDB University)"
    fechas="Mayo 2023"/>
    <Curso
    nombre="Scrum Fundamentals (VMEdu)"
    fechas="Julio 2021"/>
    <Curso
    nombre="White Bell (Lean Six Sigma)"
    fechas="Septiembre 2023"/>
  </div>
</template>
<script>
  import Educacion from '../components/Educacion.vue';
  import Habilidad from '../components/Habilidad.vue';
  import Curso from '../components/Curso.vue';
  export default{
    components:{
      Educacion,
      Habilidad,
      Curso
    }
  }
</script>