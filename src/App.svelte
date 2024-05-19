<!-- <script>
// @ts-nocheck

  import { onMount } from 'svelte';
	import { musicList } from './musiclist.js';
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'

  let currentSongIndex = 0;
  let playerState = "play";
  let audioElement;
  let mainElement;

  function prev(){
    if(currentSongIndex == 0){
      currentSongIndex = $musicList.length -1
    }else{
      currentSongIndex = (currentSongIndex - 1) % musicList.length;
    }
    playerState = "play";
    audioElement.play();

  }

  function playPause(){
    if(playerState == "play"){
      playerState == "pause";
      audioElement.pause();
    }else{
      playerState = "play";
      audioElement.play();
    }

  }

  function next(){
    currentSongIndex = (currentSongIndex + 1) % musicList.length;
    playerState = "play";
    audioElement.play();
  }

  function setSong(i){
    currentSongIndex = i;
    playerState = "play";
  }

  onMount(() => {
    audioElement.play();
  });


</script>

<main bind:this = {mainElement}>

  <audio
    src={'./files/audio/' + $musicList[currentSongIndex].audio}
    bind:this = {audioElement}
    autoplay = false
  >

  </audio>

  <div class="player">
    <div class="current-song">
      <div class="avatar">
        <img src={'./files/images/' +$musicList[currentSongIndex].image} alt="">
      </div>
      <div class="song-controls">
          <h2>{$musicList[currentSongIndex].name}</h2>
          <div class="controls">
            <button on:click={prev}>
              <i class="fa fa-backward"></i>
            </button>

            <button on:click={playPause}>
              {#if playerState == "play"}
                <i class="fa fa-pause"></i>
              {:else}
                <i class="fa fa-play"></i>
              {/if}
            </button>

            <button on:click={next}>
              <i class="fa fa-forward"></i>
            </button>
          </div>
      </div>
    </div>

    <div class="song-list">
      {#each $musicList as music, i}
        <div
          class="{i == currentSongIndex ? "active":""}"
          on:click="{()=>setSong(i)}"
        >
        <div class="avatar">
          <img src={music.image} alt="">
        </div>
        <div class="song-details">
          <h2>{music.name}</h2>
          <p>{music.artist}</p>
        </div>

        </div>
      {/each}
    </div>
  </div>
  
</main>

<style>
  
</style>
 -->
   <script>
    // @ts-nocheck
    
    import { onMount } from 'svelte';
    import { musicList } from './musiclist.js';
    import svelteLogo from './assets/svelte.svg';
    import viteLogo from '/vite.svg';
    
    let currentSongIndex = 0;
    let playerState = "play";
    let audioElement;
    let mainElement;
    
    function updateAudioSource() {
      if ($musicList && musicList[currentSongIndex]) {
        audioElement.src = './files/audio/' + $musicList[currentSongIndex].audio;
      }
    }
    
    function prev() {
      if (currentSongIndex === 0) {
        currentSongIndex = $musicList.length - 1;
      } else {
        currentSongIndex = (currentSongIndex - 1) % $musicList.length;
      }
      playerState = "play";
      updateAudioSource();
    }
    
    function playPause() {
      if (playerState === "play") {
        playerState = "pause";
        audioElement.pause();
      } else {
        playerState = "play";
        audioElement.play();
      }
    }
    
    function next() {
      currentSongIndex = (currentSongIndex + 1) % $musicList.length;
      playerState = "play";
      updateAudioSource();
    }
    
    function setSong(i) {
      currentSongIndex = i;
      playerState = "play";
      updateAudioSource();
    }
    
    onMount(() => {
      if ($musicList && $musicList.length > 0) {
        updateAudioSource();
        audioElement.addEventListener('canplaythrough', () => {
          if (playerState === "play") {
            audioElement.play();
          }
        });
      }
    });
    </script>
    
    <main bind:this={mainElement}>
    
      
      <audio
        src={'./files/audio/' + $musicList[currentSongIndex].audio}
        bind:this = {audioElement}
        autoplay = false
      >

      </audio>
    
      <div class="player">
        <div class="current-song">
          <div class="avatar">
            <img src={'./files/images/' + ($musicList[currentSongIndex]?.image || '')} alt="">
          </div>
          <div class="song-controls">
            <h2>{$musicList[currentSongIndex]?.name || 'No song selected'}</h2>
            <div class="controls">
              <button on:click={prev}>
                <i class="fa fa-backward"></i>
              </button>
    
              <button on:click={playPause}>
                {#if playerState === "play"}
                  <i class="fa fa-pause"></i>
                {:else}
                  <i class="fa fa-play"></i>
                {/if}
              </button>
    
              <button on:click={next}>
                <i class="fa fa-forward"></i>
              </button>
            </div>
          </div>
        </div>
    
        <div class="song-list">
          {#each $musicList as music, i}
            <div class="{i === currentSongIndex ? 'active' : ''}" on:click={() => setSong(i)}>
              <div class="avatar">
                <img src={'./files/images/' + music.image} alt="">
              </div>
              <div class="song-details">
                <h2>{music.name}</h2>
                <p>{music.artist}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
      
    </main>
    
    <style>
      /* Add your styles here */
    </style>
    