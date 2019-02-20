let supplies = ["space helmet", "canister of oxygen", "water recycler", "big red button", "freeze dried ice cream", "tang drink mix"]

// 1.)  Using a `forEach` loop, write a function called `supplyCheck` that takes in an array of supplies as an argument, and logs each item to your console. It should match the message of "SUPPLY ITEM is logged and accounted for."
let supplyCheck=supplies.forEach((supplyItem) =>{
  console.log(`${supplyItem} is logged`)
});
//supplyCheck(supplies)
// Your code here....


// 2.) Create a function named stowSupplies that takes in our array of supplies, and returns item name and its index number in a formatted string.
locker_numbers=[1,2,3,4,5,6]
i=0
let stowSupplies = (suppliesArray) => {
  for(i=0;i<locker_numbers.length; i++){
    console.log(`${supplies[i]} is in ${locker_numbers[i]}` )
  }
}
stowSupplies()


// 3.) Create a function named addAlphabetically that takes in our array of supplies and a new supply item and returns an array of supplies with that new item, sorted alphabetically.
//let supplies = ["space helmet", "canister of oxygen", "water recycler", "big red button", "freeze dried ice cream", "tang drink mix"]

let addAlphabetically = (suppliesArray, newItem) => {
  let newSuppliesArray = suppliesArray.concat(newItem)
  return newSuppliesArray.sort()
}

addAlphabetically(supplies, "laser pistol")
console.log(addAlphabetically(supplies, "laser pistol"))

// 4.) Create a function named supplyCheck that takes in an inventory checklist array, and an array of supplies, and returns an array of items that are missing from the checklist.

let inventoryChecklist = ["big red button", "canister of oxygen", "freeze dried ice cream", "jetpack", "tang drink mix", "space helmet", "space brussels sprouts", "water recycler", "welding torch"]
let supplyCheckOne = (checklist, suppliesArray) => {
  let missingItems = []

  checklist.forEach((supplyItem) => {
    if(!suppliesArray.includes(supplyItem)){
      missingItems.push(supplyItem)
    }
  })

  return missingItems
}
supplyCheckOne(inventoryChecklist, supplies)
// 5.) Create a function named addMissingSupplies that takes in an array of supplies, and an array of missing supplies, and returns a new array with all of the items combined! Use your supplyCheck method to help you with this.
let addMissingSupplies = (suppliesArray, moreSupplies) => {
  return suppliesArray.concat(moreSupplies)
}

let missingSupplies = supplyCheckOne(inventoryChecklist, supplies)

addMissingSupplies(supplies, missingSupplies)
console.log(addMissingSupplies(supplies, supplyCheckOne(inventoryChecklist, supplies)))
 
