<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-10">
      <v-card-title>
        <h1 class="display-1">ログイン</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="ユーザ名"
            variant="underlined"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            label="パスワード"
            variant="underlined"
            prepend-icon="mdi-lock"
            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          />
          <v-card-actions>
            <v-btn
              variant="outlined"
              color="info"
              :loading="loadingLogin"
              :disabled="loadingLogin"
              prepend-icon="mdi-cloud-upload"
              @click=""
              >ログイン</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
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
    const loadingLogin = ref(false);

    return {
      showPassword,
      loadingLogin,
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
