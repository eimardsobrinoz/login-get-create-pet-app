import { PetService } from './../../../../core/services/pet-service/pet.service';
import { Pet } from './../../../../core/interfaces/pets/pet-interface';
import { Component, OnInit } from '@angular/core';
import { PetStatus } from 'projects/login-get-create-pet-app/src/app/core/enums/pet-status';

@Component({
  selector: 'eszsw-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  public pets: Pet[];
  public petStatus: string;
  public petImgPath: string;

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.initialize();
    this.getPets(this.petStatus);
  }

  initialize() {
    this.pets = [];
    this.petStatus = PetStatus.AVAILABLE;
    this.petImgPath = 'assets/img/noImage.jpg';
  }

  getPets(status: string): void {
    this.petStatus = status;
    this.petService.getPets(status).subscribe( 
      (pets: Pet[]) => this.pets = pets,
      error => console.log('Pet emilio error: ', error)
    );
  }

}
