import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeaturesIconsComponent } from './product-features-icons.component';

describe('ProductFeaturesIconsComponent', () => {
  let component: ProductFeaturesIconsComponent;
  let fixture: ComponentFixture<ProductFeaturesIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFeaturesIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFeaturesIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
