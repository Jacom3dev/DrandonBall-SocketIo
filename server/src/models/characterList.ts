import { Character } from './character';

export class CharacterList {
    private characters: Character[];

    constructor(){
        this.characters = [
            new Character('Gokú'),
            new Character('Veguetta'),
            new Character('Gohan'),
            new Character('Trunks'),
            new Character('Goten'),
            new Character('Picolo')
        ];
    }

    create(name:string):Character[]{
        const newCharacter = new Character(name);
        this.characters.push(newCharacter);

        return this.characters;
    }
    
    get():Character[]{
        return this.characters;
    }

    update(id:string,name:string){
        this.characters = this.characters.map(character=>{
            if (character.id === id) {
                character.name = name;
            }
            return character;
        })
    }

    delete(id:string){
        this.characters = this.characters.filter(character=>character.id !== id);
    }

    vote(id:string){
        this.characters = this.characters.map(character=>{
            if (character.id === id) {
                character.votes++
            }
            return character;
        })
    }
}