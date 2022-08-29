export class ErrorResponse {
  constructor(public message: string, public status: number | undefined) {}
}

export class DbConcurrencyError implements ErrorResponse {
  constructor(public message: string, public status: number | undefined) {}
}

export class InternalServerError implements ErrorResponse {
  constructor(public message: string, public status: number | undefined) {}
}

export class NetworkError implements ErrorResponse {
  constructor(public message: string, public status: number | undefined) {}
}

export class BadRequestError implements ErrorResponse {
  constructor(public message: string, public status: number | undefined) {}
}
