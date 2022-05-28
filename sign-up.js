function Login() {
    var FirstName = document.forms["RegForm"]["FirstName"];
    var LastName = document.forms["RegForm"]["LastName"];
    var Age = document.forms["RegForm"]["Age"];
    var Email = document.forms["RegForm"]["Email"];
    var PhoneNumber = document.forms["RegForm"]["PhoneNumber"];
    var Gender = document.forms["RegForm"]["Gender"];
    var DateOfBirth = document.forms["RegForm"]["DateOfBirth"];
    var Address = document.forms["RegForm"]["Address"];
    var Province = document.forms["RegForm"]["Province"];
    var PostalCode = document.forms["RegForm"]["PostalCode"];
    var Department = document.forms["RegForm"]["Department"];
    var Year = document.forms["RegForm"]["Year"];
    var Password = document.forms["RegForm"]["Password"];

    if (FirstName.value == "") {
        window.alert("Please enter your First Name.");
        FirstName.focus();
        return false;
    }
    if (LastName.value == "") {
        window.alert("Please enter your Last Name.");
        LastName.focus();
        return false;
    }
    if (Age.value == "") {
        window.alert("Please enter your Age.");
        Age.focus();
        return false;
    }
    if (Email.value == "") {
        window.alert("Please enter your Email.");
        Email.focus();
        return false;
    }
    if (PhoneNumber.value == "") {
        window.alert("Please enter your PhoneNumber.");
        PhoneNumber.focus();
        return false;
    }
    if (Gender.value == "") {
        window.alert("Please enter your Gender.");
        return false;
    }
    if (DateOfBirth.value == "") {
        window.alert("Please enter your Date Of Birth.");
        DateOfBirth.focus();
        return false;
    }
    if (Address.value == "") {
        window.alert("Please enter your Address.");
        Address.focus();
        return false;
    }
    if (Province.value == "") {
        window.alert("Please enter your Province.");
        Province.focus();
        return false;
    }
    if (PostalCode.value == "") {
        window.alert("Please enter your PostalCode.");
        PostalCode.focus();
        return false;
    }
    if (Department.value == "") {
        window.alert("Please enter your Department.");
        return false;
    }
    if (Year.value == "") {
        window.alert("Please enter your Year level.");
        return false;
    }
    if (Password.value == "") {
        window.alert("Please set your Password.");
        Password.focus();
        return false;
    }

    return true;
}