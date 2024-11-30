import { AccountService } from './../_services/account.service';
import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private AccountService = inject(AccountService);
  cancelRegister = output<boolean>();
  private toastr = inject(ToastrService)
  model: any = {}

  register(){
    this.AccountService.register(this.model).subscribe({
      next: response =>{
        console.log(response);
        this.cancel()
      },
      error: error  => this.toastr.error(error.error)
      
    })
    
  }

  cancel(){
    this.cancelRegister.emit(false)
    
  }
}
