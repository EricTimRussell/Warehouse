
const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weightLb: 22.3,
  to: 'Sir Harry',
  trackingNumber: '1324KJS'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weightLb: 55.5,
  to: 'Master Mercutio',
  trackingNumber: '1325SDK'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weightLb: 65.1,
  to: 'Mistress Ravenfeather',
  trackingNumber: '2147DKS'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weightLb: 66,
  to: 'Chancellor Wallace',
  trackingNumber: '2168DFS'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weightLb: 12,
  to: 'Tae Lien',
  trackingNumber: '2367KOP'
}]

function drawAllPackages() {
  // @ts-ignore
  let allPackagesButton = document.getElementById('package-list')
  let template = ''

  packages.forEach(package => {
    template += `

     <ol>
     <h5>Recipient---${package.to}</h5><br>
     <h5>Priority---${package.priorityLevel}</h5><br>
     <h5>Weight---${package.weightLb}</h5><br>
     <h5>Fragile---${package.isFragile}</h5><br>
     <h5>Tracking#---${package.trackingNumber}</h5><br>
     </ol>
    `


  });
  // @ts-ignore
  allPackagesButton.innerHTML = template
}
function drawFreePriority() {
  let priorityPackages = packages.filter(package => package.priorityLevel == 'free')
  let freePriority = document.getElementById('package-list')
  let template = ''

  priorityPackages.forEach(package => {
    template += `

    <ol>
    <h5>Recipient---${package.to}</h5><br>
    <h5>Priority---${package.priorityLevel}</h5><br>
    <h5>Weight---${package.weightLb}</h5><br>
    <h5>Fragile---${package.isFragile}</h5><br>
    <h5>Tracking#---${package.trackingNumber}</h5><br>
    </ol> `


  });
  // @ts-ignore
  freePriority.innerHTML = template
}

function drawHeavyPackages() {
  let heavyPackages = packages.filter(package => package.weightLb)
  let fiftyPoundPackages = document.getElementById('package-list')
  let template = ''

  heavyPackages.forEach(package => {

    if (package.weightLb >= 50)
      template += `
      <ol>
      <h5>Recipient---${package.to}</h5><br>
      <h5>Priority---${package.priorityLevel}</h5><br>
      <h5>Weight---${package.weightLb}</h5><br>
      <h5>Fragile---${package.isFragile}</h5><br>
      <h5>Tracking#---${package.trackingNumber}</h5><br>
      </ol>`

  });
  // @ts-ignore
  fiftyPoundPackages.innerHTML = template
}



// function findPackage() {
//   let missingPackage = packages.find(package => package.trackingNumber == '2147DKS')
//   let lostPackage = document.getElementById('lost-package')

// }


// drawAllPackages()