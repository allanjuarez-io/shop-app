function createNewSlug(productName: string) {
  const regexRule1 = /[^a-zA-Z0-9 ]/g;
  const regexRule2 = /\s+/g;

  return productName
    .replace(regexRule1, '')
    .trim()
    .replace(regexRule2, '-')
    .toLowerCase();
}

export { createNewSlug };
