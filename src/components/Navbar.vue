<template>
    <nav class="navbar navbar-expand-md navbar-light">
        <a class="navbar-brand ml-3 mr-3" href="#">
            <img src="../assets/images/logo.png" height="50" width="135" />
        </a>
        <div class="item-container">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">{{ decoder(home) }}<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">{{ decoder(gallery) }}</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Workshopok
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

    export default {
        name: 'Navbar',
        components: {},
        data: () => {
            return {
                gallery: 'Gall&#233ria',
                home: 'Kezd&#337lap'
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
    nav {
        box-shadow: 0px 15px 21px rgba(0, 0, 0, 0.5);
        background-color: #FCCFDE;
    }
</style>