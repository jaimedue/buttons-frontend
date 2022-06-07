export const getByButton = async (btnId) => {
    const URI = "https://buttons-backend.herokuapp.com/"
    const response = await fetch(`${URI}/api/styles/button/${btnId}`)
    return await response.json()
}