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
import {ProfileComponent} from "./components/profile/profile.component";
import {NoteComponent} from "./components/note/note.component";


const  routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SingupComponent},
  { path: 'newuser', component: NewuserComponent},
  { path: 'prof', component: ProfileComponent},
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
    ProfileComponent,
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

