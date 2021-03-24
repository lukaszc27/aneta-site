<template>
    <main class="container">
        <h2>Wybierz klasę z której materiałów chciałbyś skorzystać</h2>

        <div class="row">
            <div class="col-sm-12 col-md-4">
                <ClassSelector 
                    image="class1.jpg"
                    title="Klasa 1"
                    text="Materiał powtórkowy z klasy I Szkoły Podstawowej"
                    :href="{ name: 'Class1' }"
                />
            </div>

            <div class="col-sm-12 col-md-4">
                <ClassSelector
                    image="class2.jpg"
                    title="Klasa 2"
                    text="Materiał powtórkowy z klasy II Szkoły Podstawowej"
                    :href="{ name: 'Class2' }"
                />
            </div>

            <div class="col-sm-12 col-md-4">
                <ClassSelector
                    image="class3.jpg"
                    title="Klasa 3"
                    text="Materiał powtórkowy z klasy III Szkoły Podstawowej"
                    :href="{ name: 'Class3' }"
                />
            </div>
        </div>
    </main>
</template>

<script>
import ClassSelector from '../components/ClassSelector.vue'

export default {
    name: 'Home',
    components: {
        ClassSelector
    }
}
</script>

<style type="scss" scoped>
h2 {
    text-align: center;

    padding-bottom: 1em;
}
</style>
