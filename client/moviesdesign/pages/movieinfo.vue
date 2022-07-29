<template>
    <div>
       <!-- <v-container>
            <v-layout row nowrap style="margin-top:15px;">
      <v-flex
          v-for="movie in movies"
          :key="movie.title"
          mb-5
          px-3
          xs12
          sm6
          md4
          lg3
        >
          <v-card class="mx-auto" hover>
            <img :src="movie.image" width="100%" height="200px" />
            <v-card-title>
              <div>
                <div class="headline">{{ movie.moviename }}</div>
              </div>
            </v-card-title>
            <v-card-subtitle>Price:{{ movie.price }}</v-card-subtitle>
            <v-card-text h-100>Release Date:{{formatDate( movie.dateofrelease)}}</v-card-text>
            <v-card-actions>
              <v-btn class="btnmore">Get More Info</v-btn> -->
              <!-- <v-btn
                flat
                :href="article.image"
                target="_blank"
                color="orange lighten-2"
                
                >Explore</v-btn
              > 
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
        </v-container>-->
        <div class="container">
           <div class="row">
            <div class="col-md-4">
              <div class="movie-image">
             <img :src="movies.image" width="100%" height="200px" />
              <!-- <img src="" width="100%" height="200px" /> -->
           </div>
            </div>

           <div class="col-md-8">
               <div>
                <div class="headline">{{ movies.moviename }}</div>
         </div>
         <div>
            <div class="price">Price:{{ movies.price }}</div>
         </div>
         <div>
            <div class="release-date">Release Date:{{formatDate( movies.dateofrelease)}}</div>
         </div>

           </div>
           </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default{
    data(){
        return{
            movies:"",
            // id:""
        }
    },
    mounted(){
     this.getMovies();
    },
    methods:{
        async getMovies() {
    // const data = await axios.get(`http://localhost:3000/`);
    console.log(this.$route.params.movieid);
    const data = await axios.get("http://localhost:3000/"+this.$route.params.movieid);
    // console.log(data);
    this.movies = data.data;
  },
  formatDate(date) {
      return moment(date).format("YYYY-MM-DD");
    },
    }
}
</script>

<style scoped>


</style>