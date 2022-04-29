import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Coffee } from './coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  //coffeesUrl = environment.baseUrl+ '202212_MISW4104_Grupo3.json';
  private coffeesUrl = 'https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json';

  constructor(private httpClient: HttpClient) { }

  getAllCoffees(): Observable<Coffee[]> {
    return this.httpClient.get<Coffee[]>(this.coffeesUrl);
  }

}
