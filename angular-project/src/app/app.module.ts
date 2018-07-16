import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';

// import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routing';
import { PagesModule } from './pages/pages.module';


import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
// import { HomeComponent } from './pages/home/home.component';
// import { UserComponent } from './pages/user/user.component';
registerLocaleData(zh);

// export const ROUTES: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'index'}
//   { path: 'index', component: HomeComponent},
//   { path: 'user', component: UserComponent}
// ]


@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    // RouterModule.forRoot(ROUTES),
    routing,
    PagesModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }