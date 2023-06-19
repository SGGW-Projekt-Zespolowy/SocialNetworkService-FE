import { Component } from '@angular/core';
import { TagModel } from '../../post/post.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HashtagService } from 'src/app/services/hashtag.service';

@Component({
  selector: 'hashtag-input',
  templateUrl: './hashtag-input.component.html',
  styleUrls: ['./hashtag-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: HashtagInputComponent
    }
  ]
})
export class HashtagInputComponent implements ControlValueAccessor {
  newHashtag: string = "";
  hashtags: TagModel[] = [];

  constructor(
    private hashtagService: HashtagService
  ) {}

  addHashtag() {
    const hashtagName = this.newHashtag;
    const hashtagColor = this.hashtagService.getRandomColor();
    this.newHashtag = "";

    this.hashtags.push({content: hashtagName, color: hashtagColor});
    this.onChange(this.hashtags);
    this.onTouched();
  }

  onDeleteHashtag(id: number) {
    this.hashtags.splice(id, 1);
  }

  onChange = (title) => {}
  onTouched = () => {}
  disabled: boolean = false;
  
  writeValue(hashtags: TagModel[]): void {
    this.hashtags = hashtags;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
