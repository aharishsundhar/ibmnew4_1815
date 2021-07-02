import { Component, OnInit } from '@angular/core';
import { Ibmnew4Service } from './ibmnew4.service';

@Component({
  selector: 'app-ibmnew4',
  templateUrl: './ibmnew4.component.html',
  styleUrls: ['./ibmnew4.component.scss'],
})

export class Ibmnew4Component implements OnInit {
    public ibm = {
        name: '',
    }

    constructor (
        private ibmnew4Service: Ibmnew4Service,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.ibmnew4Service.GpCreate(this.ibm).subscribe(data => {
            this.ibm.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}