const getContents = () => {
  let h3 = document.querySelectorAll('.post__content h3');
  let contentsDiv = document.querySelector('#contents');
  let ol = document.createElement('ol');

  for (let i = 0; i < h3.length; i++) {
    if (h3[i].id) {
      let li = document.createElement('li');
      li.innerHTML = `<a href="#${h3[i].id}">${h3[i].outerText}</a>`;
      ol.appendChild(li);
    }
  }

  hr = document.createElement('hr');
  hr.classList.add('contents-hr');
  contentsDiv.innerHTML = `<h3>Содержание</h3>`;
  contentsDiv.appendChild(ol);
  contentsDiv.appendChild(hr);
}

getContents();