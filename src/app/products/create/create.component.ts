import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductAPIService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public productForm: FormGroup;
  public submitted:boolean = false;

  constructor(private formBuilder: FormBuilder, private productSrv : ProductAPIService, private router:Router) {
    // init productForm
    this.productForm = this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      price: ['',[Validators.required]],
      description: ['', [Validators.required]],
      available: [false, [Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  public onSubmit(form:any) {
    if(form.valid){
      // console.log(this.productForm.value);
      this.productSrv.addProduct(this.productForm.value).subscribe( (data:any) =>{
        console.log("Product created successfully");
       // console.log(data);
       this.router.navigateByUrl("/products");
      });
    }else{
      console.log("Invalid Form");
     this. validateForm(form);
    }
  }

  validateForm(form: any) {
    Object.keys(form.controls).forEach(field =>{
      const control = form.controls[field];
      if(control instanceof FormControl){
        control.markAsTouched({ onlySelf: true });
      } else{
        this.validateForm(control)
      }
    })
  }

  hasError(field: string) { 
    let formField = this.productForm.get(field);
    return  formField?.invalid &&  formField?.touched  && formField?.errors;
  }

  get form() {
    return this.productForm.controls;
  }

  get Name() {
    return this.productForm.get('name');
  }

  get Price() {
    return this.productForm.get('price');
  }
}
