<template>
    <div>
        <app-buy-goods></app-buy-goods>

        <app-form id="form"></app-form>
    </div>
</template>

<script>
import BuyGoods from './BuyGoods.vue';
import Form from './Form.vue'

export default {
    components: {
        appBuyGoods: BuyGoods,
        appForm: Form
    }  
}
</script>