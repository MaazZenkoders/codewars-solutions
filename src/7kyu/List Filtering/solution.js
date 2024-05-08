function filter_list(l) {
    let filteredList = l.filter((x)=>typeof(x) === "number")
    return filteredList
  }