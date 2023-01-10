<template>
  <my-mover></my-mover>
  <my-propbinding input="Text from property"></my-propbinding>
  <my-event-emitter></my-event-emitter>
  <my-event-listener></my-event-listener>
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex; 
  justify-content: center;
  align-items: center;
}

body, html {
  width: 100%;
  height: 100%;
}

body{margin: 0px;}


my-mover, my-propbinding, my-event-emitter{
  margin-right: 2rem;
}
</style>
