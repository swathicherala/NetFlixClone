<template>
  <div>
    <v-form @submit.prevent="register">
      <!-- <div class="mb-3">
        <label for="fullname" class="form-label">Full Name</label>
        <input
          type="text"
          v-model="registerData.fullname"
          class="form-control"
          id="fullname"
        />
      </div> -->
      <!-- <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="registerData.email"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          v-model="registerData.password"
          class="form-control"
          id="password"
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">Register</button> -->
       <div class="signup">
          <h1 style="margin-bottom:25px;">Sign Up</h1>
          <v-text-field
            label="Add valid email"
            name="email"
            id="email"
          v-model="registerData.email"
          aria-describedby="emailHelp"
            :rules="registerData.emailRules"
            outlined
            filled
            class="message"
            clearable
          ></v-text-field>
          <v-text-field
            label="Add password"
            type="password"
            name="password"
            v-model="registerData.password"
          id="password"
            :rules="registerData.passwordRules"
            outlined
            filled
            class="message"
            clearable
          ></v-text-field>
          <v-btn type="submit" color="red" width="100%">Submit</v-btn>
       </div>
    </v-form>
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
      registerData: {
        // fullname: "",
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
    };
  },
  methods: {
    async register() {
      try {
        const user = await this.$axios.$post("http://localhost:3000/signin", {
          // fullname: this.registerData.fullname,
          email: this.registerData.email,
          password: this.registerData.password
        });
        this.$router.push('/auth/login')
        console.log(user);
      } catch (err) {
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