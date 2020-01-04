interface Employee {
    Name:string;
    Surname:string;
    }
interface Worker extends Employee {
    Gender:string;
    Code:number;
}
 var Details = <Worker>{};

    Details.Name = "Himanshi";
    Details.Surname = "Kashyap";
    Details.Gender = "Female";
    Details.Code = 1;
    console.log("Employee name is"+ Details.Name);
    console.log("Employee code is"+ Details.Code);

    