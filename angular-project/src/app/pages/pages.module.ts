import { NgModule }  from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import { ParentPage } from './parent/parent';
import { ChildPage } from './child/child';


import { HomeService } from './home/home.service';
import { KmyService } from './child/myService';

export const ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
    	{ path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: HomeComponent },
      { path: 'user', component: UserComponent },
      { path: 'parent', component: ParentPage },
      { path: 'child', component: ChildPage }
    ]
  }  
]

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES)
	],
	declarations: [
		PagesComponent,
		HomeComponent,
		UserComponent,
		ParentPage,
		ChildPage
	],
	providers: [
		HomeService,
		KmyService
	]
})

export class PagesModule {
	
}