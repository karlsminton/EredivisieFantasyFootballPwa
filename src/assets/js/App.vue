<template>
  <div id="app">
    <header>
      <a href="/">
        <h1>Eredivisie Fantasy Football</h1>
      </a>
    </header>
    <main>
      <nav id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/standings">Standings</router-link>
        <router-link to="/squad">Squad</router-link>
        <router-link to="/login">Log In</router-link>
        <router-link to="/register">Register</router-link>
      </nav>
      <router-view />
    </main>
  </div>
</template>
