<template>
  <v-container>
    <stripe-checkout
        ref="checkoutSubRef"
        :pk="publishableKey"
        :sessionId="sessionSubId"
    />
    <v-btn
        stacked
        variant="outlined"
        @click="submitSub"
    >
      Subscription
    </v-btn>
  </v-container>
</template>

<script>
import {StripeCheckout} from '@vue-stripe/vue-stripe';
import axios from "axios";

export default {
  components: {
    StripeCheckout,
  },
  data() {
    return {
      publishableKey: 'pk_test_51N6t0cIyorCOiPiHNT61J5JtAx6q1xzIY3r8wYcgkJ6aVpFHVdSZGOUSnJQPfsgBSTP4yW1ALtU4f16gU0vtaPjZ00PGbbfkum',
      sessionSubId: null,
    }
  },
  created() {
    console.log('SubscriptionCheckout component mounted.');
    this.getSession();
  },
  methods: {
    getSession() {
      axios.get('http://lar/api/getSub')
          .then(res => {
            this.sessionSubId = res.data.sub.id;
            console.log(res.data.sub.id)
          })
          .catch(err => {
            console.error(err);
          });
    },
    submitSub() {
      // Redirect to Stripe's secure checkout page for subscription
      this.$refs.checkoutSubRef.redirectToCheckout();
    }
  },
};
</script>
