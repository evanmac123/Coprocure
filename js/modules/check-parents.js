export function checkParents(event, targetClass) {
  let targetNode = event.target;
  if(event.target.classList && event.target.classList.contains(targetClass)) {
    return targetNode;
  }
  while(targetNode.parentNode && targetNode.parentNode.nodeName != 'BODY') {
    targetNode = targetNode.parentNode;
    console.log(targetNode)
    if(targetNode.classList) {
      if(targetNode.classList.contains(targetClass)) {
        return targetNode;
      }
    }
  }
  return false;
}