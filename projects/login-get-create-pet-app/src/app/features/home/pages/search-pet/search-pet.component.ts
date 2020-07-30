import { FormGroup } from '@angular/forms';
import { Pet } from './../../../../core/interfaces/pets/pet-interface';
import { PetService } from './../../../../core/services/pet-service/pet.service';
import { RoutePath } from './../../../../core/enums/route.paths';
import { Component, OnInit } from '@angular/core';
import { FormFormat } from 'projects/login-get-create-pet-app/src/app/core/interfaces/auth/form.interface';

@Component({
  selector: 'eszsw-search-pet',
  templateUrl: './search-pet.component.html',
  styleUrls: ['./search-pet.component.scss']
})
export class SearchPetComponent implements OnInit {
  public backTextLink: string;
  public backLinkLbl: string;
  public backLinkPath: string;
  public noImgPath: string;
  public infoSearch: string;
  public searchPetForm: FormFormat;
  public pet: Pet | null;

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.initialize();
  }

  public initialize(): void {
    this.backTextLink = "Better to go back?";
    this.backLinkLbl = 'Pets';
    this.noImgPath = "'assets/img/noImage.jpg'";
    this.infoSearch = 'Find your specific pet';
    this.backLinkPath = RoutePath.PETS;
    this.searchPetForm = {
      "inputsControls": [
        {
          "inputId": "searchpetinput",
          "label": "Introduce the Pet ID",
          "errorMsg": {
            "required": "Enter valid PET id"
          },
          "name": "searchId",
          "type": "number",
          "validations": {
            "required": true
          }
        }
      ],
      "btnLabel": "Search Pet"
    }
  }

  public getPet(form: FormGroup): void {
    const id: string = form.get('searchId')?.value;
    this.petService.getPet(id).subscribe(
      (pet: Pet) => this.pet = pet,
      error => {
        this.pet = null;
        this.infoSearch = 'No Pet found with that ID'
      }
    );
  }

}
