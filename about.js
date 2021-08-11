const paraId3 = document.getElementById("ab2");
const getLang = localStorage.getItem("lang");

function HandleLanguage(e) {
  const language = e ? e : "english";
  localStorage.setItem("lang", language);
  const getLang = localStorage.getItem("lang");

  if (getLang === "urdu") {
    paraId3.innerHTML = "salam dunya";
  } else {
    paraId3.innerHTML = "Hello World";
  }
}
HandleLanguage(getLang);
