<template>
  <nav class="navbar navbar-expand-lg navbar-absolute"
    :class="{ 'bg-white': showMenu, 'navbar-transparent': !showMenu }">
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-toggle d-inline" :class="{ toggled: $sidebar.showSidebar }">
          <button type="button" class="navbar-toggler" aria-label="Navbar toggle button" @click="toggleSidebar">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <a class="navbar-brand" href="#">{{ routeName }}</a>
      </div>
      <button class="navbar-toggler" type="button" @click="toggleMenu" data-toggle="collapse" data-target="#navigation"
        aria-controls="navigation-index" aria-label="Toggle navigation">
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
      </button>

      <collapse-transition>
        <div class="collapse navbar-collapse show" v-show="showMenu">
          <ul class="navbar-nav" :class="$rtl.isRTL ? 'mr-auto' : 'ml-auto'">
            <div class="search-bar input-group" @click="searchModalVisible = true">
              <!-- <input type="text" class="form-control" placeholder="Search...">
              <div class="input-group-addon"><i class="tim-icons icon-zoom-split"></i></div> -->
              <button class="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal">
                <i class="tim-icons icon-zoom-split"></i>
              </button>
              <!-- You can choose types of search input -->
            </div>
            <modal :show.sync="searchModalVisible" class="modal-search" id="searchModal" :centered="false"
              :show-close="true">
              <input slot="header" v-model="searchQuery" type="text" class="form-control" id="inlineFormInputGroup"
                placeholder="SEARCH">
            </modal>
            <base-dropdown tag="li" :menu-on-right="!$rtl.isRTL" title-tag="a" class="nav-item">
              <a slot="title" href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
                <div class="notification d-none d-lg-block d-xl-block"></div>
                <i class="tim-icons icon-sound-wave"></i>
                <p class="d-lg-none">
                  New Notifications
                </p>
              </a>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Mike John ... {{ userName }} ... part</a>
              </li>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">You have 5 more tasks</a>
              </li>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Your friend Michael is in town</a>
              </li>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Another notification</a>
              </li>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Another one</a>
              </li>
            </base-dropdown>
            <base-dropdown tag="li" :menu-on-right="!$rtl.isRTL" title-tag="a" class="nav-item"
              menu-classes="dropdown-navbar">
              <a slot="title" href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
                <div class="photo">
                  <img v-if="isLoggedIn" src="img/anime3.png">
                  <img src="img/anime6.png">
                </div>
                <b class="caret d-none d-lg-block d-xl-block"></b>
                <p class="d-lg-none">
                  Menu
                </p>
              </a>
              <li class="nav-link">
                <router-link :to="{ name: 'profile' }" class="nav-item dropdown-item">Profile</router-link>
                <!-- <a href="/profile" class="nav-item dropdown-item">Profile</a> -->
              </li>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Settings</a>
              </li>
              <div class="dropdown-divider"></div>
              <li v-if="isLoggedIn" class="nav-link">
                <!-- <router-link  @click="logout()"  :to="{name: 'notifications'}" class="nav-item dropdown-item">Log out</router-link> -->
                <a @click="logout()" href="#" class="nav-item dropdown-item">Log out</a>
              </li>
              <li class="nav-link">
                <!-- <router-link  @click="logout()"  :to="{name: 'notifications'}" class="nav-item dropdown-item">Log out</router-link> -->
                <a @click="logout()" href="#" class="nav-item dropdown-item">Log In</a>
              </li>
            </base-dropdown>
          </ul>
        </div>
      </collapse-transition>
    </div>
  </nav>
</template>
<script>
import { ref, reactive, computed } from 'vue'
import { CollapseTransition } from 'vue2-transitions';
import Modal from '@/components/Modal';
import useUserStore from "../../store";


export default {
  setup() {
    const authStore = reactive(useUserStore.useUserStore());
    console.log(authStore.user)
    const userName = authStore.user
    return { userName, authStore };

  },
  components: {
    CollapseTransition,
    Modal
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
    isLoggedIn: function () {
      return this.authStore.isAuthenticated;
    }
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: ''
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    async logout() {
      // console.log("user", this.userName)
      // console.log("register", this.authStore.signUp("user1", "edem1234"))
      await this.authStore.logOut();
      this.$router.push('/signIn');
    }
  }
};
</script>
<style>

</style>
