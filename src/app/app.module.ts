import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { SidenavComponent } from "./components/shared/sidenav/sidenav.component";

/* Angular Material */
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HeaderComponent } from './components/home-page/header/header.component';
import { CatergoriesComponent } from './components/home-page/catergories/catergories.component';
import { BannerComponent } from './components/home-page/banner/banner.component';
import { FeatureJobsComponent } from './components/home-page/feature-jobs/feature-jobs.component';
import { ReviewsComponent } from './components/home-page/reviews/reviews.component';
import { ContactComponent } from './components/shared/contact/contact.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    HomePageComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    CatergoriesComponent,
    BannerComponent,
    FeatureJobsComponent,
    ReviewsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
