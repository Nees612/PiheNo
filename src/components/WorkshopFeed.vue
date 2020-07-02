<template>
    <div class="feed">
        <!--<button @click="addWorkshop()">Add Workshop</button>
        <div v-for="workshop of workshops" v-bind:key="workshop['.key']">
            <Workshop :name="workshop.name" :description="workshop.description" image="workshop1" />
        </div>-->
        <Workshop />
    </div>
</template>

<script>

    //import { workshops } from '../firebaseInit';
    import Workshop from './Workshop.vue';

    export default {
        name: 'WorkshopFeed',
        components: {
            Workshop
        },
    }
</script>

<style scoped>
    .feed {
        margin: 5% 25% 10% 25%;
    }
</style>