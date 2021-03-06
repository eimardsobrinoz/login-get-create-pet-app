import { Subscription } from 'rxjs';
import { RoutePath } from './../../../../core/enums/route.paths';
import { PetService } from './../../../../core/services/pet-service/pet.service';
import { Pet } from './../../../../core/interfaces/pets/pet-interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PetStatus } from 'projects/login-get-create-pet-app/src/app/core/enums/pet-status';

@Component({
  selector: 'eszsw-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit, OnDestroy {

  public pets: Pet[];
  public petStatus: string;
  public noImgPath: string;
  public searchPetByIDPath: string;
  public createPEtPath: string;
  public subscriptions: Subscription[];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.initialize();
    this.getPets(this.petStatus);
  }

  initialize() {
    this.pets = [];
    this.petStatus = PetStatus.AVAILABLE;
    this.noImgPath = 'assets/img/noImage.jpg';
    this.createPEtPath = RoutePath.CREATE_PET;
    this.searchPetByIDPath = RoutePath.SEARCH_PET;
    this.subscriptions = [];
  }

  public getPets(status: string): void {
    this.petStatus = status;
    this.subscriptions.push(this.petService.getPets(status).subscribe( 
      (pets: Pet[]) => this.pets = pets,
      error => console.log(error)
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }


}
