<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/pokeball.png" class="logo"/>
    <HelloWorld msg="Vue.js App With Fake Api" />
    <FakeDb></FakeDb>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import FakeDb from "@/components/FakeDb";

export default {
  name: "Home",
  components: {
    FakeDb,
    HelloWorld,
  },
};
</script>

<style scoped>
img.logo {
  height: 100px;
  width: 100px;
  padding-top: 10px;
}
</style>
