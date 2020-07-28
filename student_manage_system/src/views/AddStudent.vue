<template>
  <div class="add-student content" id="add-student">
    <form action="#" id="add-student-form" class="add-student-form">
      <div>
        <label for="name">姓名</label>
        <input type="text" name="name" autocomplete="off" v-model="stu.name" />
      </div>
      <div class="sex">
        <label for="sex">性别</label>
        <input type="radio" name="sex" v-model="stu.sex" value="0" />
        <span>男</span>
        <input type="radio" name="sex" v-model="stu.sex" value="1" />
        <span>女</span>
      </div>
      <div>
        <label for="sNo">学号</label>
        <input type="text" id="sNo" name="sNo" v-model="stu.sNo" />
      </div>
      <div>
        <label for="email">邮箱</label>
        <input type="text" id="email" name="email" v-model="stu.email" />
      </div>
      <div>
        <label for="birth">出生年</label>
        <input type="text" id="birth" name="birth" v-model="stu.birth" />
      </div>
      <div>
        <label for="phone">手机号</label>
        <input type="text" id="phone" name="phone" v-model="stu.phone" />
      </div>
      <div>
        <label for="address">住址</label>
        <input type="text" id="address" name="address" v-model="stu.address" />
      </div>
      <div>
        <label for></label>
        <input type="button" value="提交" class="btn" id="add-submit" @click="submit" />
        <input type="button" value="重置" class="btn" @click="reset" />
      </div>
    </form>
  </div>
</template>

<script>
import api from '../api'
import toast from '@/tools/toast';
export default {
   data() {
        return {
            stu: {
                sex: 0,
                name: '',
                birth: '',
                phone: '',
                address: '',
                sNo: '',
                email: ''
            }
        }
    },
    methods:{
      reset(){
        this.stu = {
                sex: 0,
                name: '',
                birth: '',
                phone: '',
                address: '',
                sNo: '',
                email: ''
            }
      },
      submit(){
       api.addStu(this.stu).then(data => {
                if(data.data.status == 'success') {
                    toast({
                        type: 'success',
                        msg: data.data.msg
                    })
                    this.$store.dispatch('getStuList', 1).then(_ => {
                        this.$router.push('/studentList')
                        this.reset();
                    })
                } else {
                    toast({
                        type: 'fail',
                        msg: data.data.msg
                    })
                }
            })
      }
    }
}
</script>