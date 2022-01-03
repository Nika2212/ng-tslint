import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateItemModalComponent } from './create-item-modal/create-item-modal.component';
import { EditItemModalComponent } from './create-item-modal/edit-item-modal/edit-item-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateItemModalComponent,
    EditItemModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
