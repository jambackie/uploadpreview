<template>
  <div class="preview">
    <img
      class="preview__img"
      :class="imgClasses()"
      :src="imgSrc"
      alt=""
      loading="lazy"
    />
    <div class="preview__controls">
      <button @click="prevImg">prev</button>
      <AddFiles />
      <SettingsBlock />
      <button @click="nextImg">next</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import AddFiles from '@/components/AddFiles.vue'
import SettingsBlock from '@/components/SettingsBlock.vue'

export default {
  name: 'PreviewView',

  components: { AddFiles, SettingsBlock },

  computed: {
    ...mapGetters('files', ['activeFile']),
    ...mapState('settings', ['currentSetting']),
    imgSrc() {
      return this.activeFile
    },
    className() {
      return this.currentSetting
    },
  },

  methods: {
    ...mapMutations('files', ['setNext', 'setPrev']),
    nextImg() {
      this.setNext()
    },
    prevImg() {
      this.setPrev()
    },
    imgClasses() {
      return `preview__img-${this.className}`
    },
  },
}
</script>
