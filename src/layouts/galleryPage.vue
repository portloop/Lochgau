<template>
    <div>
        
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
            axios.get('https://yourufx.space/gallery/')
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
</script>
<style scoped>
   
</style>