<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <nav>
					<RouterLink to="/project/LiPF6-EMC-FEC-M/LiPF6">LiPF6-EMC-FEC-M</RouterLink>
					<RouterLink to="/project/LiPF6-EMC-FEC-M/LiPF6">LiPF6-EMC-FEC-M</RouterLink>
          <RouterLink to="/project/LiPF6-EMC-FEC-M/LiPF6">LiPF6-EMC-FEC-M</RouterLink>
					<RouterLink to="/project/LiPF6-EMC-FEC-M">LiPF6-EMC-FEC-M</RouterLink>
          <RouterLink to="/project/LiPF6-EMC-FEC-M">LiPF6-EMC-FEC-M</RouterLink>
					<RouterLink to="/project/LiPF6-EMC-FEC-M">LiPF6-EMC-FEC-M</RouterLink>
          <RouterLink to="/project/LiPF6-EMC-FEC-M">LiPF6-EMC-FEC-M</RouterLink>
					<RouterLink to="/project/LiPF6-EMC-FEC-M">LiPF6-EMC-FEC-M</RouterLink>
          <RouterLink to="/project/LiPF6-EMC-FEC-M">LiPF6-EMC-FEC-M</RouterLink>
					<RouterLink to="/project/LiPF6-EMC-FEC-M">LiPF6-EMC-FEC-M</RouterLink>
          <RouterLink to="/project/LiPF6-EMC-FEC-M">LiPF6-EMC-FEC-M</RouterLink>
					<RouterLink to="/project/LiPF6-EMC-FEC-M">LiPF6-EMC-FEC-M</RouterLink>
				</nav>
        	<RouterView />
  </main>
</template>
<style scoped>
main{
  display: flex;
}
nav {
  width: 20%;
  /* text-align: center; */
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* justify-content: flex-start; */
}

nav a.router-link-exact-active {
  color: rgb(90, 191, 8);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  font-size: 0.5rem;
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