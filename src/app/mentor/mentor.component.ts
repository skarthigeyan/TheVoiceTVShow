import { Component, OnInit } from '@angular/core';
import { ITeam } from './../models/thevoice-show-models';
import { MentorService } from './../services/mentor.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

    mentorServices : ITeam[];
  constructor(private _mentorService: MentorService) {
  }

  ngOnInit() {
    this.mentorServices = this._mentorService.getMentorServicesData();
  }

}
