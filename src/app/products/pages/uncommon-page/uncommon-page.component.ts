import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

    // i18n Select
        public name: string = "Daniel"
        public gender: 'male'|'female' = "male"
        public invitationMap = {
            male: "invitarlo",
            female: "invitarla",
        }

        changeClient():void{
            this.name = "melisa"
            this.gender = "female";
        }
    // fin i18n Select

    // i18n Plural
        public clients: string[] = ["Maria", "Pedro", "Daniel", "Eduardo", "Melisa", "Natalia"];
        public clientMap = {
            "=0": "no tenemos ningun cliente esperando.",
            "=1": "tenemos 1 cliente esperando",
            "other": "tenemos # clientes esperando"
        }
        deleteClient():void{
            this.clients.shift()
        }

    // fin i18n Plural
    
    // key value pie
        
        public person = {
            name: "Daniel",
            age: "35",
            address: "Chile"
        }

    // fin key value pie
    
    // async pipe

        // con observable
        public myObservableTimer = interval(1000)
        .pipe(
            tap( value => { console.log(value) })
        )

        // con promesa

        public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve("data en la promesa")
            }, 3000);
        })

    // fin async pipe


}
