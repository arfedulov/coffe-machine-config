const baseUrl = new URL(window.location.href).origin

const options = {
    headers: {'Content-Type': 'application/json'}
}

export const getConfigurations = async () => fetch(`${baseUrl}/api/configurations`, options).then(res => res.json())
export const getModels = async (listId) => fetch(`${baseUrl}/api/models?listId=${listId}`).then(res => res.json())
