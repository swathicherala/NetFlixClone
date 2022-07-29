<template>
    <div class="container">
       <div class="signin">
        <v-form  
        ref="form"
   
    lazy-validation>
          <h1 style="margin-bottom:25px;">Sign In</h1>
          <v-text-field
            label="Email"
            outlined
            filled
            name="email"
            v-model="posts.email"
            :rules="posts.emailRules"
            class="message"
            clearable
          ></v-text-field>
          <v-text-field
            label="Password"
            outlined
            filled
            name="password"
            v-model="posts.password"
            :rules="posts.passwordRules"
            class="message"
            clearable
          ></v-text-field>
          <v-btn @click="signUp" color="red" width="100%">Sign In</v-btn>
          <div class="new">
            <span>New to MovieWatch?</span>
            <NuxtLink to="./signup" class="signuplink">Sign up now</NuxtLink>
          </div>
          </v-form>
       </div>
          <div>
            <background />
          </div>
    </div>
</template>

<script>
import background from './background.vue'

export default{
    name:"SignIn",
    components:{
        background
    },
    data(){
       return{
        posts: {
                email: "",
                password: "",
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
     methods: {
async signUp(){
  console.log("Hello")
//  let user = await this.$auth.loginWith('local', {
//           posts: {
//             email: this.email,
//             password: this.password
//           },
//         })
}
  },
}
</script>

<style scoped>
.signin{
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
.signuplink{
    color:white;
    text-decoration: none;
}
.signuplink:hover{
    text-decoration: underline;
}
</style>