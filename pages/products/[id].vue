<template>
  <div>
    <!-- <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p> -->
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params

const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(uri, { key: id })

if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

definePageMeta({
layout: "products",
})

</script>

<style  scoped>

</style>