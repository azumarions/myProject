import type { NextPage } from "next";
import { useRouter } from "next/router";
import SigninFormContainer from 'containers/SigninFormContainer'

const SigninPage: NextPage = () => {
  const router = useRouter()
  const handleSignin = async (err?: Error) => {
    if (!err) {
      const redurectTo = (router.query['redirect_to'] as string) ?? '/'

      console.log('Redirecting', redurectTo)
      await router.push(redurectTo)
    }
}

  return (
    <SigninFormContainer onSignin={handleSignin} />
  )
}

export default SigninPage