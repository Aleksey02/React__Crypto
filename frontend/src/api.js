import { cryptoAssets, cryptoData } from './data'
// В будущем переделать на настоящий fetch https://openapi.coinstats.app/
export function fakeFetchCrypto(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData)
        }, 2000)
    })
}
export function fetchAssets(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets)
        }, 2000)
    })
}