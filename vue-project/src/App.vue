<template>
  <header>
    <div class="wrapper">
      
			<button type="button" @click="test">测试</button>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <div>
    <ul>
      <li v-for="item in data">
        <div>ID: {{ item.id }}</div>
        <div>Name: {{ item.name }}</div>
        <div>Avatar: <img :src="item.avatar" alt=""></div>
      </li>
    </ul>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import { filterContent } from '@/config/requestConfig'

interface Data {
  id: number,
  name: string,
  avatar: string
}

const data:any = ref([])

const test = async() => {
  const result:any = await filterContent('/api/user',{})
  data.value = result.data.data
  console.log(data.value)
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
