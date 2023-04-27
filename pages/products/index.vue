<template>
    <div>
        <VitePwaManifest />
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
               <ProductCard :product="product"></ProductCard>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'products'
})

const { data: products} = await useFetch('https://fakestoreapi.com/products')

useHead({
    title: 'Nuxt APP | Products'
})

</script>

<style scoped>

</style>