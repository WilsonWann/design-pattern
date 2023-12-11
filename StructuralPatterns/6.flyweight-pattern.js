class Character {
  constructor(char, font, size) {
    this.char = char;
    this.font = font;
    this.size = size;
  }

  render() {
    console.log(`Rendering character "${this.char}" in "${this.font}", size ${this.size}`);
  }
}

class CharacterFactory {
  constructor() {
    this.characters = {}
  }

  getCharacter(char, font, size) {
    const key = `${char}-${font}-${size}`;
    if (!this.characters[key]) {
      this.characters[key] = new Character(char, font, size);
    }
    return this.characters[key];
  }
}

// Usage
const factory = new CharacterFactory()

const charA1 = factory.getCharacter('A', 'Arial', 12)
const charA2 = factory.getCharacter('A', 'Arial', 12)
const charB = factory.getCharacter('B', 'Times New Roman', 14)

charA1.render()
charA2.render()
charB.render()