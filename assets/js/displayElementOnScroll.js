function addClassToElementsOnScrollVisible(elements, className) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!entry.target.classList.contains(className))
          entry.target.classList.add(className);
      } else {
        entry.target.classList.remove(className);
      }
    });
  });

  elements.forEach((element) => observer.observe(element));
}

function removeClassToElementsOnScrollVisible(elements, className) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove(className);
      } else {
        if (!entry.target.classList.contains(className))
          entry.target.classList.add(className);
      }
    });
  });

  elements.forEach((element) => observer.observe(element));
}
