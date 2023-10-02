const data = []

function submitData(event) {
  event.preventDefault()

  let projectname = document.getElementById("projectname").value
  let startdate = document.getElementById("startdate").value
  let enddate = document.getElementById("enddate").value
  let description = document.getElementById("Description").value
  let image = document.getElementById('upimage').files

  image = URL.createObjectURL(image[0])

  const obj = {
    image,
    projectname,
    description,
   
  }

  data.push(obj)
  renderBlog()
}

function renderBlog() {
//   document.getElementById("myproject").innerHTML =""

  for(let i = 0; i < data.length; i++) {
    document.getElementById("newproject").innerHTML += `<div class="newproject">
        <img src="${data[i].image}" alt="contoh">

        <h4 style="margin-bottom: -1px;">${data[i].projectname}</h4>
        durasi : 3 bulan
        <p>${data[i].description}</p>

            <div class="tech-i">
                <i class="fa-brands fa-golang fa-2x"></i>
                <i class="fa-brands fa-js fa-2x"></i>
                <i class="fa-brands fa-node-js fa-2x"></i>
                <i class="fa-brands fa-react fa-2x"></i>
            </div>
    </div>
          
</div>`
  }
}