<template>
    <div>
        <div id="flockler-embed-18c4915964d04f22af88b938077d01b8"></div>
        
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data () {
        return {
            galleryList: []
        }
    },

    methods: {
        getGalleryList () {
            axios.get('http://yourufx.space/gallery/')
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log('Error getting gallery list', error)
            })
        }
    }, 

    mounted () {
        this.getGalleryList()
    }
}

setTimeout(function() {
        var script = document.createElement('script');
        script.src = 'https://fl-1.cdn.flockler.com/embed/embed-v2.js';
        document.body.appendChild(script);
    }, 5000); // Задержка в 5 секунд
</script>

<style scoped>
   
</style>