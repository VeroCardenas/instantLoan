import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/atoms/input/input.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/molecules/card/card.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { ProfileImageComponent } from './components/atoms/profile-image/profile-image.component';
import { CardClientComponent } from './components/molecules/card-client/card-client.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    InputComponent,
    CardComponent,
    ButtonComponent,
    ProfileImageComponent,
    CardClientComponent,
  ],
  exports:[
    InputComponent,
    CardComponent,
    ButtonComponent,
    ProfileImageComponent,
    CardClientComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,

  ]
})
export class SharedModule { }
