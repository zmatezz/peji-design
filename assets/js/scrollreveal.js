const commonOptions = {
  duration: 2200,
  easing: 'ease-in-out',
};

const revealOptions = [
  { selector: ".square" },
  { selector: ".top-left", origin: "left", distance: "200px" },
  { selector: ".top-right", origin: "right", distance: "200px" },
  { selector: ".bottom-left", origin: "left", distance: "200px" },
  { selector: ".bottom-right", origin: "right", distance: "200px" },
];

const revealOptionsLargeScreen = [
  { selector: ".top-left", origin: "left", distance: "100px" },
  { selector: ".top-right", origin: "top", distance: "100px" },
  { selector: ".bottom-left", origin: "bottom", distance: "100px" },
  { selector: ".top-left", origin: "left", distance: "100px" },
  { selector: ".bottom-right", origin: "right", distance: "100px" },
  { selector: ".square" },
];

const sr = ScrollReveal({ reset: true });

revealOptions.forEach((options) => {
  sr.reveal(options.selector, { ...commonOptions, ...options });
});

if (window.innerWidth >= 991) {
  revealOptionsLargeScreen.forEach((options) => {
    sr.reveal(options.selector, { ...commonOptions, ...options });
  });
}
