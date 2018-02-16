<template>
  <div>
    <button v-on:click="toggleMessage">toggle...</button>
    <div v-if="showMessage" class="container">
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      message: 'Hello World!!! test',
      showMessage: false
    };
  },
  methods: {
    toggleMessage: function() {
      this.showMessage = !this.showMessage;
    }
  }
};
</script>

<style lang="scss" scoped>
$color: #eee;

.container {
  border: 1px solid $color;
  padding: 20px;
}
</style>



