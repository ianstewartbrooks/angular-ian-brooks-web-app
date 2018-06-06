import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RoutesModule } from './/routes.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SocialMediaIconsComponent } from './components/social-media-icons/social-media-icons.component';
import { JobsSkillsService } from './shared/jobs-skills.service';
import { WorkhistoryComponent } from './components/workhistory/workhistory.component';
import { CvComponent } from './components/cv/cv.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent,
    SkillsComponent,
    SocialMediaIconsComponent,
    WorkhistoryComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule
  ],
  providers: [JobsSkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
