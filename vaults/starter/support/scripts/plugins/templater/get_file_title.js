function removeAccents(str) {
  const accents = "ÁáÉéÍíÓóÚú";
  const withoutAccents = "AaEeIiOoUu";
  return str
    .split("")
    .map((char) => {
      const index = accents.indexOf(char);
      return index !== -1 ? withoutAccents[index] : char;
    })
    .join("");
}

function get_file_title(title) {
  const noAccentsTitle = removeAccents(title);
  const formattedTitle = noAccentsTitle.split(" ").join("-").trim();

  return formattedTitle.toLowerCase();
}

module.exports = get_file_title;
