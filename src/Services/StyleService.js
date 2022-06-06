export const getByButton = async (btnId) => {

    const response = await fetch(`api/styles/button/${btnId}`)
    return await response.json()
}