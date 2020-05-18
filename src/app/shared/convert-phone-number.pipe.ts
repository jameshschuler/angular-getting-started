import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'convertPhoneNumber'})
export class ConvertPhoneNumber implements PipeTransform {
    transform(value: string, character: string) : string {
        return value.replace(new RegExp(/-/g), '.');
    } 
}