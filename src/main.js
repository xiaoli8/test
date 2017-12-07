import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})

var Main = {
            data() {
                return {
                    ruleForm: {
                        name: '',
                        major: '',
                        birthdate: '',
                        level: ''
                    },
                    rules: {
                        name: [
                            {required: true, message: '请输入名字', trigger: 'blur'},
                            {min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur'}
                        ],
                        major: [
                            {required: true, message: '请选择专业', trigger: 'change'}
                        ],
                        birthdate: [
                            {type: 'date', required: true, message: '请选择出生日期', trigger: 'change'}
                        ],
                        level: [
                            {required: true, message: '请选择级别', trigger: 'change'}
                        ]
                    }
                };
            },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('成功!');
          } else {
            console.log('失败!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')
