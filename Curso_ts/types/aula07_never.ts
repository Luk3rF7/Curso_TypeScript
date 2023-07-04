// aquela funcao ou metodo que nao retorna nada

export function createError(): void {
  throw new Error("Erro qualquer!");
}

createError();
