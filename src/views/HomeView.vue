<template>
  <div class="home">
    <AddFiles class="home__add">Выбрать папку</AddFiles>
    <button @click="toPreview">preview</button>
  </div>
</template>

<script>
import AddFiles from '@/components/AddFiles.vue'

export default {
  name: 'HomeView',
  components: { AddFiles },
  methods: {
    toPreview() {
      this.$router.push('preview')
    },
  },
}
</script>
