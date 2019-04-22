export class Task{
  public name : string;
  public check : boolean;
  constructor(name: string){
    this.name = name;
    this.check = false;
  }
}
