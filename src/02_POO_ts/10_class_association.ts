export class Author {
  private _tool: Tool | null = null;
  constructor(private _name: string) {}

  set tool(tool: Tool | null) {
    this._tool = tool;
  }
  get name(): string {
    return this._name;
  }
  get tool(): Tool | null {
    return this._tool;
  }
  write(): void {
    if (this.tool === null) {
      console.log(`i can't write without a tool`);
      return;
    }
    this.tool.writer();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}
  abstract writer(): void;
  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  writer(): void {
    console.log(`${this.name} is writing... `);
  }
}
export class TypingWriter extends Tool {
  writer(): void {
    console.log(`${this.name} is typing... `);
  }
}

const author = new Author("author desc.");
const pen = new Pen("pen quill");
const machineWriter = new TypingWriter("MachineTs-Write4000");
/* console.log(author.name);
console.log(pen.name);
console.log(machineWriter.name); */

author.tool = pen;
author.write();
author.tool = machineWriter;
author.write()
