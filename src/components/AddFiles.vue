<template>
  <label class="option" :style="src">
    <input
      class="option__input"
      type="file"
      @change="previewFiles"
      webkitdirectory
      directory
      multiple
    />
    <slot></slot>
  </label>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AddFiles',

  data() {
    return {
      src: `--bg: url(${require('../assets/svg/sprite.svg')}#folder)`,
    }
  },

  methods: {
    ...mapMutations('files', ['setFiles']),
    previewFiles(event) {
      const files = Object.values(event.target.files)
      this.setFiles(files)
    },
  },
}
</script>
