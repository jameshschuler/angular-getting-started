import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './users/user.component';
import { ConvertPhoneNumber } from './shared/convert-phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ConvertPhoneNumber
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent, UserListComponent]
})
export class AppModule { }
