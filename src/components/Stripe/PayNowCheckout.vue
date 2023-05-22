<template>
  <v-container>
    <stripe-checkout
        ref="checkoutRef"
        :pk="publishableKey"
        :sessionId="oneItem"
    />
    <v-btn class="dark" color="blue"  @click="submit">Pay now!</v-btn>  </v-container>
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
      oneItem: null,
    }
  },
  created() {
    console.log('PayNowCheckout component mounted.');
    this.getSession();
  },
  methods: {
      getSession()
      {
        axios.get('http://lar/api/getSession')
            .then(res => {
              this.oneItem = res.data.oneItem.id;
              console.log(res.data.oneItem.id)
            })
            .catch(err => {
              console.error(err);
            });
      }
    ,
      submit()
      {
        // Redirect to Stripe's secure checkout page for one-time payment
        this.$refs.checkoutRef.redirectToCheckout();
      }
    },
  };
</script>
