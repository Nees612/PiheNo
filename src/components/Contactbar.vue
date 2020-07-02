<template>
    <nav class="navbar-light">
        <p class="float-left ml-2 mt-2 mb-0">Kövess minket itt is ! :</p>
        <a href="https://www.facebook.com/groups/545039672954262" target="_blank">
            <img class="icon mt-2 ml-2 mb-0" src="../assets/images/facebook.png" width="20" height="20" />
        </a>
        <a href="https://www.instagram.com/harmonia_lelekmuhely/" target="_blank">
            <img class="icon mt-2 ml-2 mb-0" src="../assets/images/instagram.png" width="20" height="20" />
        </a>
        <p class="float-right mr-2 mt-2 email">vas.danna@gmail.com</p>
        <p class="float-right mr-2 mt-2">Kaplcsolat:</p>
    </nav>
</template>

<script>
    export default {
        name: 'Contactbar'        
    }
</script>

<style scoped>
    nav {
        overflow: auto;
        /*background-color: #FCCFDE;*/
        background-color: white;
        height: 33px;
        overflow-x: hidden;
        overflow-y: hidden;
        z-index: 40000;
    }

    .icon {
        float: left;
    }

    p {
        display: inline-block;
        font-size: small;
    }

    .email {
        text-decoration: underline;
    }
</style>