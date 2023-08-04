import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

    public menuItems: MenuItem[] | undefined;

    ngOnInit() {
        this.menuItems = [
            {
                label: "Pipes de Angular",
                icon: "pi pi-desktop",
                items: [
                    {
                        label: "Textos y fechas",
                        icon: "pi pi-align-left",
                        routerLink: "/",
                    },
                    {
                        label: "Numeros",
                        icon: "pi pi-dollar",
                        routerLink: "numbers"
                    },
                    {
                        label: "No comunes",
                        icon: "pi pi-globe",
                        routerLink: "uncommon"
                    }
                ]
            },{
                label: "Pipes perzonalizados",
                icon: "pi pi-cog",
                items: [
                    {
                        label: "Otro item",
                        icon: "pi pi-cog",
                    }
                ]
            }
        ];
    }
}