<template>
     <div>
        <h2 class="sub-header">编辑英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄姓名</label>
            <input v-model="formData.name" type="text" class="form-control" id="hero-name" placeholder="英雄姓名">
          </div>
          <div class="form-group">
            <label for="gender">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="gender" placeholder="性别">
          </div>
          
          <button @click.prevent="editHeroes" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        props:['id'],
        data () {
            return {
                formData: {
                    name: '',
                    gendern: ''
                }
            };
        },
        
        created() {
            axios
                .get(`http://localhost:3000/heroes/${this.id}`)
                .then((response) => {
                    if (response.status === 200) {
                        this.formData = response.data;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        methods: {
            editHeroes () {
                axios
                    .put(`http://localhost:3000/heroes/${this.id}`, this.formData)
                    .then((response) => {
                        if (response.status === 200) {
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
