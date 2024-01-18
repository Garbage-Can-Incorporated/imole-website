import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { LandingPageComponent } from '../landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [LandingPageComponent];
const modules = [MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [...modules, ...components]
})
export class SharedModule { }
