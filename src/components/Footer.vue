<template> 
    <div class="bg-dark text-light py-3 mt-5" id="footer">
        <div class="container">
            <a href="#top" class="float-right" @click.prevent="scroll"><i class="fas fa-arrow-circle-up" id="topIcon"></i></a>
            <h2>Contact us</h2>
            <ul class="p-0">
                <li><i class="fas fa-phone-alt mr-3"></i>(650) 000-0000</li>
                <li><i class="fas fa-envelope mr-3"></i>shopping@shop.com</li>
                <li><i class="fas fa-map-marker-alt mr-3"></i>000 Showers Dr. Suite 7, #000</li>
            </ul>
        </div>
    </div>    
</template>

<script>
export default {
    methods: {
        scroll() {
            const top = document.getElementById('top');
            top.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }
}
</script>

<style scoped>
    li {
        list-style: none;
        padding: 0.5rem 0;
    } 

    li .fas {
        font-size: 0.8rem;
    }

    #topIcon {
        font-size: 2rem;
        color: #f8f6fa;
    }

    #topIcon:hover {
        color: #dcdcdc;
    }

    @media only screen and (max-width: 575px) {
        h2 {
            font-size: 1.6rem;
        }

        li {
            font-size: 0.9rem;
        } 

        li .fas {
            font-size: 0.7rem;
        }
    }
</style>
