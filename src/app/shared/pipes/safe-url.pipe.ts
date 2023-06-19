import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeResourceUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private readonly sanitizer: DomSanitizer) {}

  public transform(file: File): SafeResourceUrl {
    const url = URL.createObjectURL(file);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
