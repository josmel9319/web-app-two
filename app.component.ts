import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  reminder1 = 'Call Mom';
  reminder2 = 'Get Milk';
  reminder3 = 'Interview';

  constructor(private newService: CommonService,) {
  }

  Repdata;
  valbutton = 'Save';


  ngOnInIt() {
    this.newService.GetUser().subscribe(data => this.Repdata = data);
  }

  onSave = function (user) {
    user.mode = this.valbutton;
    this.newService.saveUser(user)
      .subscribe(data => {
        alert(data.data);

        this.ngOnInIt();
      });
    // error => this.errorMessage = error; };
  };
}
