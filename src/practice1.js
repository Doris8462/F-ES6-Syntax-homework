const parseData = (input) => {
    // TODO 解构可以优化到函数接受参数中
    const { data, column } = input;
    // TODO columnName 没有必要
    const columnName = column.map(item => item.name)
    // TODO 使用map做数组与数组的转化，不用声明result，查查map的使用
    const result = []
    data.map(person => {
        const tempt = {}
        // TODO index拼写错误
        for (let inedx in columnName) {
            tempt[columnName[inedx]] = person[inedx]
        }
        result.push(tempt)
    })
    return result
};

export { parseData };