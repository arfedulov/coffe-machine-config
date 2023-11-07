const mockConfigurations = {
    machineTypes: [
        { id: 'standard', label: 'Стандартная' },
        { id: 'extended', label: 'Увеличенная' },
    ],
    drinkOptionCounts: [
        { id: 'six', label: '6 напитков' },
        { id: 'eight', label: '8 напитков' },
        { id: 'twelve', label: '12 напитков' },
    ]
}
const mockModels = {
    'standard+six': [
        { id: 'one', label: 'One' }
    ]
}

const baseUrl = new URL(window.location.href).origin

export const getConfigurations = async () => mockConfigurations
export const getModels = async (key) => mockModels[key]
