import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
