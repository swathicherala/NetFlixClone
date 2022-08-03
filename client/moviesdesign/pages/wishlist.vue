<template>
<div>
    <h1>WatchList</h1>
    <v-card class="mx-auto carddata" width="100%" height="100%" hover>
            <img :src="wishlistmovie.image" class="image" />
            <v-card-title>
              
                <div class="headline">{{ wishlistmovie.moviename }}</div>
            
            </v-card-title>
            <!-- <v-card-subtitle style="margin-top:10px;">Price:{{ article.price }}</v-card-subtitle>
            <v-card-text h-100>Release Date:{{formatDate( article.dateofrelease)}}
            </v-card-text> -->
          </v-card>
</div> 
</template>

<script>
import axios from 'axios'
export default{
       data(){
        return {
            wishlistmovie:"",
            // movieslist:[]
        }
       },
       mounted(){
     this.movieWishlist();
    },
    methods:{
        async movieWishlist() {
    // const data = await axios.get(`http://localhost:3000/`);
    const result=localStorage.getItem('wishlist')
    const data = await axios.get("http://localhost:3000/"+result);
    console.log(data);
    this.wishlistmovie = data.data;
    // const movieslist=localStorage.getItem('wishlist')
    //     this.wishlistmovie.push(this.movieslist)
    // this.wishlistmovie.push(this.wishlistbucket)
//     async movieWishlist() {
//     console.log(this.$route.params.movieid);
//     const data = await axios.get("http://localhost:3000/"+this.$route.params.movieid);
//     this.wishlistmovie = data.data;
//     this.$router.push(this.wishlistmovie)
//   },
//   formatDate(date) {
//       return moment(date).format("YYYY-MM-DD");
//     },
    }
}
}
</script>