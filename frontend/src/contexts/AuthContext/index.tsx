import React, { useContext } from 'react'
import useSWR from 'swr'
import signin from 'services/auth/signin'
import signout from 'services/auth/signout'
import type { ApiContext, User } from 'types'

type AuthContextType = {
    authUser?: User
    isLoading: boolean
    signin: (email: string, password: string) => Promise<void>
    signout: () => Promise<void>
    mutate: (
        data?: User | Promise<User>,
        shoudRevalidate?: boolean,
    ) => Promise<User | undefined>
}

type AuthContextProviderProps = {
    context: ApiContext
    authUser?: User
}

const AuthContext = React.createContext<AuthContextType>({
    authUser: undefined,
    isLoading: false,
    signin: async () => Promise.resolve(),
    signout: async () => Promise.resolve(),
    mutate: async () => Promise.resolve(undefined),
})

export const useAuthContext = (): AuthContextType =>
useContext<AuthContextType>(AuthContext)

export const AuthContextProvider = ({
    context,
    authUser,
    children,
}: React.PropsWithChildren<AuthContextProviderProps>) => {
    const { data, error, mutate } = useSWR<User>(
        `${context.apiRootUrl}/api/register`,
    )
    const isLoading = !data && !error

    const signinInternal = async (email: string, password: string) => {
        await signin(context, { email, password })
        await mutate()
    }

    const signoutInternal = async () => {
        await signout(context)
        await mutate()
    }

    return (
        <AuthContext.Provider
        value={{
            authUser: data ?? authUser,
            isLoading,
            signin: signinInternal,
            signout: signoutInternal,
            mutate,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}