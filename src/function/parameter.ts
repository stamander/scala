//オプションパラメータ
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is signed in! Username is', username)
    return true
  } else {
    console.log('Function parameters sample 2: User is not signed in')
    return false
  }
}

