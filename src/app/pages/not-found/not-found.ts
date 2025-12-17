import { Component } from '@angular/core';
import { ImagePathPipe } from '../../shared/pipes/image-path-pipe';

@Component({
  selector: 'app-not-found',
  imports: [
    ImagePathPipe
  ],
  template: `
    <div class="h-screen w-screen flex flex-col items-center justify-center bg-gray-900">
      <h1 class="pt-[20vh] text-5xl font-semibold tracking-tight sm:text-7xl text-gray-50">
        Page Not Found
      </h1>
      <img [src]="'not_found.png' | imagePath" class="scale-75 opacity-10">
    </div>
  `,
})
export class NotFound {

}
