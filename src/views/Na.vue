<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <nav>
					<RouterLink to="/project/Na/1NaDFOB-0.2NaBF4-3.4FEC-4.13DEC-1.65HFE-0.22PFP">1NaDFOB-0.2NaBF4-3.4FEC-4.13DEC-1.65HFE-0.22PFP</RouterLink>
					<RouterLink to="/project/Na/1NaDFOB-0.2NaBF4-3.4FEC-4.13DEC-1.65HFE">1NaDFOB-0.2NaBF4-3.4FEC-4.13DEC-1.65HFE</RouterLink>
          <RouterLink to="/project/Na/1NaDFOB-0.2NaBF4-4.32FEC-5.23DEC">1NaDFOB-0.2NaBF4-4.32FEC-5.23DEC</RouterLink>
					<RouterLink to="/project/Na/1NaDFOB-1NaBF4-9.14FEC-2.56mFEP">1NaDFOB-1NaBF4-9.14FEC-2.56mFEP</RouterLink>
          <RouterLink to="/project/Na/1NaDFOB-1NaBF4-9.14FEC-2.56pFEP">1NaDFOB-1NaBF4-9.14FEC-2.56pFEP</RouterLink>
				<RouterLink to="/project/Na/1NaDFOB-1NaBF4-9.14FEC-2.56tFEP">1NaDFOB-1NaBF4-9.14FEC-2.56tFEP</RouterLink>
        <RouterLink to="/project/Na/1NaFSI-3.2DME-1.8ENE">1NaFSI-3.2DME-1.8ENE</RouterLink>
        <RouterLink to="/project/Na/1NaFSI-3.2DME-1.54OTE">1NaFSI-3.2DME-1.54OTE</RouterLink>
        <RouterLink to="/project/Na/1NaFSI-3.2DME-2.2TTE">1NaFSI-3.2DME-2.2TTE</RouterLink>
        <RouterLink to="/project/Na/1NaFSI-3.2DME-2.04MNE">1NaFSI-3.2DME-2.04MNE</RouterLink>
        <RouterLink to="/project/Na/1NaFSI-3.2DME-2.6HME">1NaFSI-3.2DME-2.6HME</RouterLink>
        <RouterLink to="/project/Na/1NaFSI-3.2DME-2.24HEE">1NaFSI-3.2DME-2.24HEE</RouterLink>
        <RouterLink to="/project/Na/1NaFSI-3.2DME-2.47HFE">1NaFSI-3.2DME-2.47HFE</RouterLink>
        <RouterLink to="/project/Na/1NaFSI-3.2DME-2.73TEE">1NaFSI-3.2DME-2.73TEE</RouterLink>
        <RouterLink to="/project/Na/1NaFSI-3.2DME-3.27TME">1NaFSI-3.2DME-3.27TME</RouterLink>
        <RouterLink to="/project/Na/1NaFSI-3.2DME">1NaFSI-3.2DME</RouterLink>
        <RouterLink to="/project/Na/1NaFSI-4.8EGDBE">1NaFSI-4.8EGDBE</RouterLink>
        <RouterLink to="/project/Na/1NaFSI-7.1EGDEE">1NaFSI-7.1EGDEE</RouterLink>
        <RouterLink to="/project/Na/1NaFSI-7.2DPE">1NaFSI-7.2DPE</RouterLink>
        <RouterLink to="/project/Na/1NaFSI-9.6DME">1NaFSI-9.6DME</RouterLink>

        </nav>
        	<RouterView />
  </main>
</template>
<style scoped>
main{
  display: flex;
}
nav {
  width: 40%;
  /* text-align: center; */
  margin-top: 2rem;
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