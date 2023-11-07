import express from 'express'

const app = express()
app.use(express.static('./dist'))
app.use((req, res, next) => {
    res.appendHeader('Content-Type', 'application/json')
    next()
})

const mockConfiguration = {
    types: [
        { name: 'standard', label: 'Стандартная' },
        { name: 'extended', label: 'Увеличенная' },
    ],
    drinkOptions: [
        { name: 'six', label: '6' },
        { name: 'eight', label: '8' },
        { name: 'twelve', label: '12' },
    ]
}

const mockModels = {
    'standard+six': [
        { name: 'one', label: 'One' }
    ]
}

app.get('/api/configurations', (req, res) => {
    res.end(JSON.stringify(mockConfiguration))
})

app.get('/api/models', (req, res) => {
    const machineType = req.query.machineType;
    const drinkOptionsCount = req.query.drinkOptionsCount;

    const key = `${machineType}+${drinkOptionsCount}`;
    const data = mockModels[key]
    if (!data) {
        res.status(404)
        res.end()
    } else {
        res.end(JSON.stringify(data))
    }
})

app.listen(3000, () => console.log('listening on http://localhost:3000'))
