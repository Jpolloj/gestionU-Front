import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raccoon-game',
  templateUrl: './raccoon-game.component.html',
  styleUrls: ['./raccoon-game.component.scss']
})
export class RaccoonGameComponent implements OnInit {

  constructor() { }


  public responseData: any;
  public responseCollage: any;
  public level1 = true;
  public level2 = false;
  public level3 = false;
  public level4 = false;
  public level5 = false;
  public level6 = false;
  public level7 = false;
  public level8 = false;


  ngOnInit() {
  }

  nextLevel(lvl) {
    if ( lvl === 1 ) {
      this.level1  = true;
      this.level8 = false;
    }
    if ( lvl === 2 ) {
      this.level2  = true;
      this.level1 = false;
    }
    if ( lvl === 3 ) {
      this.level3  = true;
      this.level2 = false;
    }
    if ( lvl === 4 ) {
      this.level4  = true;
      this.level3 = false;
    }
    if ( lvl === 5 ) {
      this.level5  = true;
      this.level4 = false;
    }
    if ( lvl === 6 ) {
      this.level6  = true;
      this.level5 = false;
    }
    if ( lvl === 7 ) {
      this.level7  = true;
      this.level6 = false;
    }
    if ( lvl === 8 ) {
      this.level8  = true;
      this.level7 = false;
    }
  }
}
