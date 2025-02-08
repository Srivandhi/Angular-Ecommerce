import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
   <button class="bg-pink-400 w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-85 cursor-pointer" (click) = "btnClicked.emit()">
    {{label()}}
   </button>

  `,
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {
  label = input('');

  btnClicked = output();

 
}
