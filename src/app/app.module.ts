import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsControlPanelComponent } from './buttons-control-panel/buttons-control-panel.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
// import { IconsModule } from '@progress/kendo-angular-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TextBoxModule } from '@progress/kendo-angular-inputs';
import { FloatingLabelModule } from '@progress/kendo-angular-label'
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';


@NgModule({
  declarations: [
    AppComponent,
    ButtonsControlPanelComponent,
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    InputsModule,
    TextBoxModule,
    FloatingLabelModule,
    DropDownsModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
