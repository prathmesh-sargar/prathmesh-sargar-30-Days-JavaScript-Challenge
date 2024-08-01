function setToBothStorage(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);

  const localval = localStorage.getItem(key);
  const sessionval = sessionStorage.getItem(key);

  console.log(`localstorage :${localval}`);
  console.log(`sessionStorage: ${sessionval}`);
}

setToBothStorage("role", "Software developer");

// ----------------------------------------------------------------------------

function clearAllStorage() {
  localStorage.clear();
  sessionStorage.clear();

  console.log(`localstorage : ${localStorage}`);
  console.log(`sessionStorage : ${sessionStorage}`);
}
clearAllStorage();
