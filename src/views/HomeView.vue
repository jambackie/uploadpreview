<template>
  <div class="home">
    <AddFiles class="home__add">Выбрать папку</AddFiles>
    <SettingsBlock class="home__settings" :label="true" />
    <button @click="toPreview">preview</button>
  </div>
</template>

<script>
import AddFiles from '@/components/AddFiles.vue'
import SettingsBlock from '@/components/SettingsBlock.vue'

export default {
  name: 'HomeView',

  components: { AddFiles, SettingsBlock },

  methods: {
    toPreview() {
      this.$router.push('preview')
    },
  },
}
</script>
