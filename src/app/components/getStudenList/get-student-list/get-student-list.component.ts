import { Component, OnInit } from '@angular/core';
import { GetStudentListService } from 'src/app/providers/getStudentList/get-student-list.service';

@Component({
  selector: 'app-get-student-list',
  templateUrl: './get-student-list.component.html',
  styleUrls: ['./get-student-list.component.scss']
})
export class GetStudentListComponent implements OnInit {

  constructor(private readonly getStudentListService: GetStudentListService) { }


  public responseData: any;

  ngOnInit() {
    this.getStudentListService.getStudentList().subscribe( (data) => {
      console.log(data);
      this.responseData = data;
    });
  }

}
