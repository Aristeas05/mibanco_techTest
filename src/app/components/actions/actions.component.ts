import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [MatTabsModule, MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ActionsComponent {
  downloadPDF(): void {
    const link = document.createElement('a');
    link.href = './assets/files/TarifarioWU.pdf';
    link.download = 'TarifarioWU.pdf';
    link.click();
  }
}
