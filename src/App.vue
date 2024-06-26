<template>
      <div id="app" class="pt-16">
        <NavBar />
      <router-view/>
    </div>
</template>

<script>
import NavBar from './components/Navbar.vue';
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #F3E8FF;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: sticky;
  top: 0;
}

nav .title {
  font-size: 1.5rem;
  margin: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

nav ul {
  display: flex;
}

nav ul li {
  list-style: none;
}

nav ul li a {
  display: block;
  text-decoration: none;
  color: white;
  padding: 0.5rem;
  margin: 0 0.5rem;
  border-radius: 0.5rem;
}

nav ul li a:not(.active):hover {
  background-color: #172554;
}

nav .menu {
  display: none;
  position: absolute;
  top: 0.75rem;
  right: 0.5rem;
  flex-direction: column;
  justify-content: space-between;
  width: 2.25rem;
  height: 2rem;
}

nav .menu span {
  height: 0.4rem;
  width: 100%;
  background-color: #fff;
  border-radius: 0.2rem;
  border-left: solid 1px rgba(160, 160, 160, 0.3);
}

@media (max-width: 768px) {

  .active {
    background-color: transparent;
    padding: 0.0rem;
  }

  nav {
    display: none;
  }

  nav ul {
    display: none;
    flex-direction: column;
    width: 100%;
    margin-bottom: 0.25rem;
    padding: 0.5rem;
  }

  nav ul.open {
    display: flex;
  }

  nav ul li {
    width: 100%;
    text-align: center;
    padding: 0.5rem;
  }

  nav ul li a {
    margin: 0.2rem 0.5rem;
  }

}


</style>
