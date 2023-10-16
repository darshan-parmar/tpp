<template>
  <AppHeaderFirst />
  <AppBottomNavigation />
  <div v-if="authState?.user">
    <span>Logged in as: {{ authState?.user.name }}</span> <br />
    <span>Logged in as: {{ authState?.user.email }}</span> <br />
    <pre>
     Verified:  {{ authState?.user.verified }}
    </pre>
  </div>
</template>
<script setup lang="ts">
import { useFrontegg, useFronteggAuthGuard } from "@frontegg/vue";
useFronteggAuthGuard();
const { authState } = useFrontegg();
</script>
