import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent {
  public form!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.initializeForm();
  }

  public initializeForm() {
    this.form = this.formBuilder.nonNullable.group({
      name: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required])
    })
  }
}
