
name_of_the_student_array = []; 

function submit() 
{
  var display_student_array = [] ;

  for (var j = 1; j <= 4; j++)
  {
      var name_of_the_student = document.getElementById('name_of_the_student_+j').value;
      console.log(name_of_the_student);
      name_of_the_student_array.push(name_of_the_student);
  }    

  console.log(name_of_the_student_array);

  var lenght_of_name_of_the_students_array = name_of_the_student_array.length;
  console.log(lenght_of_name_of_the_students_array;)

  for (var k = 0; k <lenght_of_name_of_the_students_array; k++)
  {
      display_student_array.push("<h4>NAME - "+ name_of_the_student_array[k] + "<h4>");
      console.log(display_student_array);
  }

    var name_1 = document.getElementById("name_of_the_student_1").value; 
    var name_2 = document.getElementById("name_of_the_student_2").value; 
    var name_3 = document.getElementById("name_of_the_student_3").value; 
    var name_4 = document.getElementById("name_of_the_student_4").value; 
    
    name_of_the_student_array.push(name_1);
    name_of_the_student_array.push(name_2); 
    name_of_the_student_array.push(name_3); 
    name_of_the_student_array.push(name_4); 
    
    console.log(name_of_the_student_array); 
    document.getElementById("display_name").innerHTML = name_of_the_student_array; 
    document.getElementById("submit_button").style.display = "none"; 
    document.getElementById("sort_button").style.display = "inline-block"; 

} 

function reset() 
{ 
    name_of_the_student_array.pop();
     document.getElementById("display_name").innerHTML = name_of_the_student_array; 
    
    
    }
