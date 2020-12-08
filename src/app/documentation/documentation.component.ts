import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  markdown= `
#  **POWER INDEXING** 

<hr>

## Introduction

<hr>

Welcome to the power API! You can use our API to access power API endpoints, which can get information on various heater and their status, monthly Bills and Energy Savings in our database.

We have language bindings in JavaScript You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

Feel free to use it as a base for your own API's documentation.

<hr>

## Registration

|Url|Required_Auth|Http_Method|
|---|---|---|
|User|registration|No|Post|

#### HTTP Request

\`\`\`typescript

   POST https://power-api.tech.net/api/v1/registration


\`\`\`

### Parameters

|Parameter_Name|Type|Mandatory|Description|
|---|---|---|---|
|User_ID|String|Auto_Generate|User_Id|
|Full Name|String|Required|Your_UserName|
|Email Address|String|Required|Your_Email_Id|
|CreatePassword|String |Required|Your_Password|
|subcription|Boolean|Required|Offer_and_Promotionals|

#### The above request returns JSON structured like this:
#####  Response : 200
\`\`\`typescript

  {
    "success" : true
    "message" : "Registration completed successfully"
  }


 \`\`\`


#### The above request returns JSON structured like this:
##### Response : 300 
\`\`\`typescript

  {
    "success":true
    "redirect":http://login.html
  }


 \`\`\`

#### The above request returns JSON structured like this:

##### Response : 400 
#### For  Name Invalid

\`\`\`typescript

  {
     "success" : false
     "code": "400"
     "error":
     {
        "message": "Not a Valid Name, User Name Contain  maximum 15 Character "
     }
  }


\`\`\`
####  For Email-Address Invalid
\`\`\`typescript

  {
    "success" : false
    "code": "400"
    "error":
    {
      "message":"You have entered an invalid email-address.please try again"
    }
    
  }


\`\`\`
#### For Password Invalid
\`\`\`typescript

  {
    "success" : false
    "code": "400"
    "error":
    {
        "message":"Password must contain atleast 6 character and maximum 15 character including Upper/lowercase and Numbers"
    }
  
  }


\`\`\`

#### For Subcription Invalid

\`\`\`typescript 

  {
   "success" : false
   "code": "400"
   "error":
    {
      "message": "Please indicate that you accept the relevent offer and promotionals"
    }
     
  }


\`\`\`
## Login 

#### HTTP Request

\`\`\`typescript

   POST https://power-api.tech.net/api/v1/login


\`\`\`

### Parameters

|Name|Type|Description|Value|
|---|---|---|---|
|Email|String|User Id|MEZm6pW2BlWEuP|    
|Password|Alphanumeric|Password|6pW2BlWEuP|  

<hr>

### Required 

<hr>

#### Email Address

  1. Not Null.
  2. Must be @ Symbol.

#### Password

1. Not Null.
2. Must be Alphanumeric
  
#### The above request returns JSON structured like this:
 #####  Response : 200
 
 \`\`\`typescript 

  {
     "status": 
    {
      "type": "success",
      "message": "Success",
      "code": 200,
      "error": false
    }
  }  


 \`\`\`
 
#### The above request returns JSON structured like this:
#####  Response : 400
\`\`\`typescript 

  {
    "success" : false
    "error": 
    {
        "code": "400"
        "message": "Enter Valid Email "
    }
  }


\`\`\`
#### The above request returns JSON structured like this:
#####  Response : 401
\`\`\`typescript

  {
    "success" : false
    "error": 
    {
      "code": "401"
      "message": "Unauthorized User"
    }
  }


\`\`\`
#### The above request returns JSON structured like this:
##### Response : 404 
\`\`\`typescript

  {
    "success" : false
    "error": 
    {
      "code": "404"
      "message": "Page Not Found "
    }
  }


\`\`\`
##  Forget Password 
 
#### HTTP Request

\`\`\`typescript

   POST https://power-api.tech.net/api/v1/forgetpassword


\`\`\`


### Parameters

|Name   |Type   | Description | Value |
| ---   | ---   | ---         | ---   |
|E-mail |String |Password Send To E-Mail|MEZm6pW2BlWEuP|

 #### The above request returns JSON structured like this:
 #####  Response : 200 

 \`\`\`typescript 
 
  {
    "status": 
    {
      "type": "success",
      "message": "Password Successfully Changed",
      "code": 200,
      "error": false
    }
   }
  
  
\`\`\`

#### The above request returns JSON structured like this:

#####  Response : 400

\`\`\`typescript 

  {
    "success" : false
    "error": 
    {
      "code": "400"
      "message": "Enter Valid Email"
    }
  }



\`\`\`

#### The above request returns JSON structured like this:

#####  Response : 400

\`\`\`typescript 

  {
    "success" : false
    "error": 
    {
      "code": "400"
      "message": "Enter Valid Password"
    }
  }



\`\`\`

#### The above request returns JSON structured like this:

#####  Response : 411 

\`\`\`typescript 

  {
    "success" : false
    "error": 
    {
      "code": "400"
      "message": " Password Length Is too Short "
    }
  }



\`\`\`

##  Dashboard API

#### HTTP Request

\`\`\`typescript

   POST https://power-api.tech.net/api/v1/Dashboard


\`\`\`

|Name|Type|Description|Value|
|---|---|---|---|
|Customer_ID|String|User_id|MEZm6pW2BlWE|
|AuthToken|String|String|AEu4IL3DYssFoBGxfwNVQXYdKqUOwp3xsV2UYEWZPplH7kZj0i0HIIaSCj|
|request_time_stamp|long    |epouchdate|1575214321|

# The above request returns JSON structured like this:

#####  Response : 200 

  \`\`\`typescript

  {
    "success" : true
    "devices" : 
    [
      {
       "id": 1,
       "device_id": "power-3287",
       "response_duration": 1000,
       "response_time_stamp": 1580393682,
       "response_host": "host_name",
      },
      {
       "id": 2,
       "device_id": "power-3288",
       "response_duration": 1000,
       "response_time_stamp": 1580393682,
       "response_host": "host_name",
      },
    ]
  }



  \`\`\`  

#### The above request returns JSON structured like this:

#####  Response : 400 

\`\`\`typescript 
 
 {
    "success" : false
    "error": 
    {
      "code": "400"
      "message": "Bad Request Reason"
    }
  }



\`\`\`

# The above request returns JSON structured like this:

#####  Response : 401 

\`\`\`typescript

  {
    "success" : false
    "error": 
    {
      "code": "401"
      "message": "Unauthorized user"
    }
  }


\`\`\`

##  System Performance

#### HTTP Request

\`\`\`typescript

   POST https://power-api.tech.net/api/v1/getPerformance


\`\`\`

### Parameters

|Name|Type|Description|value|
|---|---|---|---|  
|device_id|String|device ID|power_5161616|
|day|Integer|Day|21/02/2020|
|time|long|Time|1577892721|
|week-from|Integer|Week|1|
|week-to|Integer|Week|2|
|month-from|Integer|Month|Jan|
|month-to|Integer|Month|Jul|
|eflops|Integer|Eflops data|1578670321|
|auth_Token|string|Token-Id|1578670321AEu4IL3DYssFoBGxfwNVQXYdKqUOwp3xsV2UYEWZPplH7kZj0i0HIIaSCj|

#### The above request returns JSON structured like this:

#####  Response : 200

\`\`\`typescript 

    {
      "device_id": "power_5161616",
      "response_time_stamp": 1580393682,
      "response_duration": 1000,                        //milliseconds
      "response_host": "host_name",
      "energyUsages": [
          {
            
            "Time":"1577892721",
            "Eflops": "1578670321"
         
          },
          {
             
            "Days":"1577892721",
            "Eflops": "1578670321"
          },
        
          {
              
            "Days":"1577892721",
            "Eflops": "1578670321"
          },
        
      ]
    }



\`\`\`

#### The above request returns JSON structured like this:

##### Response : 400 

\`\`\`typescript

{
    "success" : false
    "error": 
    {
      "code": "400"
      "message": "Bad Request Reason"
    }
}


\`\`\`

#### The above request returns JSON structured like this:

#####  Response : 401 

\`\`\`typescript 

  {
    "success" : false
    "error": 
    {
      "code": "401"
      "message": "Unauthorized user"
    }
  }



\`\`\`

##  Invoice

#### HTTP Request

\`\`\`typescript

   POST https://power-api.tech.net/api/v1/invoice


\`\`\`

### parameters

| Name        | Type       | Description   | value        |
| ---         | ---        | ---           | ---          |
| customer_ID | String     |   user ID     | MEZm6pW2BlWE |
| day         | Integer    |   Day         | 20/02/2020   |
| time        | long       |   Time        | 1577892721   |
| week-from   | Integer    |   Week        |   1          |
| week-to     | Integer    |   Week        |   2          |
| month-from  | Integer    |   Month       |   Jan        |
| month-to    | Integer    |   Month       |   Feb        |
| loren-ipsum | Integer    |   loren-ipsum |   $2,500.00  |
| auth_Token  | string     |   Token-Id    | AEu4IL3DYssFoBGxfwNVQXYdKqUOwp3xsV2UYEWZPplH7kZj0i0HIIaSCj |

#### The above request returns JSON structured like this:

#####  Response : 200 

\`\`\`typescript

 {
   "customer_id": "MEZm6pW2BlWEuPdmOMXKlLkBh602",
   "customer_name": "Client Name",
   "customer_address": "xxxx, xhxxx,xxxxxxxxxxxxxx",
   "invoice_number": "#234568556",
   "date_of_issue": 1580393682,
   "total_savings": "$156.68",
   "invoice_details": 
   [
      {
          "description": "power-12",
          "unit_cost": "$20.23",
          "quantity": 1,
      },
      {
          "description": "power-13",
          "unit_cost": "$20.23",
          "quantity": 2,
      },
      {
          "description": "power-43",
          "unit_cost": "$20.23",
          "quantity": 1,
      }
   ],
   "tax_rate": "18%",
   "discount": "$10.58",
   "invoice_total": "$68.45"
 }


\`\`\`

#### The above request returns JSON structured like this:

#####  Response : 400 

\`\`\`typescript

 {
    "success" : false
    "error": 
    {
       "code": "400"
      "message": "Bad Request "
    }
 }


\`\`\`

#### The above request returns JSON structured like this:

#####  Response : 401 

\`\`\`typescript

  {
     "success" : false
     "error": 
    {
      "code": "401"
      "message": "Unauthorized User"
    }
  }


\`\`\` 

`

  ngOnInit() {
    setTimeout(() => {
      $("#docs table").addClass('table');
    },100);
  }

  link(id)
  {
    
    // console.log(data)
    // var reg= document.getElementById('registration')
    // var log =document.getElementById('login')
    // var forg=document.getElementById('forget-password')
    // var dash =document.getElementById('dashboard-api')
    // var sys =document.getElementById('system-performance')
    // var inv =document.getElementById('invoices')
    // console.log(reg);
    
    
  let nav=$("#"+id);
    $('html, body').animate({
      scrollTop: nav.offset().top - 20
    }, 2000, 'swing', function () {
       // window.location.hash = target
    });
  }

}
