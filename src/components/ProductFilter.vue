<template>
  <div>
    <label for="sort_by">Sort By:</label>
    <select id="sort_by" v-model="sort_by">
      <option value="name">Name</option>
      <option value="price">Price</option>
      <option value="created_at">Created At</option>
    </select>

    <label for="order_by">Order:</label>
    <select id="order_by" v-model="order_by">
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>

    <button @click="applyFilter()">Apply</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort_by: 'name',
      order_by: 'asc'
    }
  },
  methods: {
    applyFilter() {
      this.$emit('filter-changed', {
        sort_by: this.sort_by,
        order_by: this.order_by
      })
    }
  }
}
</script>
