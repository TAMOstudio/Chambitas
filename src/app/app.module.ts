import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { FirestoreSettingsToken } from "@angular/fire/firestore";

/* Angular Material */
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";

/*App components*/
import { HomePageComponent } from "./components/home-page/home-page.component";
import { FooterComponent } from "./components/shared/components/footer/footer.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { SignupComponent } from "./components/auth/signup/signup.component";
import { HeaderComponent } from "./components/home-page/header/header.component";
import { BannerComponent } from "./components/home-page/banner/banner.component";
import { FeatureJobsComponent } from "./components/home-page/feature-jobs/feature-jobs.component";
import { ReviewsComponent } from "./components/home-page/reviews/reviews.component";
import { ContactComponent } from "./components/shared/components/contact/contact.component";
import { NavbarComponent } from "./components/shared/components/navbar/navbar.component";
import { SidenavComponent } from "./components/shared/components/sidenav/sidenav.component";
import { MainSearchComponent } from "./components/shared/components/main-search/main-search.component";
import { CategoriesComponent } from "./components/home-page/categories/categories.component";
import { CategoriesPageComponent } from "./components/categories/categories-page/categories-page.component";

/*Firebase*/
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from "src/environments/environment";
import { CategoriesSharedComponent } from './components/shared/components/categories-shared/categories-shared.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "categories",
    component: CategoriesPageComponent
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
    CategoriesComponent,
    BannerComponent,
    FeatureJobsComponent,
    ReviewsComponent,
    ContactComponent,
    MainSearchComponent,
    CategoriesComponent,
    CategoriesPageComponent,
    CategoriesSharedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule {
  // https://grandetest.com/theme/jobhunt-html/index.html
}
