<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">HDZ Development</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/tecnologias">Tecnologías</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/proyectos">Proyectos</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">Curriculum</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
  <div class="bg-dark text-light p-5">
    <div>Página desarrollada por: Josué Hernández Chávez</div>
    <div>Icons By <a class="link-light" target="_blank" href="https://icons8.com">Icons8</a></div>
  </div>
</template>