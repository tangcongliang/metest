<template>
  <div class="home">
    <div>这是v1.0.0添加上去的补丁哈哈哈哈</div>
    <div>这是v1.0.1添加上去的补丁测试下</div>
    <div class="txt">5555</div>

    <div class="txt" @click="devClick">重新修改下试试哈</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    devClick() {
      console.log("55555");
    }
  }
};
</script>
<style lang="less" >
.txt {
  color: @backgroundColor;
}
</style>
