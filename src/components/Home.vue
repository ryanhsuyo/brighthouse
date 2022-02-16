<template>
<div>
  <!-- 輪播 -->
  <slider animation="fade" class="slider">
      <slider-item v-for="(i, index) in list" :key="index">
        <img :src="i">
      </slider-item>
  </slider>
  <div class="section1_left">
    <div class="s1l_block">
      <div class="t1 t1_guitar">吉他</div>
      <div class="t1">烏克麗麗</div>
      <div class="t1">木箱鼓</div>
      <div class="t1_content">
        跟隨著音樂做出
        相同的旋律、律動吧
      </div>
    </div>
  <div class="sl1_block2">
      <div class="t1_button tb1">預約課程</div>
  </div>
  </div>
  <div class="section1_right">
    <div class="sr1_block">
      <div class="teacher_bg">
        <div class="circle circle1">
                <div class="span span1">許嘉祐Ryan</div>
            </div>
            <div class="circle circle2">
                <div class="span span2">高昱信Jordan</div>
            </div>
            <div class="circle circle3">
                <div class="span span3">許漢元Hank</div>
            </div>
            <div class="circle circle4">
                <div class="span span4">屈任之Jammy</div>
            </div>
            <div class="circle circle5">
                <div class="span span5">葉昱均Grace</div>
            </div>
            <div class="circle circle6">
                <div class="span span6">吳澤宇Blake</div>
            </div>
            <div class="circle circle7">
                <div class="span span7">王政元Yun</div>
            </div>
            <div class="circle circle8">
                <div class="span span8">雷軒Scott</div>
            </div>
        </div>
    </div>
  </div>
  <!-- s2 -->
  <div class="section2">
    <div class="section2_left">
      <div class="sl2_block">
        <div class="stairs_bg"></div>
        <div class="block_banner_block">
          <div class="block_banner_bg"></div>
        </div>
      </div>
    </div>
    <div class="section2_right">
      <div class="sr2_block">
        <div class="title2">最新影片</div>
        <div class="t2_content">拉丁節奏講座<br><pre>          2021.03.20</pre></div>
        <div class="sr2_row">
          <div id="player"></div>
            <div class="img-wrap">
              <!-- <img
                src="https://i.ytimg.com/vi_webp/SFaFpoCvYF8/default.webp"
                data-video-id="SFaFpoCvYF8"
                />
              <img
                src="https://i.ytimg.com/vi_webp/081rD8G6aF0/default.webp"
                data-video-id="081rD8G6aF0"
                />
              <img
                src="https://i.ytimg.com/vi_webp/rBJ-E99POYU/default.webp"
                data-video-id="rBJ-E99POYU"
                />
              </div> -->
        </div>
        <div class="button2_block">
          <!-- <a href="https://www.youtube.com/channel/UCMRVaVoRXaxvlfAoCfGLYtA" target="更多影片" title="更多影片"><div class="t1_button tb2"> -->
                更多影片
          <!-- </div></a> -->
        </div>
      </div>
    </div>
  </div>
  <!-- s3 -->
  <div class="section3">
      <div class="section3_left">
          <div class="sl3_block">
              <div class="title3">BLOG</div>
              <div class="blog blog_1">
                  <div class="title">樂譜分享</div>
                  <div class="hori_line"></div>
                  <div class="blog_ul">
                      <!-- <div class="blog_bg">
                          <img src="./images/tab/100135/p2.jpg">
                      </div> -->
                      <div class="blog_text_title">渣妮NANI<br>- 半心<span>(木吉他譜)</span>
                          <div class="blog_content">2021.04.21<br>渣妮樂團半心同名主打</div>
                      </div>
                  </div>
                  <div class="blog_ul">
                      <!-- <div class="blog_bg">
                          <img src="./images/tab/100135/p1.jpg">
                      </div> -->
                      <div class="blog_text_title">周興哲<br>- 怎麼了<span>(木吉他譜)</span>
                          <div class="blog_content">2021.01.30<br>華劇(你有念大學嗎?)片尾曲</div>
                      </div>
                  </div>
              </div>
              <div class="buttom3_block">
                  <!-- <a href="./blog.html"> -->
                      <div class="t1_button tb3" a="#">
                          <span>查看更多文章</span>
                      </div>
                  <!-- </a> -->
              </div>
          </div>
      </div>

                <div class="section3_right">
                    <div class="sr3_block">
                        <!-- <div class="img_block"><img src="./images/S__58220554.jpg"></div> -->
                        <div class="blog blog_2">
                            <div class="title">基礎樂理</div>
                            <div class="hori_line"></div>
                            <div class="blog_ul">
                                <div class="blog_bg">
                                    <!-- <img src="./images/tab/100135/patten1.jpg"> -->
                                </div>
                                <div class="blog_text_title">基本和弦(1)<br><span>大調音階和弦</span>
                                    <div class="blog_content">2021.07.24<br>白色代表根音，彈奏前可以試著記下音與根音的關係</div>
                                </div>
                            </div>
                            <div class="blog_ul">
                                <div class="blog_bg">
                                    <!-- <img src="./images/tab/100135/patten2.jpg"> -->
                                </div>
                                <div class="blog_text_title">基本音階(1)<br><span>C大調自然音階</span>
                                    <div class="blog_content">2021.03.11<br>是常用到的音階，嘗試看看邊彈邊唱</div>
                                </div>
                            </div>
                        </div>
                        <div class="buttom3_block2">
                            <!-- <a href="./blog.html"> -->
                                <div class="t1_button tb3_2" a="#">
                                    <span>查看更多文章</span>
                                </div>
                            <!-- </a> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="section4">
                <div class="s4_block">
                    <div class="title">商品預覽</div>
                    <div class="block_top">
                        <div class="item">
                            <!-- <div class="item_bg"><img src="images/prodoct/item1.jpg" alt="guitar1"></div>
                            <div class="item_bg"><img src="images/prodoct/item2.jpg" alt="guitar2"></div>
                            <div class="item_bg"><img src="images/prodoct/item3.jpg" alt="guitar3"></div>
                            <div class="item_bg"><img src="images/prodoct/item4.jpg" alt="cajon"></div>
                            <div class="item_bg"><img src="images/prodoct/item5.jpg" alt="uklele"></div>
                            <div class="item_bg"><img src="images/prodoct/item6.jpg" alt="guitar_bag"></div>
                            <div class="item_bg"><img src="images/prodoct/item7.jpg" alt="guitar_stand"></div>
                            <div class="item_bg"><img src="images/prodoct/item8.jpg" alt="guitar_sting"></div>
                            <div class="item_bg"><img src="images/prodoct/item9.jpg" alt="guitar5"></div>
                            <div class="item_bg"><img src="images/prodoct/item10.jpg" alt="guitar6"></div>
                            <div class="item_bg"><img src="images/prodoct/item11.jpg" alt="guitar7"></div>
                            <div class="item_bg"><img src="images/prodoct/item12.jpg" alt="guitar8"></div>
                            <div class="item_bg"><img src="images/prodoct/item13.jpg" alt="guitar9"></div>
                            <div class="item_bg"><img src="images/prodoct/item14.jpg" alt="guitar10"></div>
                            <div class="item_bg"><img src="images/prodoct/item15.jpg" alt="cajon2"></div>
                            <div class="item_bg"><img src="images/prodoct/item16.jpg" alt="uklele2"></div> -->
                        </div>
                        <div class="content">
                            <div class="title">夢想來自<br>一念之間</div>
                            <div class="text">在繁忙的街道<br>試著偶而放慢腳步<br>創造屬於自己的一頁</div>
                        </div>
                    </div>

                    <div class="block4_bottom">
                        <!-- <a href="./stone.html"> -->
                            <div class="t1_button tb4">
                                <span>查看更多商品</span>
                            </div>
                        <!-- </a> -->
                    </div>
        </div>
    </div>
  </div>
<!-- <footer></footer> -->
</div>
</template>
<script src="js/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script type="text/javascript" src="js/slick/slick/slick.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.js"></script>
<script>
import $ from 'jquery'
// import topHeader from './topHeader'
// import footer from './footer'
import slick from 'slick-carousel';
export default {
  name: "Home",
  components: {
    // topHeader,
    // footer
    slick
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
      },
      index: 0,
      list: Array(5)
        .fill()
        .map((_, i) => `./src/assets/images/banner/${i}/.jpg`)
    }
  },
  mounted() {
  $(".slider").slick({
    arrows: true,
    infinite: true,
    slidesPerRow: 5,
    rows: 5,
    dots: true,
    autoplay: false,
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
/* 輪播 */
.banner {
  width: 90%;
  margin: auto;
}
.slick-slide {
  height: 200px;
}
/* .Btn-prev, .Btn-next {
    background: #6994B9;
} */
.pic_01, .pic_02, .pic_03, .pic_04, .pic_05 {
  height: 80vh;
  width: 1200px;
  margin: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.pic_01 {
    background-image: url(../assets/images/banner/1.jpg);
}
.pic_02 {
    background-image: url(../assets/images/banner/2.jpg);
}
.pic_03 {
    background-image: url(../assets/images/banner/3.jpg);
}
.pic_04 {
    background-image: url(../assets/images/banner/4.jpg);
}
.pic_05 {
    background-image: url(../assets/images/banner/5.jpg);
}

.Title {
    text-align: center;
    padding: 0px 0px;
    margin: 16px;
    display: block;
    float: left;
    width: 160px;
    margin-top: 70vh;
    background: rgba(94, 101, 105, 0.36);
    width: 195px;
    margin-left: 75vw;
    color: #FFF;
}
</style>
