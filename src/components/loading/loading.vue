<template>
  
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const email = ref("")
const password = ref("")

const emailError = ref("")
const passwordError = ref("")

const loading = ref(false) // ✅ add this

const login = async () => {

  emailError.value = ""
  passwordError.value = ""

  if (!email.value) {
    emailError.value = "Email is required"
  }

  if (!password.value) {
    passwordError.value = "Password is required"
  }

  if (emailError.value || passwordError.value) {
    return
  }

  loading.value = true // ✅ start loading

  try {
    // simulate API call (remove when real API)
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log("Login:", email.value, password.value)

    router.push("/")
  } finally {
    loading.value = false // ✅ stop loading
  }
}
</script>

<style>

</style>