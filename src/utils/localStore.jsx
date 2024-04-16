import Cookies from "universal-cookie"
const cookies = new Cookies()

export const storeUserSession = async (accessToken, data) => {
  try {
    await cookies.set(
      "user_session",
      JSON.stringify({
        token: accessToken,
        data: data,
      })
    )
  } catch (error) {
    // There was an error on the native side
    console.log(error)
  }
}

export const retrieveUserSession = async () => {
  try {
    // console.log('Hello we retrieve sessions');
    const session = await cookies.get("user_session")
    if (session !== undefined) {
      // Congrats! You've just retrieved your first value!
      return session
    }
  } catch (error) {
    // There was an error on the native side
    console.log(error)
  }
}

export const removeUserSession = async () => {
  try {
    await cookies.remove("user_session")
    // Congrats! You've just removed your first value!
  } catch (error) {
    // There was an error on the native side
    console.log(error)
  }
}
