<template>
  <div id="app">
    <transition name="fade">
      <router-view v-if="thereAreContacts" key="fetch"></router-view>
      <Spinner v-else key="fetch" size="200px"/>
    </transition>
  </div>
</template>

<script>
import Spinner from '@Components/Spinner'

export default {
  name: 'App',
  components: { Spinner },
  computed: {
    thereAreContacts () {
      return this.$store.getters.thereAreContacts
    }
  }
}
</script>

<style lang="scss">
@import './styles/base';
.spinner-container {
  margin-top: 100px;
}
</style>
