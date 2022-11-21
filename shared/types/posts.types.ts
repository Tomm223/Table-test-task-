
export interface Post {
  "id": number,
  "parentId": number,
  "rowName": string,
  "total": number,
  "salary": number,
  "mimExploitation": number,
  "machineOperatorSalary": number,
  "materials": number,
  "mainCosts": number,
  "supportCosts": number,
  "equipmentCosts": number,
  "overheads": number,
  "estimatedProfit": number,
  "child": [Post] | []
}

export type PostId = number
