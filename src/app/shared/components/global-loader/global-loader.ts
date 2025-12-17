import { Component, inject } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Loader } from '../../../core/services/loader';

@Component({
  selector: 'global-loader',
  templateUrl: './global-loader.html',
  imports: [MatProgressSpinner]
})
export class GlobalLoader {
  loader = inject(Loader);
}
