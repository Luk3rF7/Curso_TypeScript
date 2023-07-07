// * type Record
const obj1: Record<string, string | number> = {
  name: "name",
  lastname: "lastname",
  age: 30,
};
console.log(obj1);
type PersonProtocol = {
  name?: string;
  lastname?: string;
  age?: number;
};

// * Required = requeruido
type PersonRequired = Required<PersonProtocol>;
// * partial = opcional
type PersonPartial = Partial<PersonRequired>;
// * Readonly
type PersonReadonly = Readonly<PersonRequired>;
// * Pick = seleciona o que ser usado
type PersonPick = Pick<PersonRequired, "name" | "lastname">;
const obj2: PersonRequired = {
  name: "name",
  lastname: "lastname",
  age: 30,
};

// Extract e Exclude

type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";
// * COMPUTA TODO OS TIPOS ABC E NAO CDE
type TypeExclude = Exclude<ABC, CDE>;
// * COMPUTA TODOS OS TIPO QUE PODE SER ATRIBUIDO
type TypeExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};
//hardcode
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, "_id">> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: "asdasdasffadas",
  name: "Luiz",
  age: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountDate } = accountMongo;
  return { ...accountDate, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);
// Module Mode
export default 1;
