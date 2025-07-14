<script setup>
import Card from '@/components/Card.vue'
import ProductCart from '@/components/ProductCart.vue';
import { onMounted, ref } from 'vue';

const products = ref([])

async function getProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products")

        if (!response.ok) {
            console.error("Error al obtener los productos")
        }

        products.value = await response.json()
    } catch (err) {
        
    }
}

onMounted(getProducts)
</script>

<template>
    <h2 class="text-center text-3xl mb-10">Products Available</h2>
    <div class="flex flex-wrap gap-10 justify-center items-stretch">
        <div v-for="product in products" :key="product.id" class="flex flex-col justify-between h-full">
            <ProductCart :title="product.title" :price="product.price"
            :description="product.description" :category="product.category" :imgSource="product.image" :rating="product.rating.rate" />
        </div>
    </div>
    
</template>
