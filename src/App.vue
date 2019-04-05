<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr>
        <app-counter></app-counter>
        <app-another-counter></app-another-counter>
        <hr>
        <!-- <input type="text" name id=" " :value="value" @input="updateValue">
        <p>Value of variable is {{ value }}</p>-->

        <input type="text" name id=" " v-model="value">
        <p>Value of variable is {{ value }}</p>

        <div>
          <hr>
          <app-footer></app-footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import AnotherCounter from "./components/AnotherCounter.vue";
import Result from "./components/Result.vue";
import AnotherResult from "./components/AnotherResult.vue";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {};
  },
  // computed: {
  //   value() {
  //     return this.$store.getters.value;
  //   }
  // },
  // methods: {
  //   updateValue(event) {
  //     this.$store.dispatch("updateValue", event.target.value);
  //   }
  // },
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch("updateValue", value);
      }
    }
  },
  components: {
    appCounter: Counter,
    appAnotherCounter: AnotherCounter,
    appResult: Result,
    appAnotherResult: AnotherResult,
    appFooter: Footer
  }
};
</script>
