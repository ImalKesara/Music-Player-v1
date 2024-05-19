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
    audio:
      'Richy_Mitch_and_The_Coal_Miners_-_Evergreen_instrumental_(Hydr0.org).mp3',
    name: 'EverGreen',
    artist: 'Mitch',
  },
]);
