Learn Page
=====
x = [ ];

Objects = Flashcard{
	this.english = string;
	this.lushootseed = string;
	this. picture = url;
	this. ID = ID#;
	this.sound = 0;
	this.shown = false
	this push(x)
	};
	
- randomly select by ID or position
- show card to user and change shown to TRUE; local store shown items
- when 6 cards change shown value to FALSE and show test button


Test Page 
=====
* Take x [ ] from local storage
* randomly display in two columns; 1 English, 1 Lushootseed
*  if (English ==== Lushootseed )
*  {turn green, display : none, put in score chart}