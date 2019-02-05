import { getUser, getLocalActivity, setLocalActivity, postActivity } from './user';

export function trackEvent(category, action, label) {
  ga('gtag_UA_121612479_1.send', {
    hitType: 'event',
    eventCategory: category,
    eventAction: action,
    eventLabel: label
  });
  if(getUser) {
    // post to dynamodb
    postActivity(category, action, label);
  } else {
    // put it in localStorage stringified
    let item = {};
    item.category = category;
    item.action = action;
    item.label = label;
    if(getLocalActivity()) {
      data = JSON.parse(getLocalActivity());
    } else {
      data = [];
    }
    data.push(item)
    setLocalActivity(JSON.stringify(data));
  }
}