<template>
  <div class="preview" ref="preview">
    <img
      class="preview__img"
      :class="imgClasses()"
      :src="imgSrc"
      alt=""
      loading="lazy"
      @click="changeMode"
    />
    <div class="preview__controls">
      <button class="preview__btn preview__btn-prev" @click="prevImg"></button>
      <AddFiles v-if="!fullscreen" />
      <SettingsBlock />
      <button class="preview__btn preview__btn-next" @click="nextImg"></button>
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
    ...mapState(['fullscreen']),
    imgSrc() {
      return this.activeFile
    },
    className() {
      return this.currentSetting
    },
  },

  watch: {
    fullscreen: 'changeFullscreen',
  },

  methods: {
    ...mapMutations('files', ['setNext', 'setPrev']),
    ...mapMutations(['toggleFullscreen']),
    nextImg() {
      this.setNext()
    },
    prevImg() {
      this.setPrev()
    },
    imgClasses() {
      return `preview__img-${this.className}`
    },
    changeMode() {
      this.toggleFullscreen()
    },
    getFullscreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      } else if (element.mozRequestFullscreen) {
        element.mozRequestFullScreen()
      }
    },
    cancelFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.mozExitFullscreen) {
        document.mozExitFullScreen()
      }
    },
    changeFullscreen() {
      const el = this.$refs.preview
      this.fullscreen ? this.getFullscreen(el) : this.cancelFullscreen()
    },
  },
}
</script>
