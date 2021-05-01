<template>
  <div class="w-full md:w-10/12 lg:w-10/12 xl:w-8/12 mx-auto p-6 text-gray-700 -mt-6">
    <div class="md:flex md:space-x-4">
      <div class="w-full md:w-20 mb-3 md:mb-0 md:inline-block">
        <picture>
          <source :srcSet="require('~/assets/images/profile_picture.png?webp')" type="image/webp">
          <source :srcSet="require('~/assets/images/profile_picture.png')" type="image/png">
          <img class="w-24 mx-auto" :src="require('~/assets/images/profile_picture.png')" :alt="$t('presentation.profilepicture')">
        </picture>
      </div>
      <div class="flex flex-wrap align-middle text-center md:text-left">
        <h1 class="w-full text-gray-600 dark:text-gray-200 font-medium text-3xl pt-1">
          Thomas Bichot
        </h1>
        <div class="w-full text-gray-500 dark:text-gray-400 font-medium">
          {{ $t('presentation.mypresentation') }} 🚀
        </div>
      </div>
    </div>
    <div class="bg-gray-300 mt-6 mb-12 mx-auto md:mx-0" style="height: 2px; width: 150px;" />
  </div>
</template>
