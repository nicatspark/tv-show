export function extractError(e: unknown): string {
  let errorString
  if (e instanceof TypeError) {
    errorString = e.message
  } else if (e instanceof RangeError) {
    errorString = e.message
  } else if (e instanceof EvalError) {
    errorString = e.message
  } else if (typeof e === 'string') {
    errorString = e
    // } else if (axios.isAxiosError(e)) {
    //   // axios does an error check for us!
    //   errorString = e.message
  }
  if (!errorString) errorString = 'Uknown error.'
  return errorString
}
