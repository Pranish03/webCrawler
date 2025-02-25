const { normalizeURL } = require("./crawl");
const { test, expect } = require("@jest/globals");

test("normalizeURL function: Strip Protocol", () => {
  const input = "https://google.com/path";
  const actual = normalizeURL(input);
  const expected = "google.com/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL function: Strip Trailing Slash", () => {
  const input = "https://google.com/path/";
  const actual = normalizeURL(input);
  const expected = "google.com/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL function: Capitals", () => {
  const input = "https://Google.com/path/";
  const actual = normalizeURL(input);
  const expected = "google.com/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL function: Strip Http", () => {
  const input = "http://Google.com/path/";
  const actual = normalizeURL(input);
  const expected = "google.com/path";
  expect(actual).toEqual(expected);
});
