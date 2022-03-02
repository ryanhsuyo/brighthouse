<template>
    <div>
        <div class="headerBar">
            <!-- <a href="./index.html"><div class="nav nav1"><div class="img"><img style="display:none; width: 100px;height: 100px;" src="./images/Brighthouse only_logo.svg"></div></div></a>
            <a href="./index.html"><div class="nav nav2"><div class="img"><img style="display:none; width: 100px;height: 100px;" src="./images/Brighthouse text_CMYK.svg"></div></div></a> -->
            <div class="nav"></div>
            <div class="nav"></div>
            <div class="nav"></div>
            <router-link to="teacher"><div class="nav">師資介紹</div></router-link>
            <router-link to="className"><div class="nav">課程一覽</div></router-link>
            <router-link to="blog"><div class="nav">B L O G</div></router-link> 
            <router-link to="dateClass"><div class="nav">預約課程</div></router-link>
            <router-link to="rentPlace"><div class="nav">空間租借</div></router-link>
            <router-link to="store"><div class="nav">線上商店</div></router-link>
            <div class="nav"></div>
            <!-- <div class="nav"></div> -->
            <!-- <div class="nav"></div> -->
        </div>
        <div class="headerBarMin">
            <div class="header_nav20">
                <a href="./teacher.html"><div class="nav20">師資介紹</div></a>
                <a href="./class.html"><div class="nav20">課程一覽</div></a>
                <a href="./blog.html"><div class="nav20">B L O G</div></a>
                <a href="./dateclass.html"><div class="nav20">預約課程</div></a>
                <a href="./rentplace.html"><div class="nav20">空間租借</div></a>
                <a href="./stone.html"><div class="nav20">線上商店</div></a>
                <div class="nav_buger">
                    <button class="hamburger hamburger--elastic" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner">
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    name: 'topHeader'
})
</script>
<style scoped>
@media (min-width: 768px){
    .headerBar{
        display: flex;
        justify-content: end;
        flex-direction: row;
        width: 100%;
        background-color: yellow;
        height: 60px;
        align-items: center;
    }
    .headerBarMin{
        display: none;
    }
    .nav{
        display: flex;
        justify-content: center;
        flex-direction: row;
        width: 120px;
        text-align: center;
    }
}
@media (max-width: 768px){
    .headerBar{
        display: none;
    }
    .headerBarMin{
        width: 120px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
