<template>
  <label class="option" :style="src">
    <input
      class="option__input"
      type="radio"
      name="mode"
      :value="option"
      :checked="option === currentSetting"
      @change="change"
    />
    <slot></slot>
  </label>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'OptionRadio',

  props: {
    option: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      src: `--bg: url(${require('../assets/svg/sprite.svg')}#${this.option})`,
    }
  },

  computed: {
    ...mapState('settings', ['currentSetting']),
  },

  methods: {
    ...mapMutations('settings', ['setCurrent']),
    change() {
      this.setCurrent(this.option)
    },
  },
}
</script>
