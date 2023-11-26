import {
  loadCategoryGroups,
  loadCategories,
  loadRelations,
} from "./loadData.js";

//라이브 서버로 안하니까 에러남

(function () {
  let defaultCategorySymbol = Symbol("default");

  let generateRelationTree = function () {
    let prevRelationgroupId = 0;
    let current = undefined; //?

    relations.forEach((relation) => {
      if (prevRelationgroupId == relation.relationGroupId) {
        current.categoryGroupId = relation.categoryGroupId;
        current.categories = current.categories || {};
      } else if (prevRelationgroupId != relation.relationGroupId) {
        current = relationTree;
        prevRelationgroupId = relation.relationGroupId;
      }

      let categoryId = relation.categoryId || defaultCategorySymbol;
      current.defaultKey = current.defaultKey || categoryId;
      current.categories[categoryId] = current.categories[categoryId] || {};
      current = current.categories[categoryId];
    });
  };

  let categoryGroups = loadCategoryGroups();
  let categories = loadCategories();
  let relations = loadRelations();

  let relationTree = {
    categoryGroupId: 1,
    categories: {},
  };

  let categoryGroupMap = {};
  let categoryMap = {};

  let toggle = false;
  let asyncLoadCategories = function (categoryGroupId, cachingCategories) {
    // toggle = !toggle;

    if (categoryGroupId == 2) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (toggle) {
            resolve([
              { id: 4, name: "BE", categoryGroupId: 2 },
              { id: 5, name: "FE", categoryGroupId: 2 },
              { id: 6, name: "ME", categoryGroupId: 2 },
              { id: 7, name: "UI", categoryGroupId: 2 },
              { id: 10007, name: "DESIGN", categoryGroupId: 2 },
            ]);
          } else {
            resolve([
              { id: 4, name: "BE", categoryGroupId: 2 },
              { id: 5, name: "FE", categoryGroupId: 2 },
              { id: 6, name: "ME", categoryGroupId: 2 },
              { id: 7, name: "UI", categoryGroupId: 2 },
            ]);
          }
        }, 0);
      });
    } else if (categoryGroupId == 5) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (toggle) {
            resolve([
              { id: 14, name: "자바", categoryGroupId: 5 },
              { id: 15, name: "스프링", categoryGroupId: 5 },
              { id: 16, name: "씨", categoryGroupId: 5 },
              { id: 17, name: "씨샾", categoryGroupId: 5 },
              { id: 1733, name: "Go", categoryGroupId: 5 },
            ]);
          } else {
            resolve([
              { id: 14, name: "JAVA", categoryGroupId: 5 },
              { id: 15, name: "Spring", categoryGroupId: 5 },
              { id: 16, name: "C", categoryGroupId: 5 },
              { id: 17, name: "C#", categoryGroupId: 5 },
            ]);
          }
        }, 0);
      });
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(cachingCategories);
        });
      });
    }
  };

  categoryGroups.forEach(
    (categoryGroup) => (categoryGroupMap[categoryGroup.id] = categoryGroup)
  );

  categories.forEach((category) => (categoryMap[category.id] = category));

  for (let key in categoryMap) {
    let category = categoryMap[key];
    let categoryGroup = categoryGroupMap[category.categoryGroupId];
    category.categoryGroup = categoryGroup;
    categoryGroup.categories = categoryGroup.categories || [];
    categoryGroup.categories.push(category);
  }

  generateRelationTree();
  console.log(relationTree);
  // 1. 지금 해야될게 화면에 나올 데이터를 가져온다.
  // 2. 릴레이션 트리를 순회하면서 우리가 필요한 데이터를 뽑아낸다.

  const f = function (relationTree, defaultCategoryIds) {
    let categoryGroup = categoryGroupMap[relationTree.categoryGroupId];
    // 카테고리의 목록들을 불러와야 하는데
    // console.log(categoryGroup.name, categoryGroup.categories);

    let defaultCategoryId = defaultCategoryIds?.shift();

    asyncLoadCategories(categoryGroup.id).then((categories) =>{
      categoryGroup.categories = categories;
      console.log(categories);

      drawTree(categoryGroup, defaultCategoryId);
    })

    // default값을 정할 수 있다.
    let nextRelationTree =
      relationTree.categories[defaultCategoryId] ||
      relationTree.categories[Object.keys(relationTree.categories)[0]] ||
      relationTree.categories[defaultCategorySymbol];

    if (Object.keys(nextRelationTree).length) {
      f(nextRelationTree, defaultCategoryIds);
    }
  };

  // groupId가 아니라 category의 id값.
  // category를 알면 group을 알 수 있다.
  let defaultCategoryIds = [1, 4, 5];

  let drawTree = function (categoryGroup, defaultCategoryId) {
    let elementDiv = document.createElement("div");
    elementDiv.classList.add("categoryBox");

    let elementLabel = document.createElement("label");
    elementLabel.innerText = categoryGroup.name;
    elementLabel.htmlFor = categoryGroup.id;
    elementDiv.appendChild(elementLabel);

    let elementSelect = document.createElement("select");
    elementSelect.id = categoryGroup.id;
    // console.log(document.querySelectorAll('.categoryBox'));

    // Promise 를 통해 값은 몰라도 then을 통해서 처리해준다.
    categoryGroup.categories.forEach((category) => {
      let elementOption = document.createElement("option");
      elementOption.innerText = category.name;
      elementOption.value = category.id;
      if (elementOption.value === defaultCategoryId) {
        elementOption.selected = true;
      }
      elementSelect.appendChild(elementOption);
    });
    elementDiv.appendChild(elementSelect);

    elementSelect.addEventListener("change", (e) => {
      let arr = [];
      let element = document.querySelectorAll("select option:checked");
      for (let i = 0; i < element.length; i++) {
        arr.push(element[i].value);
      }
      document.body.replaceChildren();
      f(relationTree, arr);
    });

    if (function inifFunc() {}) {
    }

    document.body.append(elementDiv);
  };

  f(relationTree, defaultCategoryIds);
})();
