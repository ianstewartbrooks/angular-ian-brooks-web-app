import { WorkHistory } from "./../../shared/work-history.model";
import { JobsSkillsService } from "./../../shared/jobs-skills.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-workhistory",
  templateUrl: "./workhistory.component.html",
  styleUrls: ["./workhistory.component.css"]
})
export class WorkhistoryComponent implements OnInit {
  workHistory: WorkHistory[];

  constructor(private _data: JobsSkillsService) {}

  ngOnInit() {
    this.workHistory = this._data.getWorkHistory();
  }
}
