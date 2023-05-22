<template>
  <v-container class="text-center mt-15">
    <v-container>
      <stripe-checkout
          ref="checkoutRef"
          :pk="publishableKey"
          :sessionId="oneItem"
      />
      <v-btn color="primary" @click="submit">Pay now!</v-btn>
    </v-container>
    <v-container>
      <stripe-checkout
          ref="checkoutSubRef"
          :pk="publishableKey"
          :sessionId="sessionSubId"
      />
      <v-btn color="primary" @click="submitSub">Subscription</v-btn>
    </v-container>
  </v-container>

</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import axios from "axios";

export default {
  components: {
    StripeCheckout,
  },
  data() {
    return {
      publishableKey: 'pk_test_51N6t0cIyorCOiPiHNT61J5JtAx6q1xzIY3r8wYcgkJ6aVpFHVdSZGOUSnJQPfsgBSTP4yW1ALtU4f16gU0vtaPjZ00PGbbfkum',
      oneItem: null,
      sessionSubId: null
    }
  },
  created() {
    console.log('Component mounted.');
    this.getSession();
  },
  methods: {
    getSession() {
      axios.get('http://lar/api/getSession')
          .then(res => {
            this.oneItem = res.data.oneItem.id;
            console.log(res.data.oneItem.id)
            this.sessionSubId = res.data.sub.id;
            console.log(res.data.sub.id)
          })
          .catch(err => {
            console.error(err);
          });
    },
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
    submitSub(){
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutSubRef.redirectToCheckout();
    }
  },
};
</script>

<style scoped>
</style>
