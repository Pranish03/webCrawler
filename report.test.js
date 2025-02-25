const { sortPages } = require("./report");
const { test, expect } = require("@jest/globals");

test("sortPages function: 2 pages", () => {
  const input = {
    "https://google.com/path": 1,
    "https://google.com": 3,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://google.com", 3],
    ["https://google.com/path", 1],
  ];
  expect(actual).toEqual(expected);
});

test("sortPages function: 5 pages", () => {
  const input = {
    "https://google.com/path": 1,
    "https://google.com": 3,
    "https://google.com/path2": 5,
    "https://google.com/path3": 9,
    "https://google.com/path4": 7,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://google.com/path3", 9],
    ["https://google.com/path4", 7],
    ["https://google.com/path2", 5],
    ["https://google.com", 3],
    ["https://google.com/path", 1],
  ];
  expect(actual).toEqual(expected);
});
