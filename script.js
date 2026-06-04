let students =
JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function addStudent() {

    let file =
    document.getElementById("photo").files[0];

    let reader = new FileReader();

    reader.onload = function(e){

        let student = {

            name:
            document.getElementById("name").value,

            usn:
            document.getElementById("usn").value,

            dept:
            document.getElementById("dept").value,

            semester:
            document.getElementById("semester").value,

            dob:
            document.getElementById("dob").value,

            contact:
            document.getElementById("contact").value,

            email:
            document.getElementById("email").value,

            address:
            document.getElementById("address").value,

            attendance:
            document.getElementById("attendance").value,

            cgpa:
            document.getElementById("cgpa").value,

            achievement:
            document.getElementById("achievement").value,

            placement:
            document.getElementById("placement").value,

            photo:e.target.result
        };

        students.push(student);

        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );

        displayStudents();

        alert("Student Added");
    };

    if(file){
        reader.readAsDataURL(file);
    }
}

function displayStudents(){

    let list =
    document.getElementById("studentList");

    list.innerHTML="";

    students.forEach((s,index)=>{

        list.innerHTML += `

        <div class="card">

            <img src="${s.photo}">

            <h3>${s.name}</h3>

            <p><b>USN:</b> ${s.usn}</p>

            <p><b>Department:</b> ${s.dept}</p>

            <p><b>Semester:</b> ${s.semester}</p>

            <p><b>DOB:</b> ${s.dob}</p>

            <p><b>Contact:</b> ${s.contact}</p>

            <p><b>Email:</b> ${s.email}</p>

            <p><b>Address:</b> ${s.address}</p>

            <p><b>Attendance:</b> ${s.attendance}%</p>

            <p><b>CGPA:</b> ${s.cgpa}</p>

            <p><b>Achievements:</b> ${s.achievement}</p>

            <p><b>Placement:</b> ${s.placement}</p>

            <button onclick="deleteStudent(${index})">
                Delete
            </button>

        </div>
        `;
    });
}

function deleteStudent(index){

    students.splice(index,1);

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

    displayStudents();
}