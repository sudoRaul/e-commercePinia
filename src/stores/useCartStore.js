import { defineStore } from "pinia";
import { ref } from "vue";

// useCartStore es el store que usaremos en los componentes
export const useCartStore = defineStore('cart', () => {
    // Definimos un array reactivo para añadir/eliminar productos al carrito
    const cart = ref([])

    // Añadir productos al carrito
    function addToCart(product){
        cart.value.push(product)
    }

    return { cart, addToCart}
})