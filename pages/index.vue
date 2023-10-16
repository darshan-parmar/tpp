<template>
  <div
    class="flex flex-col gap-5 w-auto mx-[20px] h-screen justify-center text-center"
  >
    <div v-if="authState?.user">
      <span>Logged in as: {{ authState?.user.name }}</span> <br />
      <span>Logged in as: {{ authState?.user.email }}</span> <br />
    </div>
    <div v-else class="text-3xl font-normal">Home</div>
  </div>
</template>
<script setup lang="ts">
import { useFrontegg, useFronteggAuthGuard } from "@frontegg/vue";
useFronteggAuthGuard();
const { authState } = useFrontegg();
</script>
