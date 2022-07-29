<template>
  <div>
    <!-- <form @submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="loginData.email"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          v-model="loginData.password"
          class="form-control"
          id="password"
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">login</button>
    </form> -->
     <div class="signin">
      <div v-if="loginData.error" role="alert" class="red">
        {{loginData.error}}
      </div>
        <v-form  
        @submit.prevent="login"
       lazy-validation>
          <h1 style="margin-bottom:25px;">Sign In</h1>
          <v-text-field
            label="Email"
            outlined
            filled
            name="email"
            id="email"
            v-model="loginData.email"
            :rules="loginData.emailRules"
            class="message"
            clearable
          ></v-text-field>
          <v-text-field
            label="Password"
            outlined
            filled
            name="password"
             type="password"
          v-model="loginData.password"
            :rules="loginData.passwordRules"
            class="message"
            clearable
          ></v-text-field>
          <v-btn type="submit" color="red" width="100%">Sign In</v-btn>
          <div class="new">
            <span>New to MovieWatch?</span>
            <NuxtLink to="/auth/register" class="signuplink">Sign up now</NuxtLink>
          </div>
          </v-form>
       </div>
       <div>
            <background />
          </div>
  </div>
</template>

<script>
import background from '@/pages/background'
export default {
  components:{background},
  data() {
    return {
      loginData: {
        email: "",
        password: "",
        error:"",
        emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v.length <= 10) || 'Password must be less than 10 characters',
    ]
      }
    };
  },
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.loginData
        });
        localStorage.setItem('token',JSON.stringify(response.data))
        this.$router.push({
          name:'movie'
        });
        console.log(response);
      } catch (err) {
        this.loginData.error='Invalid Email or Password'
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
.form-control{
  background-color: white;
}
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