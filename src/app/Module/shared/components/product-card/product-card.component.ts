import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../../State/Product/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product:any

  constructor(private router:Router,
    private productService: ProductService
  ){}

  navigate() {
    this.router.navigate([`product-details/${this.product.id}`])
  }



  deleteProduct(productId: number) {
    // Termék törlése
    this.productService.deleteProduct(productId);
  }

}
