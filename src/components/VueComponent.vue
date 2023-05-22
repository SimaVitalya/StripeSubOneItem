<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" class="background-image">
            <v-card class="transparent">
              <v-card-text>
               Hello word
              </v-card-text>
            </v-card>
            <div>
              hell
            </div>
          </v-col>
        </v-row>
        <h1>testesr</h1>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'MyPage'
}
</script>

<style scoped>
.background-image {
  background-image: url('https://www.windows8facile.fr/wp-content/uploads/2021/11/photoshop-couleurs.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
.transparent {
  background-color: transparent;
  box-shadow: none;
}
</style>
