function printReport(pages) {
  console.log("============================================================");
  console.log("REPORT");
  console.log("============================================================");

  const sortedPages = sortPages(pages);

  for (const sortedPage of sortedPages) {
    const url = sortedPage[0];
    const count = sortedPage[1];

    console.log(`Found ${count} links to page: ${url}`);
  }

  console.log("============================================================");
  console.log("END REPORT");
  console.log("============================================================");
}

function sortPages(pages) {
  const pagesArray = Object.entries(pages);
  pagesArray.sort((a, b) => {
    return b[1] - a[1];
  });

  return pagesArray;
}

module.exports = { printReport, sortPages };
