export function checkParents(event, targetClass) {
  let targetNode = event.target;
  if(event.target.classList && event.target.classList.contains(targetClass)) {
    return targetNode;
  }
  while(targetNode.parentNode) {
    targetNode = targetNode.parentNode;
    if(targetNode.classList) {
      if(targetNode.classList.contains(targetClass)) {
        return targetNode;
      }
    }
  }
  return false;
}