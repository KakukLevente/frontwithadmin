import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../../State/Product/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ){}

  productForm: FormGroup = this.formBuilder.group({
    title: ["", Validators.required],
    description: ["", Validators.required],
    price: [null, Validators.required],
    discountedPrice: [null, Validators.required],
    discountPersent: [null, Validators.required],
    quentity: [null, Validators.required],
    brand: ["", Validators.required],
    color: ["", Validators.required],
    imageUrl: ["", Validators.required],
    topLavelCategory: ["", Validators.required],
    secondLavelCategory: ["", Validators.required],
    thirdLavelCategory: ["", Validators.required]
  })

  sizeForm: FormGroup = this.formBuilder.group({
    s:[null],
    m:[null],
    l:[null],
  })


  submitForm(){

    this.sizeForm.markAllAsTouched();
    this.productForm.markAllAsTouched();

    if(!this.productForm.valid){
      return
    }
    if(!this.sizeForm.valid){
      return
    }

    const dto: dto ={
      ...this.productForm.value,
      size:[
        {
          name: "S",
          quantity: this.sizeForm.getRawValue().s
        },
        {
          name: "M",
          quantity: this.sizeForm.getRawValue().m
        },
        {
          name: "L",
          quantity: this.sizeForm.getRawValue().l
        }
      ]
    }
    console.log(dto)
    this.productService.saveProduct(dto);

  }

  get formValid(){
    return this.productForm.valid && this.sizeForm.valid
  }
}
interface dto {
  
    imageUrl: string,
    brand: string,
    title: string,
    color: string,
    discountedPrice: number,
    price: number,
    discountPersent: number,
    size: [
        {
          name: "S",
          quantity: number
        },
        {
          name: "M",
          quantity: number
        },
        {
          name: "L",
          quantity: number
        }
      ],
      quantity: number,
      topLavelCategory: string,
      secondLavelCategory: string,
      thirdLavelCategory: string,
      description: string
}
