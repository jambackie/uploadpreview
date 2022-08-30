<template>
  <div class="preview">
    <img class="preview__img" :src="imgSrc" alt="" loading="lazy" />
    <div class="preview__controls">
      <button @click="prevImg">prev</button>
      <button @click="nextImg">next</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters('files', ['activeFile']),
    imgSrc() {
      return this.activeFile
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
  },
}
</script>
