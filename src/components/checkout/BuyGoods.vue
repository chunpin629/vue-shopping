<template>
    <div>
        <h1 class="text-dark text-center text-md-left">Order Summary</h1>
        <table class="table table-hover">
            <thead>
                <tr class="table-active text-dark">
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                <app-buy-good v-for="good in goods" :good="good"></app-buy-good>
            </tbody>
        </table>
        <h4 class="text-center text-dark text-md-right mr-md-3 mr-lg-5">Subtotal: {{ subtotal | currency}}</h4> 
    </div>
</template>

<script>
import BuyGood from './BuyGood.vue';

export default {
    components: {
        appBuyGood: BuyGood
    },
    computed: {
        goods() {
            return this.$store.getters.cartGoods;
        },
        subtotal() {
            return this.$store.getters.subtotal;
        }
    }
}
</script>

<style scoped>
    @media only screen and (max-width: 575px) {
        h1 {
            font-size: 2rem;
        }
    } 
</style>