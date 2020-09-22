// TODO 逻辑纰漏，当sections内items顺序不是index顺序时会有问题
const inject = (items, sections) => {
  function compare(propertyName) {
    return function (object1, object2) {
      var value1 = object1[propertyName];
      var value2 = object2[propertyName];
      if (value2 < value1) {
        return 1;
      } else if (value2 > value1) {
        return -1;
      } else {
        return 0;
      }
    };
  }
  sections.sort(compare("index"));
  // TODO 不是map的使用场景
  sections.forEach((section) => {
    items.splice(sections.indexOf(section) + section.index, 0, section.content);
  });
  return items;
};
export { inject };
