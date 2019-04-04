<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Counter is: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // props: ['counter']
  // computed: {
  //   counter() {
  //     return this.$store.getters.doubleCounter;
  //   },
  //   clicks() {
  //     return this.$store.getters.stringCounter;
  //   }
  // }
  // computed: mapGetters(["doubleCounter", "stringCounter"])
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"])
  }
};
</script>