import { ToastService } from './../../../../core/services/toast-service/toast.service';
import { PetService } from './../../../../core/services/pet-service/pet.service';
import { Pet } from './../../../../core/interfaces/pets/pet-interface';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RoutePath } from 'projects/login-get-create-pet-app/src/app/core/enums/route.paths';
import { FormFormat } from 'projects/login-get-create-pet-app/src/app/core/interfaces/auth/form.interface';
import { GenericFormComponent } from 'projects/login-get-create-pet-app/src/app/shared/components/generic-form/generic-form.component';

@Component({
  selector: 'eszsw-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {
  public backTextLink:string; 
  public backLinkLbl:string; 
  public backLinkPath:string;
  public createPetForm: FormFormat;

  @ViewChild('formComponent') formComponent:GenericFormComponent;
  
  constructor(private petService: PetService, private toastService:ToastService) { }

  ngOnInit(): void {
    this.initialize();
  }

  public initialize(): void {
    this.backTextLink = "Better to go back?"; 
    this.backLinkLbl = 'Pets'; 
    this.createPetForm = {
      "inputsControls": [
        {
          "inputId": "createpetcategory",
          "label": "Category",
          "errorMsg": {
            "required": "Enter category"
          },
          "name": "category",
          "type": "text",
          "validations": {
            "required": true
          }
        },
        {
          "inputId": "createpetname",
          "label": "Name",
          "errorMsg": {
            "required": "Enter name"
          },
          "name": "name",
          "type": "text",
          "validations": {
            "required": true
          }
        }
      ],
      "selectControls": [
        {
          "selectId": "statusselectionid",
          "label": "Select Status",
          "name": "statusselection",
          "options": [
            "available",
            "pending",
            "sold"
          ]
        }
      ],
      "upload": true,
      "btnLabel": "Create Pet"
    }
    this.backLinkPath = RoutePath.PETS; 
  }

  public createPet(form: FormGroup): void{
    const id: string = form.get('searchId')?.value;
    const photoUrls: string[] =[form.get('imageUrl')?.value];
    if(form.get('imageFile')?.value){
      photoUrls.push(form.get('imageFile')?.value);
    }
    
    const pet: Pet ={
      "id": 0,
      "category": {
        "name":  form.get('searchId')?.value
      },
      "name": form.get('name')?.value,
      "photoUrls": photoUrls,
      "status":  form.get('statusselection')?.value
    }
    this.petService.createPet(pet).subscribe( 
      pet => {
        this.toastService.showSuccess('Successfully pet created', 3); 
        form.reset({});
      },
      error =>  this.toastService.showError('Pet not created', 3, 'Error!')
    );
  }

}
