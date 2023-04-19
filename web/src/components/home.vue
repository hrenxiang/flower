<template>
  <body>

  <Header></Header>
  <!--  轮播图  -->
  <el-carousel :interval="2000" arrow="always" id="lunbo">
    <h1 id="index_text" v-model="showText">{{ showText }}</h1>
    <el-carousel-item v-for="item in imgList" :key="item.id">
      <img :src="item.idView" class="carouselImg" alt=""/>
    </el-carousel-item>
  </el-carousel>

  <div>
    <el-container>
      <el-header id="xianhuayongtu" height="126px">
        <p>鲜花用途 ~ 花来点缀四季天</p>
        <div class="block"/>
      </el-header>
      <el-container>
<!--        <el-container>-->
<!--          <el-aside width="24%">-->
<!--            <img src="../assets/img/green.jpg" alt="" class='module_img'/>-->
<!--          </el-aside>-->
<!--          <el-main width="76%">-->
<!--            <el-row :gutter="20" class="el-row1">-->
<!--              <el-col :span="6">-->
<!--                <div class="grid-content bg-purple">-->
<!--                  <div class="huayu">-->
<!--                    <p>百合在日语中最早称之为“摇”！</p>-->
<!--                    <p>因其随风摆动的样子十分优美得名！</p>-->
<!--                    <p>后发音逐渐趋于“百合”！</p>-->
<!--                    <p>圣洁的友谊，高贵</p>-->
<!--                    <p>庄严，纯洁</p>-->
<!--                  </div>-->
<!--                  <img src="../assets/img/huayu-baihe.jpg" alt="" class='module_img2' style="opacity: 30%"/>-->
<!--                </div>-->
<!--              </el-col>-->
<!--              <el-col :span="6">-->
<!--                <div class="grid-content bg-purple">-->
<!--                  <div class="huayu2">-->
<!--                    <p>充满活力，有恋爱的气息。</p>-->
<!--                    <p>红郁金香：爱的宣言、喜悦、热爱！</p>-->
<!--                    <p>黄郁金香：高贵、珍重、财富！</p>-->
<!--                    <p>紫郁金香：无尽的爱、最爱、永恒的爱！</p>-->
<!--                    <p>白郁金香：纯情、纯洁！</p>-->
<!--                  </div>-->
<!--                  <img src="../assets/img/huayu-yujinxiang.jpg" alt="" class='module_img2' style="opacity: 30%"/>-->
<!--                </div>-->
<!--              </el-col>-->
<!--              <el-col :span="6">-->
<!--                <div class="grid-content bg-purple">-->
<!--                  <div class="huayu3">-->
<!--                    <p>三叶草（一叶）：代表祈求！</p>-->

<!--                    <p>三叶草（二叶）：代表希望！</p>-->

<!--                    <p>三叶草（三叶）：代表爱情！</p>-->

<!--                    <p>三叶草（四叶）：代表幸福、真诚的爱！</p>-->
<!--                  </div>-->
<!--                  <img src="../assets/img/huayu-sanyecao.jpg" alt="" class='module_img2' style="opacity: 30%"/>-->
<!--                </div>-->
<!--              </el-col>-->
<!--              <el-col :span="6">-->
<!--                <div class="grid-content bg-purple">-->
<!--                  <div class="huayu4">-->
<!--                    <p>朝向太阳，心中便不会有阴影。</p>-->

<!--                    <p>花语：憧憬、膜拜</p>-->
<!--                  </div>-->
<!--                  <img src="../assets/img/huayu-xiangrikui.jpg" alt="" class='module_img2' style="opacity: 30%"/>-->
<!--                </div>-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--            <el-row :gutter="20" class="el-row2">-->
<!--              <el-col :span="6">-->
<!--                <div class="grid-content bg-purple">-->
<!--                  <div class="huayu">-->
<!--                    <p>玫瑰是表达爱意的通用语言。</p>-->
<!--                    <p>但不同颜色玫瑰的花语也有不同寓意。</p>-->
<!--                    <p>红玫瑰：热恋，我爱你！</p>-->
<!--                    <p>粉玫瑰：初恋，灿烂的笑容！</p>-->
<!--                    <p>白玫瑰：我足以与你相配！</p>-->
<!--                    <p>黄玫瑰：表达歉意，祝福、嫉妒！</p>-->
<!--                    <p>紫玫瑰：珍贵独特！</p>-->
<!--                  </div>-->
<!--                  <img src="../assets/img/huayu-meigui.jpg" alt="" class='module_img2' style="opacity: 30%"/>-->
<!--                </div>-->
<!--              </el-col>-->
<!--              <el-col :span="6">-->
<!--                <div class="grid-content bg-purple">-->
<!--                  <div class="huayu2">-->
<!--                    <p>一提到康乃馨，总会联想到母亲节。</p>-->
<!--                    <p>据传有位叫安娜的女子为了纪念母亲</p>-->
<!--                    <p>会在母亲忌日赠送别人母亲爱的康乃馨！</p>-->
<!--                    <p>红色：母爱！</p>-->
<!--                    <p>粉色：热爱、高丽！</p>-->
<!--                    <p>白色：真情、纯洁！</p>-->
<!--                  </div>-->
<!--                  <img src="../assets/img/huayu-kangnaixin.jpg" alt="" class='module_img2' style="opacity: 30%"/>-->
<!--                </div>-->
<!--              </el-col>-->
<!--              <el-col :span="6">-->
<!--                <div class="grid-content bg-purple">-->
<!--                  <div class="huayu3">-->
<!--                    <p>如果你暗恋一个人，那就送TA一束茉莉花。</p>-->

<!--                    <p>花语：质朴、尊重</p>-->
<!--                  </div>-->
<!--                  <img src="../assets/img/huayu-molihua.jpg" alt="" class='module_img2' style="opacity: 30%"/>-->
<!--                </div>-->
<!--              </el-col>-->
<!--              <el-col :span="6">-->
<!--                <div class="grid-content bg-purple">-->
<!--                  <div class="huayu4">-->
<!--                    <p>没有风信子的冬天是不完整的！</p>-->

<!--                    <p>白色：适度可爱！</p>-->

<!--                    <p>桃红色：热情！</p>-->

<!--                    <p>紫色：悲伤、忧郁的爱！</p>-->
<!--                  </div>-->
<!--                  <img src="../assets/img/ros-2.jpg" alt="" class='module_img2' style="opacity: 30%"/>-->
<!--                </div>-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--          </el-main>-->
<!--        </el-container>-->
        <div class="page-wrap">

          <div id="home-slider">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide swiper-slide-one">
                  <div class="swiper-image" data-swiper-parallax-y="-20%">
                    <div class="swiper-image-inner swiper-image-left swiper-image-one">
                      <h1>雏菊 🌼<span class="emphasis"></span>. <br><span>你好啊.</span></h1>
                      <p>Chapter I, page XV</p>
                    </div>
                  </div>
                  <div class="swiper-image" data-swiper-parallax-y="35%">
                    <div class="swiper-image-inner swiper-image-right swiper-image-two">
                      <p class="paragraph">
                        A Prophet sat in the market-place and told the fortunes of all who cared to engage his services. Suddenly there came running up one who told him that his house had been broken into by thieves, and that they had made off with everything they could lay
                        hands on.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide swiper-slide-two">
                  <div class="swiper-image" data-swiper-parallax-y="-20%">
                    <div class="swiper-image-inner swiper-image-left swiper-image-three">
                      <h1>The <span class="emphasis">Drop</span>. <br><span>Of Eternal life.</span></h1>
                      <p>Chapter II, page VII</p>
                    </div>
                  </div>
                  <div class="swiper-image" data-swiper-parallax-y="35%">
                    <div class="swiper-image-inner swiper-image-right swiper-image-four">
                      <p class="paragraph">
                        A thirsty Crow found a Pitcher with some water in it, but so little was there that, try as she might, she could not reach it with her beak, and it seemed as though she would die of thirst within sight of the remedy.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide swiper-slide-three">
                  <div class="swiper-image" data-swiper-parallax-y="-20%">
                    <div class="swiper-image-inner swiper-image-left swiper-image-five">
                      <h1>A <span class="emphasis">Sense</span>. <br><span>Of Things to Come.</span></h1>
                      <p>Chapter III, page XI</p>
                    </div>
                  </div>
                  <div class="swiper-image" data-swiper-parallax-y="35%">
                    <div class="swiper-image-inner swiper-image-right swiper-image-six">
                      <p class="paragraph">
                        Every man carries Two Bags about with him, one in front and one behind, and both are packed full of faults. The Bag in front contains his neighbours’ faults, the one behind his own. Hence it is that men do not see their own faults, but never fail to see
                        those of others.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>

        </div>
      </el-container>

    </el-container>
  </div>

  <div>
    <el-container>
      <el-header id="langmandeai" height="126px">
        <p>浪漫的爱 ~ 怦然心动心相印</p>
        <div class="block"/>
      </el-header>
      <el-container>
        <el-aside width="24%">
          <img src="../assets/img/rose-1.jpg" alt="" class='module_img'/>
        </el-aside>
        <el-main width="76%">
          <el-row :gutter="20" class="el-row1">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/rose-5.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/rose-6.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/rose-7.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/rose-8.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="el-row2">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/rose-9.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/rose-10.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/rose-11.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/ros-3.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>

  <div>
    <el-container>
      <el-header id="youyiwansui" height="126px">
        <p>友谊万岁 ~ 人走千里谊永存</p>
        <div class="block"/>
      </el-header>
      <el-container>
        <el-aside width="24%">
          <img src="../assets/img/sun-9.jpg" alt="" class='module_img'/>
        </el-aside>
        <el-main width="76%">
          <el-row :gutter="20" class="el-row1">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/sun-1.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/sun-2.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/sun-7.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/sun-8.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="el-row2">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/sun-3.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/sun-10.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/sun-11.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/sun-12.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>

  <div>
    <el-container>
      <el-header id="ganxiewenhou" height="126px">
        <p>感谢问候 ~ 望你望我体魄健</p>
        <div class="block"/>
      </el-header>
      <el-container>
        <el-aside width="24%">
          <img src="../assets/img/lily-1.jpg" alt="" class='module_img'/>
        </el-aside>
        <el-main width="76%">
          <el-row :gutter="20" class="el-row1">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/lily-5.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/lily-6.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/lily-7.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/lily-8.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="el-row2">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/lily-9.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/lily-10.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/lily-11.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img src="../assets/img/lily-12.jpg" alt="" class='module_img2'/>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>

  <el-footer>
    哇哦，到底喽~~~，真是很开心您能完全浏览我们的网站呢！！！
  </el-footer>

  <el-backtop></el-backtop>


  </body>
</template>

<script>
import Header from './header.vue'
import Swiper from "swiper";

export default {
  components: {
    Header: Header
  },
  data() {
    return {
      imgList: [
        {id: 2, idView: require('../assets/img/taohua.jpg')},
        {id: 1, idView: require('../assets/img/fenhong-2.jpg')},
        {id: 0, idView: require('../assets/img/fenhong.jpg')},
        {id: 3, idView: require('../assets/img/chuju-2.jpg')}
      ],
      textList: [
        // '南陌青楼十二重，春风桃李为谁容   ' +
        // '  贺之章《望人家桃李花》',
        // '雨中草色绿堪染，水上桃花红欲然' +
        // '    王维《辋川别业》',
        // '桃花一簇开无主，可爱深红映浅红' +
        // '   杜甫《江畔独步寻花》',
        // '短短桃花临水岸，轻轻柳絮点人衣' +
        // '   杜甫《十二月一日》',
        // '有情芍药含春泪，无力蔷薇卧晓枝' +
        // '   秦观《春日》'
      ],
      showText: '',
      timer: null
    }
  },
  created() {
    this.setTime();
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
  mounted() {
    new Swiper(".swiper-container", {
      direction: "vertical",
      loop: true,
      pagination: ".swiper-pagination",
      grabCursor: true,
      speed: 1000,
      paginationClickable: true,
      parallax: true,
      autoplay: false,
      effect: "slide",
      mousewheelControl: 1
    })
  },
  methods: {
    setTime() {
      //每隔2s运行一次保存方法
      this.timer = setInterval(() => {
        this.showText = this.textList[Math.floor((Math.random() * this.textList.length))]
      }, 5000)
    }
  }
}
</script>

<style>
@font-face {
  font-family: "xiao";
  font-weight: 400;
  src: url("../assets/font/XiaoKeNaiLaoTiShangYongMianFei@QingKeZiTi-2.ttf");
  font-display: swap;
}

#index_text {
  position: absolute;
  left: 38%;
  bottom: 50%;
  z-index: 99;
  font-size: 28px;
  text-align: center;
  color: #000000;
}

.huayu {
  position: fixed;
  left: 0;
  top: 0;
  margin: 0 auto;
  z-index: 99;
  font-size: 18px;
  text-align: center;
  color: #000000;
  justify-content: center;
}

.huayu2 {
  position: absolute;
  left: 30%;
  top: 120px;
  z-index: 99;
  font-size: 18px;
  text-align: center;
  color: #000000;
}

.huayu3 {
  position: absolute;
  left: 55%;
  top: 120px;
  z-index: 99;
  font-size: 18px;
  text-align: center;
  color: #000000;
  justify-content: center;
}

.huayu4 {
  position: absolute;
  left: 82%;
  top: 120px;
  z-index: 99;
  font-size: 18px;
  text-align: center;
  color: #000000;
  justify-content: center;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.el-carousel {
  height: 100%;
}

.el-carousel__container {
  height: 100%;
}

.carouselImg {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.el-container {
  background-color: rgba(252, 251, 251, 0.6);
  font-family: "xiao", serif;
}

.el-header {
  color: #333;
  text-align: left;
  height: 300px;
  padding: 0;
  background-color: #ffffff;
}

.el-footer {
  font-family: "xiao", serif;
  background-color: rgba(234, 234, 234, 0.8);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 100%;
  overflow: hidden;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 100%;
  overflow: hidden;
  padding: 10px;
}

.block {
  width: 90%;
  height: 5px;
  margin-left: 15px;
  background: #e55d87; /* Old browsers */
  background: -moz-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);
  background: -webkit-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);
  background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);
}

#xianhuayongtu, #ganxiewenhou, #langmandeai {
  height: 120px;
}

#xianhuayongtu p, #ganxiewenhou p, #langmandeai p, #youyiwansui p {
  margin: 62px 0 20px 20px;
  font-size: 38px;
  background-color: #ffffff;
  color: #1a1a1a;
}

.module_img {
  height: 95%;
  width: 95%;
  border-radius: 5%;
  margin-top: 30px;
  margin-left: 15px;
}

.el-row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.el-row1 {

}

.el-row2 {
  margin-top: 35px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  width: 100%;
  margin-top: 20px;
  border-radius: 15px;

}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  min-height: 36px;
  height: 86%;
  width: 100%;
}

.row-bg {
  background-color: #f9fafc;
}

.el-row {
  height: 50%;
}

.module_img2 {
  height: 100%;
  width: 75%;
  border-radius: 15px;
}

@import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,500,500i,600,600i,700,700i |Cormorant+SC:400,500,600,700');

/* ====================================
General Styles
==================================== */

body {
  background-color: #fff;
}

.page-wrap {
  width: 100%;
  /*height: 100vh;*/
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right bottom, #fffdfd 50%, #fafafc 50%);
  padding-top: 20px;
}

/* ====================================
Home Slider
==================================== */

#home-slider {
  height: 80vh;
  width: 98vw;
  position: relative;

}
.swiper-container {
  height: 100%;
  width: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.swiper-image-one {
  background-image: url("../assets/img/chuju-2.jpg");
}

.swiper-image-two {
  background-image: url("../assets/img/chuju.jpg");
}

.swiper-image-three {
  background-image: url("../assets/img/huayu-xiangrikui.jpg");
}

.swiper-image-four {
  background-image: url("../assets/img/xiangrikui.jpg");
}

.swiper-image-five {
  background-image: url("../assets/img/huayu-meigui.jpg");
}

.swiper-image-six {
  background-image: url("../assets/img/meigu.jpg");
}

.swiper-image {
  width: 50%;
  height: 100%;
}
.swiper-image-inner {
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.2);
  background-blend-mode: overlay;
}
.swiper-image-inner.swiper-image-left {
  padding: 4rem;
}
.swiper-image-left {
  filter: sepia(50%);
  transition: all 1s linear;
  transition-delay: 1s;
}
.swiper-slide.swiper-slide-active .swiper-image-left {
  filter: sepia(0%);
}
.swiper-image-inner.swiper-image-right {
  filter: hue-rotate(21deg);
  transition: all 1s linear;
  transition-delay: 1s;
  background-color: hsla(0, 0%, 0%, 0.5);
  background-blend-mode: multiply;
}
h1 {
  font-weight: 500;
  color: #fff;
  align-self: flex-start;
  margin: 0 0 auto 0;
  font-size: 4.5rem;
  line-height: 1;
  transition: all .8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.1s;
  transform: translate3d(-20%, 0, 0);
  opacity: 0;
}
h1 span.emphasis {
  font-weight: 700;
  font-style: italic;
  opacity: 0;
  transition: all .8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.2s;
  transform: translate3d(-20%, 0, 0);
  display: inline-block;
}
h1 span:not(.emphasis) {
  font-size: 3.5rem;
}
h1 + p {
  font-size: 14px;
  letter-spacing: 2px;
  margin: 0;
  line-height: 1;
  margin-bottom: auto;
  align-self: flex-end;
  text-transform: uppercase;
  transition: all .8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.3s;
  transform: translate3d(-20%, 0, 0);
  opacity: 0;
  font-weight: 500;
  color: #fff;
  padding-right: 8rem;
}
p.paragraph {
  margin: 0;
  color: #fff;
  width: 100%;
  max-width: 350px;
  text-align: justify;
  font-size: 1.2rem;
  font-weight: 500;
  opacity: 0;
  transition: all .6s cubic-bezier(0.215, 0.61, 0.355, 1) 1.4s;
  transform: translate3d(-20%, 0, 0);
}
.swiper-slide.swiper-slide-active .swiper-image-right {
  filter: hue-rotate(9deg);
}

.swiper-slide.swiper-slide-active h1,
.swiper-slide.swiper-slide-active p.paragraph,
.swiper-slide.swiper-slide-active h1 span.emphasis,
.swiper-slide.swiper-slide-active h1 + p {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}

@media screen and (max-width: 1280px) {
  h1 {
    font-size: 3.9rem;
  }
  h1 span:not(.emphasis) {
    font-size: 2.9rem;
  }
  h1 + p {
    font-size: 13px;
  }
  p.paragraph {
    font-size: 1rem;
    line-height: 1.3;
  }
}
@media screen and (max-width: 960px) {
  h1 {
    font-size: 3.5rem;
  }
  h1 span:not(.emphasis) {
    font-size: 2.5rem;
  }
  p.paragraph {
    max-width: 90%;
  }
}
@media screen and (max-width: 640px) {
  #home-slider{
    height: 86vh;
    width: 96vw;
  }
  h1 {
    font-size: 3.2rem;
    align-self: center;
  }
  h1 span:not(.emphasis) {
    font-size: 2.1rem;
  }
  p.paragraph {
    max-width: 94%;
  }
}

/* Swiper css file. Only thing changed down here is the pagination styling */
/**
 * Swiper 3.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2016
 */
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  /* Fix of Webkit flickering */
  z-index: 1;
}
.swiper-container-no-flexbox .swiper-slide {
  float: left;
}
.swiper-container-vertical > .swiper-wrapper {
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  -o-transition-property: -o-transform;
  -ms-transition-property: -ms-transform;
  transition-property: transform;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
.swiper-container-android .swiper-slide, .swiper-wrapper {
  -webkit-transform: translate3d(0px, 0, 0);
  -moz-transform: translate3d(0px, 0, 0);
  -o-transform: translate(0px, 0px);
  -ms-transform: translate3d(0px, 0, 0);
  transform: translate3d(0px, 0, 0);
}
.swiper-container-multirow > .swiper-wrapper {
  -webkit-box-lines: multiple;
  -moz-box-lines: multiple;
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.swiper-container-free-mode > .swiper-wrapper {
  -webkit-transition-timing-function: ease-out;
  -moz-transition-timing-function: ease-out;
  -ms-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  margin: 0 auto;
}
.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex: 0 0 auto;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  display: flex;

}
/* Auto Height */
.swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
  height: auto;
}
.swiper-container-autoheight .swiper-wrapper {
  -webkit-box-align: start;
  -ms-flex-align: start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  -webkit-transition-property: -webkit-transform, height;
  -moz-transition-property: -moz-transform;
  -o-transition-property: -o-transform;
  -ms-transition-property: -ms-transform;
  transition-property: transform, height;
}
/* a11y */
.swiper-container .swiper-notification {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000;
}
/* IE10 Windows Phone 8 Fixes */
.swiper-wp8-horizontal {
  -ms-touch-action: pan-y;
  touch-action: pan-y;
}
.swiper-wp8-vertical {
  -ms-touch-action: pan-x;
  touch-action: pan-x;
}
/* Arrows */
.swiper-button-prev, .swiper-button-next {
  position: absolute;
  top: 50%;
  width: 27px;
  height: 44px;
  margin-top: -22px;
  z-index: 10;
  cursor: pointer;
  -moz-background-size: 27px 44px;
  -webkit-background-size: 27px 44px;
  background-size: 27px 44px;
  background-position: center;
  background-repeat: no-repeat;
}
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
  left: 10px;
  right: auto;
}
.swiper-button-prev.swiper-button-black,
.swiper-container-rtl .swiper-button-next.swiper-button-black {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-prev.swiper-button-white,
.swiper-container-rtl .swiper-button-next.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
  right: 10px;
  left: auto;
}
.swiper-button-next.swiper-button-black,
.swiper-container-rtl .swiper-button-prev.swiper-button-black {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-next.swiper-button-white,
.swiper-container-rtl .swiper-button-prev.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
}
/* Pagination Styles */
.swiper-pagination {
  position: absolute;
  text-align: center;
  -webkit-transition: 300ms;
  -moz-transition: 300ms;
  -o-transition: 300ms;
  transition: 300ms;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}
/* Common Styles */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 10px;
  left: 0;
  width: 100%;
}
/* Bullets */
.swiper-pagination-bullet {
  width: 14px;
  height: 14px;
  display: inline-block;
  background: #fff;
  opacity: 0.4;
}
button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}
.swiper-pagination-white .swiper-pagination-bullet {
  background: #fff;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #fff;
}
.swiper-pagination-white .swiper-pagination-bullet-active {
  background: #fff;
}
.swiper-pagination-black .swiper-pagination-bullet-active {
  background: #000;
}
.swiper-container-vertical > .swiper-pagination-bullets {
  right: 15px;
  bottom: 15px;
}
.swiper-container-vertical
> .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 5px 0;
  display: block;
}
.swiper-container-horizontal
> .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 5px;
}
/* Progress */
.swiper-pagination-progress {
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
}
.swiper-pagination-progress .swiper-pagination-progressbar {
  background: #adb3bb;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
  -webkit-transform-origin: left top;
  -moz-transform-origin: left top;
  -ms-transform-origin: left top;
  -o-transform-origin: left top;
  transform-origin: left top;
}
.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar {
  -webkit-transform-origin: right top;
  -moz-transform-origin: right top;
  -ms-transform-origin: right top;
  -o-transform-origin: right top;
  transform-origin: right top;
}
.swiper-container-horizontal > .swiper-pagination-progress {
  width: 100%;
  height: 4px;
  left: 0;
  top: 0;
}
.swiper-container-vertical > .swiper-pagination-progress {
  width: 4px;
  height: 100%;
  left: 0;
  top: 0;
}
.swiper-pagination-progress.swiper-pagination-white {
  background: rgba(255, 255, 255, 0.5);
}
.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar {
  background: #fff;
}
.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar {
  background: #fcfbfb;
}
/* 3D Container */
.swiper-container-3d {
  -webkit-perspective: 1200px;
  -moz-perspective: 1200px;
  -o-perspective: 1200px;
  perspective: 1200px;
}
.swiper-container-3d .swiper-wrapper,
.swiper-container-3d .swiper-slide,
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right,
.swiper-container-3d .swiper-slide-shadow-top,
.swiper-container-3d .swiper-slide-shadow-bottom,
.swiper-container-3d .swiper-cube-shadow {
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right,
.swiper-container-3d .swiper-slide-shadow-top,
.swiper-container-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
.swiper-container-3d .swiper-slide-shadow-left {
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(248, 246, 246, 0.5)),
    to(rgba(0, 0, 0, 0))
  );
  /* Safari 4+, Chrome */
  background-image: -webkit-linear-gradient(
    right,
    rgba(252, 251, 251, 0.5),
    rgba(0, 0, 0, 0)
  );
  /* Chrome 10+, Safari 5.1+, iOS 5+ */
  background-image: -moz-linear-gradient(
    right,
    rgba(252, 250, 250, 0.5),
    rgba(0, 0, 0, 0)
  );
  /* Firefox 3.6-15 */
  background-image: -o-linear-gradient(
    right,
    rgba(250, 247, 247, 0.5),
    rgba(0, 0, 0, 0)
  );
  /* Opera 11.10-12.00 */
  background-image: linear-gradient(
    to left,
    rgba(248, 246, 246, 0.5),
    rgba(0, 0, 0, 0)
  );
  /* Firefox 16+, IE10, Opera 12.50+ */
}
.swiper-container-3d .swiper-slide-shadow-right {
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(252, 249, 249, 0.5)),
    to(rgba(0, 0, 0, 0))
  );
  /* Safari 4+, Chrome */
  background-image: -webkit-linear-gradient(
    left,
    rgba(248, 246, 246, 0.5),
    rgba(0, 0, 0, 0)
  );
  /* Chrome 10+, Safari 5.1+, iOS 5+ */
  background-image: -moz-linear-gradient(
    left,
    rgba(248, 246, 246, 0.5),
    rgba(0, 0, 0, 0)
  );
  /* Firefox 3.6-15 */
  background-image: -o-linear-gradient(
    left,
    rgba(250, 247, 247, 0.5),
    rgba(0, 0, 0, 0)
  );
  /* Opera 11.10-12.00 */
  background-image: linear-gradient(
    to right,
    rgba(248, 245, 245, 0.5),
    rgba(0, 0, 0, 0)
  );
  /* Firefox 16+, IE10, Opera 12.50+ */
}
.swiper-container-3d .swiper-slide-shadow-top {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(130, 72, 72, 0.5)),
    to(rgba(0, 0, 0, 0))
  );
  /* Safari 4+, Chrome */
  background-image: -webkit-linear-gradient(
    bottom,
    rgba(250, 248, 248, 0.5),
    rgba(0, 0, 0, 0)
  );
  /* Chrome 10+, Safari 5.1+, iOS 5+ */
  background-image: -moz-linear-gradient(
    bottom,
    rgba(250, 247, 247, 0.5),
    rgba(0, 0, 0, 0)
  );
  /* Firefox 3.6-15 */
  background-image: -o-linear-gradient(
    bottom,
    rgba(253, 252, 252, 0.5),
    rgba(0, 0, 0, 0)
  );
  /* Opera 11.10-12.00 */
  background-image: linear-gradient(
    to top,
    rgba(250, 249, 249, 0.5),
    rgba(0, 0, 0, 0)
  );
  /* Firefox 16+, IE10, Opera 12.50+ */
}
.swiper-container-3d .swiper-slide-shadow-bottom {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(253, 251, 251, 0.51)),
    to(rgba(0, 0, 0, 0))
  );
  /* Safari 4+, Chrome */
  background-image: -webkit-linear-gradient(
    top,
    rgba(248, 245, 245, 0.5),
    rgba(0, 0, 0, 0)
  );
  /* Chrome 10+, Safari 5.1+, iOS 5+ */
  background-image: -moz-linear-gradient(
    top,
    rgba(252, 249, 249, 0.5),
    rgba(0, 0, 0, 0)
  );
  /* Firefox 3.6-15 */
  background-image: -o-linear-gradient(
    top,
    rgba(250, 247, 247, 0.5),
    rgba(0, 0, 0, 0)
  );
  /* Opera 11.10-12.00 */
  background-image: linear-gradient(
    to bottom,
    rgba(248, 243, 243, 0.5),
    rgba(0, 0, 0, 0)
  );
  /* Firefox 16+, IE10, Opera 12.50+ */
}
/* Coverflow */
.swiper-container-coverflow .swiper-wrapper,
.swiper-container-flip .swiper-wrapper {
  /* Windows 8 IE 10 fix */
  -ms-perspective: 1200px;
}
/* Cube + Flip */
.swiper-container-cube, .swiper-container-flip {
  overflow: visible;
}
.swiper-container-cube .swiper-slide, .swiper-container-flip .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
}
.swiper-container-cube .swiper-slide .swiper-slide,
.swiper-container-flip .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-container-cube .swiper-slide-active,
.swiper-container-flip .swiper-slide-active,
.swiper-container-cube .swiper-slide-active .swiper-slide-active,
.swiper-container-flip .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-container-cube .swiper-slide-shadow-top,
.swiper-container-flip .swiper-slide-shadow-top,
.swiper-container-cube .swiper-slide-shadow-bottom,
.swiper-container-flip .swiper-slide-shadow-bottom,
.swiper-container-cube .swiper-slide-shadow-left,
.swiper-container-flip .swiper-slide-shadow-left,
.swiper-container-cube .swiper-slide-shadow-right,
.swiper-container-flip .swiper-slide-shadow-right {
  z-index: 0;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
}
/* Cube */
.swiper-container-cube .swiper-slide {
  visibility: hidden;
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  width: 100%;
  height: 100%;
}
.swiper-container-cube.swiper-container-rtl .swiper-slide {
  -webkit-transform-origin: 100% 0;
  -moz-transform-origin: 100% 0;
  -ms-transform-origin: 100% 0;
  transform-origin: 100% 0;
}
.swiper-container-cube .swiper-slide-active,
.swiper-container-cube .swiper-slide-next,
.swiper-container-cube .swiper-slide-prev,
.swiper-container-cube .swiper-slide-next + .swiper-slide {
  pointer-events: auto;
  visibility: visible;
}
.swiper-container-cube .swiper-cube-shadow {
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background: #f8f5f5;
  opacity: 0.6;
  -webkit-filter: blur(50px);
  filter: blur(50px);
  z-index: 0;
}
/* Fade */
.swiper-container-fade.swiper-container-free-mode .swiper-slide {
  -webkit-transition-timing-function: ease-out;
  -moz-transition-timing-function: ease-out;
  -ms-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.swiper-container-fade .swiper-slide {
  pointer-events: none;
  -webkit-transition-property: opacity;
  -moz-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
}
.swiper-container-fade .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-container-fade .swiper-slide-active,
.swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-zoom-container {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  text-align: center;
}
.swiper-zoom-container > img,
.swiper-zoom-container > svg,
.swiper-zoom-container > canvas {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
/* Scrollbar */
.swiper-scrollbar {
  border-radius: 10px;
  position: relative;
  -ms-touch-action: none;
  background: rgba(0, 0, 0, 0.1);
}
.swiper-container-horizontal > .swiper-scrollbar {
  position: absolute;
  left: 1%;
  bottom: 3px;
  z-index: 50;
  height: 5px;
  width: 98%;
}
.swiper-container-vertical > .swiper-scrollbar {
  position: absolute;
  right: 3px;
  top: 1%;
  z-index: 50;
  width: 5px;
  height: 98%;
}
.swiper-scrollbar-drag {
  height: 100%;
  width: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  left: 0;
  top: 0;
}
.swiper-scrollbar-cursor-drag {
  cursor: move;
}
/* Preloader */
.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  -webkit-transform-origin: 50%;
  -moz-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-animation: swiper-preloader-spin 1s steps(12, end) infinite;
  -moz-animation: swiper-preloader-spin 1s steps(12, end) infinite;
  animation: swiper-preloader-spin 1s steps(12, end) infinite;
}
.swiper-lazy-preloader:after {
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  background-position: 50%;
  -webkit-background-size: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
}
.swiper-lazy-preloader-white:after {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}
@-webkit-keyframes swiper-preloader-spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes swiper-preloader-spin {
  100% {
    transform: rotate(360deg);
  }
}

</style>
