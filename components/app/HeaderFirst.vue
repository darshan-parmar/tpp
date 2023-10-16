<template>
  <div
    class="flex h-16 w-auto justify-between items-center rounded-b-3xl shadow-sm"
  >
    <!-- Profile Left-->
    <div class="flex items-center gap-3">
      <div
        class="h-[40px] w-[40px] rounded-full flex justify-center items-center bg-app-white ml-3"
      >
        <img src="~/assets/images/profile.png" />
      </div>
      <div>
        <span class="text-[16px] leading-[20px] font-normal">Alex Kreiss</span>
      </div>
      <button
        class="w-[24px] h-[24px] rounded-md bg-app-gray-200 flex items-center justify-center"
      >
        <IconRightArrow />
      </button>
    </div>

    <!-- Icons Right-->
    <div class="flex justify-center items-center gap-4 mr-5">
      <div class="flex gap-[5px] justify-center items-center">
        <span
          class="text-app-gray-1000 font-semibold text-[18px] leading-[19.62px]"
          >10</span
        >
        <IconTicket />
      </div>
      <IconBookmark />
      <div class="relative">
        <IconBell />
        <div
          class="absolute left-auto -top-1 -right-[4px] right- h-[6px] w-[6px] rounded-full bg-red-500"
        ></div>
      </div>
    </div>
  </div>
</template>
