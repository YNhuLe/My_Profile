var sData;
var academic = new Array();

class Student {
  constructor(name, program, title, homeCountry, profileImage, aboutMe) {
    this.name = name;
    this.program = program;
    this.title = title;
    this.homeCountry = homeCountry;
    this.profileImage = profileImage;
    this.aboutMe = aboutMe;
  }
}
function loadData() {
  fetch("./dataFiles/data.json")
    .then((res) => res.json())
    .then((dataJSON) => {
      console.log("this is data");
      console.log(dataJSON);
      showData(dataJSON);
    })
    .catch((err) => {
      throw err;
    });
}

function showData(dataJSON) {
  stu = dataJSON.student;
  sData = new Student(
    stu.name,
    stu.program,
    stu.title,
    stu.homeCountry,
    stu.profileImage,
    stu.aboutMe
  );
  document.getElementById("myName").innerHTML = `${sData.name}`;
  document.getElementById("title").innerHTML = `${sData.title}`;
  document.getElementById("picture").src = `${sData.profileImage}`;
  document.getElementById("aboutMe").innerHTML = `${sData.aboutMe}`;
}

class academicYear {
  constructor(semester, transcript) {
    this.semester = semester;
    this.transcript = transcript;
  }
}

function openNav() {
  document.getElementById("mySidebar").style.width = "60%";
  document.getElementById("mySidebar").style.width = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
}

function getYear() {
  const currentYear = new Date().getFullYear();

  return currentYear;
}
document.getElementById("copyright").innerHTML =
  "© " + getYear() + " Jenny Le.";