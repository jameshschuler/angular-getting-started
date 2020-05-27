import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'uf-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() age: number;
    
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick() : void {
       this.ratingClicked.emit(`Rating of ${this.age}`);
    }

    ngOnChanges(): void {
        this.starWidth = (Math.round(Math.random() * 5)) * 75 / 5;
    }    
}