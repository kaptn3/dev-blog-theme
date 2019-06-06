{
  let links = document.querySelectorAll('a');
  if (links) {
    for (let i = 0; i < links.length; i++) {
      if (links[i].hostname != window.location.hostname) {
        if (!links[i].rel) links[i].rel = 'nofollow'; // in case if not set rel for link
        links[i].target = '_blank';
      }
    }
  }
}