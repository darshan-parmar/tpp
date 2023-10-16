<template>
  <AppNavigationHeader title="Upload the bill" />
  <div class="flex flex-col gap-4 w-auto mx-[20px]">
    <div class="flex flex-col gap-8 mt-10 items-center justify-center">
      <IconWrightCircle />
      <p
        class="text-center text-app-gray-900 text-[16px] leading-[20px] font-normal"
      >
        The utility bill was successfully send to our server. We will process it
        and notify you of the result. You can check the status in the
        <a class="text-app-blue">Utility Bills Section</a> of your personal
        profile
      </p>
    </div>

    <div class="flex flex-col gap-3 mt-3">
      <button
        class="flex justify-center items-center gap-2 h-[50px] bg-app-green rounded-xl text-white text-[18px] leading-[22.68px] font-semibold"
      >
        Scan another bill
      </button>
      <button
        class="flex justify-center items-center gap-2 h-[50px] bg-app-gray-200 rounded-xl text-app-gray-800 text-[18px] leading-[22.68px] font-semibold"
      >
        Go to Homepage
      </button>
    </div>
  </div>
</template>
