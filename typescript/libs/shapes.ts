interface IShape {
  getArea(): number;
}

class Square implements IShape {
  private a: number;

  constructor(a: number) {
    this.a = a;
  }

  getArea(): number {
    return this.a * this.a;
  }
}

class Circle implements IShape {
  constructor(private r: number) {}

  getArea(): number {
    return this.r * this.r * Math.PI;
  }
}

export { IShape, Circle, Square };
