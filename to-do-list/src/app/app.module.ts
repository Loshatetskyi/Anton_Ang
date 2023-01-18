import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { BillGatesComponent } from './BillGates/BillGates.component';
import { TestComponent } from './test/test.component';
import { BaseComponent } from './base/base.component';



const routes: Routes = [
  {path: '',component: BaseComponent},
  {path: 'BillGates', component: BillGatesComponent},
  {path: 'Resume', component: ResumeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    BillGatesComponent,
    TestComponent,
    BaseComponent,    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
