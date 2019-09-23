<template>
    <div>
        <app-carousel></app-carousel>
        <app-goods></app-goods>
    </div>    
</template>

<script>
import Carousel from './Carousel.vue';
import Goods from './Goods.vue';

export default {
    components: {
        appCarousel: Carousel,
        appGoods: Goods
    }
}
</script>
