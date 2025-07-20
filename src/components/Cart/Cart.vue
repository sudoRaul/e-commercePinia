<script setup>
import { useCartStore } from '@/stores/useCartStore';
import ProductCart from './ProductCart.vue';
import { computed } from 'vue';

const cartStore = useCartStore()

const products = computed(() => {
  const uniqueProducts = []

  cartStore.cart.forEach(product => {
    const exists = uniqueProducts.some(p => p.id === product.id)
    if (!exists) {
      uniqueProducts.push(product)
    }
  })

  return uniqueProducts
})

const cartGrouped = computed(() => {
  const grouped = new Map();

  cartStore.cart.forEach(product => {
    if (product.has(product.id)) {
      grouped.get(product.id).cantidad++;
    } else {
      grouped.set(product.id, { ...product, cantidad: 1 });
    }
  })

  return Array.from(grouped.values());
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
      <div v-for="item in cartGrouped" :key="item.id">
        <p>{{ item.title }} - x{{ item.cantidad }}</p>
      </div>

    </div>
  </div>
</template>