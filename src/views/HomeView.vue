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
  },
}
</script>
