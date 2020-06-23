<template>
    <div class="card">
        <!--<img v-bind:src="'../assets/images/'+image+'.png'" />
        <p>{{ description }}</p>-->
        <button class="see-button">{{ decoder(see) }}</button>
    </div>
</template>

<script>
    export default {
        name: 'Workshop',
        props: {
            name: String,
            //description: String,
            //image: String
        },
        data() {
            return {
                see: 'Megn&#233zem'
            }
        },
        methods: {
            decoder(str) {
                var textArea = document.createElement('textarea');
                textArea.innerHTML = str;
                return textArea.value;
            }
        }
    }
</script>

<style scoped>
    .see-button {
        padding: 25px 25px;
        background-color: transparent;
        border: 1px solid green;
    }
</style>