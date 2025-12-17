import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MockData } from '../../core/services/mock-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html'
})
export class About {
  constructor(private dialog: MatDialog, public mockData: MockData) {
    this.mockData.loadPage('about');
  }

  protected openParkHistoryDialog() {
    this.dialog.open(ParkHistoryDialog, {
      panelClass: 'custom-dialog-container',
      maxWidth: '45rem',
      maxHeight: '80vh',
      backdropClass: 'dark-backdrop',
      data: this.mockData.aboutData()?.parkHistoryDialog
    });
  }
}


@Component({
  selector: 'park-history-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: '../../shared/dialogs/park-history-dialog.html',
})
export class ParkHistoryDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {}
}
