<template>
  <div class="main_content">
    <div class="itemlst">
      <div class="item">
        <div class="pic">
          <img src="./../assets/Cube.gif" height="100%" />
        </div>
        <div class="txt">
          <h2>Cube made by DAX</h2>
          <p>Trend Micro</p>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img src="./../assets/AzureProject.png" height="100%" />
        </div>
        <div class="txt">
          <h2>Azure Analysis Services / Azure Data Factory / Logic App</h2>
          <p>Trend Micro</p>
        </div>
      </div>      
      <div class="item">
        <div class="pic">
          <img src="./../assets/DataFlow.gif" height="100%" />
        </div>
        <div class="txt">
          <h2>Global Data Warehouse Pipeline</h2>
          <p>Trend Micro</p>
        </div>
      </div>
      <!-- </div>
    <div class="itemlst"> -->
      <div class="item">
        <div class="pic">
          <img src="./../assets/AuditSystem.gif" height="100%" />
        </div>
        <div class="txt">
          <h2>Audit System for Banking</h2>
          <p>HY Tech</p>
        </div>
      </div>
      <div class="item">
        <router-link :to="'gemworldmap'">
          <div class="pic">
            <img src="./../assets/worldmap.jpg" height="100%" />
          </div>
          <div class="txt">
            <h2>Gemstone World Map</h2>
            <p>Site Project</p>
          </div>
        </router-link>        
      </div>
      <div class="item">
        <div class="pic">
          <video
            src="./../assets/BabeQ.mp4"
            muted="muted"
            autoplay="autoplay"
            loop="loop"
            height="100%"
          ></video>
        </div>
        <div class="txt">
          <h2>Babe Care Website</h2>
          <p>III</p>
        </div>
      </div>
      <!-- </div>
    <div class="itemlst"> -->
      <div class="item">
        <div class="pic">
          <img src="./../assets/BungeeJumping.gif" height="100%" />
        </div>
        <div class="txt">
          <h2>Bungee Jumping</h2>
          <p>in Macau</p>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img src="./../assets/Skydiving.gif" height="100%" />
        </div>
        <div class="txt">
          <h2>Skydiving</h2>
          <p>in Cairns</p>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img src="./../assets/SkyJumping.gif" height="100%" />
        </div>
        <div class="txt">
          <h2>Sky Jumping</h2>
          <p>in Las Vegas</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
*/
/* ----------------------------main content---------------------------- */
.itemlst {
  width: 100%;
  max-width: 1800px;
  margin: auto;
  /* background-color: #eee;
    height:  440px;
    display: block;
    color: #fff;
    text-align: left;
    background-size: cover;
    background-position: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    padding: 1vw;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    box-shadow: 0 10px 20px -10px rgba(0,0,0,.25);
    transition-duration: .5s;
    overflow: hidden;        */
}

/* 
    RWD 
    iPad pro    1024px
    iPad        768px
    iPhone Plus 414px
    iPhone      375px
*/
@media screen and (min-width: 769px) {
  .item {
    width: 32vw;
    display: inline-flex;
    /* float: left; */
  }
  .item img,
  .item video,
  .item p,
  .item h2 {
    /* width: 480px;  */
    width: 32vw;
    overflow: hidden;
    position: relative;
    object-fit: cover;
  }

  .item .txt,
  .item .pic {
    /* width: 480px; */
    width: 32vw;
    overflow: hidden;
    position: relative;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .item {
    width: 45vw;
    display: inline-flex;
  }
  .item img,
  .item video,
  .item p,
  .item h2 {
    /* width: 480px; */
    max-width: 45vw;
    overflow: hidden;
    position: relative;
    object-fit: cover;
  }
  .item .txt,
  .item .pic {
    /* width: 480px; */
    max-width: 45vw;
    overflow: hidden;
    position: relative;
  }
}

@media screen and (max-width: 480px) {
  .item img {
    /* width: 480px; */
    width: 100%;
  }

  .item video {
    max-width: 100vw;
    overflow: hidden;
    object-fit: cover;
  }
}

.itemlst .item {
  height: 100%;
  background-size: cover;
  position: relative;
  /* margin: 0 15px; */
}

.itemlst .item .txt {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* animation */
  opacity: 0;
  transition: opacity 0.5s;
}

.itemlst .item:hover .txt {
  opacity: 1;
}

.itemlst .item .txt h2 {
  color: #fff;
}

.itemlst .item .txt p {
  color: #fff;
  opacity: 0.6;
  padding: 0 15px;
}

/* ----------------------------other detail---------------------------- */
a:link {
  /* //設定還沒有瀏覽過的連結 */
  text-decoration: none;
  background-color: #ffffff;
}
a:visited {
  /* //設定已經瀏覽過的連結 */
  text-decoration: none;
}
.subroute a:hover,
.subroute a:active {
  /* //設定滑鼠移經的連結 */
  /* //設定正在點選的連結 */
  text-decoration: none;
  background-color: #000;
  color: #fff;
}

a {
  text-decoration: none;
  color: #000;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}

/* ----------------------------Vue Relative---------------------------- */
.router-link-exact-active {
  background-color: blueviolet;
  color: white;
}

/* ----------------------------Other---------------------------- */
/* .pic {
  background-image: url(/static/SkyJumping.gif); 
  background-color: #ffaa44;
  height: 360px;
} */
</style>
