let loadCategoryGroups = function() {
    return [
      {
        id: 1,
        name: '직군'	
      }, {
        id: 2,
        name: '개발자구분'
      }, {
        id: 3,
        name: '기획자구분'
      }, {
        id: 4,
        name: '디자이너구분'
      }, {
        id: 5,
        name: 'BE보유스킬'
      }, {
        id: 6,
        name: 'FE보유스킬'
      }, {
        id: 7,
        name: '숙련도'
      }, {
        id: 8,
        name: '경력'
      }, {
        id: 9,
        name: 'ME플랫폼'
      }, {
        id: 10,
        name: 'Spring Type'
      }, {
        id: 11,
        name: 'JDK Version'
      }
    ];
}
let loadCategories = function() {
  return [
    { id: 1,
      name: '개발자',
      categoryGroupId: 1, 
    },
    { id: 2,
      name: '기획자',
      categoryGroupId: 1, 
    },
    { id: 3,
      name: '디자이너',
      categoryGroupId: 1, 
    },
    { id: 4,
      name: 'BE',
      categoryGroupId: 2, 
    },
    { id: 5,
      name: 'FE',
      categoryGroupId: 2, 
    },
    { id: 6,
      name: 'ME',
      categoryGroupId: 2, 
    },
    { id: 7,
      name: 'UI',
      categoryGroupId: 2, 
    },
    { id: 8,
      name: '서비스기획',
      categoryGroupId: 3, 
    },
    { id: 9,
      name: '화면기획',
      categoryGroupId: 3, 
    },
    { id: 10,
      name: '개발기획',
      categoryGroupId: 3, 
    },
    { id: 11,
      name: '상품디자인',
      categoryGroupId: 4, 
    },
    { id: 12,
      name: '가구디자인',
      categoryGroupId: 4, 
    },
    { id: 13,
      name: '게임디자인',
      categoryGroupId: 4, 
    },
    { id: 14,
      name: 'JAVA',
      categoryGroupId: 5, 
    },
    { id: 15,
      name: 'Spring',
      categoryGroupId: 5, 
    },
    { id: 16,
      name: 'C',
      categoryGroupId: 5, 
    },
    { id: 17,
      name: 'C#',
      categoryGroupId: 5, 
    },
    { id: 18,
      name: 'js',
      categoryGroupId: 6, 
    },
    { id: 19,
      name: 'ts',
      categoryGroupId: 6, 
    },
    { id: 20,
      name: 'react',
      categoryGroupId: 6, 
    },
    { id: 21,
      name: 'vue',
      categoryGroupId: 6, 
    },
    { id: 22,
      name: '상',
      categoryGroupId: 7, 
    },
    { id: 23,
      name: '중',
      categoryGroupId: 7, 
    },
    { id: 24,
      name: '하',
      categoryGroupId: 7, 
    },
    { id: 25,
      name: '주니어',
      categoryGroupId: 8, 
    },
    { id: 26,
      name: '시니어',
      categoryGroupId: 8, 
    },
    { id: 27,
      name: 'ios',
      categoryGroupId: 9, 
    },
    { id: 28,
      name: 'android',
      categoryGroupId: 9, 
    },
    { id: 29,
      name: 'mvc',
      categoryGroupId: 10, 
    },
    { id: 30,
      name: 'boots',
      categoryGroupId: 10, 
    },
    { id: 31,
      name: '~7',
      categoryGroupId: 11, 
    },
    { id: 32,
      name: '8~15',
      categoryGroupId: 11, 
    },
    { id: 33,
      name: '15~',
      categoryGroupId: 11, 
    },
  ];
};
let loadRelations = function() {
  return [
    {
      relationGroupId: 1,
      order: 1,
      categoryGroupId: 1,
      values: ['1'],
      operator: '=',
      valueType: 'id' //카테고리 데이타의 필드명
    },
    {
      relationGroupId: 1,
      order: 2,
      categoryGroupId: 2,
      values: ['4'],
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 1,
      order: 3,
      categoryGroupId: 5,
      values: ['14'],
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 1,
      order: 4,
      categoryGroupId: 11,
      values: null,
      operator: '=',
      valueType: 'id'
    },          
    {
      relationGroupId: 2,
      order: 1,
      categoryGroupId: 1,
      values: ['1'],
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 2,
      order: 2,
      categoryGroupId: 2,
      values: ['4'],
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 2,
      order: 3,
      categoryGroupId: 5,
      values: ['15'],
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 2,
      order: 4,
      categoryGroupId: 10,
      values: null,
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 3,
      order: 1,
      categoryGroupId: 1,
      values: ['1'],
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 3,
      order: 2,
      categoryGroupId: 2,
      values: ['4'],
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 3,
      order: 3,
      categoryGroupId: 5,
      values: ['D', 'C#'],
      operator: 'in',
      valueType: 'name'
    },
    {
      relationGroupId: 3,
      order: 4,
      categoryGroupId: 7,
      values: null,
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 5,
      order: 1,
      categoryGroupId: 1,
      values: ['1'],
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 5,
      order: 2,
      categoryGroupId: 2,
      values: ['5'],
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 5,
      order: 3,
      categoryGroupId: 6,
      values: null,
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 5,
      order: 4,
      categoryGroupId: 8,
      values: null,
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 5,
      order: 5,
      categoryGroupId: 7,
      values: null,
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 6,
      order: 1,
      categoryGroupId: 1,
      values: ['1'],
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 6,
      order: 2,
      categoryGroupId: 2,
      values: ['6'],
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 6,
      order: 3,
      categoryGroupId: 8,
      values: null,
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 6,
      order: 4,
      categoryGroupId: 9,
      values: null,
      operator: '=',
      valueType: 'id'
    },

    {
      relationGroupId: 7,
      order: 1,
      categoryGroupId: 1,
      values: ['1'],
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 7,
      order: 2,
      categoryGroupId: 2,
      values: ['7'],
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 7,
      order: 3,
      categoryGroupId: 8,
      values: null,
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 8,
      order: 1,
      categoryGroupId: 1,
      values: ['2'],
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 8,
      order: 1,
      categoryGroupId: 3,
      values: null,
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 8,
      order: 2,
      categoryGroupId: 8,
      values: null,
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 9,
      order: 1,
      categoryGroupId: 1,
      values: ['3'],
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 9,
      order: 2,
      categoryGroupId: 4,
      values: null,
      operator: '=',
      valueType: 'id'
    },
    {
      relationGroupId: 9,
      order: 3,
      categoryGroupId: 8,
      values: null,
      operator: '=',
      valueType: 'id'
    }
  ]
};

  export {loadCategoryGroups, loadCategories, loadRelations}