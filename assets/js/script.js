function getData() {
    // data collection
    const namei = document.getElementById("name").value
    const email = document.getElementById("email").value
    const tlp = document.getElementById("tlp").value
    const gender = document.getElementById("gender").value
    const TA = document.getElementById("TA").value
    
    // log
    
    // console.log(namei);
    // console.log(email);
    // console.log(tlp);
    // console.log(gender);
    // console.log(TA);


//if

  if(namei ==""){
    return alert("Nama harus di isi")
  }
   else if(email == "") {
    return alert("Email harus di isi") 
  }
   else if(tlp == "") {
    return alert("Nomor telpon harus di isi") 
  } 
  else if(gender == '') {
    return alert("gender harus di isi") 
  }
   else if(TA == "") {
    return alert("Message harus di isi") 
  }

  // execute to email
  const emailReceiver = "day-3latihan@gmail.com"
  let a = document.createElement("a")
  a.href = `mailto:${emailReceiver}?subject=${'DumbWays'}&body= Halo nama saya ${namei} , jenis kelamin aing ${gender} , bisakah anda menghubungi saya di ${tlp} untuk membahas ${TA}`
  a.click()


  let data2 = {
    namei,
    email,
    tlp,
    gender,
    TA
  }

  console.log(data2)

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