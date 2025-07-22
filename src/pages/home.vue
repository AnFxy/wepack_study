<template>
  <div class="container">
    <text class="txt-home">{{ title }}</text>
    <text class="txt-content">{{ content }}</text>
    <img class="img-wrap" :src="computerImg" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Docker容器化部署，隔离环境差异，避免依赖、资源挂载宿主机',
      content: '主机电脑 DIY:',
      computerImg: require('../images/computer.jpg'),
    }
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.txt-home {
  font-size: 50px;
  color: red;
  line-height: 75px;
  text-decoration: underline;
  text-decoration-color: antiquewhite;
}
.txt-content {
  font-size: 45px;
  line-height: 60px;
}
.img-wrap {
  width: 244px;
  height: 872px;
  background-color: #f0f0f0;
}
</style>