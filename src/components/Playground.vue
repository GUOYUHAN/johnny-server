<template>
  <div class="container">
    <div class="left">
      <textarea v-model="article" placeholder="请输入文章内容..."></textarea>
    </div>
    <div class="middle">
      分割字数(默认300)：
      <input v-model="splitCount" placeholder="请输入分割数量...">
      <button @click="splitArticle">分割文章</button>
    </div>
    <div class="right">
      <div v-for="(chunk, index) in chunks" :key="index" class="card">
        <div class="card-content">
          {{ chunk }}
        </div>
        <div class="copy-icon" @click="copyToClipboard(chunk)">
          复制
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: '',
      chunks: [],
      splitCount: 300
    };
  },
  methods: {
    splitArticle() {
      const words = this.article.split(/\s+/);
      const chunks = [];
      let chunk = '';
      words.forEach(word => {
        if ((chunk + word).length > this.splitCount) {
          chunks.push(chunk.trim());
          chunk = word + ' ';
        } else {
          chunk += word + ' ';
        }
      });
      if (chunk.trim()) {
        chunks.push(chunk.trim());
      }
      this.chunks = chunks;
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert('文本已复制到剪贴板');
      }).catch(err => {
        console.error('无法复制文本: ', err);
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
}
.left, .middle, .right {
  width: 33.33%;
  flex: 1;
  padding: 20px;
}
.left textarea {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.middle, .right {
  display: flex;
  flex-direction: column;
}
.middle input {
  width: 100%;
  padding: 10px;
  margin-bottom: 30px;
}
.middle button {
  width: 100%;
  padding: 10px;
}
.right .card {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  position: relative;
}
.card-content {
  margin-right: 50px;
}
.copy-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
