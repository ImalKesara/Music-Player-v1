<script>
// @ts-nocheck

	import { musicList } from './musiclist.js';
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import {onMount} from 'svelte';

  let currentSongIndex = 0;
  let playerState = "play";
  let audioElement;
  let mainElement;


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
            </button>
          </div>
      </div>
    </div>
  </div>
  
</main>

<style>
  
</style>
