<template>
    <tr class="text-dark">
      <td><img :src="good.img" :alt="good.name" style="width: 70px; height: 70px"><span class="ml-1 ml-md-3 text-capitalize d-block d-md-inline">{{ good.name }}</span></td>
      <td>{{ good.price | currency }}</td>
      <td>{{ good.quantity }}</td>
      <td>{{ total | currency }}</td>
    </tr>
</template>

<script>
export default {
    props: ['good'],
    computed: {
        total() {
            return this.good.price * this.good.quantity;
        }
    }
}
</script>

<style scoped>
    td {
        vertical-align: middle;
    }
    
</style>

