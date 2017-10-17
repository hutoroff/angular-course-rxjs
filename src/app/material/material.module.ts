import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    NoopAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
