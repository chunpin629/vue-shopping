<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Shop</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <router-link to="/" tag="li" class="nav-item" exact-active-class="active">
                        <a class="nav-link"><i class="fas fa-shopping-bag"></i> Mall<span class="sr-only">(current)</span></a>
                    </router-link>
                    <li class="nav-item">
                        <a class="nav-link" href="#footer" @click.prevent="scroll"><i class="fas fa-info-circle"></i> Contact</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <span class="navbar-text text-center text-white bg-danger p-0 my-auto rounded-circle" v-if="quantity > 0">{{ quantity }}</span>
                    <router-link to="/cart" tag="li" class="nav-item" active-class="active">
                        <a class="nav-link"><i class="fas fa-shopping-cart" v-if="quantity === 0"></i><i class="fas fa-cart-arrow-down" v-else></i> Cart</a>
                    </router-link>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fas fa-user-plus"></i> Sign up</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fas fa-user"></i> Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    computed: {
        quantity() {
            return this.$store.getters.quantityTotal;
        }     
    },
    methods: {
        scroll() {
            const footer = document.getElementById('footer');
            footer.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }   
}
</script>

<style scoped>
    .navbar-brand {
        font-size: 1.5rem;
    }
    .nav-link {
        font-size: 1.2rem;
        font-family: 'Roboto', sans-serif;
    }

    .navbar-text {
        font-size: 0.7rem;
        width: 1.2rem;
        height: 1.2rem;
    }
</style>
