<template>
  <div>
    <div>
      <div class="flex w-full justify-center mx-auto px-2">
        <div class="tag-list flex rounded-md shadow bg-white dark:bg-gray-700 focus:outline-none">
          <button
            id="tag-0"
            class="tag-item inline-block rounded-md px-3 py-2 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200 mx-1 outline-none focus:outline-none"
            @click="changeTag(0)"
          >
            {{ $t('portfolio.all') }}
          </button>
          <button
            id="tag-1"
            class="tag-item inline-block rounded-md px-3 py-2 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200 mx-1 outline-none focus:outline-none"
            @click="changeTag(1)"
          >
            {{ $t('portfolio.development') }}
          </button>
          <button
            id="tag-2"
            class="tag-item inline-block rounded-md px-3 py-2 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200 mx-1 outline-none focus:outline-none"
            @click="changeTag(2)"
          >
            {{ $t('portfolio.creation') }}
          </button>
          <div class="tag-indicator flex h-full items-center pt-1 pb-1">
            <div class="rounded-md bg-gray-200 dark:bg-gray-900 h-full w-full" />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full md:w-10/12 lg:w-10/12 xl:w-8/12 mx-auto p-6">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <PortfolioCard
          v-for="project in projects"
          :id="project.ID"
          :key="project.ID"
          :title="project.Title"
          :images="project.Images"
          :summary="project.Summary"
          :period="project.Period"
          :description="project.Description"
          :tags="project.Tags"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioCard from '~/components/PortfolioCard.vue'

export default {
  components: {
    PortfolioCard
  },
  async fetch () {
    let selection = []
    if (this.currentTag === 0) {
      selection = this.tags
    } else {
      selection = [this.tags[this.currentTag - 1]]
    }
    this.projects = await this.$content('projects/' + this.$i18n.locale)
      .sortBy('ID', 'desc')
      .where({ Category: { $in: selection }, Hidden: false })
      .fetch()
  },
  data () {
    return {
      projects: [],
      tags: ['Dev', 'Design', 'Photo'],
      currentTag: 0
    }
  },
  mounted () {
    this.changeTag(this.currentTag)
  },
  methods: {
    changeTag (t) {
      if (process.client) {}
      this.currentTag = t
      const newTag = document.getElementById('tag-' + this.currentTag)
      const indicator = document.querySelector('.tag-indicator')
      const items = document.querySelectorAll('.tag-item')

      items.forEach((item) => {
        item.classList.remove('is-active')
        item.removeAttribute('style')
      })

      indicator.style.width = `${newTag.offsetWidth}px`
      indicator.style.left = `${newTag.offsetLeft}px`

      newTag.classList.add('is-active')

      this.$fetch()
    },
    updateManually () {
      setTimeout(() => this.changeTag(this.currentTag), 100)
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

.tag-list {
  display: inline-flex;
  position: relative;
  overflow: hidden;
  max-width: 100%;
}

.tag-item {
  transition: 0.4s;
  z-index: 2;
  position: relative;
}

.tag-item::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.4s;
}

.tag-indicator {
  position: absolute;
  left: 0;
  bottom: 0;
  transition: 0.4s;
  z-index: 1;
}

button:focus {
  outline: none;
  border: none;
}

button:active {
  outline: none;
  border: none;
}

@media (max-width: 580px) {
  .nav { overflow: auto; }
}
</style>
