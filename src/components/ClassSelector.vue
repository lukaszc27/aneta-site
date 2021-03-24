<template>
    <div class="card">
        <img :src="require('@/assets/' + image)" :alt="image" class="card-img-top" />
        <div class="card-body">
            <h4 class="card-title">{{ title }}</h4>
            <p class="card-text" v-show="text.length > 0">
                {{ text }}
            </p>
            <router-link :to="href" class="btn btn-outline-primary stretched-link">Wybieram</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClassSelector',
    props: [
        'image',    // zdjęcie poglądowe
        'title',    // tytuł np. Klasa 1
        'text',     // krótki opis
        'href'      // reakcja na kliknięcie przycisku
    ]
}
</script>

<style lang="scss" scoped>

div[class="card"] {
    width: 100%;
    max-height: 30em;

    transition: all 0.3s;

    &:hover {
        // stylowanie elementu ponajechniu kursorem myszki na jego obrys
        box-shadow: 0px 6px 24px silver;
    }

    img {
        max-height: 15em;
    }

    .card-body {
        text-align: center;
    }
}

</style>