<template>
  <div v-if="label" class="settings">
    <OptionRadio
      v-for="item in settings"
      :key="item.name"
      class="home__option"
      :option="item.name"
    >
      {{ item.label }}
    </OptionRadio>
  </div>
  <div v-else class="settings">
    <OptionRadio
      v-for="item in settings"
      :key="item.name"
      class="home__option"
      :option="item.name"
    >
    </OptionRadio>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import OptionRadio from '@/components/OptionRadio.vue'

export default {
  name: 'SettingsBlock',

  components: { OptionRadio },

  props: {
    label: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapState('settings', ['settings']),
  },
}
</script>
