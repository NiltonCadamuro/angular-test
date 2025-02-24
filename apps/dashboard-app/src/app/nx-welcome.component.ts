import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialStandaloneModule } from '@angular-project/material';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, MaterialStandaloneModule],
  template: `
    <div class="container">
      <h1 class="text-center">Bootstrap 3 Funcionando!</h1>
      <button class="btn btn-primary">Clique aqui</button>
      <h1>Teste Material + Bootstrap</h1>
      <button mat-raised-button color="primary">Botão Material</button>
      <button class="btn btn-primary">Botão Bootstrap 3</button>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
