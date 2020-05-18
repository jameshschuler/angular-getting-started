import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'uf-users',
    styleUrls: ['./user-list.component.css'],
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
    _listFilter: string;

    constructor() {
        this.filteredList = this.users;
        this.listFilter = '';
    }

    pageTitle = 'User List';
    showImage = false;
    users: User[] = [{
        userId: 1,
        name: 'John Doe',
        title: 'Dr.',
        email: 'jdoe@gmail.com',
        imageUrl: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        phone: '585-962-7516',
        starRating: 3
    },{
        userId: 2,
        name: 'Bob Smith',
        title: 'Mr.',
        email: '',
        imageUrl: 'https://randomuser.me/api/portraits/med/men/2.jpg',
        phone: '555-962-7516',
        starRating: 2
    }];
    filteredList: User[];

    get listFilter(): string { return this._listFilter; }
    set listFilter(value: string) { 
        this._listFilter = value;
        this.filteredList = this.listFilter ? this.performFilter(this.listFilter) : this.users;
    }

    ngOnInit(): void {
        console.log("Method not implemented.");
    }
    
    filter(): void {
        this.filteredList = this.users.filter(u => u.name.includes(this.listFilter));
    }

    onRatingClicked(message: string) : void {
        this.pageTitle = `User List: ${message}`
    }

    performFilter(filterBy: string) : User[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.users.filter((user: User) => user.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage() : void {
        this.showImage = !this.showImage;
    }
}

export interface User {
    userId: number;
    name: string;
    title: string;
    email: string;
    imageUrl?: string;
    phone?: string;
    starRating: number;
}