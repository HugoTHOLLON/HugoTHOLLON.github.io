function addClassToElementsOnScrollVisible(
  elements,
  className,
  oneShot = false
) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!entry.target.classList.contains(className))
          entry.target.classList.add(className);
      } else if (!oneShot) {
        entry.target.classList.remove(className);
      }
    });
  });

  elements.forEach((element) => observer.observe(element));
}

function removeClassToElementsOnScrollVisible(
  elements,
  className,
  oneShot = false
) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove(className);
      } else if (!oneShot) {
        if (!entry.target.classList.contains(className))
          entry.target.classList.add(className);
      }
    });
  });

  elements.forEach((element) => observer.observe(element));
}
