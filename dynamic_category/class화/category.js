let defaultCategorySymbol = Symbol("default");

class CategoryGroup {
    constructor(id, name, categories) {
        this.id = id;
        this.name = name;
        if(categories instanceof Array) {
            this.categories = categories;
        } else {
            this.categories = [];
        }
    }
}

class Category {
    categoryGroup;

    constructor(id, name, categoryGroupId) {
        this.id = id;
        this.name = name;
        this.categoryGroupId = categoryGroupId;
    }
}

class CategoryDatas {
  constructor(categoryGroups, categories, relations) {
    this.categoryGroups = categoryGroups;
    this.categories = categories;
    this.relations = relations;

    this.categoryGroupMap = {};
    this.categoryMap = {};
    this.relationTree = {};

    if(!categoryGroups) {
      throw Error("no categoryGroups");
    } else if(!categories) {
      throw Error("no categories");
    } else if(!relations) {
      throw Error("no relations");
    }

    categoryGroups.forEach(
      (categoryGroup) => {
          this.categoryGroupMap[categoryGroup.id] = new CategoryGroup(categoryGroup.id, categoryGroup.name);
      }
    )
 
    categories.forEach((category) => (this.categoryMap[category.id] = new Category(category.id, category.name, category.categoryGroupId)));

    for (let key in this.categoryMap) {
      let category = this.categoryMap[key];
      let categoryGroup = this.categoryGroupMap[category.categoryGroupId];
      category.categoryGroup = categoryGroup;
      categoryGroup.categories.push(category);
      }

      this.relationTree = this.generateRelationTree();
  }

  generateRelationTree() {
    let relationTree = {
      categoryGroupId: this.relations[0].categoryGroupId,
      categories: {},
    };
    let prevRelationgroupId = 0;
    let current = undefined;
  
    this.relations.forEach((relation) => {
      if (prevRelationgroupId == relation.relationGroupId) {
        current.categoryGroupId = relation.categoryGroupId;
        current.categories = current.categories || {};
      } else if (prevRelationgroupId != relation.relationGroupId) {
        // 끝났음
        current = relationTree;
        prevRelationgroupId = relation.relationGroupId;
      }
  
      let categoryId = relation.values
        ? relation.operator + "|" + relation.valueType + "|" + relation.values
        : defaultCategorySymbol;
      current.categories[categoryId] = current.categories[categoryId] || {};
      current = current.categories[categoryId];
    });
  
    return relationTree;
  };
}

class Artist {
  constructor(categoryDatas, drawCallback) {
    if (!(categoryDatas instanceof CategoryDatas)) {
      throw Error(categoryDatas.name + "is not a category data");
    }
    if (!(drawCallback instanceof Function)) {
      throw Error(drawCallback.name + " is not a function!!!!!");
    }

    this.asyncCategoryRequestMap = {};

    this.categoryMap = categoryDatas.categoryMap;
    this.categoryGroupMap = categoryDatas.categoryGroupMap;
    this.relationTree = categoryDatas.relationTree;

    this.drawCallback = drawCallback;
    this.defaultCategoryIdList = [];

    this.getNextRelation = (function () {
      let operatorMap = {
        "=": (valuesString, value) => {
          let result = ("," + valuesString + ",").startsWith("," + value + ",");
          //   console.log("=", valuesString, value, result);
          return result;
        },
        "<": (valuesString, value) => {
          //만들자
          let result = ("," + valuesString + ",").startsWith("," + value + ",");
          //   console.log("=", valuesString, value, result);
          return result;
        },
        ">": (valuesString, value) => {
          //만들자
          let result = ("," + valuesString + ",").startsWith("," + value + ",");
          //   console.log("=", valuesString, value, result);
          return result;
        },
        in: (valuesString, value) => {
          let result =
            -1 < ("," + valuesString + ",").indexOf("," + value + ",");
          //   console.log("in", valuesString, value, result);
          return result;
        },
      };

      return function (relation, categoryId) {
        if (categoryId) {
          for (let key in relation.categories) {
            let result = /(.*?)\|(.*?)\|(.*)/.exec(key);

            if (result) {
              if (
                operatorMap[result[1]](
                  result[3],
                  this.categoryMap[categoryId][result[2]]
                )
              ) {
                return relation.categories[key];
              }
            }
          }
        }
      };
    })();
    
    this.locker = (function () {
      let lockFlag = false;
    
      return {
        lock: function () {
          if (!lockFlag) {
            lockFlag = true;
            //처리 로직
          }
        },
        unlock: function () {
          if (lockFlag) {
            lockFlag = true;
            //처리 로직
          }
        },
      };
    })();
  }

  asyncLoadCategoryGroup(categoryGroupId) {
    let categoryLoader = this.asyncCategoryRequestMap[categoryGroupId];

    if (categoryLoader) {
      return categoryLoader().then((categories) => {
        this.categoryGroupMap[categoryGroupId].categories = categories;
        return this.categoryGroupMap[categoryGroupId];
      });
    } else {
      return Promise.resolve(this.categoryGroupMap[categoryGroupId]);
    }
  }

  traverseRelation(currentRelation) {
    if (0 < Object.keys(currentRelation).length) {
      this.locker.lock();
      let defaultCategoryId = this.defaultCategoryIdList.shift();
      this.asyncLoadCategoryGroup(currentRelation.categoryGroupId).then(
        (categoryGroup) => {
          let nextRelation =
            this.getNextRelation(currentRelation, defaultCategoryId) ||
            this.getNextRelation(
              currentRelation,
              categoryGroup.categories[0].id
            ) ||
            currentRelation.categories[defaultCategorySymbol];

          if (!nextRelation) debugger;

          this.drawCallback(
            categoryGroup,
            defaultCategoryId,
            currentRelation,
            this.changeEvent.bind(this)
          );

          this.traverseRelation(nextRelation);
        }
      );
    } else {
      this.locker.unlock();
    }
  }

  changeEvent(categoryId, currentRelation, eventDiv) {
    let currentDiv = eventDiv.nextElementSibling;

    while (currentDiv?.classList.contains("select")) {
      let removeDiv = currentDiv;
      currentDiv = currentDiv.nextElementSibling;
      removeDiv.remove();
    }

    let nextRelation =
      this.getNextRelation(currentRelation, categoryId) ||
      currentRelation.categories[defaultCategorySymbol];
    this.traverseRelation(nextRelation);
  }

  startDraw() {
    this.traverseRelation(this.relationTree);
  }
}


export {CategoryDatas, Artist}