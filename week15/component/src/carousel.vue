<template>
  <div>
  <img id="abc"  class="cls"/>
  </div>
</template>
<script>
export default {
  data: {
    message: 'Hello'
  },
  computed: {
    reversedMessage: function () {
      let i = 1
      while (i < 100) {
        i = i + 1
      }
      return this.message.split('').reverse().join('')
    }
  }
}
</script>
<style>
</style>