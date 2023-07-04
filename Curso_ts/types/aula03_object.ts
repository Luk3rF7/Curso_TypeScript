// * OBJETOS TYPE =

const objectA: {
  //tipando objetos
  keyA: string;
  keyB: string;
  keyC?: string;
  readonly keyD?: string;
  // * index Signatures
  [key: string]: unknown;
} = {
  keyA: "value A",
  keyB: "value B",
};

objectA.keyA = "outher value";
objectA.keyC = "new value";
