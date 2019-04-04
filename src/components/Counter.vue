<template>
  <div>
    <button class="btn btn-primary" @click="increment(50)">Increment</button>
    <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["increment", "decrement"])
    // ...mapMutations(["increment", "decrement"])
    //     increment() {
    //       // this.$emit('updated', 1);
    //       // this.$store.state.counter++;
    //       this.$store.commit("increment");
    //     },
    //     decrement() {
    //       // this.$emit('updated', -1);
    //       // this.$store.state.counter--;
    //       this.$store.commit("decrement");
    //     }
  }
};
</script>