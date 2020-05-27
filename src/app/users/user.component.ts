import { Component, OnInit } from "@angular/core";
import { User } from './models/user';
import { UserService } from './user.service';

@Component({
    selector: 'uf-users',
    styleUrls: ['./user-list.component.css'], 
    templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
    private _listFilter: string;

    constructor(private userService: UserService) {
    }

    errorMessage: string;
    pageTitle = 'User List';
    showImage = false;
    users: User[];
    filteredList: User[];

    get listFilter(): string { return this._listFilter; }
    set listFilter(value: string) { 
        this._listFilter = value;
        this.filteredList = this.listFilter ? this.performFilter(this.listFilter) : this.users;
    }

    ngOnInit(): void {
        this.userService.getUsers().subscribe({
            next: searchResponse => {
                this.users = searchResponse.results;
                this.filteredList = this.users;
            },
            error: err => this.errorMessage = err
        });
    }
    
    onRatingClicked(message: string) : void {
        this.pageTitle = `User List: ${message}`
    }

    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    private performFilter(filterBy: string) : User[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.users.filter((user: User) => {
            return user.name.last.toLocaleLowerCase().indexOf(filterBy) !== -1 || user.name.first.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    }
}