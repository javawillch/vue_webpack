<template>
    <div class="footer" v-cloak>
        <label class="copyright">{{message}}{{myName}}, {{year}}</label>
        <div>  
            <div class='social-media-bars'>
                <a href="https://www.linkedin.com/in/wei-will/?locale=en_US" target="_blank" title="Linkedin"><svg class="svg-inline--fa fa-linkedin-in fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg><!-- <i class="fab fa-linkedin-in"></i> --></a>
                <a href="https://www.instagram.com/vvill_i_am/" target="_blank" title="Instagram"><svg class="svg-inline--fa fa-instagram fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg><!-- <i class="fab fa-instagram"></i> --></a>
                <a href="mailto:javawillch@gmail.com" target="_blank" title="Gmail"><svg class="svg-inline--fa fa-envelope fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg><!-- <i class="far fa-envelope"></i> --></a>
                <a href="https://codepen.io/javawillch/" target="_blank" title="Codepen"><svg class="svg-inline--fa fa-codepen fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="codepen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path></svg><!-- <i class="fab fa-codepen"></i> --></a>
                <a href="https://github.com/javawillch" target="_blank" title="Github"><svg class="svg-inline--fa fa-github fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg><!-- <i class="fab fa-github"></i> --></a>
                <a href="https://openprocessing.org/user/256534/" target="_blank" title="OpenpPocessing"><svg class="svg-inline--fa fa-github fa-w-16" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 60" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,60.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M356 590 c-99 -17 -191 -101 -221 -202 -19 -65 -21 -318 -3 -336 22 -22 28 -13 28 40 l0 52 35 -42 c107 -124 316 -129 433 -9 57 59 85 126 85 207 0 188 -166 322 -357 290z"/></g></svg></a>
                <a href="https://www.notion.so/Software-Relatived-a7873880420f44f0adc3df6a88149593" target="_blank" title="Notion"><svg class="svg-inline--fa fa-notion fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="codepen" role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 7 36 36"><path fill="#fff" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"/><path fill="#000" fill-rule="evenodd" d="M28.4602 9.06842L11.8104 10.2936C10.4679 10.4098 10 11.285 10 12.3342V30.5316C10 31.3492 10.2916 32.048 10.993 32.982L14.9069 38.0563C15.5498 38.8734 16.134 39.0482 17.3616 38.9897L36.6969 37.823C38.3322 37.7069 38.8 36.9481 38.8 35.665V15.1925C38.8 14.5292 38.5374 14.3376 37.7632 13.7728C37.7206 13.7418 37.6764 13.7096 37.6307 13.6761L32.3159 9.94338C31.0308 9.01056 30.5048 8.89318 28.4602 9.06842ZM17.8 14.8567C16.2214 14.9632 15.8627 14.9874 14.9662 14.2596L12.6865 12.4516C12.454 12.2178 12.5706 11.9262 13.1544 11.8683L29.1613 10.7017C30.5045 10.5848 31.2054 11.0522 31.7314 11.4602L34.4769 13.4435C34.5938 13.5016 34.8854 13.8511 34.5347 13.8511L18.0038 14.843L17.8 14.8567ZM15.9587 35.4897V18.1093C15.9587 17.3512 16.1924 17.001 16.893 16.9421L35.8782 15.8343C36.5222 15.776 36.8138 16.1846 36.8138 16.9421V34.206C36.8138 34.9648 36.6966 35.6072 35.6447 35.665L17.4773 36.7155C16.4259 36.7733 15.9587 36.4238 15.9587 35.4897ZM33.8936 19.0416C34.0101 19.5671 33.8936 20.092 33.3668 20.1511L32.4914 20.3254V33.1567C31.7314 33.5649 31.0306 33.7983 30.4466 33.7983C29.5116 33.7983 29.2774 33.5064 28.5771 32.632L22.8513 23.65V32.3404L24.6631 32.7489C24.6631 32.7489 24.6631 33.7983 23.2014 33.7983L19.1716 34.0319C19.0545 33.7983 19.1716 33.2155 19.5803 33.0987L20.6319 32.8075V21.3172L19.1718 21.2003C19.0547 20.6749 19.3463 19.9173 20.1648 19.8585L24.4879 19.5673L30.4466 28.6662V20.617L28.9274 20.4428C28.8107 19.8004 29.2774 19.334 29.8617 19.2761L33.8936 19.0416Z" clip-r/></svg></a>
            </div><!-- ule="evenodd" -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'Copyright© ', 
      myName: 'Wei Chen-Huang',
      year: new Date().getFullYear(),
      header: {
          header1: 'Info',
          header2: 'About',
          header3: 'Resume',
      },
      headers:[
          'Info',
          'About',
          'Resume',
          'Work',
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ----------------------------debug---------------------------- */
/* *{
    outline: 1px solid #f00;
} */

/* ----------------------------initial---------------------------- */
[v-cloak]{
    display: none;
}

/* reset  */
*{
    margin: 0;
    padding: 0;
    list-style: none;   
}

/* ----------------------------main content---------------------------- */
.itemlst{
    /* width: 100%; */
    /* max-width: 100%; */
    margin:  auto;
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

/* RWD */
@media screen and (min-width: 768px){
    .itemlst{
        display: flex;
    }
    .item{
        width: 480px;
    }
}

.itemlst .item{
    height: 100%;
    background-size: cover;
    position: relative;
    /* margin: 0 15px; */
}        

.itemlst .item .txt{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
    background-color: rgba(0,0,0,.85);
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* animation */
    opacity: 0;
    transition: opacity .5s;
}

.itemlst .item:hover .txt{
    opacity: 1;
}

.itemlst .item .txt h2{
    color: #fff
}      

.itemlst .item .txt p{
    color: #fff;
    opacity: 0.6;
    padding: 15px;
}

/* ----------------------------header and footer---------------------------- */
.footer .copyright{
    display: flex;
    justify-content: center;
    color: #000;
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
a:link{
    /* //設定還沒有瀏覽過的連結 */
    text-decoration:none;
    background-color:#ffffff;
}
a:visited {
    /* //設定已經瀏覽過的連結 */
    text-decoration:none;
}
.subroute a:hover, .subroute a:active {
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
    vertical-align: -.125em;
}

/* ----------------------------Vue Relative---------------------------- */
.router-link-exact-active {
    background-color: blueviolet;
    color: white;
}       

/* ----------------------------Other---------------------------- */
.pic {
    /* background-image: url(/static/SkyJumping.gif); */
    background-color: #ffaa44;
    height: 360px;
}
     
</style>
