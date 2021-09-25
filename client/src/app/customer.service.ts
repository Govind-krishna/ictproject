import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthors(){ 
    return this.http.get("http://localhost:3000/authors");
  }
 
  getAuthor(id: any){         //for edit author page
    return this.http.get("http://localhost:3000/author/"+id);
  }
  
  newAuthor(item: any){
    return this.http.post("http://localhost:3000/insertauthor", {"author" : item})
    .subscribe(data => {console.log(data)})
  }

  updateAuthor(author: any){
    return this.http.put("http://localhost:3000/updateauthor", author)
    .subscribe((data)=>{console.log(data)})
  }

  deleteAuthor(id: any){
    return this.http.delete("http://localhost:3000/removeauthor/"+id);
  }
}
