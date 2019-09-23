<template>
    <div class="col-sm-6 col-lg-4 col-xl-3 mb-4 p-0 px-1 text-center">
        <div class="card m-auto p-1 shadow" style="max-width: 17rem;">
            <h3 class="card-header bg-info text-light text-capitalize">{{ good.name }}</h3>
            <div class="img-container">
                <img :src="good.img" class="card-img pt-2" :alt="good.name">
            </div>
            <div class="card-body">
                <p class="card-text text-dark h5">Price: {{ good.price | currency }}</p>
                <input type="number" step="1" min="0" v-model.number="quantity" class="form-control mb-3" placeholder="Quantity" >
                <button class="btn btn-warning btn-block" :disabled="quantity <= 0 || !Number.isInteger(quantity)" @click="buyGood">Add to Cart</button>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    props: ['good'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        buyGood() {
            const {id, name, img, price} = this.good;
            const order = {
                id,
                name,
                img,
                price,
                quantity: this.quantity
            };
            this.$store.dispatch('buy', order);
            this.quantity = 0;
        }
    }
}
</script>

<style scoped>
    .img-container {
        width: 100%;
        height: 17rem;
        overflow: hidden
    }
</style>