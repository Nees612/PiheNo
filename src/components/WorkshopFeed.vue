<template>
    <div class="feed">
        <button @click="addWorkshop()">Add Workshop</button>
        <div>
            <ul>
                <li v-for="workshop of workshops" v-bind:key="workshop['.key']">
                    <Workshop />
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import { workshopsRef, database } from '../firebase';
    import { Workshop } from './Workshop.vue';

    export default {
        name: 'WorkshopFeed',
        components: {
            Workshop
        },
        data: () => {
            return {
                name: 'PiheNõ',
                workshops: []
            }
        },
        methods: {
            addWorkshop() {
                workshopsRef.push({ name: this.name });
            }
        },
        created() {
            this.$bind('workshops', database.collection('workshops')).then(workshops => {
                this.workshops === workshops;
            });
        }
    }
</script>

<style scoped>
    .feed {
        margin: 10% 30% 10% 30%;
        background-color: rgba(255, 255, 255, 0.5);
    }
</style>