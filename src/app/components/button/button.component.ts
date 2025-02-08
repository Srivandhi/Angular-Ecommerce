import { Component, input ,output} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template:`
      <button class="bg-white text-black w-full  px-5 py-3 rounded-xl shadow-md hover: bg-slate-200"
      (click) = "btnClicked.emit()"
      >
        {{label()}}
      </button>
  `,
  styleUrl: './button.component.css'
})
export class ButtonComponent {
    label=  input('');
    btnClicked = output();
}
