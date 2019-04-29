import { VideosService } from './videos.service';
import { UserService } from './user.service';
import { AuthguardService } from './authguard.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from './../environments/environment';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { DropzoneDirective } from './dropzone.directive';
import { VgalleryComponent } from './vgallery/vgallery.component';
import { ViewComponent } from './view/view.component';
// import { UploaderComponent } from './uploader/uploader.component';
// import { UploadTaskComponent } from './upload-task/upload-task.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    VideosComponent,
    DropzoneDirective,
    // UploaderComponent,
    // UploadTaskComponent,
    FileSelectDirective,
    VgalleryComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxYoutubePlayerModule.forRoot(),
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },

      { path: 'videos', component: VideosComponent, canActivate: [AuthguardService] },
      { path: 'users', component: UserComponent, canActivate: [AuthguardService] },
      { path: 'video/:id', component: ViewComponent, canActivate: [AuthguardService] }
    ])

  ],
  providers: [
    AuthService,
    AuthguardService,
    UserService,
    VideosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
