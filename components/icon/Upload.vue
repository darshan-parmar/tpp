<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 17 16"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.32617 12V3.85L4.72617 6.45L3.32617 5L8.32617 0L13.3262 5L11.9262 6.45L9.32617 3.85V12H7.32617ZM2.32617 16C1.77617 16 1.30517 15.804 0.913173 15.412C0.521173 15.02 0.325507 14.5493 0.326174 14V11H2.32617V14H14.3262V11H16.3262V14C16.3262 14.55 16.1302 15.021 15.7382 15.413C15.3462 15.805 14.8755 16.0007 14.3262 16H2.32617Z"
      :fill="color"
    />
  </svg>
</template>

<script setup lang="ts">
const {
  color = "white",
  width = 17,
  height = 16,
} = defineProps<{
  color?: string;
  width?: number;
  height?: number;
}>();
</script>
