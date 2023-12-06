export default class ErrorResponse extends Error {
  message: string;
  code: number;

  constructor(message: string) {
    super(message);
  }
}
