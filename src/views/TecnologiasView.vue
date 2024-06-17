<template>
  <div class="container mt-5 mb-5">
    <div class="text-start">
      <h2>TECNOLOGÍAS Y FRAMEWORKS</h2>
    </div>
    <p class="lh-base">
      Estas herramientas o tecnologías son las que he podido utilizar para el desarrollo de muchos proyectos de diferentes tipos.
    </p>
    <h4 class="text-center mt-5">-- Desarrollo Web --</h4>
    <div class="row">
      <div class="col-md-6 text-center">
        <h5>Backend</h5>
        <Tecnologia
        nombre="NodeJS"
        descripcion="Es un ejecución en tiempo de ejecucion basado en JavaScript y destinado al backend."
        nivel="Avanzado"
        imagen="node.png"/>
        <Tecnologia
        nombre="ExpressJS"
        descripcion="Es un framework de NodeJS para el desarrollo de aplicaciones web."
        nivel="Avanzado"
        imagen="express.png"/>
        <Tecnologia
        nombre="Rest API's"
        descripcion="Es un tipo de API que usa HTTP para obtener y manipular datos."
        nivel="Intermedio"
        imagen="api.png"/>
        <Tecnologia
        nombre="GraphQL"
        descripcion="Es un lenguaje de consulta y manipulación de datos para desarrollo de API's."
        nivel="Básico"
        imagen="graphql.png"/>
      </div>
      <div class="col-md-6 text-center">
        <h5>Frontend</h5>
        <Tecnologia
        nombre="HTML"
        descripcion="Lenguaje de marcado para creación de páginas web."
        nivel="Intermedio"
        imagen="html.png"/>
        <Tecnologia
        nombre="JavaScript"
        descripcion="Lenguaje de programación interpretado y orientado a objetos, usado por los navegadores."
        nivel="Avanzado"
        imagen="javascript.png"/>
        <Tecnologia
        nombre="EJS"
        descripcion="Lenguaje de plantillas que permite generar HTML con JavaScript simple."
        nivel="Intermedio"
        imagen="ejs.png"/>
        <Tecnologia
        nombre="CSS"
        descripcion="Es un lenguaje de diseño gráfico para dar estilo a un documento en lenguaje marcado."
        nivel="Básico"
        imagen="css.png"/>
        <Tecnologia
        nombre="Bootstrap"
        descripcion="Es un framework de CSS para el diseño de sitios web."
        nivel="Intermedio"
        imagen="bootstrap.png"/>
        <Tecnologia
        nombre="VueJS"
        descripcion="Es un framework de JavaScript para aplicaciones frontend de una sola página."
        nivel="Intermedio"
        imagen="vuejs.png"/>
        <Tecnologia
        nombre="Angular"
        descripcion="Es un framework de JavaScript para aplicaciones frontend desarrollado en TypeScript."
        nivel="Básico"
        imagen="angular.png"/>
      </div>
    </div>
    <h5 class="text-center mt-5">Mas...</h5>
    <div class="row">
      <div class="col-md-4 text-center">
        <Tecnologia
        nombre="PWA"
        descripcion="Progresive Web Applications, es un tipo de software de aplicación a través de la web."
        nivel="Intermendio"
        imagen="pwa.png"/>
        
      </div>
      <div class="col-md-4 text-center">
        <Tecnologia
        nombre="Web Sockets"
        descripcion="Tecnología que proporciona un canal bidireccional y full-duplex de comunicación cliente-servidor."
        nivel="Intermendio"
        imagen="websocket.png"/>
      </div>
      <div class="col-md-4 text-center">
        <Tecnologia
        nombre="Web RTC"
        descripcion="Proporciona a los clientes comunicación en tiempo real a través de API's."
        nivel="Básico"
        imagen="webrtc.png"/>
      </div>
    </div>
    
    <h4 class="text-center mt-5">-- Otras herramientas --</h4>
    <div class="row">
      <div class="col-md-4 text-center">
        <Tecnologia
        nombre="Docker"
        descripcion="Herramienta para la automatización de despliegue de aplicaciones dentro de contenedores."
        nivel="Básico"
        imagen="docker.png"/>
      </div>
      <div class="col-md-4 text-center">
        <Tecnologia
        nombre="Git"
        descripcion="Software de control de versiones pensado en la eficiencia del mantenimiento de las versiones de las aplicaciones."
        nivel="Intermedio"
        imagen="git.png"/>
      </div>
      <div class="col-md-4 text-center">
        <Tecnologia
        nombre="Jest"
        descripcion="Marco de trabajo de testing para JavaScript basado en la simplicidad."
        nivel="Básico"
        imagen="jest.png"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 text-center"></div>
      <div class="col-md-4 text-center">
        <Tecnologia
        nombre="Kubernetes"
        descripcion="Plataforma de servicio distribuido para automatizacion de despliegue, ajuste de escala y manejo de contenedores."
        nivel="Básico"
        imagen="kubernetes.png"/>
      </div>
      <div class="col-md-4 text-center"></div>
    </div>
    <h4 class="text-center mt-5">-- Bases de Datos --</h4>
    <div class="row">
      <div class="col-md-6 text-center">
        <Tecnologia
        nombre="MongoDB"
        descripcion="Sistema de base de datos no relacional orientada a documentos."
        nivel="Intermedio"
        imagen="mongodb.png"/>
      </div>
      <div class="col-md-6 text-center">
        <Tecnologia
        nombre="MySQL"
        descripcion="SGBD relacional, considerada como la base de datos de código abierto más popular."
        nivel="Básico"
        imagen="mysql.png"/>
      </div>
    </div>
    <h4 class="text-center mt-5">-- Desarrollo Movil --</h4>
    <div class="row">
      <div class="col-md-4 text-center">
        <Tecnologia
        nombre="Android Studio"
        descripcion="IDE para desarrollo de app's para Android."
        nivel="Básico"
        imagen="androidStudio.png"/>
      </div>
      <div class="col-md-4 text-center">
        <Tecnologia
        nombre="Flutter"
        descripcion="SDK para desarrollo de aplicaciones móviles multiplataforma."
        nivel="Intermedio"
        imagen="flutter.png"/>
      </div>
      <div class="col-md-4 text-center">
        <Tecnologia
        nombre="Cordova"
        descripcion="Framework para desarrollo móvil basado en tecnologías HTML, CSS y JavaScript."
        nivel="Básico"
        imagen="cordova.png"/>
      </div>
    </div>
    <h4 class="text-center mt-5">-- Desarrollo de Escritorio --</h4>
    <div class="col-12 text-center">
      <Tecnologia
      nombre="ElectronJS"
      descripcion="Framework de código abierto para desarrollo de software de escritorio."
      nivel="Intermedio"
      imagen="electronjs.png"/>
    </div>
    <h4 class="text-center mt-5">-- Otros lenguajes --</h4>
    <div class="row">
      <div class="col-md-4 text-center">
        <Tecnologia
        nombre="Python"
        descripcion="Lenguaje interpretado de alto nivel, utilizado para desarrollo de aplicaciones de cualquier tipo."
        nivel="Básico"
        imagen="python.png"/>
      </div>
      <div class="col-md-4 text-center">
        <Tecnologia
        nombre="C++"
        descripcion="Lenguaje compilado de bajo nivel, agregando manipulación de objetos a C."
        nivel="Básico"
        imagen="c++.png"/>
      </div>
      <div class="col-md-4 text-center">
        <Tecnologia
        nombre="Java"
        descripcion="Lenguaje de programación compilado con sintaxis derivada de C y C++."
        nivel="Básico"
        imagen="java.png"/>
      </div>
    </div>
  </div>
</template>
<script>
  import Tecnologia from '../components/Tecnologia.vue';
  export default{
    components:{
      Tecnologia
    }
  }
</script>