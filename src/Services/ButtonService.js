export const getAllButtons = async () => {
        const URI = "https://buttons-backend.herokuapp.com"
        const response = await fetch(`https://buttons-backend.herokuapp.com/api/buttons`)
        return await response.json()
}