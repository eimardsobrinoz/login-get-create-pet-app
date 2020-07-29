import { Pet } from './../../interfaces/pets/pet-interface';
import { environment } from './../../../../environments/environment.prod';
import { ApiMethod, PetEndPoints } from './../../enums/endpoints';
import { HttpService } from './../http-service/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpService: HttpService) {
  }

  public getPet(id:string): Observable<Pet> {
    const url: string = `${PetEndPoints.GET_PET}/${id}`;
    return this.httpService.requestCall(ApiMethod.GET,environment.apiUrl, url);
  }
  public getPets(status:string): Observable<Pet[]> {
    const params: HttpParams = new HttpParams().set('status', status);
    return this.httpService.requestCall(ApiMethod.GET,environment.apiUrl, PetEndPoints.GET_PETS_BYSTATUS, undefined, params);
  }

  public createPet(pet:Pet): Observable<Pet> {
    return this.httpService.requestCall(ApiMethod.POST,environment.apiUrl, PetEndPoints.POST_PET, pet);
  }

}
