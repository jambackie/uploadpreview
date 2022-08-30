<template>
  <div>
    <label>
      +
      <input
        type="file"
        @change="previewFiles"
        webkitdirectory
        directory
        multiple
      />
    </label>
    <button @click="toPreview">preview</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'HomeView',

  methods: {
    ...mapMutations('files', ['setFiles']),
    previewFiles(event) {
      const files = Object.values(event.target.files)
      this.setFiles(files)
    },
    toPreview() {
      this.$router.push('preview')
    },
  },
}
</script>
