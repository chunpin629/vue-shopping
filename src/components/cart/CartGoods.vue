<template>
    <div class="row">
        <div class="card mb-3 col-12 shadow">
            <div class="row no-gutters">
                <div class="col-md-3 p-2">
                    <img :src="cartGood.img" class="card-img" :alt="cartGood.name">
                </div>
                <div class="col-md-9">
                    <div class="card-body text-center text-md-left h-100 row justify-content-around align-items-center">
                        <h4 class="card-title text-capitalize text-dark col-md-3 m-md-0">{{ cartGood.name }}</h4>
                        <p class="card-text text-dark col-md-2 m-md-0 h5">{{ cartGood.price | currency }}</p>
                        <select class="form-control col-6 col-md-2 mb-3 m-md-0" @change="updateQuantity($event)">
                            <option :value="cartGood.quantity">{{ cartGood.quantity }}</option>
                            <option v-for="n in 10" :value="n">{{ n }}</option>
                        </select>
                        <span class="col-md-1" @click="deleteGood"><i class="fas fa-times"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['cartGood'],
    methods: {
        deleteGood() {
            this.$store.dispatch('delete', this.cartGood);
        },
        updateQuantity(event) {
            const updateGood = {
                id: this.cartGood.id,
                quantity: event.target.value
            }
            this.$store.dispatch('update', updateGood);

        }
    }
}
</script>

<style scoped>
    .fa-times {
        font-size: 1.2rem;
        color: lightgray;
    }

    .fa-times:hover {
        color: #343a40;
        cursor: pointer;
    }
</style>