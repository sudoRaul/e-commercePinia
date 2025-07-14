<script setup>
import { defineProps } from 'vue';

defineProps({
    title: String,
    price: Number,
    description: String,
    category: String,
    imgSource: String,
    rating: Number
})
</script>
<template>
    <div class="w-64 h-96 flex flex-col justify-between rounded-xl shadow-lg p-4 bg-white">
        <!-- Imagen con tamaño fijo -->
        <div class="h-40 flex items-center justify-center">
            <img :src="imgSource" alt="Product image" class="h-full object-contain" />
        </div>

        <!-- Info del producto -->
        <div class="mt-4">
            <p class="text-center font-semibold line-clamp-2 h-12">{{ title }}</p>
            <p class="text-center font-bold text-green-600 mt-2">{{ price }} €</p>
        </div>
    </div>

    <!--
        <h2 class="text-center">{{ title }}</h2>
        <p>{{ price }}</p>
        <p>{{ category }} </p>
        <p>{{ description }}</p>
        
        <div>
            <span v-for="star in Math.ceil(rating, 1)" :key="star">⭐</span>
        </div>
        -->
</template>