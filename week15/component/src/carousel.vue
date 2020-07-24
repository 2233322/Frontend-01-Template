<template>
  <div></div>
</template>
<script>
export default {
  data: {
    message: 'Hello'
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>
<style>
</style>