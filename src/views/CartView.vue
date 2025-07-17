<script setup>
import { useCartStore } from '@/stores/useCartStore';

import Cart from '@/components/Cart/Cart.vue'
import EmptyCart from '@/components/Cart/EmptyCart.vue';

const cartStore = useCartStore()


</script>
<template>
    <div v-if="cartStore.cart.length != 0">
        <Cart />
    </div>
    <div v-else>
        <EmptyCart />
    </div>
    
</template>