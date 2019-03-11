<template>
  <div id="uncomplete">
    <a-spin id="load" size="large" v-show="!loadStatus" tip="Loading..."/>
    <div v-show="loadStatus">
      <a-table
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        :columns="columns"
        :dataSource="data"
      />
      <a-button type="primary" @click="start" :disabled="!hasSelected" :loading="loading">完成</a-button>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "姓名",
    dataIndex: "name"
  },
  {
    title: "品牌",
    dataIndex: "brand"
  },
  {
    title: "颜色",
    dataIndex: "color"
  },
  {
    title: "规格",
    dataIndex: "model"
  },
  {
    title: "度数",
    dataIndex: "diopter"
  },
  {
    title: "数量",
    dataIndex: "count"
  },
  {
    title: "金额",
    dataIndex: "money"
  },
  {
    title: "收货地址",
    dataIndex: "address"
  },
  {
    title: "下单时间",
    dataIndex: "startTime"
  },
  {
    title: "完成时间",
    dataIndex: "endTime"
  }
];

const data = [];
for (let i = 0; i < 45; i++) {
  data.push({
    key: i,
    name: `呱呱 ${i + 1}`,
    brand: `品牌 ${i + 1}`,
    color: "随机",
    model: `随机 ${i + 1}`,
    diopter: "30°",
    count: `${i + 1}套`,
    money: `${i + 1}$`,
    address: "埃德蒙顿",
    startTime: `${JSON.stringify(new Date()).slice(1, 11)}`,
    endTime: `${JSON.stringify(new Date()).slice(1, 11)}`,
  });
}

export default {
  data() {
    return {
      data,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      loadStatus: false
    };
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    }
  },
  methods: {
    start() {
      this.loading = true;
      // ajax request after empty completing
      setTimeout(() => {
        this.loading = false;
        // 防止ajax继续发送，页面数据刷新
        let arr = this.selectedRowKeys
        for (let i = 0; i < arr.length; i++) {
          const key = arr[i];
          for (let j = 0; j < this.data.length; j++) {
            const d = this.data[j];
            if (key == d.key) {
              this.data.splice(this.data.indexOf(d), 1)
            }
          }
        }
        this.selectedRowKeys = [];
      }, 1000);
    },
    onSelectChange(selectedRowKeys) {
      // console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    onload() {
      // ajax 初始化
      setTimeout(() => {
        this.loadStatus = !this.loadStatus;
      }, 1500);
    }
  },
  mounted() {
    this.onload()
  }
};
</script>
<style>
#uncomplete {
  position: relative;
  min-height: 250px;
}
#uncomplete .ant-btn {
  position: absolute;
  left: 22px;
  bottom: 14px;
}
#uncomplete #load {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
