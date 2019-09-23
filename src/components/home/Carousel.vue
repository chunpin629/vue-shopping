<template>
    <div id="carousel" class="carousel slide mb-4 mb-md-5" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carousel" data-slide-to="0" class="active"></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active" data-interval="5000">
                <img src="https://images.unsplash.com/photo-1523976722745-8c9b15224932?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item" data-interval="5000">
                <img src="https://images.unsplash.com/photo-1533481405265-e9ce0c044abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item" data-interval="5000">
                <img src="https://images.unsplash.com/photo-1512192798277-33b2a3b99d5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" class="d-block w-100" alt="">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<style scoped>
    .carousel-item img {
        height: 35vw;
    }

    @media only screen and (max-width: 575px) {
        .carousel-item img {
            height: 45vw;
        }
    }
</style>