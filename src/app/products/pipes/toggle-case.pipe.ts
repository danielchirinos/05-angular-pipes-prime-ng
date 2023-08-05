import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
    
    // transform(value: any, ...args: any[]): any {
    transform(value: string, toUpper: boolean = false): string {

        return (toUpper) ? value.toUpperCase() : value.toLocaleLowerCase();
    }
}