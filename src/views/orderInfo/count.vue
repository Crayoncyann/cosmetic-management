<template>
  <div id="count">
    <a-spin id="load" size="large" v-show="!loadStatus" tip="Loading..."/>
    <div v-show="loadStatus">
      <div>
        <div class="info">
          <span>DAY</span>
          <p class="info-count">{{ info.day }}</p>
        </div>
        <div class="info">
          <span>MONTH</span>
          <p class="info-count">{{ info.month }}</p>
        </div>
        <div class="info">
          <span>SEASON</span>
          <p class="info-count">{{ info.season }}</p>
        </div>
      </div>
      <p class="margin">YEAR (示例：随机生成数据)</p>
      <div id="myChart"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: {
        day: "10",
        month: "300",
        season: "3000",
        year: [],
        counts: [],
      },
      loadStatus: false,
    };
  },
  methods: {
    async drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        color: ["#0099FF"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "0",
          right: "0",
          bottom: "0",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: this.info.year,
            axisTick: {
              alignWithLabel: false
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "count",
            type: "bar",
            barWidth: "50%",
            // data: [10, 52, 200, 334, 390, 330, 220]
            data: this.info.counts
          }
        ]
      });
      myChart.resize();
    },
    async onload() {
      // ajax获取数据，暂时用延迟代替
      setTimeout(() => {
        // 画Echarts
        this.drawLine();
        this.loadStatus = !this.loadStatus;
      }, 1500);
    },
  },
  mounted() {
    /**
     * 随机生成年销售量, 应改为 http 请求
     * 生成月份
     */
    for (let index = 1; index < 13; index++) {
      this.info.year.push(`${index}月`);
    }
    for (let index = 0; index < 12; index++) {
      var value = Math.random()
        .toString()
        .slice(2, 4);
      value = parseInt(value) * 5;
      this.info.counts.push(value);
    }
    this.onload();
  }
};
</script>
<style scoped>
#count .info {
  position: relative;
  display: inline-block;
  margin: 0 50px;
}
#count .info-count {
  background: rgba(24, 144, 255, 0.8);
  width: 130px;
  height: 130px;
  line-height: 130px;
  font-size: 36px;
  margin-top: 10px;
  border-radius: 50%;
  color: #fafafa;
}
#count .margin {
  margin-top: 40px;
  margin-bottom: -20px;
}
#myChart {
  width: 1000px;
  height: 500px;
  margin: 0 auto;
}
#count {
  position: relative;
  min-height: 250px;
}
#count #load {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
  