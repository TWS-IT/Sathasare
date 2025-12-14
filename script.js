function generatePDF(){

  const data = {
    fullName: document.getElementById("fullName").value,
    nickName: document.getElementById("nickName").value,
    position: document.getElementById("position").value,
    details: document.getElementById("details").value,
    date: document.getElementById("dateIncident").value,
    prevention: document.getElementById("prevention").value
  };

  localStorage.setItem("incidentData", JSON.stringify(data));

  window.open("OUTPUTFORM.html", "_blank");
}
