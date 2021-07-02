import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    RouterModule.forRoot([
      { path: 'mfe1', loadChildren: () => import('mfe1/Module').then(x => x.LazyModule) }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
