<template>
  <button
    :class="[
      `flex justify-center items-center gap-2 h-[50px] ${bgColor} rounded-xl ${textColor} text-[18px] leading-5 font-semibold`,
    ]"
  >
    <slot name="icon" /> {{ name }}
  </button>
</template>

<script setup lang="ts">
const {
  name = "Button",
  bgColor = "bg-app-gray-200",
  textColor = "text-app-gray-800",
} = defineProps<{
  name?: string;
  bgColor?: string;
  textColor?: string;
}>();
</script>
