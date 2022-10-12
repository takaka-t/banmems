<template>
  <v-card width="400px" class="mx-auto mt-10">
    <v-card-title>
      <h1>ログイン</h1>
    </v-card-title>
    <v-card-text>
      <v-form ref="loginForm">
        <v-text-field v-model="loginIdText" label="ID" placeholder="半角英数時" variant="underlined" :rules="loginIdTextRules" prepend-icon="mdi-account-circle" />
        <v-text-field
          v-model="passwordText"
          label="パスワード"
          placeholder="半角英数時"
          variant="underlined"
          :rules="passwordTextRules"
          prepend-icon="mdi-lock"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append-inner="showPassword = !showPassword"
        />
        <v-card-actions>
          <v-btn variant="outlined" color="info" :loading="loadingLogin" :disabled="loadingLogin" prepend-icon="mdi-cloud-upload" @click="clickLoginButton">ログイン</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import textFieldRules from "@/textFieldRules";
import type { VForm } from "vuetify/lib/components/VForm/index";

export default defineComponent({
  name: "Login",
  setup() {
    /** ログインform */
    const loginForm = ref<VForm>();

    /** ログインIDのテキストフィールド */
    const loginIdText = ref("");
    /** ログインIDのテキストフィールドのrules */
    const loginIdTextRules = [textFieldRules.required];

    /** パスワードのテキストフィールド */
    const passwordText = ref("");
    /** パスワードのテキストフィールドのrules */
    const passwordTextRules = [textFieldRules.required];

    /** パスワードのテキストフィールドのtype切り替えによる入力値の表示非表示 */
    const showPassword = ref(true);

    /** ログイン処理のローディング */
    const loadingLogin = ref(false);

    /** ログインボタンクリック時 */
    const clickLoginButton = async () => {
      //入力値検証
      const validateResult = await loginForm.value!.validate();
      if (validateResult.valid == false) {
        return false;
      }
      //TODO:半角英数時のみチェック！
      alert("ログイン処理するよ");
    };

    return {
      loginForm,
      loginIdText,
      loginIdTextRules,
      passwordText,
      passwordTextRules,
      showPassword,
      loadingLogin,
      clickLoginButton,
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
