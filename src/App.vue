<template>
    <div id="app">
        <Contactbar />
        <Navbar />
        <WorkshopFeed />
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue';
    import Contactbar from './components/Contactbar.vue';
    import WorkshopFeed from './components/WorkshopFeed.vue';

    export default {
        name: 'App',
        components: {
            Navbar,
            Contactbar,
            WorkshopFeed
        },
        methods: {
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
    @import url('https://fonts.googleapis.com/css?family=Proza+Libre');

    #app {
        /*font-family: 'Roboto Condensed', sans-serif;*/
        font-family: 'Proza Libre', sans-serif;
        font-size: large;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    html, body {
        background-size: auto;
        background-image: url("./assets/images/background.png");
        /*font-family: 'Roboto Condensed', sans-serif;*/
        font-family: 'Proza Libre', sans-serif;
        font-size: large;
    }
</style>
