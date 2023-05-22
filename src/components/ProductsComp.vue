<template>

  <v-container>
    <v-row>
      <v-col
          v-for="product in paginatedItems()"
          :key="product.id"
          cols="3"
      >
        <v-card
            class="mx-auto rounded-lg "
            max-width="300"
        >
          <v-card-title>
            <router-link class="text-decoration-none" :to="`/product/${product.id}`">
              <h4 style="font-size: 16p " >
                {{ product.title }}
              </h4>
            </router-link>

            <v-spacer></v-spacer>
            <span class="text-h6">{{ product.price }}</span>
          </v-card-title>
          <v-card>
              <v-img
                  class="mb-1"
                  height="250"
                  width="300"

                  :src="product.image_url" :alt="product.title"
              ></v-img>

          </v-card>

          <v-card-actions class="justify-center">
            <v-btn
                variant="text"
                color="teal-accent-4"
                @click="reveal = product.id"
            >
              Learn More
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
                v-if="reveal === product.id"
                class="v-card--reveal overflow-auto"
                style="height: 100%;"
            >
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">
                  Description
                </p>
                <p>{{ product.description }} </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn
                    variant="text"
                    color="teal-accent-4"
                    @click="reveal = null"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn block color="primary" @click="addToCart(product)">
              Add to Cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination
        class="mt-10"
        :total-visible="6"
        color="primary"
        v-model="page"
        :length="totalPages"

    ></v-pagination>
  </v-container>

</template>
<script> import axios from 'axios';

export default {
  data() {
    return {
      loading: false,
      products: [],
      filteredItems: [],
      page: 1,
      perPage: 20,
      current: 1,
      totalPages: 0,

      reveal: null
    };
  },
  created() {
    this.getItems()


  },

  methods: {
    async getItems(page = 1) {
      this.loading = true;
      try {
        const scrollToTop = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > 0) {
            window.scrollTo(0, scrollTop - scrollTop / 8);
            requestAnimationFrame(scrollToTop);
          }
        };
        requestAnimationFrame(scrollToTop);
        const response = await axios.post('http://rozetkaparse/api/products', {
          perPage: this.perPage,
          page: page
        })
        console.log(response.data)
        this.products = response.data.data
        this.totalPages = response.data.last_page

      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    paginatedItems() {
      const start = (this.current - 1) * this.perPage;
      const end = start + this.perPage;
      return this.products.slice(start, end);
    }
  },
  watch: {
    page(newPage, oldPage) {
      if (newPage !== oldPage) {
        this.getItems(newPage);
      }
    },
  }
}
</script>
