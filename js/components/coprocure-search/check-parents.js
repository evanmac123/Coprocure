export function checkParents(event, targetClass) {
  let targetNode = event.target;
/*
  if(targetNode && targetNode.classList && targetNode.classList.contains(targetClass)) {
    return targetNode;
  }
*/
  while(targetNode) {
    if(targetNode.classList && targetNode.classList.length > 0) {
      let classes = targetNode.classList;
      if(classes.contains(targetClass)) {
        return targetNode;
      }
    }
    targetNode = targetNode.parentNode;
  }
  return false;
}