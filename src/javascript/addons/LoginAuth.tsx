import React, { createContext, useContext, useState } from 'react'
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom'

type AuthUser = {
    userId: string
}

type OperationType = {
    login: (userId: string) => void
    logout: () => void
}

const AuthUserContext = createContext<AuthUser | null>(null)
const AuthOperationContext = createContext<OperationType>({
    login: () => console.error('Providerが設定されていません'),
    logout: () => console.error('Providerが設定されていません'),
})

const AuthUserProvider: React.FC = ({ children }) => {
    const [authUser, setAuthUser] = useState<AuthUser | null>(null)

    const login = async (userId: string) => {
        // await login() //ログイン処理
        setAuthUser({ userId })
    }

    const logout = async () => {
        // await login() //ログアウト処理
        setAuthUser(null)
    }

    return (
        <AuthOperationContext.Provider value={{ login, logout }}>
            <AuthUserContext.Provider value={authUser}>
                {children}
            </AuthUserContext.Provider>
        </AuthOperationContext.Provider>
    )
}

const PrivateRoute: React.FC<RouteProps> = ({ ...props }) => {
    const authUser = useAuthUser()
    const isAuthenticated = authUser != null
    if (isAuthenticated) {
        return <Route {...props} />
    } else {
        console.log('not authenticated')
        return (
            <Redirect
                to={{
                    pathname: '/login',
                    state: { from: props.location?.pathname },
                }}
            />
        )
    }
}

const UnAuthRoute: React.FC<RouteProps> = ({ ...props }) => {
    const authUser = useAuthUser()
    const isAuthenticated = authUser != null
    const { from } = useLocation<{ from: string | undefined }>().state

    if (isAuthenticated) {
        console.log(
            `ログイン済みのユーザーは${props.path}へはアクセスできません`
        )
        return <Redirect to={from ?? '/'} />
    } else {
        return <Route {...props} />
    }
}

export const useAuthUser = () => useContext(AuthUserContext)
export const useLogin = () => useContext(AuthOperationContext).login
export const useLogout = () => useContext(AuthOperationContext).logout
export { AuthUserProvider, PrivateRoute, UnAuthRoute }
