<template>
    <div>
        <h2 class="sub-header">英雄管理</h2>
        <!-- <a class="btn btn-success" href="add.html">添加</a> -->
        <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>英雄姓名</th>
                        <th>性别</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="(item, index) in list" :key="item.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.gender }}</td>
                        <td>
                        <!-- <a href="edit.html">edit</a> -->
                        <router-link :to="'/heroes/edit' + item.id" >edit</router-link>
                        &nbsp;&nbsp;
                        <a @click.prevent="deleteHero(item.id)" href="javascript:window.confirm('Are you sure?')">delete</a>
                        </td>
                    </tr>
                
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

    // 导入axios
    import axios from 'axios/dist/axios.js';
    // 导出组件
    export default {
       data () {
           return {
               list:[]
           };
       },
       created () {
           this.loadData();
       },

       methods: {
            loadData () {
                axios
                    .get('http://localhost:3000/heroes')
                    .then( (response)=> {
                        if (response.status === 200) {
                            this.list = response.data;
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            deleteHero (id) {
                axios
                    .delete(`http://localhost:3000/heroes/${id}`)
                    .then((response) => {
                        if (response.status === 200) {
                            this.loadData();
                            alert('删除成功！');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            }
       }
       
    }
</script>

<style>

</style>
