<script setup>
import { useCartStore } from '@/stores/useCartStore';
import ProductCart from './ProductCart.vue';
import { computed } from 'vue';

const cartStore = useCartStore()

const products = computed(() => {
    return cartStore.cart.filter((product, index, self) =>
        index === self.findIndex(p => p.id === product.id)
    )
})

console.log(products.value)
</script>

<template>
    <div v-if="products.length != 0">
        <h2 class="text-center text-3xl mb-10">Cart's Products</h2>
        <div class="flex flex-wrap gap-10 justify-center items-stretch">
            <div v-for="product in products" :key="product.id" class="flex flex-col justify-between h-full">
                <ProductCart :title="product.title" :price="product.price" :description="product.description"
                    :category="product.category" :imgSource="product.image" :rating="product.rating.rate"
                    @add-To-Cart="addToCart(product)" />

            </div>
        </div>
    </div>
</template>