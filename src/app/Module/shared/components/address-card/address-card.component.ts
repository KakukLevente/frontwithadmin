import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrl: './address-card.component.css'
})
export class AddressCardComponent {
  @Input() address:any

}