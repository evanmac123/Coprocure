import { checkParents } from './check-parents';
import { getUser, showIdentityModal } from './user';
import { trackEvent } from './tracking';

export function handleExpansion(event) {
  let item = checkParents(event, 'expandable-contract');
  if(item) {
    item.classList.toggle('flipped')
    event.preventDefault();
    if(item.classList.contains('flipped')) {
      document.querySelector('.contracts[data-hit-id="'+item.dataset.hitId+'"]').style.display = 'flex';
    } else {
      document.querySelector('.contracts[data-hit-id="'+item.dataset.hitId+'"]').style.display = 'none';
    }
    if(getUser()) {
      trackEvent('contract', 'expand', item.dataset.hitId);
    } else {
      // if not display modal
      console.log('need to show modal')
      trackEvent('contract', 'show-login-modal', item.dataset.hitId);
      showIdentityModal(item.dataset.hitId)
    }
  }
}