const targetElem = document.querySelector(".title-h2");

const handleObserver = (entries) => {
  console.log("entries", entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
};

const watcher = new IntersectionObserver(handleObserver, { threshold: 0.1 });

watcher.observe(targetElem);
