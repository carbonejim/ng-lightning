import {Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Component({
  selector: 'ngl-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './file.html',
})
export class NglFile  {

  @HostBinding('class.slds-has-title')
  @Input() text: string;

  @Input() iconName: string;

  constructor(public element: ElementRef, public renderer: Renderer2) {
    this.renderer.addClass(this.element.nativeElement, 'slds-file');
    this.renderer.addClass(this.element.nativeElement, 'slds-file_card');
  }
}
