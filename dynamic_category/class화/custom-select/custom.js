import { CategoryDatas, Artist } from "../category.js";
import {
  loadCategoryGroups,
  loadCategories,
  loadRelations,
} from "../loadData.js";

let toggle = false;

let createCustomSelectTag = function(
    categoryGroup,
    defaultCategoryId,
    currentRelation,
    eventCallback
) {
    let div = document.createElement("div");
    div.classList.add("select");

    let selectedDiv = document.createElement("div");
    selectedDiv.classList.add("selected");
    div.appendChild(selectedDiv);

    let selectedValueDiv = document.createElement("div");
    selectedValueDiv.classList.add("selected-value");
    selectedDiv.appendChild(selectedValueDiv);

    let arrowDiv = document.createElement("div");
    arrowDiv.classList.add("arrow");
    selectedDiv.appendChild(arrowDiv);

    let ul = document.createElement("ul");
    div.appendChild(ul);

    categoryGroup.categories.forEach(category => {
        selectedValueDiv.innerText = category.id === defaultCategoryId ? category.name : selectedValueDiv.innerText;
        selectedValueDiv.innerText = selectedValueDiv.innerText || category.name;
        
        let li = document.createElement("li");
        let hiddenOption = document.createElement("option");
        hiddenOption.classList.add("hidden-option");
        hiddenOption.hidden = true;
        hiddenOption.value = category.id;

        li.classList.add("option");
        li.innerText = category.name;
        li.append(hiddenOption);

        ul.appendChild(li);
    });

    div.addEventListener("click", e => {
        const targetElement = e.target;

        if(targetElement.classList.contains("option")) {
            selectOption(targetElement);
            eventCallback(targetElement.querySelector(".hidden-option").value, currentRelation, div); 
        }
        
        toggleSelectBox(div);
    })

    let selectOption = function(optionElement) {
        const selectBox = optionElement.closest(".select");
        const selectedElement = selectBox.querySelector(".selected-value");
        selectedElement.textContent = optionElement.textContent;
    }

    let toggleSelectBox = function(selectBox) {
        selectBox.classList.toggle("active");
    }

    document.getElementById("container").appendChild(div);
}

let defaultCategoryIdList = [1, 5, 19, 26];

let categoryDatas = new CategoryDatas(
  loadCategoryGroups(),
  loadCategories(),
  loadRelations()
);

let artist = new Artist(categoryDatas, createCustomSelectTag);
artist.defaultCategoryIdList = defaultCategoryIdList;
artist.asyncCategoryRequestMap = {
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
  
artist.startDraw();
