<template>
    <div>
        <transition-group name="slide1" mode="out-in" tag="div">
            <app-cart-goods v-for="cartGood in cartGoods" :cartGood="cartGood" :key="cartGood.id"></app-cart-goods>
        </transition-group>

        <transition name="fade" mode="out-in">
            <h1 v-if="cartGoods.length === 0" class="text-center text-dark mt-4">Your Shopping Cart is Empty!</h1>
            <div v-else class="text-center" id="cartBtn">
                <h2 class="text-center mb-5 text-dark">Subtotal: {{ subtotal | currency}}</h2>
                <router-link tag="button" to="/" class="btn btn-primary m-2 m-md-3"><i class="fas fa-angle-left mr-2"></i>Continue Shopping</router-link>
                <router-link tag="button" :to="{name: 'checkout'}" class="btn btn-success m-2 m-md-3">Proceed to Checkout<i class="fas fa-angle-right ml-2"></i></router-link>
            </div>
        </transition>
        
    </div>        
</template>

<script>
import CartGoods from './CartGoods.vue';

export default {
    components: {
        appCartGoods: CartGoods
    },
    computed: {
        cartGoods() {
            return this.$store.getters.cartGoods;
        },
        subtotal() {
            return this.$store.getters.subtotal;
        }
    }
}
</script>

<style scoped>
    h1 {
        font-size: 3.5rem;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave-active {
        transition: opacity 1s;
    }

    .slide1-enter,
    .slide1-leave-to {
        opacity: 0;
    }

    .slide1-enter-active {
        animation: slide1-in .5s ease-out forwards;
        transition: opacity .5s;
    }

    .slide1-leave-active {
        animation: slide1-out .5s ease-out forwards;
        transition: opacity .5s;
        /* position: absolute; */
    }

    .slide1-move {
        transition: all 1s;
    }

    @keyframes slide1-in {
        from {transform: translateX(10px);}
        to {transform: translateX(0);}    
    }

    @keyframes slide1-out {    
        from {transform: translateX(0);}
        to {transform: translateX(10px);}
    }

    #cartBtn {
        transition: transform .5s;
    }

    @media only screen and (max-width: 575px) {
        h1 {
            font-size: 2.5rem;
        }
    }

</style>