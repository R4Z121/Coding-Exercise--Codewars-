// Kata Source : https://www.codewars.com/kata/53988ee02c2414dbad000baa

const toPretty = seconds => {
  if(seconds > 0) {
    let minutes = Math.floor(seconds/60);
    if(minutes >= 1) {
      let hours = Math.floor(minutes/60);
      if(hours >= 1) {
        let days = Math.floor(hours/24);
        if(days >= 1) {
          let weeks = Math.floor(days/7);
          if(weeks >= 1) {
            return weeks == 1 ? `a week ago` : `${weeks} weeks ago`
          }
          return days == 1 ? `a day ago` : `${days} days ago`
        }
        return hours == 1 ? `an hour ago` : `${hours} hours ago`
      }
      return minutes == 1 ? `a minute ago` : `${minutes} minutes ago`
    }
    return seconds == 1 ? `a second ago` : `${seconds} seconds ago`
  }
  return 'just now';
}