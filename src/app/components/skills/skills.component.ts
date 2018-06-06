import { WorkHistory } from "./../../shared/work-history.model";
import { JobsSkillsService } from "./../../shared/jobs-skills.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"]
})
export class SkillsComponent implements OnInit {
  workHistory: WorkHistory[];

  constructor(private _data: JobsSkillsService) {}

  ngOnInit() {
    this.workHistory = this._data.getWorkHistory();
    console.log(this.workHistory);
  }
}
