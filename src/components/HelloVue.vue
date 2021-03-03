<template>
    <div class="page-about">
        <!-- <iframe :src="src" frameborder="none" width="160" height="600" ></iframe>   -->

 <!-- style="width: 100%; height: 100vh; margin: 0; position: absolute; left: 0; top: 0;"         -->
 <!-- src="./Sphere.html"  -->
 <!-- ; margin: 0; position: absolute; left: 0; top: 0; z-index: -1; -->
<!-- <div width="160" height="1000" style="outline: 1px solid #0F0"> -->
<!-- <iframe z-index:1 ref="iframe" id="google_ads_frame2" name="google_ads_frame2" width="160" height="600" frameborder="0" :src="src" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true"></iframe>         -->
<!-- </div>         -->
        <div class="box-one">
            <div class="col-sm-12 col-info text-left">
                <h1>Wei Chen-Huang</h1>
                <h5 class="mt-1">Data Technologist, I spark joy in coding and data mining.</h5>
                <br />
                <p>
                I’m a data-driven and insightful engineer who is passionate about growing teams and dreams.<br />
                It’s vital to grip on your organization’s data and convert information into structured, analyzable insight.
                </p>
                <ul class="mt-4">
                <li><b>2018-2020</b><span> | Data Engineer @ Trend Micro</span></li>
                <li><b>2017-2018</b><span> | Software Engineer @ Hung Yang Soft-Tech</span></li>
                <li><b>2017</b><span> | Class Leader @ Institute for Information Industry</span></li>
                <li><b>2015-2017</b><span> | Business Analyst / Sales Representive @ Jurassic Color Diamond</span></li>
                </ul>
            </div>
        </div>

        <div class="box-two">
            <div class='style'>
                <div class='container'>
                    <div class='sphere'>
                        <div class='ring'></div>
                        <div class='ring'></div>
                        <div class='ring'></div>
                        <div class='ring'></div>
                        <div class='ring'></div>
                        <div class='ring'></div>
                        <div class='ring'></div>
                        <div class='ring'></div>
                        <div class='ring'></div>
                        <div class='ring'></div>
                    </div>
                    <div class='sphere'>
                        <div class='ring'></div>
                        <div class='ring'></div>
                        <div class='ring'></div>
                        <div class='ring'></div>
                        <div class='ring'></div>
                        <div class='ring'></div>
                        <div class='ring'></div>
                        <div class='ring'></div>
                        <div class='ring'></div>
                        <div class='ring'></div>
                    </div>
                </div>
            </div>
        </div>    
    </div>   
</template>

<script>
export default {
  name: 'HelloVue',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      src: './Sphere.html',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* ----------------------------header and footer---------------------------- */
.header{
    display: flex;   
    margin: 15px;
    padding-left: 15px;
    padding-right: 15px;
    font-weight: 700;
}

.header .selfname{
    width: 100%;
}

.header .subroute{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* align-self: flex-end; */
}

.header .subroute a{
    padding: 0px 15px;
}            

.footer .copyright{
    display: flex;
    justify-content: center;
}

.footer .social-media-bars{
    display: flex;
    justify-content: center;
}

.footer .social-media-bars .svg-inline--fa{
    margin: 5px;
    padding: 0px 7px;
}

/* ----------------------------other detail---------------------------- */
.header a:link{
    /* //設定還沒有瀏覽過的連結 */
    text-decoration:none;
    background-color:#1d1f20;
}
.header a:visited {
    /* //設定已經瀏覽過的連結 */
    text-decoration:none;
}
.header .subroute a:hover, .header .subroute a:active{
    /* //設定滑鼠移經的連結 */
    /* //設定正在點選的連結 */
    text-decoration: none;
    background-color: #fff;
    color: #000;;
}

.header a{
    text-decoration: none;
    color: #fff;
}

.svg-inline--fa{
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -.125em;
} 



/* ----------------------------Sphere---------------------------- */
/* *{
  outline: 1px solid #0f0;
} */

.page-about {
  background: #1d1f20;
  overflow: hidden;
}

.wrapper {
    perspective: 800px;
    display: flex;
    justify-content: flex-end;
    padding: 0px 30vh;
    filter: blur(1.5px);
}

.container {
  transform: rotateX(40deg) rotateY(40deg) rotateZ(90deg);
  transform-style: preserve-3d;
  position: relative;
  display: flex;
  height: 300px;
  width: 300px;
  /* margin: 100px 0; */
  margin-top: 20px; 
}

.sphere, .ring {
  position: absolute;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
}

.sphere {
  animation: rotateSphere 10s linear infinite;
}
.sphere:nth-of-type(1) .ring:nth-of-type(1) {
  transform: rotateY(18deg);
}
.sphere:nth-of-type(1) .ring:nth-of-type(2) {
  transform: rotateY(36deg);
}
.sphere:nth-of-type(1) .ring:nth-of-type(3) {
  transform: rotateY(54deg);
}
.sphere:nth-of-type(1) .ring:nth-of-type(4) {
  transform: rotateY(72deg);
}
.sphere:nth-of-type(1) .ring:nth-of-type(5) {
  transform: rotateY(90deg);
}
.sphere:nth-of-type(1) .ring:nth-of-type(6) {
  transform: rotateY(108deg);
}
.sphere:nth-of-type(1) .ring:nth-of-type(7) {
  transform: rotateY(126deg);
}
.sphere:nth-of-type(1) .ring:nth-of-type(8) {
  transform: rotateY(144deg);
}
.sphere:nth-of-type(1) .ring:nth-of-type(9) {
  transform: rotateY(162deg);
}
.sphere:nth-of-type(1) .ring:nth-of-type(10) {
  transform: rotateY(180deg);
}
.sphere:nth-of-type(2) .ring:nth-of-type(1) {
  transform: rotateX(18deg);
}
.sphere:nth-of-type(2) .ring:nth-of-type(2) {
  transform: rotateX(36deg);
}
.sphere:nth-of-type(2) .ring:nth-of-type(3) {
  transform: rotateX(54deg);
}
.sphere:nth-of-type(2) .ring:nth-of-type(4) {
  transform: rotateX(72deg);
}
.sphere:nth-of-type(2) .ring:nth-of-type(5) {
  transform: rotateX(90deg);
}
.sphere:nth-of-type(2) .ring:nth-of-type(6) {
  transform: rotateX(108deg);
}
.sphere:nth-of-type(2) .ring:nth-of-type(7) {
  transform: rotateX(126deg);
}
.sphere:nth-of-type(2) .ring:nth-of-type(8) {
  transform: rotateX(144deg);
}
.sphere:nth-of-type(2) .ring:nth-of-type(9) {
  transform: rotateX(162deg);
}
.sphere:nth-of-type(2) .ring:nth-of-type(10) {
  transform: rotateX(180deg);
}

.ring {
  border: 1px solid;
  box-sizing: border-box;
  border-radius: 50%;
  opacity: 0;
  animation: fadeIn 2000ms ease infinite;
  box-shadow: 0 0 80px rgba(255, 255, 255, 0.2), inset 0 0 80px rgba(255, 255, 255, 0.2);
}
.ring:nth-of-type(1) {
  border-color: #40E0D0;
  animation-delay: 200ms;
}
.ring:nth-of-type(2) {
  border-color: #4AE2D2;
  animation-delay: 400ms;
}
.ring:nth-of-type(3) {
  border-color: #53E3D5;
  animation-delay: 600ms;
}
.ring:nth-of-type(4) {
  border-color: #5DE5D7;
  animation-delay: 800ms;
}
.ring:nth-of-type(5) {
  border-color: #66E6D9;
  animation-delay: 1000ms;
}
.ring:nth-of-type(6) {
  border-color: #70E8DC;
  animation-delay: 1200ms;
}
.ring:nth-of-type(7) {
  border-color: #79E9DE;
  animation-delay: 1400ms;
}
.ring:nth-of-type(8) {
  border-color: #83EBE0;
  animation-delay: 1600ms;
}
.ring:nth-of-type(9) {
  border-color: #8CECE3;
  animation-delay: 1800ms;
}
.ring:nth-of-type(10) {
  border-color: #96EEE5;
  animation-delay: 2000ms;
}

@keyframes rotateSphere {
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
@keyframes fadeIn {
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}


/* * {
    outline: 1px solid #F00;
} */


.box-one {
    float: left;
    /* display: inline-block; */
    /* position: relative; */
    /* width: 480px; */
}
.box-two {
    float: right;
    margin-right : 30px;
}


</style>
