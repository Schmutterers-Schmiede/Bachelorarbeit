<template>
  <p>{{greet}} {{name}}</p>
  <p>{{textbinding}}</p>
  <div v-text="vtext"></div><!--  can only render text from variables -->
  <div v-html="vhtml"></div>
  <h2 v-bind:id="headingid">Heading</h2>
  <button v-bind:disabled="isDisabled">Bind</button>
  <h2 class="underline">underlined text</h2>
  <h2 v-bind:class="status">Status</h2> <!--dynamic class-->
  <!-- an element can have both static and dynamic classes -->
  <h2 v-bind:class="isItalic && 'italic'">conditional class binding</h2> <!--sets "false as class if isItalic is false"-->
  <h2 v-bind:class="isSoldOut ? 'soldOut' : 'new'">sold out movie?</h2> <!--this is better-->

</template>

<script>


export default {
  name: 'App',
  data() {
    return{
      greet: 'hello',
      name: 'batman',
      textbinding: 'text binding',
      vtext: 'v-text', 
      vhtml: '<p>v-html</p>',
      headingid: 'heading', //for attaching ids to elements
      isDisabled: true,
      status: 'danger',
      isItalic: true,
      isSoldOut: true
    }
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

.underline{
  text-decoration: underline;
}

.italic
{
  font-style: italic;
}

.new{
  color: blue;
}

.soldOut{
  color: red;
}
</style>
