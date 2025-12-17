import { Component, computed, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MockData } from '../../core/services/mock-data';
import { BgImagePathPipe, ImagePathPipe } from '../../shared/pipes/image-path-pipe';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatDialogModule, BgImagePathPipe],
  templateUrl: './home.html'
})
export class Home {
  homeData: any;

  constructor(private dialog: MatDialog, public mockData: MockData) {
    this.mockData.loadPage('home');
    this.homeData = computed(()=> this.mockData.homeData());
  }

  openPhotosDialog(showNewPhoto:boolean): void {
    this.dialog.open(HomePagePhotosDialog, {
      panelClass: 'custom-dialog-container',
      maxWidth: '95vw',
      backdropClass: 'dark-backdrop',
      data: showNewPhoto ? this.homeData().DataHomePagePhotosDialog.regPhoto : this.homeData().DataHomePagePhotosDialog.oldPhoto
    });
  }

}

@Component({
  selector: 'home-page-photos-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ImagePathPipe],
  templateUrl: '../../shared/dialogs/home-page-photos-dialog.html',
})
export class HomePagePhotosDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      description: string;
      images: string[];
    }
  ) {}
}
