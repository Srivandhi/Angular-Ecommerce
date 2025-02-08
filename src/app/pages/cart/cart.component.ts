import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  template: `
    <div class="p-6 grid gap-4">
      <h2 class="text-2xl" >shopping Cart</h2>
      <div>
          @for (item of cartservice.cart(); track item.id) {
              <app-cart-item [item]="item" />
          }
      </div>
    </div>
    <app-order-summary />
  `,
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartservice = inject(CartService);
}
