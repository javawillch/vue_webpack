<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-p5"></script>
<template>
    <div id="app">
        <vue-p5 v-on="this"></vue-p5>
    </div>
<template>
 
<script>
new Vue({
  el: '#app',
  methods: {
    setup(sketch) {
      sketch.background('green');
      sketch.text('Hello p5!', 20, 20);
    }
  }
});
</script> 