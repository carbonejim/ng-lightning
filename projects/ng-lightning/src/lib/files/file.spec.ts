import {TestBed, ComponentFixture} from '@angular/core/testing';
import {Component} from '@angular/core';
import {createGenericTestComponent} from '../../../test/util/helpers';
import {NglFilesModule} from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getFileElement(element: HTMLElement) {
  return element.firstElementChild;
}

function getFigureCaptionElement(element: HTMLElement) {
  return element.querySelector('figcaption');
}

describe('Figure Component', () => {

  beforeEach(() => TestBed.configureTestingModule({ declarations: [TestComponent], imports: [NglFilesModule]}));

  it('should render the figure element with default values', () => {
    const fixture = createTestComponent();
    const file = getFileElement(fixture.nativeElement);
    expect(file).toHaveCssClass('slds-image');
    expect(file).toHaveCssClass('slds-image--card');
  });

  it('should render the caption element based on title', () => {
    const fixture = createTestComponent(`<figure nglFigure [nglTitle]="title"></figure>`);
    const caption = getFigureCaptionElement(fixture.nativeElement);
    expect(caption).toHaveCssClass('slds-image__title');
    expect(caption).toHaveCssClass('slds-image__title--card');

    expect((<HTMLSpanElement>caption.firstElementChild).title).toBe('Image title');
    expect(caption.textContent).toBe('Image title');

    fixture.componentInstance.title = '';
    fixture.detectChanges();
    expect(getFigureCaptionElement(fixture.nativeElement)).toBeFalsy();
  });
});


@Component({ template: `<figure nglFigure></figure>` })
export class TestComponent {
  ratio = '4-by-3';
  title = 'Image title';
}
