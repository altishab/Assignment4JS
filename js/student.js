// Dynamically Showing Student Information
function toggleStudentInfo() {
    var studentInfoDiv = document.getElementById('studentInfo');

    if (studentInfoDiv.style.display === 'none') {
        studentInfoDiv.style.display = 'block';
        var studentID = '200531256';
        var studentName = 'Altin Shabani';
        document.getElementById('studentId').textContent = 'Student ID: ' + studentID;
        document.getElementById('studentName').textContent = 'Name: ' + studentName;
    }   else {
        studentInfoDiv.style.display = 'none';
    }
}
// event listener for pressing show student info button
document.getElementById('showInfoButton').addEventListener('click', toggleStudentInfo);