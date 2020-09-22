const parseData = ({ data, column }) => {
    // TODO 解构可以优化到函数接受参数中
    // TODO columnName 没有必要
    const columnName = column.map(item => item.name)
    // TODO 使用map做数组与数组的转化，不用声明result，查查map的使用
    return data.map(person => {
        const tempt = {}
        // TODO index拼写错误
        for (let index in columnName) {
            tempt[columnName[index]] = person[index]
        }
        return tempt
    })
};

export { parseData };