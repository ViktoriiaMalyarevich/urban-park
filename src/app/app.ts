import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GlobalLoader } from './shared/components/global-loader/global-loader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GlobalLoader, RouterLink],
  templateUrl: './app.html',
})

export class App {}
