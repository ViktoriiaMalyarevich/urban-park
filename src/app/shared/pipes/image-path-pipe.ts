import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePath',
  standalone: true,
  pure: true,
})
export class ImagePathPipe implements PipeTransform {
  transform(fileName: string): string {
    return `assets/images/${fileName}`;
  }
}

@Pipe({
  name: 'bgImagePath',
})

export class BgImagePathPipe implements PipeTransform {
  transform(fileName: string | null | undefined): string {
    if (!fileName) return '';
    return `url(assets/images/${fileName})`;
  }
}
