<template>
  <div id="app">
    <header>
      <h1>Eredivisie Fantasy Football</h1>
    </header>
    <main>
      <nav id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/post">Post</router-link>
        <router-link to="/login">Log In</router-link>
        <router-link to="/register">Register</router-link>
      </nav>
      <router-view />
    </main>
  </div>
</template>
