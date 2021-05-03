<template>
  <div class="bg-gray-50 dark:bg-black flex rounded-md">
    <nav class="flex justify-between shadow-lg fixed bg-white bg-opacity-100 md:bg-opacity-75 dark:bg-opacity-100 md:dark:bg-opacity-75 dark:bg-black w-screen z-50 border-gray-100 dark:border-opacity-10" style="backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px); border-bottom-width: 1px;">
      <div class="custom-body w-full mx-auto">
        <div class="w-full md:w-10/12 lg:w-10/12 xl:w-8/12 mx-auto p-6 flex">
          <div class="w-9 md:inline-block">
            <picture>
              <source :srcSet="require('~/assets/images/La_Biche.png?webp')" type="image/webp">
              <source :srcSet="require('~/assets/images/La_Biche.png')" type="image/png">
              <img :src="require('~/assets/images/La_Biche.png')" :alt="$t('presentation.logodescription')">
            </picture>
          </div>
          <span class="w-auto flex-grow inline-block px-3 text-gray-700 dark:text-white font-bold text-base sm:text-lg lg:text-lg xl:text-xl pt-1.5">
            Thomas Bichot
          </span>
          <div class="w-auto flex flex-wrap content-center justify-end">
            <div class="flex flex-wrap inline-block">
              <div class="toggle__line w-14 h-8 bg-gray-800 dark:bg-gray-200 rounded-full shadow-inner mx-auto">
                <label for="toogleB" class="flex items-center cursor-pointer pb-2 mx-auto">
                  <span class="relative mx-auto">
                    <input id="toogleB" type="checkbox" class="hidden" @click="toggle"></input>
                    <span class="toggle__icon absolute w-4 h-4 top-2 right-2">
                      <picture>
                        <source :srcSet="require('~/assets/images/moon.png?webp')" type="image/webp">
                        <source :srcSet="require('~/assets/images/moon.png')" type="image/png">
                        <img v-show="$colorMode.value === 'light'" :src="require('~/assets/images/moon.png')" alt="Moon icon">
                      </picture>
                      <picture>
                        <source :srcSet="require('~/assets/images/sun.png?webp')" type="image/webp">
                        <source :srcSet="require('~/assets/images/sun.png')" type="image/png">
                        <img v-show="$colorMode.value === 'dark'" :src="require('~/assets/images/sun.png')" alt="Sun icon">
                      </picture>
                    </span>
                    <span class="toggle__dot absolute w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded-full shadow inset-y-0 left-0" />
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="custom-body w-full mx-auto" @click="isOpen = false; navmenuIsOpen = false">
      <div class="w-full md:w-10/12 lg:w-10/12 xl:w-8/12 mx-auto p-6 pt-28">
        <div v-if="$i18n.locale === 'en'" class="w-7 flex flex-wrap justify-center ml-auto">
          <button class="relative focus:outline-none" @click="changeLanguage('fr')">
            <picture>
              <source :srcSet="require('~/assets/images/flag-france2.png?webp')" type="image/webp">
              <source :srcSet="require('~/assets/images/flag-france2.png')" type="image/png">
              <img class="w-8 rounded-full border border-gray-200 dark:border-gray-700" :src="require('~/assets/images/flag-france2.png')" :alt="$t('navmenu.frenchflag')">
            </picture>
          </button>
        </div>
        <div v-if="$i18n.locale === 'fr'" class="w-7 flex flex-wrap justify-center ml-auto">
          <button class="relative focus:outline-none" @click="changeLanguage('en')">
            <picture>
              <source :srcSet="require('~/assets/images/flag-united-kingdom2.png?webp')" type="image/webp">
              <source :srcSet="require('~/assets/images/flag-united-kingdom2.png')" type="image/png">
              <img class="w-8 rounded-full border border-gray-200 dark:border-gray-700" :src="require('~/assets/images/flag-united-kingdom2.png')" :alt="$t('navmenu.englishflag')">
            </picture>
          </button>
        </div>
      </div>
      <Presentation />
      <Portfolio ref="portfolio" />
      <div class="w-full flex md:w-10/12 lg:w-10/12 xl:w-8/12 mx-auto p-6 mt-6">
        <span class="w-auto flex-grow inline-block text-gray-400 text-bold">
          Thomas Bichot © 2021
        </span>
        <div class="w-auto flex flex-wrap content-center justify-end">
          <a class="mr-6" href="https://linkedin.com/in/thomas-bichot" target="_blank">
            <picture>
              <source :srcSet="require('~/assets/images/linkedin.png?webp')" type="image/webp">
              <source :srcSet="require('~/assets/images/linkedin.png')" type="image/png">
              <img class="object-scale-down h-7 w-7" :src="require('~/assets/images/linkedin.png')" alt="Linkedin icon">
            </picture>
          </a>
          <a href="https://twitter.com/TomBichot" target="_blank">
            <picture>
              <source :srcSet="require('~/assets/images/twitter.png?webp')" type="image/webp">
              <source :srcSet="require('~/assets/images/twitter.png')" type="image/png">
              <img class="object-scale-down h-7 w-7" :src="require('~/assets/images/twitter.png')" alt="Twitter icon">
            </picture>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
      navmenuIsOpen: false
    }
  },
  methods: {
    changeLanguage (lang) {
      this.$i18n.locale = lang
      this.$refs.portfolio.updateManually()
    },
    toggle () {
      this.$colorMode.preference = this.$colorMode.value === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

<style>
  @media (min-aspect-ratio: 16/9) {
    .custom-body {
      max-width: 1920px;
    }
  }

  .toggle__dot {
    top: 0.25rem;
    left: -1.5rem;
    transition: all 0.3s ease-in-out;
  }

  input:checked ~ .toggle__dot {
    transform: translateX(100%);
  }

  .toggle__icon {
    top: 0.5rem;
    left: 0.25rem;
  }

  input:checked ~ .toggle__icon {
    top: 0.5rem;
    left: -1.25rem;
  }
</style>
