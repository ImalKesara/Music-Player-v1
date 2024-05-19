import { writable } from 'svelte/store';

export const musicList = writable([
  {
    image: 'maxresdefault.jpg',
    audio: 'Djo_-_End_Of_Beginning_(Hydr0.org).mp3',
    name: 'End of Begining',
    artist: 'Djo',
  },
  {
    image: 'evergreen.jpg',
    audio: 'evergrren.mp3',
    name: 'EverGreen',
    artist: 'Mitch',
  },

  {
    image: 'yechright.jpg',
    audio: 'JOJI_-_YEAH_RIGHT_(Hydr0.org).mp3',
    name: 'Yech right',
    artist: 'Joji ',
  },
  {
    image: 'queen.jpg',
    audio: 'Queen_-_I_Want_To_Break_Free_(Hydr0.org).mp3',
    name: 'I want to break free',
    artist: 'Queen ',
  },
]);
