import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CausesComponent } from './causes/causes.component';
import { EventComponent } from './event/event.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { BannerComponent } from './banner/banner.component';


const routes: Routes = [
  
  {path: '', redirectTo: '', pathMatch: 'full'},
  {'path':'about','component':AboutComponent},
  {'path':'causes','component':CausesComponent},
  {'path':'event','component':EventComponent},
  {'path':'gallery','component':GalleryComponent},
  {'path':'contact','component':ContactComponent},
  {'path':'volunteer','component':VolunteerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
