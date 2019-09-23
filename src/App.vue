<template>
  <div>
    <app-header class="fixed-top"></app-header>

    <div class="container" style="min-height: 600px">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  created() {
    this.$store.dispatch('initGoods');
  }
}
</script>

<style>
  body {
    padding-top: 80px;
    font-family: 'Roboto', sans-serif;
  }

  .slide-enter,
  .slide-leave-to {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in .4s ease-out forwards;
    transition: opacity .4s;
  }

  .slide-leave-active {
    animation: slide-out .4s ease-out forwards;
    transition: opacity .4s;
  }

  @keyframes slide-in {
    from {transform: translateY(10px);}
    to {transform: translateY(0);}    
  }

  @keyframes slide-out {    
    from {transform: translateY(0);}
    to {transform: translateY(10px);}
  }
</style>
