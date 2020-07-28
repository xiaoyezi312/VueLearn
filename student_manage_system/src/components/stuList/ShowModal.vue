<template>
  <div class="modal" id="modal">
    <div class="mask" @click="modalHide"></div>
    <div class="modal-content">
      <h2>编辑信息</h2>
      <form action="#" id="edit-student-form" class="add-student-form">
        <div>
          <label for="name">姓名</label>
          <input
            type="text"
            name="name"
            autocomplete="off"
            :value="editStudent.name"
            @input="edit('name', $event.target.value)"
            ref="name"
          />
        </div>
        <div class="sex">
          <label for="sex">性别</label>
          <input type="radio" name="sex" :checked="editStudent.sex == 0" value="0" ref="sex" />
          <span>男</span>
          <input type="radio" name="sex" :checked="editStudent.sex == 1" value="1" />
          <span>女</span>
        </div>
        <div>
          <label for="sNo">学号</label>
          <input
            type="text"
            name="sNo"
            readonly
            :value="editStudent.sNo"
            @input="edit('sNo', $event.target.value)"
            ref="sNo"
          />
        </div>
        <div>
          <label for="email">邮箱</label>
          <input
            type="text"
            name="email"
            :value="editStudent.email"
            @input="edit('email', $event.target.value)"
            ref="email"
          />
        </div>
        <div>
          <label for="birth">出生年</label>
          <input
            type="text"
            name="birth"
            :value="editStudent.birth"
            @input="edit('birth', $event.target.value)"
            ref="birth"
          />
        </div>
        <div>
          <label for="phone">手机号</label>
          <input
            type="text"
            name="phone"
            :value="editStudent.phone"
            @input="edit('phone', $event.target.value)"
            ref="phone"
          />
        </div>
        <div>
          <label for="address">住址</label>
          <input
            type="text"
            name="address"
            :value="editStudent.address"
            @input="edit('address', $event.target.value)"
            ref="address"
          />
        </div>
        <div>
          <label for></label>
          <input type="button" value="提交" class="btn" id="edit-submit" @click="submit" />
          <input type="button" value="重置" class="btn" @click="reset" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import toast from '@/tools/toast';
export default {
  data() {
        return {
            stu: {}
        }
    },
    computed:{
      ...mapState(["editStudent"]),
    },
  methods: {
    ...mapActions(['updateStudent']),
    modalHide() {
      this.$store.commit('setStatus',false);
    },
    edit(key, value){
      this.stu[key] = value;
    },
    submit(){
      const stu = Object.assign({},this.editStudent,this.stu);
      this.updateStudent(stu)
        .then(msg => toast({type: 'success', msg:msg}))
        .catch(err => toast({type: 'fail', msg:err}))
    },
    reset(){
      for(let prop in this.$refs){
        this.stu[prop] = this.$refs[prop].value = '';
      }
      this.stu.sex = 0;
      this.$refs.sex.checked = true;
    }
  }
};
</script>