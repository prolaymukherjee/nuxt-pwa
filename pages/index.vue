<template>


  <div>
    <VitePwaManifest />
    <h2>Home</h2>
    
    <button
       v-if="deferredPrompt" 
       class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
       @click="clickCallback"
    >
    Install Home Screen Button
    </button>


    <button  class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-3" @click="share">Share</button>
    

    <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded m-3" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">Touch me</button>
    
  </div>


</template>

<script>



export default {
  name: 'AddToHomeScreen',
  data: () => ({
    deferredPrompt: null,
  }),
  mounted() {
    this.captureEvent();
    console.log('deferredPrompt',this.deferredPrompt);
   
  },
  methods: {
    captureEvent() {
      window.addEventListener('beforeinstallprompt', (e) => {
        // ! Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault()
        // Stash the event so it can be triggered later.
        this.deferredPrompt = e
        console.log(this.deferredPrompt);
      })
    },
    clickCallback() {
      // Show the prompt
      this.deferredPrompt.prompt()
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          // Call another function?
        }
        this.deferredPrompt = null
      })
    },

    async share() {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'My App',
            text: 'Check out My App!',
            url: window.location.href
          });
        } catch (error) {
          console.error('Error sharing:', error);
        }
      }
    },

    handleTouchStart(event) {
      alert('Touch started', event)
    },
    handleTouchMove(event) {
      alert('Touch moved', event)
    },
    handleTouchEnd(event) {
      alert('Touch ended', event)
    }

  },
}
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>