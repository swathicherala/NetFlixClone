<template>
    <div class="container">
        <div class="main">
            <!-- <img class="background" src="../assets/homeimage.jpeg" alt="Aleq"> -->
            <h1>MovieWatch</h1>
            <!-- <v-btn to="./auth/login/" class="btnsignin" color="red">Sign In</v-btn> -->
        </div>
        <div class="heading">
           <h1> Unlimited Movies </h1>
           <span>Ready to watch?</span>
            <NuxtLink to="./auth/login/" class="signinlink">Sign In</NuxtLink>
        </div>
         <div>
            <background />
          </div>
    </div>
    
</template>

<script>
import background from './background.vue'
export default{
    name:"MovieWatch",
    components:{
        background
    }
}
</script>

<style scoped>

 /* img.background {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      filter: blur(3px);
       background: rgba(0,0,0,.4);
    background-image: linear-gradient(
0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8));
   
      } */
.main h1{
  position: absolute;
  color:#d61c32;
  font-size:40px;
  letter-spacing: 0!important;
  font-family: Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  z-index:1
}
.btnsignin{
    left:90%;
    z-index:1
}
.signinlink{
    color:red
}

.heading{
   color: white;
   position: absolute;
   top: 40%;
   left: 30%;
   width: 50%;
   padding: 20px;
   text-align: center;
   z-index:1
}
.heading h1{
   font-size:50px;
}


</style>