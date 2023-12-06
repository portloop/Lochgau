<template>
    <div class="social-section">
        <div class="social-section-container">
            <div class="social-title">
                Social Media
            </div>
            <div class="social-post-container">
                <div class="post-container">
                    UNAVAILABLE
                </div>
                <div class="post-container">
                    UNAVAILABLE
                </div>
                <div class="post-container">
                    UNAVAILABLE
                </div>
                <div class="post-container">
                    UNAVAILABLE
                </div>
                <div class="post-container">
                    UNAVAILABLE
                </div>
                <div class="post-container">
                    UNAVAILABLE
                </div>
                <div class="post-container">
                    UNAVAILABLE
                </div>
                <div class="post-container">
                    UNAVAILABLE
                </div>
            </div>
        </div>
    </div>

    
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .social-section {
        background-color: #cc0033;
        background-image: url(../assets/texture.png);
        padding: 50px 0;
        position: relative;
    }

    .social-section::before {
        content: " ";
        position: absolute;
        width: 60px;
        height: 60px;
        background: #fff;
        transform: rotate(45deg);
        top: -30px;
        left: calc(50% - 30px);
    }

    .social-section-container {
        max-width: 1440px;
        margin: 0 auto;
    }

    .social-title {
        font-family: 'goboldThin', sans-serif;
        color: #fff;
        text-transform: uppercase;
        font-size: 35px;
        text-align: center;
        margin-bottom: 60px;
    }
   
    .social-post-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .post-container {
        width: 350px;
        height: 350px;
        background-color: #890526;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
    }

</style>