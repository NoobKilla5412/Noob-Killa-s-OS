const forgeList = document.getElementById('forgeMods');
forgeList.id = "mod-list";
forgeList.innerHTML = "<h1>Forge:</h1>";

fetch('/apps/MC Mods/json/forgeMods.json')
  .then((response) => response.json())
  .then((forgeMods) => {
    for (const key in forgeMods) {
      if (Object.hasOwnProperty.call(forgeMods, key)) {
        const element = forgeMods[key];
        forgeList.innerHTML +=
          `<div class="mod">
            <img src="${element.image}">
            <div>
              ${element.title}:<br>
              <a href="mods/${key}/${key}.jar">Download</a><br>
              Version: ${element.version}
            </div>
          </div>`;
      }
    }
  })
  .then(() => {
    const fabricList = document.getElementById('fabricMods');
    fabricList.id = "mod-list";
    fabricList.innerHTML = "<h1>Fabric:</h1>";
    fetch('/apps/MC Mods/json/fabricMods.json')
      .then((response) => response.json())
      .then((fabricMods) => {
        for (const key in fabricMods) {
          if (Object.hasOwnProperty.call(fabricMods, key)) {
            const element = fabricMods[key];
            fabricList.innerHTML +=
              `<div class="mod">
                <img src="${element.image}">
                <div>
                  ${element.title}:<br>
                  <a href="mods/${key}/${key}.jar">Download</a><br>
                  Version: ${element.version}
                </div>
              </div>`;
          }
        }
      });
  });