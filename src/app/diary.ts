export class Diary {
    showEntry: boolean;
    constructor(public title:string, public entry:string,  public entryDate: Date) {
        this.showEntry = false;
    }
}