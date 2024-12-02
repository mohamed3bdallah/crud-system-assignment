let siteName = document.getElementById("siteName");
let siteUrl = document.getElementById("siteUrl");

let siteList = [];

if(localStorage.getItem("site") !== null){
  siteList =  JSON.parse(localStorage.getItem("site"));

  displayData();
  
}

function addSite() {
  let newSite = {
    name: siteName.value,
    url: siteUrl.value,
  };
  siteList.push(newSite);

  localStorage.setItem("site", JSON.stringify(siteList));

  displayData();

  clear();
}
function clear() {
  siteName.value = null;
  siteUrl.value = null;
}
function displayData() {
  let trTable = "";
  for (let i = 0; i < siteList.length; i++) {
    trTable += `
     <tr>
            <td>${i}</td>
            <td>${siteList[i].name}</td>
            <td>
              <button class=" co btn btn-outline-success"><a href="https://${siteList[i].url}/">visit</a></button>
            </td>
            <td>
              <button onclick="deleteSite(${i})" class="btn btn-outline-danger">delete</button>
            </td>
          </tr>
    `;
    document.getElementById("siteTable").innerHTML = trTable;
  }
}

function deleteSite(index) {
  siteList.splice(index, 1);
  localStorage.setItem("site", JSON.stringify(siteList));

  displayData();
}

