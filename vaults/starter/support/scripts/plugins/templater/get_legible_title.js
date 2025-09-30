function get_legible_title(title) {
  const cleanedTitle = title.trim();

  return cleanedTitle.charAt(0).toUpperCase() + cleanedTitle.slice(1);
}

module.exports = get_legible_title;
