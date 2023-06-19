import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HashtagService {

  colors = ['orange', 'purple', 'blue'];
  private lastindex = 0;

  getRandomColor(): string {
    const colorsCopy = this.colors.slice(0);
    console.log(colorsCopy);

    colorsCopy.splice(this.lastindex, 1);
    console.log(colorsCopy);

    const rand = Math.floor(Math.random() * colorsCopy.length);
    this.lastindex = this.colors.findIndex(x => x === colorsCopy[rand])
    return colorsCopy[rand];
  }
}
