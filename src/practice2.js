const inject = (items, sections) => {
    sections.map(section => {
        items.splice(sections.indexOf(section) + section.index, 0, section.content)
    })
    return items;
}
export { inject };
