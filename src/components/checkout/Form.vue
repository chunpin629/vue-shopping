<template>
    <div class="mt-5">
        <h1 class="text-dark text-center text-md-left">Customer Detail</h1>
        <form class="mt-2 text-dark">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="firstName">First Name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="John" required>
                </div>
                <div class="form-group col-md-6">
                    <label for="lastName">Last Name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="Smith" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="email">Email Address</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" required>
                </div>
                <div class="form-group col-md-6">
                    <label for="phone">Telephone</label>
                    <input type="tel" class="form-control" id="phone" placeholder="(650) 000-0000" required>
                </div>
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
            </div>

            <div class="text-center text-md-right">
                <router-link tag="button" to="/" class="btn btn-info m-2 m-md-3">Continue Shopping</router-link>
                <button class="btn btn-warning m-2 m-md-3" @click.prevent="checkout">Place Your Order</button>
            </div>
        </form>         
    </div>

</template>

<script>
export default {
    methods: {
        checkout() {
            const dataInput = document.getElementsByTagName('input');
            for (let i = 0; i < dataInput.length; i++) {
                if (dataInput[i].value === '') {
                    alert('Some required information is missing or incomplete. Please correct your entries and try again.');
                    return false;
                }
            }
            if (confirm('Are you sure to submit your order?')) {
                this.$router.push({name: 'completion'});
            }
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