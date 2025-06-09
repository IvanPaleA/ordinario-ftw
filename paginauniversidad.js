fetch('datos.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "text/xml");
    const carreras = xml.getElementsByTagName('carrera');

    let html = "<tr><th>Nombre</th><th>Duración</th><th>Facultad</th></tr>";
    for (let i = 0; i < carreras.length; i++) {
      const nombre = carreras[i].getElementsByTagName('nombre')[0].textContent;
      const duracion = carreras[i].getElementsByTagName('duracion')[0].textContent;
      const facultad = carreras[i].getElementsByTagName('facultad')[0].textContent;
      html += `<tr><td>${nombre}</td><td>${duracion}</td><td>${facultad}</td></tr>`;
    }

    document.getElementById('tabla-carreras').innerHTML = html;
  });

