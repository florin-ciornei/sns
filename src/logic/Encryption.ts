export function testMethod(): string {
  return "it works";
}

//some more typescript examples. This stuff can be also in separate files, it will need be imported.
class DemoClass {
  name(params: number): string {
    return "asd";
  }
}

interface DemoInterface {
  a(): number;
}

class DemoClassInterface implements DemoInterface {
  a(): number {
    throw new Error("Method not implemented.");
  }
}
