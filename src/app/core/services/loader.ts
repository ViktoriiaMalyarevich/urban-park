import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Loader {

  private loading = signal(false);

  isLoading = this.loading.asReadonly();

  show() {
    this.loading.set(true);
  }

  hide() {
    setTimeout(()=>this.loading.set(false), 10);
  }
}
