function setMenuItem(activeId, activeClassName){
  console.log('ID:' + activeId);
  console.log('Classname:' + activeClassName);
  document.getElementById(activeId).classList.add(activeClassName);
}