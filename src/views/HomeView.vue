<script setup>
import ProductCart from '@/components/Cart/ProductCart.vue';
import { onMounted, ref } from 'vue';
import { useCartStore } from '@/stores/useCartStore';

const cartStore = useCartStore()

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

// Desde el template cuando instanciamos el componente hijo ponemos el emit al cual nos suscribimos
// y con esta función definimos la lógica a ejecutar
function addToCart(product){
    console.log("Producto a añadir al carrito", Object.entries(product))
    cartStore.addToCart(product)
    console.log(cartStore.cart)
}

onMounted(getProducts)
</script>

<template>
    <h2 class="text-center text-3xl mb-10">Products Available</h2>
    <div class="flex flex-wrap gap-10 justify-center items-stretch">
        <div v-for="product in products" :key="product.id" class="flex flex-col justify-between h-full">
            <ProductCart :title="product.title" :price="product.price"
            :description="product.description" :category="product.category" :imgSource="product.image" :rating="product.rating.rate"
            @add-To-Cart="addToCart(product)" />
        </div>
    </div>
    
</template>
