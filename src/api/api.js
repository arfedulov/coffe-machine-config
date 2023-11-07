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
        { id: 'standardSix01', label: 'Standard Six 01' },
        { id: 'standardSix02', label: 'Standard Six 02' },
        { id: 'standardSix03', label: 'Standard Six 03' },
    ],
    'standard+eight': [
        { id: 'standardEight01', label: 'Standard Eight 01' },
        { id: 'standardEight02', label: 'Standard Eight 02' },
        { id: 'standardEight03', label: 'Standard Eight 03' },
    ],
    'standard+twelve': [
        { id: 'standardTwelve01', label: 'Standard Twelve 01' },
        { id: 'standardTwelve02', label: 'Standard Twelve 02' },
        { id: 'standardTwelve03', label: 'Standard Twelve 03' },
    ],
    'extended+six': [
        { id: 'extendedSix01', label: 'Extended Six 01' },
        { id: 'extendedSix02', label: 'Extended Six 02' },
        { id: 'extendedSix03', label: 'Extended Six 03' },
    ],
    'extended+eight': [
        { id: 'extendedEight01', label: 'Extended Eight 01' },
        { id: 'extendedEight02', label: 'Extended Eight 02' },
        { id: 'extendedEight03', label: 'Extended Eight 03' },
    ],
    'extended+twelve': [
        { id: 'extendedTwelve01', label: 'Extended Twelve 01' },
        { id: 'extendedTwelve02', label: 'Extended Twelve 02' },
        { id: 'extendedTwelve03', label: 'Extended Twelve 03' },
    ],
}

const baseUrl = new URL(window.location.href).origin

export const getConfigurations = async () => mockConfigurations
export const getModels = async (key) => mockModels[key]
