let lalitude = 10;
let longitude = 10;

// let fPC = document.getElementById("firstpageContainer")
let main = document.getElementsByTagName("main")[0];
console.log(main);
let fPC = document.createElement("div");
fPC.innerHTML = `
    <div id="firstpageContainerLeft">
    <h2>Post Office Application</h2>
    <p>
        This Application Allows you to extract information about the nearest
        Post Offices, based on your location.
    </p>
    <div class="image">
        <img src="./images/first_page_pic.png" alt="" />
    </div>
    </div>
    <div id="firstpageContainerRight">
    <h2>Your Current IP Address is <strong></strong></h2>
    <button id="btn">Get Started</button>
    </div>
`;

fPC.id = "firstpageContainer";

main.appendChild(fPC);

let myIpAddress = "";
let firstBtn = document.getElementById("btn");

/* Add "https://api.ipify.org?format=json" statement
			this will communicate with the ipify servers in
			order to retrieve the IP address $.getJSON will
			load JSON-encoded data from the server using a
			GET HTTP request */

$.getJSON("https://api.ipify.org?format=json", function (data) {
  // Setting text of element P with id gfg
  $("#firstpageContainerRight strong").html(data.ip);
  myIpAddress = data.ip;
});

// ************ Event Listeners***************

firstBtn.addEventListener("click", async () => {
  fPC.remove();
  let  data = await getGeoDetails();
  let sPC = document.createElement("div");
sPC.innerHTML = `
<div id="ipAddressSec">
  <h2>IP Address : <strong>${data.ip}</strong></h2>
  <div>
    <h2>Lat : <strong>${data.loc.split(",")[0]}</strong></h2>
    <h2>City : <strong>${data.city}</strong></h2>
    <h2>Organisation : <strong>${data.org}</strong></h2>
    <h2>Long : <strong>${data.loc.split(",")[1]}</strong></h2>
    <h2>Region : <strong>${data.region}</strong></h2>
    <h2>Hostname : <strong>${data.hostname}</strong></h2>
  </div>
</div>
<div id="currLocationSec">
  <h1>Your Current Location</h1>
  <iframe
    src="https://maps.google.com/maps?q=${data.loc.split(",")[0]}, ${data.loc.split(",")[1]}&z=15&output=embed"
    width="360"
    height="270"
    frameborder="0"
    style="border: 0"
  ></iframe>
</div>
<div id="mIAU">
    <h1>More Information About You</h1>
    <div>
        <h2>Time Zone : <strong>${data.timezone}</strong></h2>
        <h2>Date And Time : <strong>${new Date().toLocaleString("en-US", { timeZone: data.timeZone })}</strong></h2>
        <h2>Pincode : <strong>${data.postal}</strong></h2>
        <h2>Message : <p>Number of pincode(s) found: </p><strong></strong></h2>
    </div>
</div>
<div id="pONU">
    <h1>Post Offices Near You</h1>
    <div class="search-container">
        <div id="search-icon">
            <span class="material-symbols-outlined">
                search
                </span>
        </div>
        <div id="search">
            <input type="text" placeholder="Search By Name">
        </div>
    </div>
    <div class="card-container">
        <div class="cards">
            <div class="card">
                <h2>Name : <strong></strong></h2>
                <h2>Branch : <strong></strong></h2>
                <h2>Delivey Status : <strong></strong></h2>
                <h2>District : <strong></strong></h2>
                <h2>Division : <strong></strong></h2>
            </div>
            <div class="card">
                <h2>Name : <strong></strong></h2>
                <h2>Branch : <strong></strong></h2>
                <h2>Delivey Status : <strong></strong></h2>
                <h2>District : <strong></strong></h2>
                <h2>Division : <strong></strong></h2>
            </div>
            <div class="card">
                <h2>Name : <strong></strong></h2>
                <h2>Branch : <strong></strong></h2>
                <h2>Delivey Status : <strong></strong></h2>
                <h2>District : <strong></strong></h2>
                <h2>Division : <strong></strong></h2>
            </div>
            <div class="card">
                <h2>Name : <strong></strong></h2>
                <h2>Branch : <strong></strong></h2>
                <h2>Delivey Status : <strong></strong></h2>
                <h2>District : <strong></strong></h2>
                <h2>Division : <strong></strong></h2>
            </div>
            <div class="card">
                <h2>Name : <strong></strong></h2>
                <h2>Branch : <strong></strong></h2>
                <h2>Delivey Status : <strong></strong></h2>
                <h2>District : <strong></strong></h2>
                <h2>Division : <strong></strong></h2>
            </div>
            <div class="card">
                <h2>Name : <strong></strong></h2>
                <h2>Branch : <strong></strong></h2>
                <h2>Delivey Status : <strong></strong></h2>
                <h2>District : <strong></strong></h2>
                <h2>Division : <strong></strong></h2>
            </div>
            <div class="card">
                <h2>Name : <strong></strong></h2>
                <h2>Branch : <strong></strong></h2>
                <h2>Delivey Status : <strong></strong></h2>
                <h2>District : <strong></strong></h2>
                <h2>Division : <strong></strong></h2>
            </div>
            <div class="card">
                <h2>Name : <strong></strong></h2>
                <h2>Branch : <strong></strong></h2>
                <h2>Delivey Status : <strong></strong></h2>
                <h2>District : <strong></strong></h2>
                <h2>Division : <strong></strong></h2>
            </div>
            <div class="card">
                <h2>Name : <strong></strong></h2>
                <h2>Branch : <strong></strong></h2>
                <h2>Delivey Status : <strong></strong></h2>
                <h2>District : <strong></strong></h2>
                <h2>Division : <strong></strong></h2>
            </div>
            <div class="card">
                <h2>Name : <strong></strong></h2>
                <h2>Branch : <strong></strong></h2>
                <h2>Delivey Status : <strong></strong></h2>
                <h2>District : <strong></strong></h2>
                <h2>Division : <strong></strong></h2>
            </div>
            <div class="card">
                <h2>Name : <strong></strong></h2>
                <h2>Branch : <strong></strong></h2>
                <h2>Delivey Status : <strong></strong></h2>
                <h2>District : <strong></strong></h2>
                <h2>Division : <strong></strong></h2>
            </div>
            <div class="card">
                <h2>Name : <strong></strong></h2>
                <h2>Branch : <strong></strong></h2>
                <h2>Delivey Status : <strong></strong></h2>
                <h2>District : <strong></strong></h2>
                <h2>Division : <strong></strong></h2>
            </div>
            <div class="card">
                <h2>Name : <strong></strong></h2>
                <h2>Branch : <strong></strong></h2>
                <h2>Delivey Status : <strong></strong></h2>
                <h2>District : <strong></strong></h2>
                <h2>Division : <strong></strong></h2>
            </div>
            <div class="card">
                <h2>Name : <strong></strong></h2>
                <h2>Branch : <strong></strong></h2>
                <h2>Delivey Status : <strong></strong></h2>
                <h2>District : <strong></strong></h2>
                <h2>Division : <strong></strong></h2>
            </div>
        </div>
    </div>
    
</div>
`;

sPC.id = "secondPageContainer";
  main.appendChild(sPC);
});

// ********** functions *************
async function getGeoDetails(){
    let url = `https://ipinfo.io/${myIpAddress}/geo`
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
    return result
}

navigator.lo
