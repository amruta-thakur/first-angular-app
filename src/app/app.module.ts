import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { GotcharacterComponent } from './gotcharacter/gotcharacter.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { TestNgStyleComponent } from './test-ng-style/test-ng-style.component';
import { MakeBoldDirective } from './make-bold.directive';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    GotcharacterComponent,
    DirectiveExampleComponent,
    TestNgStyleComponent,
    MakeBoldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
