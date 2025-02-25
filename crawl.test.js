const { normalizeURL, getURLsFromHTML } = require("./crawl");
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

test("getURLsFromHTML function: Absolute URLs", () => {
  const inputHTMLBody = `
    <html>
        <body>
            <a href="https://google.com/path/">
                Google
            </a>
        </body>
    </html>
    `;
  const inputBaseURL = "https://google.com";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://google.com/path/"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML function: Relative URLs", () => {
  const inputHTMLBody = `
    <html>
        <body>
            <a href="/path/">
                Google
            </a>
        </body>
    </html>
    `;
  const inputBaseURL = "https://google.com";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://google.com/path/"];
  expect(actual).toEqual(expected);
});
