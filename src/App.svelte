<script>
// @ts-nocheck

  import {onMount} from 'svelte';
	import { musicList } from './musiclist.js';
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'

  let currentSongIndex = 0;
  let playerState = "play";
  let audioElement;
  let mainElement;

  function prev(){

  }

  function playPause(){

  }

  function next(){
    
  }


</script>

<main bind:this = {mainElement}>

  <audio
    src={'./files/audio/' + $musicList[currentSongIndex].audio}
    bind:this = {audioElement}
    autoplay = "false"
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
  </div>
  
</main>

<style>
  
</style>
