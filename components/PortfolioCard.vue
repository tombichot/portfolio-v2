<template>
  <div :id="'card-'+ id" class="w-full shadow-lg relative" @click="showModal()">
    <div class="w-full h-full rounded-md dark:border-2 dark:border-gray-700 dark:bg-gray-700 shadow-lg mx-auto">
      <picture>
        <source :srcSet="require('~/content/projects/images/' + images[0][1] + '?webp')" type="image/webp">
        <source :srcSet="require('~/content/projects/images/' + images[0][1])" type="image/jpeg">
        <img class="w-full h-48 object-cover rounded-t-md" :src="require('~/content/projects/images/' + images[0][1])" :alt="images[0][2]">
      </picture>
      <div class="w-full p-6 flex flex-col rounded-md">
        <div class="flex w-full h-auto text-gray-700 dark:text-gray-200 text-lg font-bold mb-1">
          {{ title }}
        </div>
        <div class="flex w-full h-auto text-gray-400 dark:text-gray-400 font-medium text-justify">
          {{ summary }}
        </div>
      </div>
    </div>
    <div
      v-show="modal"
      :id="'modal-' + id"
      class="w-full h-full flex fixed left-0 bottom-0 bg-white dark:bg-black bg-opacity-25 dark:bg-opacity-75 z-50"
      role="dialog"
      aria-modal="true"
      style="backdrop-filter: blur(25px);"
      @click.stop
      @click="hideModal()"
    >
      <div class="w-full h-full flex flex-wrap content-center md:w-10/12 lg:w-8/12 xl:w-1/2 mx-auto pt-6 px-3 md:px-0">
        <div class="w-full bg-white dark:bg-gray-700 rounded-lg shadow-xl mx-auto overflow-y-auto" style="max-height: 90%;" @click.stop>
          <div class="flex flex-wrap w-full relative items-center">
            <div class="flex items-center relative w-full h-full rounded-t-lg bg-black overflow-hidden">
              <div :id="'scroll' + images[0][1]" class="w-full flex bg-black items-center">
                <picture>
                  <source :srcSet="require('~/content/projects/images/' + images[currentImage][1] + '?webp')" type="image/webp">
                  <source :srcSet="require('~/content/projects/images/' + images[currentImage][1])" type="image/jpeg">
                  <img :id="images[0][1]" class="w-full object-contain rounded-t-md h-80 md:h-96" :src="require('~/content/projects/images/' + images[currentImage][1])" :alt="images[currentImage][2]">
                </picture>
              </div>
              <div v-if="images.length > 0" class="absolute bottom-5 flex w-full h-5">
                <div class="flex mx-auto items-center">
                  <button
                    v-for="image in images"
                    :id="'dot-' + image[1]"
                    :key="image[0]"
                    class="bg-white rounded-full shadow-md w-3 h-3 mx-2"
                    @click="updateCurrentImage(image[0])"
                  />
                </div>
              </div>
              <div v-show="leftArrow" class="absolute left-5 flex h-full items-center">
                <div class="flex mx-auto">
                  <button :data-for="images[currentImage-1]" class="bg-white rounded-full w-6 h-6 mx-2 shadow-md items-center" @click="updateCurrentImage(currentImage-1)">
                    <picture>
                      <source :srcSet="require('~/assets/images/left.png?webp')" type="image/webp">
                      <source :srcSet="require('~/assets/images/left.png')" type="image/png">
                      <img class="h-full w-full p-1" :src="require('~/assets/images/left.png')" alt="Left icon" style="margin-left: -1px; opacity: 0.8;">
                    </picture>
                  </button>
                </div>
              </div>
              <div v-show="rightArrow" class="absolute right-5 flex h-full items-center">
                <div class="flex mx-auto">
                  <button :data-for="images[currentImage+1]" class="bg-white rounded-full w-6 h-6 mx-2 shadow-md items-center" @click="updateCurrentImage(currentImage+1)">
                    <picture>
                      <source :srcSet="require('~/assets/images/right.png?webp')" type="image/webp">
                      <source :srcSet="require('~/assets/images/right.png')" type="image/png">
                      <img class="h-full w-full p-1" :src="require('~/assets/images/right.png')" alt="Right icon" style="margin-left: 1px; opacity: 0.8;">
                    </picture>
                  </button>
                </div>
              </div>
              <div class="absolute right-5 bottom-5 flex w-10 h-10">
                <div class="flex mx-auto">
                  <button class="closebtn items-baseline shadow-md focus:outline-none" @click="openFullscreen()">
                    <picture>
                      <source :srcSet="require('~/assets/images/fullscreen.png?webp')" type="image/webp">
                      <source :srcSet="require('~/assets/images/fullscreen.png')" type="image/png">
                      <img class="h-full w-full" :src="require('~/assets/images/fullscreen.png')" alt="Fullscreen icon">
                    </picture>
                  </button>
                </div>
              </div>
            </div>
            <div class="px-6 py-3 text-justify w-full">
              <div class="font-bold dark:text-white text-2xl">
                {{ title }}
              </div>
              <div class="font-bold text-gray-400 text-sm mb-2">
                {{ period }}
              </div>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p class="text-gray-700 dark:text-gray-200 text-base" v-html="description.replace(/(?:\r\n|\r|\n)/g, '<br />')" />
              <div class="flex">
                <div class="mx-auto md:mr-0 md:ml-auto mt-4 mb-2 text-center">
                  <span v-for="tag in tags" :key="tag" class="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 ml-1 mr-1 mt-1 mb-1">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex-grow pt-4 pb-8 md:pb-6">
          <button class="flex items-center w-12 h-12 mx-auto p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg border-gray-100 dark:border-gray-600 text-gray-700 border-gray-200 focus:outline-none" @click="hideModal()">
            <picture>
              <source :srcSet="require('~/assets/images/cross_black.png?webp')" type="image/webp">
              <source :srcSet="require('~/assets/images/cross_black.png')" type="image/png">
              <img v-show="$colorMode.value === 'light'" :src="require('~/assets/images/cross_black.png')" alt="Cross black icon">
            </picture>
            <picture>
              <source :srcSet="require('~/assets/images/cross_white.png?webp')" type="image/webp">
              <source :srcSet="require('~/assets/images/cross_white.png')" type="image/png">
              <img v-show="$colorMode.value === 'dark'" :src="require('~/assets/images/cross_white.png')" alt="Cross white icon">
            </picture>
          </button>
        </div>
      </div>
    </div>
    <div v-show="fullscreen" class="flex flex-wrap fixed left-0 bottom-0 w-full h-full items-center bg-black z-50 overflow-y-auto content-center py-12 md:py-0" @click.stop>
      <div class="flex w-full h-3/4 p-5 md:p-10 justify-center block">
        <picture>
          <source :srcSet="require('~/content/projects/images/' + images[currentImage][1] + '?webp')" type="image/webp">
          <source :srcSet="require('~/content/projects/images/' + images[currentImage][1])" type="image/jpeg">
          <img :id="'fullscreen-' + images[0][1]" class="w-full h-full object-contain reflexion" :src="require('~/content/projects/images/' + images[currentImage][1])" :alt="images[currentImage][2]">
        </picture>
      </div>
      <div class="flex w-full h-1/4 justify-center items-center p-10 overflow-x-scroll">
        <button
          v-for="image in images"
          :key="image[0]"
          class="mx-4 card"
          @click="updateCurrentImage(image[0])"
        >
          <picture>
            <source :srcSet="require('~/content/projects/images/' + image[1] + '?webp')" type="image/webp">
            <source :srcSet="require('~/content/projects/images/' + image[1])" type="image/jpeg">
            <img :id="'list-fullscreen-' + image[1]" class="object-contain inline-block max-h-10 md:max-h-16" :src="require('~/content/projects/images/' + image[1])" :alt="image[2]">
          </picture>
        </button>
      </div>
      <div class="absolute right-5 top-5 border-2 border-white rounded-full">
        <button class="flex text-center items-center w-12 h-12 p-2 rounded-full shadow-lg focus:outline-none" @click="closeFullscreen()">
          <picture>
            <source :srcSet="require('~/assets/images/cross_white.png?webp')" type="image/webp">
            <source :srcSet="require('~/assets/images/cross_white.png')" type="image/png">
            <img :src="require('~/assets/images/cross_white.png')" alt="Cross white icon">
          </picture>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioCard',
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    period: {
      type: String,
      default: ''
    },
    summary: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    },
    images: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      modal: false,
      hover: false,
      fullscreen: false,
      leftArrow: false,
      rightArrow: false,
      currentImage: 0
    }
  },
  methods: {
    showModal () {
      this.modal = true
      const modal = document.getElementById('modal-' + this.id)
      modal.classList.remove('modal')
      modal.classList.add('modal-active')
      this.updateCurrentImage(0)
      this.updateArrows()
      this.updateDots()
      const body = document.body
      body.classList.add('overflow-hidden')
    },
    showModalOrHover () {
      if (!this.$device.isMobileOrTablet) {
        this.showModal()
      } else if (this.hover === false) {
        this.hover = true
      } else {
        this.showModal()
      }
    },
    hideModal () {
      this.modal = false
      const modal = document.getElementById('modal-' + this.id)
      modal.classList.remove('modal-active')
      modal.classList.add('modal')
      const body = document.body
      body.classList.remove('overflow-hidden')
      this.hover = false
    },
    updateArrows () {
      if (this.images.length >= 2) {
        this.leftArrow = true
        this.rightArrow = true
        if (this.currentImage === 0) {
          this.leftArrow = false
        }
        if (this.currentImage === this.images.length - 1) {
          this.rightArrow = false
        }
      }
    },
    updateDots () {
      for (let i = 0; i < this.images.length; i++) {
        const dot = document.getElementById('dot-' + this.images[i][1])
        const fullscreen = document.getElementById('list-fullscreen-' + this.images[i][1])

        if (i === this.currentImage) {
          dot.classList.remove('dot')
          dot.classList.add('dot-active')
          fullscreen.classList.add('fullscreen-active')
        } else {
          dot.classList.add('dot')
          dot.classList.remove('dot-active')
          fullscreen.classList.remove('fullscreen-active')
        }
      }
    },
    updateCurrentImage (n) {
      // window.location = '#' + this.images[n][1]
      this.currentImage = n
      this.updateDots()
      this.updateArrows()
    },
    openFullscreen () {
      this.updateDots()
      this.fullscreen = true
    },
    closeFullscreen () {
      this.fullscreen = false
    }
  }
}
</script>

<style>
.dot {
  height: 0.75rem;
  width: 0.75rem;
  background-color: #edf2f7;
  -webkit-transition: all 0.5s ease;
  transition: all 0.4s ease;
}

.dot-active {
  height: 1.25rem;
  width: 1.25rem;
  background-color: #fff;
  -webkit-transition: all 0.5s ease;
  transition: all 0.4s ease;
}

.closebtn {
  filter: invert(100%);
}

.swiper {
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.swiper > img {
  scroll-snap-align: start;
}

.fullscreen-active {
  border-width: 1px;
  border-color: #fff;
}

.reflexion {
  -webkit-box-reflect: below 0 -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent), to(rgba(250, 250, 250, 0.2)));
}
</style>
