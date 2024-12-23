import { Injectable, TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class ToastService {
    constructor(private toastr: ToastrService) { }
  
    showSuccess(message: any, title: any){
        this.toastr.success(message, title)
    }
    
    showError(message: any, title: any){
        this.toastr.error(message, title)
    }
    
    showInfo(message: any, title: any){
        this.toastr.info(message, title)
    }
    
    showWarning(message: any, title: any){
        this.toastr.warning(message, title)
    }
}