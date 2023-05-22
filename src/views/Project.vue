<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <nav>
					<RouterLink to="/project/Li">Li</RouterLink>
					<RouterLink to="/project/Na">Na</RouterLink>
          <RouterLink to="/project/K">K</RouterLink>
				</nav>
        	<RouterView />
  </main>
</template>
<style scoped>
nav {
  width: 10%;
  /* text-align: center; */
  float: left;
  margin-top: 2rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* justify-content: flex-start; */
}

nav a.router-link-exact-active {
  color: rgb(90, 191, 8);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  font-size: 0.8rem;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
  color: black;
}

nav a:first-of-type {
  border: 0;
}
</style>