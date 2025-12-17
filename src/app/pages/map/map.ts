import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MockData } from '../../core/services/mock-data';
import { ImagePathPipe } from '../../shared/pipes/image-path-pipe';

@Component({
  selector: 'app-map',
  imports: [CommonModule, MatButtonModule, ImagePathPipe, MatDialogContent, MatDialogClose],
  templateUrl: './map.html',
})
export class Map {
  zones = computed(() => this.mockData.mapData()?.zones);

  constructor(private dialog: MatDialog, public mockData: MockData) {
    this.mockData.loadPage('map');
  }

  openDialog(template: any) {
    this.dialog.open(template);
  }
}
