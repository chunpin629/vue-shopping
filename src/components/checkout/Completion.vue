<template>
    <div class="jumbotron text-center">
        <h1 class="text-danger display-2">Thank You!</h1>
        <p class="text-dark">Your order has been placed.</p>
        <p class="text-dark">We hope you enjoy the items you've chosen!</p>
        <button class="btn btn-outline-dark btn-lg" @click="back">Continue</button>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('clear');
    },
    methods: {
        back() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
    p {
        font-size: 1.5rem;
    }
    
    @media only screen and (max-width: 767px) and (orientation: portrait) {
        h1 {
            font-size: 3.5rem;
        }

        p {
            font-size: 1.2rem;
        }
    }   
</style>