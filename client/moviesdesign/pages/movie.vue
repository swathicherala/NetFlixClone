<template>
  <div>
    <v-container>
      <div class="stream">
        <h1 class="stream-head">Now <span>Streaming</span></h1>
        <v-btn
      class="ma-2 btnview"
       color="info"
       @click="searchMovies"
    >View More</v-btn>
      </div>
      <div class="main">
           <img src="../assets/cinema.webp" class="cinemaimg" width="100%">
      </div>
      <div style="margin-bottom:5px">
        <input @keyup.enter="$fetch()" type="text" class="search" placeholder="Search Movie.." v-model="searchInput">
        <v-btn @click="clearSearch" v-show="searchInput !== ''" color="warning" class="clearsearch rounded-l-0" >Clear Search</v-btn>
      </div>
      <!--Searched Movies-->
      <!-- <v-layout v-if="searchInput !== ''" row nowrap style="margin-top:15px;"> -->
        <v-layout v-if="searchMovies" row nowrap style="margin-top:15px;">
      <v-flex
          v-for="article in searchedMovies"
          :key="article.title"
          mb-5
          px-3
          xs12
          sm6
          md4
          lg3
        >
          <v-card class="mx-auto" hover>
            <img :src="article.image" width="100%" height="200px" />
            <v-card-title>
              <div>
                <div class="headline">{{ article.moviename }}</div>
              </div>
            </v-card-title>
            <v-card-subtitle>Price:{{ article.price }}</v-card-subtitle>
            <v-card-text h-100>Release Date:{{formatDate( article.dateofrelease)}}</v-card-text>
            <v-card-actions>
              <v-btn class="btnmore">Get More Info</v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <!--Searched Movies end-->
      <!-- <v-layout v-else row nowrap style="margin-top:15px;"> -->
        <v-layout class="flexdiv" style="margin-top:15px;">
      <v-flex
          v-for="article in articles"
          :key="article.title"
          mb-5
          px-3
          xs12
          sm6
          md4
          lg3

        >
        <div>
          <v-card class="mx-auto data" width="100%" height="100%" hover>
            <img :src="article.image" class="image" />
            <v-card-title>
              
                <div class="headline">{{ article.moviename }}</div>
            
            </v-card-title>
            <v-card-subtitle style="margin-top:10px;">Price:{{ article.price }}</v-card-subtitle>
            <v-card-text h-100>Release Date:{{formatDate( article.dateofrelease)}}
            </v-card-text>
            <v-card-actions>
             
              <!-- <v-btn class="btnmore">Get More Info</v-btn> -->
              <NuxtLink :to="{ name: 'movieinfo', params: { movieid: article._id }}" class="btnmore">Get More Info</NuxtLink>
              <v-spacer />
            </v-card-actions>
          </v-card>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import movieinfo from './movieinfo.vue'
export default {
  middleware: "isAuthenticated",
  components: { VueperSlides, VueperSlide ,movieinfo },
  data() {
    return {
      articles: [],
      dateofrelease: "",
      searchInput:"",
      searchedMovies:[],
    };
  },
  async fetch(){
   if(this.searchInput === ''){
    await this.getMovies()
    return
   }
    await this.searchMovies()
  },
  
  methods: {
    formatDate(date) {
      return moment(date).format("YYYY-MM-DD");
    },
    async getMovies() {
    const data = await axios.get("http://localhost:3000");
    // console.log(data);
    this.articles = data.data;
  },
    async searchMovies(){
          const data = axios.get(`http://localhost:3200/?&moviename=${this.searchInput}`)
          const result=await data
          this.searchedMovies=result.data
          console.log(this.searchedMovies)
    },
    clearSearch(){
      this.searchInput=''
      this.searchedMovies=[]
    }
  },
};
</script>

<style scoped>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
html{
  height:50%;
}
.main{
  margin-bottom: 40px;
}
.cinemaimg{
  height:450px;
  /* filter: blur(2px); */
  mask-image: linear-gradient(rgb(64, 61, 61), transparent);
  border:2px solid rgb(244, 51, 51);
}
.stream{
  z-index:1;
  position: absolute;
  top:210px;
  left:28%;
}
h1 span{
  font-size:35px;
  color:red;
}
.stream-head{
  font-size:50px;
}
.image{
  width:30vh;
  height: 30vh;
}
.flexdiv{
  overflow: auto;
}
.flexdiv::-webkit-scrollbar{
  overflow: hidden;
}
.btnview{
padding:0;
margin:0;
}
.btnmore{
  border:2px solid orangered;
  width:80%;
  border-radius: 5px;
  color:white;
  text-decoration: none;
}
.btnmore:hover{
background-color: orangered;
border:2px solid black;

}
.search{
  width:19%;
  padding-top: 3px;
  padding-bottom: 5px;
  color:white;
  border:1px solid white;
}
.clearsearch{
  width:10%;
  right:4px;
  padding:12px;
  font-size:12px;
}
</style>
