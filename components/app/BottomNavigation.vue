<template>
  <div
    class="w-full h-20 flex justify-around items-center fixed bottom-0 shadow-2xl"
  >
    <div
      class="flex justify-center items-center gap-[12px] group hover:bg-slate-800 hover:px-[15px] hover:py-[8px] rounded-full duration-200"
    >
      <IconHome
        class="group-hover:stroke-white group-hover:scale-75 scale-90"
      />
      <span
        class="text-sm hidden duration-150 group-hover:text-white group-hover:block"
        >Home</span
      >
    </div>

    <div
      class="flex gap-[12px] group hover:bg-slate-800 hover:px-[15px] hover:py-[8px] rounded-full duration-200"
    >
      <IconGift
        class="group-hover:stroke-white group-hover:scale-75 scale-90"
      />
      <span
        class="text-sm hidden duration-150 group-hover:text-white group-hover:block"
        >Giveaway</span
      >
    </div>
    <div
      class="flex gap-[12px] group hover:bg-slate-800 hover:px-[15px] hover:py-[8px] rounded-full duration-200"
    >
      <IconCompass
        class="group-hover:stroke-white group-hover:scale-75 scale-90"
      />
      <span
        class="text-sm hidden duration-150 group-hover:text-white group-hover:block"
        >Explore</span
      >
    </div>
    <div
      class="flex gap-[12px] group hover:bg-slate-800 hover:px-[15px] hover:py-[8px] rounded-full duration-200"
    >
      <IconChat
        class="group-hover:stroke-white group-hover:scale-75 scale-90"
      />
      <span
        class="text-sm hidden duration-150 group-hover:text-white group-hover:block"
        >Help</span
      >
    </div>
  </div>
</template>
