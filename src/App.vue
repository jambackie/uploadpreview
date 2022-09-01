<template>
  <router-view />
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  mounted() {
    this.setCurrent(localStorage.getItem('uploadpreviewOption') || 'default')
  },

  methods: {
    ...mapMutations('settings', ['setCurrent']),
  },
}
</script>
