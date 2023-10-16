<template>
  <div
    class="flex h-16 w-auto justify-center items-center rounded-b-3xl shadow-sm px-4"
  >
    <button
      class="w-[24px] h-[24px] rounded-md bg-app-gray-200 flex items-center justify-center"
      @click="goBack"
    >
      <IconLeftArrow />
    </button>
    <div class="grow flex justify-center items-center">
      <h3 class="font-semibold text-[18px] leading-5">{{ title }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title = "title" } = defineProps<{
  title?: string;
}>();
const router = useRouter();
const goBack = () => router.go(-1);
</script>
