import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, tap } from 'rxjs';

import { AboutPageData } from '../models/about-page';
import { HomePageData } from '../models/home-page';
import { MapPageData } from '../models/map-page';
import { Loader } from './loader';

interface Page<T> {
  url: string;
  data: WritableSignal<T | null>;
}

@Injectable({
  providedIn: 'root',
})
export class MockData {

  aboutData = signal<AboutPageData | null>(null);
  mapData = signal<MapPageData | null>(null);
  homeData = signal<HomePageData | null>(null);

  private pages: Record<string, Page<any>> = {
    about: { url: 'assets/mocks/about-page-data.json', data: this.aboutData },
    map:   { url: 'assets/mocks/map-page-data.json',   data: this.mapData },
    home:  { url: 'assets/mocks/home-page-data.json',  data: this.homeData },
  };

  constructor(private http: HttpClient, private loader: Loader,) {}

  loadPage(pageName: string) {
    this.loader.show();
    const page = this.pages[pageName];
    if (!page) throw new Error(`Data for the page "${pageName}" not found`);

    this.http.get(page.url)
      .pipe(
        tap(data => page.data.set(data)),
        finalize(() => this.loader.hide())
      )
      .subscribe();

    return page.data;
  }

}
