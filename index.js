// Code your solution in this file!

const logDriverNames = (collection) => {
  collection.forEach(function(driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = (collection, location) => {
  collection.forEach(function(driver) {
    if(driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

const driversByRevenue = (collection) => {
  const newCollection = collection.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
  return newCollection;
}

const driversByName = (collection) => {
  const newCollection = collection.sort(function(a, b) {
    return (a.name).localeCompare(b.name);
  });
  return newCollection;
}

const totalRevenue = (collection) => {
  const result = collection.reduce((sum, value) => {
    return sum + value.revenue;
  }, 0);
  return result;
}

const averageRevenue = (collection) => {
  const result = collection.reduce((sum, value) => {
    // console.log(sum, i);
    return sum + value.revenue;
  }, 0)
  return result / (collection.length);
}
