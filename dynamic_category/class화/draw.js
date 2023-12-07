import { CategoryDatas, Artist } from "./category.js";
import {
  loadCategoryGroups,
  loadCategories,
  loadRelations,
} from "./loadData.js";

let toggle = false;

let createSelectTag = function (
  categoryGroup,
  defaultCategoryId,
  currentRelation,
  eventCallback
) {
  let div = document.createElement("div");
  let html = "";

  div.classList.add("select");
  html += `<label>${categoryGroup.name}</label>`;
  html += `<select>`;
  categoryGroup.categories.forEach((category) => {
    let selected = category.id === defaultCategoryId ? "selected" : "";
    html += `  <option value=${category.id} ${selected}>${category.name}</option>`;
  });
  html += `</select>`;

  div.innerHTML = html;
  let select = div.children[1];

  select.addEventListener("change", (e) => {
    eventCallback(e.currentTarget.value, currentRelation, div);
  });

  document.getElementById("container").appendChild(div);
};

let defaultCategoryIdList = [1, 5, 19, 26, 24];

let categoryDatas = new CategoryDatas(
  loadCategoryGroups(),
  loadCategories(),
  loadRelations()
);

let defaultArtist = new Artist(categoryDatas, createSelectTag);
defaultArtist.defaultCategoryIdList = defaultCategoryIdList;
defaultArtist.asyncCategoryRequestMap = {
  2: function () {
    toggle = !toggle;
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
      }, 1000);
    });
  },
};

defaultArtist.startDraw();
