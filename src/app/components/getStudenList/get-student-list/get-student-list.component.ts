import { Component, OnInit } from '@angular/core';
import { GetCollageListService } from 'src/app/providers/getCollageList/get-collage-list.service';
import { GetStudentListService } from 'src/app/providers/getStudentList/get-student-list.service';

@Component({
  selector: 'app-get-student-list',
  templateUrl: './get-student-list.component.html',
  styleUrls: ['./get-student-list.component.scss']
})
export class GetStudentListComponent implements OnInit {

  constructor(private readonly getStudentListService: GetStudentListService,
              private readonly getCollageListService: GetCollageListService) { }


  public responseData: any;
  public responseCollage: any;
  public level1 = false;
  public level2 = false;
  public level3 = false;
  public level4 = false;
  public level5 = false;
  public level6 = true;
  public level7 = false;
  public level8 = false;

  ngOnInit() {
    /*
    this.getStudentListService.getStudentList().subscribe( (data) => {
      console.log(data);
      this.responseData = data;
    });

    this.getCollageListService.getStudentList().subscribe( (data) => {
      console.log(data);
      this.responseCollage = data;
    });
    */
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
