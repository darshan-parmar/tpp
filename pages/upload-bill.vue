<template>
  <AppNavigationHeader title="Upload the bill" />

  <!-- Upload Screen -->
  <div class="flex flex-col gap-4 w-auto mx-[20px]">
    <!-- Address Box -->
    <div
      class="min-h-[153px] mt-[11px] py-[17px] px-[19px] bg-app-gray-200 rounded-2xl"
    >
      <div class="flex gap-3">
        <div>
          <IconLocation />
        </div>
        <div class="min-h-[80px]">
          <p class="text-[16px] leading-[20px] font-normal">
            Elison Independent Living at Willowbrook 7575 Willow Chase Blvd,
            Houston, TX 77070
          </p>
        </div>
      </div>

      <div class="h-[24px] flex gap-3">
        <IconEdit />
        <a
          href="#"
          class="text-app-blue font-semibold text-[14px] leading-[16.8px]"
          >Edit Address</a
        >
      </div>
    </div>

    <!--File Upload Section-->
    <div class="flex flex-col gap-3 min-h-[149px]">
      <p class="text-[14px] leading-[16.8px] font-normal">
        Choose how to upload your utility bill:
      </p>
      <button
        class="flex justify-center items-center gap-2 h-[50px] bg-app-green rounded-xl text-white text-[18px] leading-5 font-semibold"
      >
        <IconScan /> Scan the bill
      </button>
      <!-- <button
        class="flex justify-center items-center gap-2 h-[50px] bg-app-gray-800 rounded-xl text-white text-[18px] leading-5 font-semibold"
      >
        <IconUpload /> Upload from device
      </button> -->
      <AppButton
        bg-color="bg-app-gray-800"
        text-color="text-white"
        name="Upload from device"
      >
        <template #icon>
          <IconUpload />
        </template>
      </AppButton>
    </div>

    <!--Note Section-->
    <div
      class="w-auto min-h-[149px] bg-app-gray-200 rounded-2xl py-[15px] px-[10px]"
    >
      <div class="flex gap-2">
        <div>
          <IconInfo />
        </div>
        <div class="text-[14px] leading-[19.6px] font-normal">
          <p class="text-app-gray-800">
            Please note that your utility bill must according the following
            parameters:
          </p>
          <ul class="list-disc marker:text-app-gray-800 marker:text-sm">
            <li>the address must be clearly visible</li>
            <li>file size should not exceed 80 megabytes</li>
            <li>
              the bill must be for a period no earlier than 12 months before the
              current date
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
