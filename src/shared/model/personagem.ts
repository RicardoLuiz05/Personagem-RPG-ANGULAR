export class Personagem {
  _id: string;
  _nome: string;
  _classe: string;
  _level: string;

  constructor() {
    this._id = '';
    this._nome = '';
    this._classe = '';
    this._level = '';
  }
  
  get id(): string {
    return this._id;
  }
  
  get nome(): string {
    return this._nome;
  }
  
  get classe(): string {
    return this._classe;
  }
  
  get level(): string {
    return this._level;
  }
  
  set id(id: string){
    this._id = id;
  }
  
  set nome(nome: string){
    this._nome = nome;
  }
  
  set classe(classType: string){
    this._classe = classType;
  }
  
  set level(level: string){
    this._level = level;
  }
}

