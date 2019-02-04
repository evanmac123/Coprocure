import { getUser } from './user';

export function trackEvent(category, action, label) {
  ga('gtag_UA_121612479_1.send', {
    hitType: 'event',
    eventCategory: category,
    eventAction: action,
    eventLabel: label
  });
  if(getUser) {
    // post to dynamodb

    /* types of events
    tracked:
      search, expand, login, next, previous, filter, download, 
    todo:
      contact vendor
    */
  }
}