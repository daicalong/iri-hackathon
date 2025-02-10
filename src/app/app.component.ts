import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { MatButton } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    MatButton,
    MatSliderModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'iri-hackathon-app';
  nav = routes;
}
