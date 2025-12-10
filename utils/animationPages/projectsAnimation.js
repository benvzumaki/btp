import { gsap, Power3 } from "gsap";

const projectsTransitionEnterHandler = (delay) => {
  const contentEl = document.querySelector(".content-projects-el");
  const titleProjects = document.querySelector(".title-projects-el");
  let offset;

  if (contentEl.children[1]) {
    offset = contentEl.children[1].offsetTop - contentEl.children[0].offsetTop;
  }

  const tl = gsap.timeline({
    defaults: { duration: 0.5, ease: Power3.easeOut },
  });

  const valFirstEl = (index) => {
    return contentEl.children[index].children[0].firstElementChild;
  };

  const valLastEl = (index) => {
    return contentEl.children[index].children[0].lastElementChild;
  };
  
  tl.fromTo(
    titleProjects,
    { x: 50, opacity: 0 },
    { x: 0, opacity: 1, delay: delay }
  );

  tl.fromTo(
    valFirstEl(0),
    {
      x: 50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
    },
    "<0.2"
  );

  tl.fromTo(
    valLastEl(0),
    {
      x: 50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
    },
    "<0.2"
  );

  for (let index = 1; index < contentEl.children.length; index++) {
    if (index % 2 === 0) {
      tl.fromTo(
        valFirstEl(index),
        {
          x: 50,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: valFirstEl(index),
            start: "center center+=" + offset / 2,
            end: "center center-=" + offset / 2,
            onEnter: () => {
              gsap.to(valFirstEl(index), {
                x: 0,
                opacity: 1,
              });
              gsap.fromTo(
                valLastEl(index),
                {
                  x: 50,
                  opacity: 0,
                },
                {
                  x: 0,
                  opacity: 1,
                  delay: 0.2,
                }
              );
            },
            onLeaveBack: () => {
              gsap.to(valFirstEl(index), {
                x: 50,
                opacity: 0,
              });
              gsap.fromTo(
                valLastEl(index),
                {
                  x: 0,
                  opacity: 1,
                },
                {
                  x: 50,
                  opacity: 0,
                  delay: 0.2,
                }
              );
            },
          },
        }
      );
    } else {
      tl.fromTo(
        valFirstEl(index),
        {
          x: -50,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: valFirstEl(index),
            start: "center center+=" + offset / 2,
            end: "center center-=" + offset / 2,
            onEnter: () => {
              gsap.to(valFirstEl(index), {
                x: 0,
                opacity: 1,
              });
              gsap.fromTo(
                valLastEl(index),
                {
                  x: -50,
                  opacity: 0,
                },
                {
                  x: 0,
                  opacity: 1,
                  delay: 0.2,
                }
              );
            },
            onLeaveBack: () => {
              gsap.to(valFirstEl(index), {
                x: -50,
                opacity: 0,
              });
              gsap.fromTo(
                valLastEl(index),
                {
                  x: 0,
                  opacity: 1,
                },
                {
                  x: -50,
                  opacity: 0,
                  delay: 0.2,
                }
              );
            },
          },
        }
      );
    }
  }
};

const projectsTransitionExitHandler = (link, router) => {
  const contentEl = document.querySelector(".content-projects-el");
  const titleProjects = document.querySelector(".title-projects-el");

  const valFirstEl = (index) => {
    return contentEl.children[index].children[0].firstElementChild;
  };

  const valLastEl = (index) => {
    return contentEl.children[index].children[0].lastElementChild;
  };

  const tl = gsap.timeline({
    defaults: { duration: 0.5, ease: Power3.easeOut },
  });

  tl.to(titleProjects, { x: -50, opacity: 0 });

  tl.to(
    valFirstEl(0),
    {
      x: -50,
      opacity: 0,
    },
    "<0.2"
  );
  tl.to(
    valLastEl(0),
    {
      x: -50,
      opacity: 0,
      onComplete: () => {
        if (contentEl.children.length === 1) {
          router.push(link);
        }
      },
    },
    "<0.2"
  );

  for (let index = 1; index < contentEl.children.length; index++) {
    if (index % 2 === 0) {
      gsap.to(valFirstEl(index), {
        x: -50,
        opacity: 0,
      });
      gsap.to(valLastEl(index), {
        x: -50,
        opacity: 0,
        delay: 0.2,
        onComplete: () => {
          if (index + 1 === contentEl.children.length) {
            router.push(link);
          }
        },
      });
    } else {
      gsap.to(valFirstEl(index), {
        x: 50,
        opacity: 0,
      });
      gsap.to(valLastEl(index), {
        x: 50,
        opacity: 0,
        delay: 0.2,
        onComplete: () => {
          if (index + 1 === contentEl.children.length) {
            router.push(link);
          }
        },
      });
    }
  }
};

export { projectsTransitionEnterHandler, projectsTransitionExitHandler };
