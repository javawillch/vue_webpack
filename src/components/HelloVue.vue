<template>
    <div class="page-about">
        <iframe src="./Sphere.html" frameborder="none" style="width: 100%; height: 100vh; margin: 0; position: absolute; left: 0; top: 0;"></iframe>  
 
 <!-- ; margin: 0; position: absolute; left: 0; top: 0; z-index: -1; -->
        <!-- <div class="col-sm-12 col-info text-left">
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
        </div> -->
  </div>   
</template>

<script>
export default {
  name: 'HelloVue',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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

</style>
