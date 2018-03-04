import { Component, OnInit } from '@angular/core';
import { ITeam } from './../models/thevoice-show-models';
import { MentorService } from './../services/mentor.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  

  _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredTeams = this.listFilter ? this.performFilter(this.listFilter) : this.adminview;
    }

    filteredTeams: ITeam[];
    adminview : ITeam[] = [];


  constructor(private _mentorService: MentorService) { }


    performFilter(filterBy: string): ITeam[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.adminview.filter((team: ITeam) =>
              team.teamName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

  ngOnInit() {
    this.adminview = this._mentorService.getMentorServicesData();
    this.filteredTeams = this.adminview;
  }

}
