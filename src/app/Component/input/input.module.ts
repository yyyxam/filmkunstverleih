import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { InputComponent } from "./input.component";
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
      CommonModule,
      IonicModule
    ],
    declarations: [InputComponent],
    exports: [InputComponent],
  })
  export class InputModule {}