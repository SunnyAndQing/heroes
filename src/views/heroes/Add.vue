<template>
    <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄姓名</label>
            <input v-model="formData.name" type="text" class="form-control" id="hero-name" placeholder="英雄姓名">
          </div>
          <div class="form-group">
            <label for="gender">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="gender" placeholder="性别">
          </div>
          
          <button @click.prevent="addHeroes" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
    // 导入axios库
    import axios from 'axios';

    // 导出组件
    export default {
        data() {
            return {
                // 1 绑定文本框的数据，将来也是post给服务器的数据
                formData: {
                    name: '',
                    gender: ''
                }
            };
         },

        methods: {
           addHeroes () {
               axios
                .post('http://localhost:3000/heroes', this.formData)
                .then((response) => {
                    if (response.status === 201) {
                        console.log(response.status);
                        this.$router.push('/heroes');
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
