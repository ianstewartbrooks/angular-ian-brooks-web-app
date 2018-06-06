import { WorkHistory } from "./work-history.model";
import { Injectable } from "@angular/core";

@Injectable()
export class JobsSkillsService {
  workHistory: WorkHistory[];

  constructor() {
    this.workHistory = [
      {
        employer: "Conspexit",
        jobTitle: "Software Engineer",
        from: "2017",
        to: "Now",
        description: [
          "Using Python (which I had to learn from scratch) and Google Cloud Datastore I have helped the team develop and code a backend API for our new and upcoming game.",
          "Part of the API that I am particualarly proud of is where I integrated Google Vision API to check images that the players submit for adult and violent material. If the API detects adult/violent content it quarantines the image away from all our other data. If, on the other hand, the image is safe then the API processes it accordingly and rewards the player",
          "I have also written a web based admin section using Python, Flask, HTML/CSS and Javascript to allow the team to interact with the data collected/submitted through the game including all the images that the players have taken. As part of this admin section I integrated a 'world map' using the Google Maps API where the team can view locations, and the images, that have been submitted through the game client.",
          "I work remotely, but go to the office in London roughly every two weeks or when required. I keep in constant contaact with my work colleagues via Slack and 'office cam' (a web cam and mic) which enables me to see and hear the office and ultimately feel a part of things."
        ]
      },
      {
        employer: "AVG Agency",
        jobTitle: "Freelance Software/Web Developer",
        from: "2005",
        to: "Now",
        description: [
          "I have been working with AVC Agency, based in Derbyshire, for over a decade now helping them with small projects. These projects often involve me writing JQuery/Javascript applications to embed in larger sites",
          "One Javascript/Jquery application I enjoyed creating for AVC allows the user to dynamically design a sign/plate for the front of their house/building. The user can choose a material, colour, enter their house number or building name and see whwt it looks like as they go a long. Once finished the information is stored ready for someone who will actually make it.",
          "I also help with php/mysql applications."
        ]
      }
    ];
  }

  getWorkHistory() {
    return this.workHistory;
  }
}
