import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  characterNames = [];
  characters = [];

  ngOnInit() {
    // Load the data.json and populate characterNames and data
    this.loadData();
  }

  loadData = async () => {
    const response = await fetch('assets/data.json');
    const data = await response.json();
    this.characters = data.characters;
    this.characterNames = Object.keys(data.characters);
  }

  playSound = async (characterName) => {
    const characterSounds = this.characters[characterName];
    const soundName = characterSounds[Math.floor(Math.random() * characterSounds.length)];
    const audio = new Audio('assets/sound/' + soundName + '.mp3');
    audio.play();
  }
}
