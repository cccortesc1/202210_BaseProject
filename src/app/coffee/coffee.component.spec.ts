import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Coffee } from './coffee';
import { CoffeeComponent } from './coffee.component';
import { CoffeeService } from './coffee.service';

describe('CoffeeComponent', () => {

  const coffeeServiceSpy = jasmine.createSpyObj('CoffeeService', ['getAllCoffees']);
  let fixture: ComponentFixture<CoffeeComponent>;
  let component: CoffeeComponent;

  const expectedCoffe: Coffee[] = [
    { id: 1, nombre: 'Café uno', altura: 1500, imagen: 'Imagen1', region: 'Antioquia', sabor: 'Chocolate negro, Caramelo', tipo: 'Blend'},
    { id: 2, nombre: 'Café dos', altura: 1600, imagen: 'Imagen2', region: 'Antioquia', sabor: 'Panela, Durazno, Caramelo', tipo: 'Café de Origen'},
    { id: 3, nombre: 'Café tres', altura: 1200, imagen: 'Imagen3', region: 'Antioquia', sabor: 'Cítrico, Naranja, Cacao', tipo: 'Blend'}
    ];

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [CoffeeComponent],
      providers: [
        { provide: CoffeeService, useValue: coffeeServiceSpy }
      ]
    }).compileComponents()
      .then(() => {
        coffeeServiceSpy.getAllCoffees.and.returnValue(of(expectedCoffe));

        fixture = TestBed.createComponent(CoffeeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        coffeeServiceSpy.getAllCoffees.calls.reset()
      });
  }));

  it('should render title', () => {
    const fixture = TestBed.createComponent(CoffeeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('th')?.textContent).toContain(
      '#'
    );
  });

  it('should render rows', () => {
    const fixture = TestBed.createComponent(CoffeeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('tbody tr')?.length).toBeGreaterThan(
      0
    );
  });

});
