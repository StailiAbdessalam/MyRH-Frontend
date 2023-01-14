import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextEditorService {

  textEditorValue: string = ''

  constructor() { }
}
