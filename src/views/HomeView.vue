<template>
  <div class="home">
    <AddFiles class="home__add">Выбрать папку</AddFiles>
    <SettingsBlock class="home__settings" :label="true" />
    <button class="home__btn" @click="toPreview" :disabled="disabled">
      Просмотр
    </button>
  </div>
</template>

<script>
import AddFiles from '@/components/AddFiles.vue'
import SettingsBlock from '@/components/SettingsBlock.vue'
import { mapState } from 'vuex'

export default {
  name: 'HomeView',

  components: { AddFiles, SettingsBlock },

  computed: {
    ...mapState('files', ['files']),
    disabled() {
      return this.files.length === 0
    },
  },

  methods: {
    toPreview() {
      this.$router.push('preview')
    },
  },
}
</script>
