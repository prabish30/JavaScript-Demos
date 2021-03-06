
// Import the core angular services.
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";

// Import the application components and services.
import { AppComponent } from "./app.component";
import { SecondaryDetailViewComponent } from "./views/secondary-detail-view.component";
import { SecondaryListViewComponent } from "./views/secondary-list-view.component";
import { SecondaryViewComponent } from "./views/secondary-view.component";
import { SectionAViewComponent } from "./views/section-a-view.component";
import { SectionBViewComponent } from "./views/section-b-view.component";
import { SectionCTab1ViewComponent } from "./views/section-c-tab-1-view.component";
import { SectionCTab2ViewComponent } from "./views/section-c-tab-2-view.component";
import { SectionCViewComponent } from "./views/section-c-view.component";
import { SectionDViewComponent } from "./views/section-d-view.component";
import { TertiaryDetailViewComponent } from "./views/tertiary-detail-view.component";
import { TertiaryListViewComponent } from "./views/tertiary-list-view.component";
import { TertiaryViewComponent } from "./views/tertiary-view.component";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

var routes: Routes = [
	{
		path: "app",
		children: [
			{
				path: "main",
				children: [
					{
						path: "section-a",
						component: SectionAViewComponent
					},
					{
						path: "section-b",
						component: SectionBViewComponent
					},
					{
						path: "section-c",
						component: SectionCViewComponent,
						children: [
							{
								path: "tab-1",
								component: SectionCTab1ViewComponent
							},
							{
								path: "tab-2",
								component: SectionCTab2ViewComponent
							}
						]
					},
					{
						path: "section-d",
						component: SectionDViewComponent
					}
				]
			},
			{
				outlet: "secondary",
				path: "secondary",
				component: SecondaryViewComponent,
				children: [
					{
						path: "",
						pathMatch: "full",
						component: SecondaryListViewComponent
					},
					{
						path: "detail",
						component: SecondaryDetailViewComponent
					}
				]
			},
			{
				outlet: "tertiary",
				path: "tertiary",
				component: TertiaryViewComponent,
				children: [
					{
						path: "",
						pathMatch: "full",
						component: TertiaryListViewComponent
					},
					{
						path: "detail",
						component: TertiaryDetailViewComponent
					}
				]
			}
		]
	},

	// Redirect from the root to the "/app" prefix (this makes other features, like 
	// secondary outlets) easier to implement later on.
	{
		path: "",
		pathMatch: "full",
		redirectTo: "app"
	}
];

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			routes,
			{
				// Tell the router to use the hash instead of HTML5 pushstate.
				useHash: true,
				scrollPositionRestoration: "enabled",
				anchorScrolling: "enabled",
				enableTracing: false
			}
		)
	],
	declarations: [
		AppComponent,
		SecondaryDetailViewComponent,
		SecondaryListViewComponent,
		SecondaryViewComponent,
		SectionAViewComponent,
		SectionBViewComponent,
		SectionCTab1ViewComponent,
		SectionCTab2ViewComponent,
		SectionCViewComponent,
		SectionDViewComponent,
		TertiaryDetailViewComponent,
		TertiaryListViewComponent,
		TertiaryViewComponent
	],
	providers: [
		// CAUTION: We don't need to specify the LocationStrategy because we are setting
		// the "useHash" property in the Router module above (which will be setting the
		// strategy for us).
		// --
		// {
		// 	provide: LocationStrategy,
		// 	useClass: HashLocationStrategy
		// }
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
	// ...
}
