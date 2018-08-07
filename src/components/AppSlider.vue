<template>
    <ul class="nav nav-sidebar">
        <!-- <li class="active"><a href="#">英雄管理 <span class="sr-only">(current)</span></a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">Export</a></li> -->

        <router-link tag="li" to="/heroes">
            <a>英雄列表</a>
        </router-link>
         <router-link tag="li" to="/equips">
            <a>装备列表</a>
        </router-link>
         <router-link tag="li" to="/weapons">
            <a>武器列表</a>
        </router-link>

    </ul>
</template>

<script>
    // 导出组件
    export default {
        data () {
            return {

            };
        }
    }
</script>