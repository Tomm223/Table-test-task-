import { Post } from "./types/posts.types"

export default class postClass {
   id = 0
   parentId = 0
   rowName = ''
   total = 0
   salary = 0
   mimExploitation = 0
   machineOperatorSalary = 0
   materials = 0
   mainCosts = 0
   supportCosts = 0
   equipmentCosts = 0
   overheads = 0
   estimatedProfit = 0
   child: [] | [Post] = []
   constructor() {

   }
}
