const paraId1 = document.getElementById("p1");
const paraId2 = document.getElementById("p2");
const getLang = localStorage.getItem("lang");

 

function HandleLanguage(e) {
  const language = e ? e : "english";
  localStorage.setItem("lang", language);
  const getLang = localStorage.getItem("lang");

  if (getLang === "urdu") {
    paraId1.innerHTML = "pehla hissa";
    paraId2.innerHTML = "dosra hissa";
    // paraId3.innerHTML = "salam dunya";
  } else {
    paraId1.innerHTML = "Section one";
    paraId2.innerHTML = "Section two";
    // paraId3.innerHTML = "Hello World";
  }
  console.log(getLang);
}
HandleLanguage(getLang);
