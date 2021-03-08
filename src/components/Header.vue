<template>
    <div class="header">
        <!-- <a class="selfname" href="/">
            <h2>{{myName}}</h2>
        </a> -->
        <router-link :to="'/'" class="selfname" >
            <h2>{{myName}}</h2>
        </router-link>
        <div class="subroute">
            <!-- <a href="/index.html">{{header.header1}}</a>
            <a href="/pages/about.html">{{header.header2}}</a>
            <a href="/static/Resume_WeiCH.pdf">{{header.header3}}</a>
            <a href="/p5_mouse.html">Work</a> -->  

            <router-link :to="'/'">{{header.header1}}</router-link>
            <router-link :to="'about'">{{header.header2}}</router-link>
            <a href="./static/Resume_WeiCH.pdf" target="_blank">{{header.header3}}</a>
            <router-link :to="'work'">{{header.header4}}</router-link>

            <!-- <router-link class="nav-link" :to="'/'"> RL hello</router-link>
            <router-link class="nav-link" :to="'about'"> RL helloVUE</router-link>         -->
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
                header4: 'Work',
            },
            headers:[
                'Info',
                'About',
                'Resume',
                'Work',
            ],
        }
    },
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
    /* max-width: 100%; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* align-self: flex-end; */
}

@media screen and (max-width:768px) {
    .header .subroute{
        display: list-item;
    }
}

.header .subroute a{
    padding: 0px 15px;
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
    background-color: #1d1f20;
    color: white;
}       

.selfname {
    background-color: white;
    color: #1d1f20; 
}
     
</style>
