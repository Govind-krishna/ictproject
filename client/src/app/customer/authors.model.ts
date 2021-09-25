export class AuthorModel{ 
    constructor(
        public name : String,
        public description : String,
        public genre : Array<any>,
        public about : String,
        public image : String
    ){} 
}