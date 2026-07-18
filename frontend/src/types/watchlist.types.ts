export interface favourite {
    _id: string,
    uri: string,
    posterImage: string,
    title: string,
    cast: string[],
    genre:string,
    description: string
}


export type watchList = {
    user:string,
    favourite:favourite[]
}

export type watchListResponse = {
    message: string,
    watchList: watchList
}