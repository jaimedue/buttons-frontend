export const getAllButtons = async () => {

        const response = await fetch('/api/buttons')
        return await response.json()
}