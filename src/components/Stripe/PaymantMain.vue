<template>
  <v-container class="text-center mt-15">
    <PayNowCheckout />
    <SubscriptionCheckout />
  </v-container>
</template>

<script>
import PayNowCheckout from "./PayNowCheckout.vue";
import SubscriptionCheckout from "./SubscriptionCheckout.vue";

export default {
  components: {
    PayNowCheckout,
    SubscriptionCheckout
  }
};
</script>
