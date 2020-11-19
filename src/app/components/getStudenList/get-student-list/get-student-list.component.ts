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

  ngOnInit() {
    this.getStudentListService.getStudentList().subscribe( (data) => {
      console.log(data);
      this.responseData = data;
    });

    this.getCollageListService.getStudentList().subscribe( (data) => {
      console.log(data);
      this.responseCollage = data;
    });
  }

}
