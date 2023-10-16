<template>
  <AppNavigationHeader title="Upload the bill" />
  <div class="flex flex-col gap-4 w-auto mx-[20px]">
    <!-- Address Box -->
    <div
      class="min-h-min mt-[11px] pt-[17px] px-[19px] bg-app-gray-200 rounded-2xl"
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
    </div>

    <!-- Document Upload-->
    <div class="flex flex-col gap-2">
      <!-- Uploaded file-->
      <div class="flex justify-between items-start gap-2 p-1">
        <div class="flex flex-col gap-1 font-normal">
          <p class="text-app-gray-900 text-[16px] leading-[20px]">
            my_utility_bill.pdf
          </p>
          <p class="text-app-gray-700 text-[12px] leading-[18px]">
            Size-100 MB
          </p>
          <p class="text-app-red text-[12px] leading-[18px] font-normal">
            This file format is not supported
          </p>
          <div class="flex gap-2 justify-start items-center">
            <IconWright />
            <span
              class="font-semibold text-[12px] leading-[18px] text-app-green"
              >Successful</span
            >
          </div>
        </div>
        <div>
          <IconMoreVertical />
        </div>
      </div>
      <div class="w-auto h-[8px] rounded-[30px] bg-app-gray-200"></div>
      <div class="w-auto h-[8px] rounded-[30px] bg-app-green"></div>

      <button
        class="flex justify-center items-center gap-2 h-[50px] bg-app-green rounded-xl text-white text-[18px] leading-5 font-semibold"
      >
        Send
      </button>
    </div>
  </div>
</template>
