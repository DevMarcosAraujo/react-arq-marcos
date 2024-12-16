export const getApiData = asunc (endpoint, params) => {
    try{
        const url = new URL (`https://dnc-react-api.vercel.app/files/${endpoint}`)
        const response = await fetch(url, {
            method: 'GET'
        })
    } catch (e) {

    }
}