export const getAllButtons = async () => {
        const URI = "https://buttons-backend.herokuapp.com"
        const response = await fetch(`${URI}/api/buttons`)
        return await response.json()
}