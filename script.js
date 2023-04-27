// Get form element
const formu = document.getElementById("formus");

if (formu) {
  // Add submit event listener to form
  formu.addEventListener("submit", (event) => {
    // event.preventDefault();
  
    // Get user input values
    const age = document.getElementById("age").value;
    const insuranceType = document.getElementById("type").value;
    // const location = document.getElementById("location").value;
    const amount = document.getElementById("amount").value;
  
    // Filter insurance providers based on user input values
    const filteredProviders = insuranceProviders.filter((provider) => {
      let ageMatch = true;
      let insuranceTypeMatch = true;
    //   let locationMatch = true;
      let amountMatch = true;
  
      if (age) {
        ageMatch = provider.age;
      }
  
      if (insuranceType) {
        insuranceTypeMatch = provider.insuranceType;
      }
  
    //   if (location) {
    //     locationMatch = provider.location.includes(location);
    //   }
  
      if (amount) {
        amountMatch = provider.amount;
      }
  
      return ageMatch && insuranceTypeMatch && amountMatch;
    });
  
    // Display filtered providers
    displayProviders(filteredProviders);
  });
}


const displayProviders = (providers) => {
    // Get provider list element
    const providerList = document.getElementById("provider-list");
    
    // Create list items for each provider
    providers.forEach((provider) => {
      const li = document.createElement("li");
      li.innerText = `${provider.name} - ${provider.description}`;
      providerList.appendChild(li);
    });
  
    // Replace old provider list with new one
    const oldProviderList = document.getElementById("providerList");
    const newProviderList = document.createElement("div");
    newProviderList.id = "providerList";
    if (oldProviderList && oldProviderList.parentNode) {
      oldProviderList.parentNode.replaceChild(newProviderList, oldProviderList);
    };
}
