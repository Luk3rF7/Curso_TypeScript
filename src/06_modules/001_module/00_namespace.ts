/* eslint-disable @typescript-eslint/no-namespace
import { nomeDoNamespace } from './00_namespace';
 */
namespace MeuNamespace {
  export const nomeDoNamespace = "LcSpace";

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace("new LC");

  export namespace Outrospace {
    export const nomeDoNamespace = "Nome do outrospace";
  }
}
const constDoNamespace = "valor da const do namespace";
