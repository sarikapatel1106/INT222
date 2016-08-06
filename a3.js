function validateName()
{
	var fname=document.form1.name1.value;
	var lname=document.form1.name2.value;
	var pat = /^[A-Za-z'-]+$/;
	if(fname.search(/[a-zA-Z]/) < 0)
	{
		document.getElementById("error_name").innerHTML= "&#x2716; First name must have at least one alphabetic characters";
		document.getElementById("name1").style.boxShadow="3px 3px 3px red";
		return false;
	}
	else if(lname.search(/[a-zA-Z]/) < 0)
	{
		document.getElementById("error_name").innerHTML= "&#x2716; Last name must have at least one alphabetic characters";
		document.getElementById("name2").style.boxShadow="3px 3px 3px red";
		return false;
	}
	else if(fname.search(pat) < 0)
	{
		document.getElementById("error_name").innerHTML= "&#x2716; Only alphabetic character, hyphen(-) & apostrophe (') is acceptable  ";
		document.getElementById("name1").style.boxShadow="3px 3px 3px red";
		return false;
	}
	else if(lname.search(pat) < 0)
	{
		document.getElementById("error_name").innerHTML= "&#x2716; Only alphabetic character, hyphen(-) & apostrophe (') is acceptable  ";
		document.getElementById("name2").style.boxShadow="3px 3px 3px red";
		return false;
	}
	else
	{
		document.getElementById("error_name").innerHTML= "";
		document.getElementById("name1").style.boxShadow="3px 3px 3px green";
		document.getElementById("name2").style.boxShadow="3px 3px 3px green";
		return true;
	}
}

function validatePwd1()
{
	var pwd=document.form1.pwd1.value;
	if(pwd.length < 8)
	{
		document.getElementById("error_pwd1").innerHTML= "&#x2716; Password is too short";
		document.getElementById("pwd1").style.boxShadow="3px 3px 3px red";	
		return false;
	}
	else if(pwd.search(/[a-z]/) < 0 || pwd.search(/[A-Z]/) < 0 || pwd.search(/[0-9]/) < 0)
	{
		document.getElementById("error_pwd1").innerHTML= "&#x2716; Password must contain both upper and lower case letters & at least one digit number";
		document.getElementById("pwd1").style.boxShadow="3px 3px 3px red";
		return false;
	}
	else
	{
		document.getElementById("error_pwd1").innerHTML= "";
		document.getElementById("pwd1").style.boxShadow="3px 3px 3px green";
		return true;
	}
}

function validatePwd2()
{
	if(document.form1.pwd1.value != document.form1.pwd2.value)
	{
		document.getElementById("error_pwd2").innerHTML= "&#x2716;Password doesn't match";
		document.getElementById("pwd2").style.boxShadow="3px 3px 3px red";
		return false;
	}
	else
	{
		document.getElementById("error_pwd2").innerHTML= "";
		document.getElementById("pwd2").style.boxShadow="3px 3px 3px green";
		return true;
	}
}

function validatePhone()
{
	var phn = document.form1.phone.value;
	var phn1=phn.substr(1,3);
	var phn2=phn.substr(5,3);
	var phn3=phn.substr(9,11);
	if(phn.length != 13)
	{
		document.getElementById("error_phone").innerHTML= "&#x2716; Please enter 10 digits in (999)999-999 format";
		document.getElementById("phone").style.boxShadow="3px 3px 3px red";
        return false;
	}
	else if(phn1 == 000)
	{
		document.getElementById("error_phone").innerHTML= "&#x2716; Area code can't be all zeros";
		document.getElementById("phone").style.boxShadow="3px 3px 3px red";
        return false;
	}
	else if(phn2 == 000 && phn3 == 0000)
	{
		document.getElementById("error_phone").innerHTML= "&#x2716; Actual phone number can't be all zeros";
		document.getElementById("phone").style.boxShadow="3px 3px 3px red";
        return false;
	}
	else if(phn.charAt(0)!= '(' || phn.charAt(4) != ')' || phn.charAt(8) != '-')
	{
		document.getElementById("error_phone").innerHTML= "&#x2716; Please enter phone number (999)999-9999 format";
		document.getElementById("phone").style.boxShadow="3px 3px 3px red";
        return false;
	}
	else
	{
		document.getElementById("error_phone").innerHTML= "";
		document.getElementById("phone").style.boxShadow="3px 3px 3px green";
		return true;
	}
    
}

function validateProvince()
{
	var counter=0;
	var i;
	var num = document.form1.province.length;
	for (i=0; i<num; i++)
	{
		if (document.form1.province[i].checked)
		{
			counter++;
		}
	}
    
	if (counter ==0)
	{  
		document.getElementById("error_province").innerHTML= "&#x2716; Please select atleast one option";
		document.getElementById("province").style.boxShadow="3px 3px 3px red";
		return false;
	}
	else 
	{
		document.getElementById("error_province").innerHTML= "";
		document.getElementById("province").style.boxShadow="3px 3px 3px green";
		return true;
	}
}

function validateAll()
{
	if(validatePwd1() == true && validatePwd2() == true && validateName() == true && validatePhone() && validateProvince() == true)
	{
		return true;
	}
	else
	{
		return false;
	}
}


function countryList()
 {
    var list = document.getElementById("country");
    var i = 0;
    var str = new String();
    for(i=0; i < countries.length; i++)
    {
        if(countries[i].code == "CA")
        {
            str =  str + "<option value='" + countries[i].code + "' selected='selected'>" + countries[i].name + "</option>";
        }
        else
        {
            str =  str + "<option value='" + countries[i].code + "'>" + countries[i].name + "</option>";   
        }
    }
    list.innerHTML = str;
    provinceValidation();
}

function provinceValidation()
{
    var up = document.getElementById("province");
    if(document.getElementById('country').value == "CA")
    {
        var i = 0;
        var str = new String();
        for(i=0; i < Province.length; i++)
        {
            if(i==0)
            {
                str =  str + "<select name='province' required>";
            }
            str =  str + "<option value='" + Province[i].code + "'>" + Province[i].name + "</option>";
            if(i==(Province.length - 1))
            {
                str = str + "</select>"
            }
        }
        up.innerHTML = str;
    }
    else
    {
        up.innerHTML = "<input type='text' name='province' required/>";
    }
}

var Province = [
				  {"code": "select", "name": "-Select-"},
				  {"code": "AB", "name": "Alberta"},
				  {"code": "BC", "name": "British Columbia"},
				  {"code": "MB", "name": "Manitoba"},
				  {"code": "NB", "name": "New Brunswick"},
				  {"code": "NL", "name": "Newfoundland and Labrador"},
				  {"code": "NT", "name": "Northwest Territories"},
				  {"code": "NS", "name": "Nova Scotia"},
				  {"code": "NU", "name": "Nunavut"},
				  {"code": "ON", "name": "Ontario"},
				  {"code": "PS", "name": "Prince Edward Island"},
				  {"code": "QC", "name": "Quebec"},
				  {"code": "SK", "name": "Saskatchewan"},
				  {"code": "YT", "name": "Yukon"}
				];