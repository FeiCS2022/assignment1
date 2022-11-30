// < easier > Create a class that will produce social media posts. It should make objects with properties author, content, date, and likes. There should be a method called editContent that takes in a new string that will replace the content.
class socialMedia {
    constructor (author, content, date, likes) {
        this.author = author;
        this.content = content;
        this.date = new Date(date);
        this.likes = likes;
    }
    repContent (newContent) {
        this.content = newContent
    }
}
 
const socialMedia1 = new socialMedia("Tom", "Today is cold.", "2022, 12", 3)
console.log(socialMedia1)
socialMedia1.repContent("today is hot")
console.log(socialMedia1)


// < harder > Create a class that will produce social media posts. The object should have properties author, content, date, and likes. There should be a method called editContent that takes in a new string that will replace the content.
// Add another method called changeLikes that takes a string "add" or "remove" that increments or decrements that likes by 1 based on the string.
class socialMedia_ {
    constructor (author, content, date, likes) {
        this.author = author;
        this.content = content;
        this.date = new Date(date);
        this.likes = likes;
    }
    repContent (newContent) {
        this.content = newContent
    }
    changeLikes (type, num) {
        if (type == "add") {
            this.likes += num
        } else if (type == "remove") {
            this.likes -= num
        }
    }
}

const socialMedia2 = new socialMedia_("Tom", "Today is cold.", "2022, 12", 3);
socialMedia2.changeLikes("add", 3);
console.log(socialMedia2)


//Bertand's code
class post {
    constructor(author, content) {
        this.author = author;
        this.content = content;
        this.date = new Date().toLocaleString();
        this.likes = 0;
    }
    editContent(newContent) {
        this.content = newContent;
        this.date = new Date().toLocaleString();
    }
    changeLikes(string) {
        if ('add' == string.toLowerCase()) {
            this.likes++
        }
        else if (string.toLowerCase() == 'remove') {
            if (this.likes > 0) {
                this.likes--;
            }
            else {
                this.likes = 0;
            }
        }
    }
}