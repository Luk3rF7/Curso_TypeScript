export class Calcul {
  constructor(public number: number) {}
  sum(n: number): this {
    this.number += n;
    return this;
  }
  sub(n: number): this {
    this.number -= n;
    return this;
  }
  div(n: number): this {
    this.number /= n;
    return this;
  }

  mul(n: number): this {
    this.number *= n;
    return this;
  }
}

export class subCalc extends Calcul {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}
const calcul = new subCalc(10);
calcul.sum(5).mul(2).div(2).sub(5).pow(2);
console.log(calcul);

//builder - GoF
export class RequestBuilder {
  private method: "get" | "post" | null = null;
  private url: string | null = null;

  setMethod(method: "get" | "post"): this {
    this.method = method;
    return this;
  }
  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    //
    console.log(`Sending date via ${this.method} for ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl("https://www.google.com").setMethod("post").send();
