import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SHARED_COMPONENTS } from './shared/shared-imports';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...SHARED_COMPONENTS],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('infosys_p');
}
