<template>
  <div v-if="loading" class="loading-page">
    <div class="loader back" />
    <div class="loader front" />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style>
.loading-page {
  --border-width: 10px;
  --loader-size: 150px;
  --loader-color-front: #ce93d8;
  --loader-color-back: #90caf9;
}

.loader {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: var(--loader-size);
  width: var(--loader-size);
  border-radius: 50%;
  border-style: solid;
  border-top-width: var(--border-width);
  border-right-width: 0;
  border-bottom-width: var(--border-width);
  border-left-width: 0;
  animation: border-animate 3s infinite;
  animation-timing-function: ease-in-out;
}

.back {
  border-color: var(--loader-color-back);
}

.front {
  border-color: var(--loader-color-front);
  transform: rotateZ(90deg);
}

@keyframes border-animate {
  50% {
    border-top-width: 0;
    border-right-width: var(--border-width);
    border-bottom-width: 0;
    border-left-width: var(--border-width);
  }
}
</style>
