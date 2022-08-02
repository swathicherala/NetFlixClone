<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
       <div v-if="$auth.loggedIn" style="display:flex;">
        <h1 style="color:red">MovieWatch</h1>
         <div  style="margin-left:700px;">
          <span style="padding-right:10px">{{$auth.user.email}}</span>
          <v-btn @click="logout" color="red">Logout</v-btn>
         </div>
        </div>
        <div v-else>
          <v-btn text to="/auth/login">Login</v-btn>
          <v-btn text to="/auth/register">Signup</v-btn>
        </div>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
  
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/home'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'movie',
          to: '/movie'
        }, 
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    
    }
  },
  async mounted(){
   const user=localStorage.getItem("token");
   if(!user){
    this.$router.push({
      name:'home'
    })
   }
  },
  methods:{
    // ...mapActions(["logoutUser"]),
    // logout(){
    //   console.log("Hello")
    //   this.logoutUser
    // }
    // async logout() {
    //   await fetch('http://localhost:3000/api/logout', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     credentials: 'include',
    //   });
    //   await this.$router.push('@/pages/auth/login');
    // }
  
    async logout() {
      console.log("Hello")
      //  localStorage.removeItem('token')
       localStorage.clear()

      await this.$auth.logout();
      this.$router.push('/auth/login')
    },
 
  }
}
</script>
