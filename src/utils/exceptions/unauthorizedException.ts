export class UnauthorizedException extends Error {
  constructor(message?: string) {
    super(message); // 'Error' breaks prototype chain here
    this.name = 'UnauthorizedException';
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
