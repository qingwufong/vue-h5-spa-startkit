<template>
  <div class="page-infinite">
    <h1 class="page-title">Infinite Scroll</h1>
    <mt-button type='primary'>Hello</mt-button>
    <p class="page-infinite-desc">当即将滚动至列表底部时, 自动加载更多数据</p>
    <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
        <li v-for="item in list" class="page-infinite-listitem">{{ item }}</li>
      </ul>
      <p v-show="loading" class="page-infinite-loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        加载中...
      </p>
    </div>
  </div>
  <!-- <div>
    <div>数组：{{ list }}，长度：{{ listCount }}</div>
    <div>数字：{{ count }}</div>
    <button @click="handleActionIncrement">action +1</button>
    <button @click="handleAsyncIncrement">async +1</button>
  </div> -->
</template>
<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      allLoaded: false,
      wrapperHeight: 0
    }
  },
  computed: {
    // list() {
    //   console.log(this.$store);
    //   return this.$store.getters.filteredList;
    // },
    // listCount() {
    //   return this.$store.getters.listCount;
    // },
    // count() {
    //   return this.$store.state.moduleA.count;
    // }
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
    // handleActionIncrement() {
    //   this.$store.dispatch('increment');
    // },
    // handleAsyncIncrement() {
    //   this.$store.dispatch('asyncIncrement').then(() => {
    //     console.log(this.$store.state.moduleA.count);
    //   });
    // }
  },
  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    for (let i = 1; i <= 20; i++) {
      this.list.push(i);
    }
  }
}
</script>
<style scoped lang="less">
  @prefix-cls: page;
  .@{prefix-cls} {
    &-infinite {
      ul {
        list-style-type: none;
      }
      &-desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
        border-bottom: solid 1px #eee;
      }
      &-listitem {
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #eee;
        text-align: center;
        &:first-child {
          border-top: solid 1px #eee;
        }
      }
      &-wrapper {
        margin-top: -1px;
        overflow: scroll;
      }
      &-loading {
        text-align: center;
        height: 50px;
        line-height: 50px;
        div {
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
  }
</style>
