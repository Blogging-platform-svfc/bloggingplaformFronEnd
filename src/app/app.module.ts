import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {BlogsComponent} from "./components/blogs/blogs.component";
import {LoginComponent} from "./components/login/login.component";
import {SingupComponent} from "./components/singup/singup.component";
import {NewuserComponent} from "./components/newuser/newuser.component";
import {MessgeComponent} from "./components/messge/messge.component";
import {NotificationComponent} from "./components/notification/notification.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {VideoComponent} from "./components/video/video.component";
import {FriendrequestComponent} from "./components/friendrequest/friendrequest.component";
import {NoteComponent} from "./components/note/note.component";



const  routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SingupComponent},
  { path: 'newuser', component: NewuserComponent},
  { path: 'message', component: MessgeComponent},
  { path: 'notif', component: NotificationComponent},
  { path: 'prof', component: ProfileComponent},
  { path: 'video', component: VideoComponent},
  { path: 'friend', component: FriendrequestComponent},
  { path: 'note', component: NoteComponent},





]

@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    BlogsComponent,
    LoginComponent,
    SingupComponent,
    NewuserComponent,
    MessgeComponent,
    NotificationComponent,
    ProfileComponent,
    VideoComponent,
    FriendrequestComponent,
    NoteComponent,
    AppComponent
  ],
  providers: [

  ],

  bootstrap: [
    AppComponent,


  ],

})

export class AppModule { }

