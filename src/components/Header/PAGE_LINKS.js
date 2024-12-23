const PAGE_LINKS = [
  { path: "/", label: "Home" },
  {
    path: null,
    label: "Classes",
    sublinks: [
      { path: "/kids-classes", label: "Kids" },
      { path: "/adults-classes", label: "Adults" },
      { path: "/girls-and-women-classes", label: "Girls/Women" },
    ],
  },
  { path: "/timetable", label: "Timetable" },
  { path: "/contact", label: "Contact" },
];

export default PAGE_LINKS;