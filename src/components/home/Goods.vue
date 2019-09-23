<template>
    <div>
        <div class="row justify-content-center justify-content-lg-end">
            <div class="col-10 col-md-7 col-lg-5 col-xl-4 d-flex">
                <span class="h5 text-black-50 m-auto"><i class="fas fa-search"></i></span>
                <input type="text" class="form-control ml-2" placeholder="Search" v-model="filterText">
            </div>
        </div>
        <div class="row mt-3">       
            <app-good v-for="good in filteredGoods" :good="good"></app-good>
        </div>
    </div>    
</template>

<script>
import Good from './Good.vue';

export default {
    data() {
        return {
            filterText: ''
        }
    },
    computed: {
        goods() {
            return this.$store.getters.goods;
        },
        filteredGoods() {
            return this.goods.filter(el => el.name.match(this.filterText));
        }
    },
    components: {
        appGood: Good
    }
    
}
</script>