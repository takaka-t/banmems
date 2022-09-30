<template>
  <div>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">ログイン</h1>
      </v-card-title>
      <v-form>
        <v-text-field
          label="ユーザ名"
          prepend-inner-icon="mdi-account-circle"
          variant="underlined"
        />
        https://next.vuetifyjs.com/en/components/text-fields/
        <v-text-field
          label="パスワード"
          :type="showPassword ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          variant="underlined"
        />
        <v-card-actions>
          <v-btn @click="">ログイン</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

// Components
import HelloWorld from "../components/HelloWorld.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    HelloWorld,
  },
  setup() {
    const showPassword = ref(true);

    return {
      showPassword,
    };
  },
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
