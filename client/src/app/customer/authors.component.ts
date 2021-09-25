import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorService } from '../customer.service';
import { AuthorModel } from './authors.model';
 
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors : AuthorModel[] = []; 

  constructor(private authorService : AuthorService ,public _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.authorService.getAuthors()
    .subscribe((data)=>{
      this.authors = JSON.parse(JSON.stringify(data));
    })
  }

  singleAuthor(author: any){
    localStorage.setItem("singleAuthorId" , author._id.toString());
    this._router.navigate(['/singleauthor']);
  }

  updateAuthor(author: any){
    localStorage.setItem("updateAuthorId" , author._id.toString());
    this._router.navigate(['/updateauthor']);
  }

  deleteAuthor(author: any){
    this.authorService.deleteAuthor(author._id)
    .subscribe((data)=>{
      this.authors = this.authors.filter(a => a !== author);  //deletes product from list (line 14) and shows the list of products that is != the deleted product
    })
  }
}
