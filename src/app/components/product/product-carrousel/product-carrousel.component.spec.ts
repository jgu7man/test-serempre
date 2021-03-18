import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarrouselComponent } from './product-carrousel.component';

describe('ProductCarrouselComponent', () => {
  let component: ProductCarrouselComponent;
  let fixture: ComponentFixture<ProductCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCarrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
