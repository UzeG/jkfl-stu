<template>
  <div style="width: auto;">
    <div style="height: 10vh;border-bottom: 1px solid black;">
      header
    </div>

    <div>
      <transition name="fade" mode="out-in" key="$route.path">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>

  </div>

</template>

<script>
export default {
  name: 'BookLayout'
}
</script>

<style scoped>

</style>