import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent, HeaderComponent, MenuComponent } from './components';

const COMPONENTS = [
  LayoutComponent,
  HeaderComponent,
  MenuComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule {}
