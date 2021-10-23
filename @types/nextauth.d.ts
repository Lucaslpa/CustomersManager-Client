const signInResponse = {
  error: 'error: this administrator none exist',
  status: 200,
  ok: true,
  url: null,
}

declare module 'next-auth' {
  type sigIn = typeof signInResponse
  export interface SignInResponse extends sigIn {}
}
