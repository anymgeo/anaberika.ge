function showSection(sectionNumber) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
    }
    document.getElementById('section' + sectionNumber).style.display = 'block';
  }