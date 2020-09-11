const parseData = (input) => {
    const { data, column } = input;
    const columnName = column.map(item => item.name)
    const result = []
    data.map(person => {
        const tempt = {}
        for (let inedx in columnName) {
            tempt[columnName[inedx]] = person[inedx]
        }
        result.push(tempt)
    })
    return result
};

export { parseData };