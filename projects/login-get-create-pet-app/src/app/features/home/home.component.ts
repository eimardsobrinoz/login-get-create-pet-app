import { Pet } from './../../core/interfaces/pets/pet-interface';
import { PetService } from './../../core/services/pet-service/pet.service';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'eszsw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  

  constructor(private petService:PetService) { }


  getPet() {
    this.petService.getPet('7777778888889956000').subscribe( pet => 
      console.log('Pet emilio: ', pet),
      error => console.log('Pet emilio error: ', error)
    );
  }
  
  createPet(){
    const pet: Pet ={
      "id": 0,
      "category": {
        "id": 0,
        "name": "husky"
      },
      "name": "ancheloti",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": 'available'
    }
    this.petService.createPet(pet).subscribe( pet => 
      console.log('CEATING Pet emilio: ', pet),
      error => console.log('ERRORE CREATING Pet emilio error: ', error)
    );
  }
  
}
