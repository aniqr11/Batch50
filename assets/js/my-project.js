const data = []

function submitData(event) {
  event.preventDefault()

  let projectname = document.getElementById("projectname").value
  let description = document.getElementById("Description").value
  let image = document.getElementById('upimage').files
  let startdate =new Date(document.getElementById("startdate").value)
  let enddate = new Date(document.getElementById("enddate").value)
  let Go = document.getElementById('Golang')

 
   image = URL.createObjectURL(image[0])

// duration set
   const day1 = startdate.getTime()
   const day2 = enddate.getTime()
   const result = day2-day1

   const dayResult =Math.floor(result / (31 * 24 * 60 * 60 * 1000))

function dayDay(){
  if(dayResult <= 12){
    return dayResult + ' Month'
  } else { return Math.trunc(dayResult/12) +' Years'}
}
      
  const obj = {
    image,
    projectname,
    description,
    Duration:dayDay()
  }

    
    data.push(obj)
  renderBlog()
}

function renderBlog() {
  document.getElementById("box-project").innerHTML =""

  for(let i = 0; i < data.length; i++) {
    document.getElementById("box-project").innerHTML += `<div class="newproject">
        <img src="${data[i].image}" alt="contoh">

        <h4 style="margin-bottom: -1px;">${data[i].projectname}</h4>
        Durasi : ${data[i].Duration}
        <p>${data[i].description}</p>

            <div class="tech-i">
                <i class="fa-brands fa-golang fa-2x"></i>
                <i class="fa-brands fa-js fa-2x"></i>
                <i class="fa-brands fa-node-js fa-2x"></i>
                <i class="fa-brands fa-react fa-2x"></i>
                
            </div>
    </div>`
  }
}

// hamba-nav
let isOpen = false // true
function openhumberger() {
  let humbergerNav = document.getElementById("humberger-nav-container")
  if(!isOpen) {
    humbergerNav.style.display= "block";
    isOpen = true
  } else {
    humbergerNav.style.display= "none";
    isOpen = false
  }
}