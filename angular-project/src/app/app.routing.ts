import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
	{ path: '', redirectTo: 'pages', pathMatch: 'full' },
	// { path: '**', redirectTo: 'pages' },
	{
		path: 'pages',
		loadChildren: './pages/pages.module#PagesModule'
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)