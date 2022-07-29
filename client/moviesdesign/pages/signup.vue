<template>
    <div>
        <div class="signup">
          <h1 style="margin-bottom:25px;">Sign Up</h1>
          <v-text-field
            label="Add valid email"
            name="email"
            v-model="data.email"
            :rules="data.emailRules"
            outlined
            filled
            class="message"
            clearable
          ></v-text-field>
          <v-text-field
            label="Add password"
            name="password"
            v-model="data.password"
            :rules="data.passwordRules"
            outlined
            filled
            class="message"
            clearable
          ></v-text-field>
          <v-btn @click="signUp" color="red" width="100%">Submit</v-btn>
       </div>
        <div>
            <background />
          </div>
    </div>
</template>

<script>
import background from './background.vue'
import axios from 'axios'
export default{
    name:"SignUp",
    components:{
        background
    },
    data(){
        return{
         data:{
          email:"",
          password:"",
            emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v.length <= 10) || 'Password must be less than 10 characters',
    ]
         }
        }
    },
    methods:{
       async signUp(){
        console.log(this.data)
          const result=await axios.post("http://localhost:3000/save1",this.data);
          console.log(result)
        }
    }
}
</script>

<style scoped>
.signup{
    background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.8); /* Black w/opacity/see-through */
    width: 400px;
    margin: 100px;
    left:25%;
    top:20%;
    padding:40px;
    position:relative;
    z-index:1
}
.new{
    margin-top:40px;
}
.new span{
    color:grey;
}

</style>