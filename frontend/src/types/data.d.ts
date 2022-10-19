export type User = {
    id: number
    username: string
    password: string
}

export type Profile = {
    name: string
    imageUrl: string
    statusMessage: string
    description: string
}

export type ApiContext = {
    apiRootUrl: string
}