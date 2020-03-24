$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/resources/feature/test.feature");
formatter.feature({
  "line": 2,
  "name": "ProductStore  Website",
  "description": "",
  "id": "productstore--website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Project_ProductStore"
    }
  ]
});
formatter.scenarioOutline({
  "line": 16,
  "name": "",
  "description": "Signup in the ProductStore",
  "id": "productstore--website;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC02_Project_ProductStore"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "when the user launch the chrome and application and,",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the user clicks on signup link,",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the user enters un \u003cusername\u003e and pwd \u003cpassword\u003e,",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "the user clicks signup button",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "productstore--website;;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 25,
      "id": "productstore--website;;;1"
    },
    {
      "cells": [
        "triveni reddy1",
        "",
        "triveni reddy1"
      ],
      "line": 26,
      "id": "productstore--website;;;2"
    },
    {
      "cells": [
        "kavya raj 1",
        "",
        "kavya raj 1"
      ],
      "line": 27,
      "id": "productstore--website;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "",
  "description": "Signup in the ProductStore",
  "id": "productstore--website;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC02_Project_ProductStore"
    },
    {
      "line": 1,
      "name": "@Project_ProductStore"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "when the user launch the chrome and application and,",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the user clicks on signup link,",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the user enters un triveni reddy1 and pwd triveni reddy1,",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "the user clicks signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_TestCase.start()"
});
formatter.result({
  "duration": 10578693700,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_TestCase.click_SingUp()"
});
formatter.result({
  "duration": 4122154700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "triveni reddy1",
      "offset": 19
    },
    {
      "val": "triveni reddy1",
      "offset": 42
    }
  ],
  "location": "SignUp_TestCase.enter_Details(String,String)"
});
formatter.result({
  "duration": 2431473600,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_TestCase.submit()"
});
formatter.result({
  "duration": 8246570800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "Signup in the ProductStore",
  "id": "productstore--website;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC02_Project_ProductStore"
    },
    {
      "line": 1,
      "name": "@Project_ProductStore"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "when the user launch the chrome and application and,",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the user clicks on signup link,",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the user enters un kavya raj 1 and pwd kavya raj 1,",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "the user clicks signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_TestCase.start()"
});
formatter.result({
  "duration": 8263658000,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_TestCase.click_SingUp()"
});
formatter.result({
  "duration": 4077855600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kavya raj 1",
      "offset": 19
    },
    {
      "val": "kavya raj 1",
      "offset": 39
    }
  ],
  "location": "SignUp_TestCase.enter_Details(String,String)"
});
formatter.result({
  "duration": 2254242100,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_TestCase.submit()"
});
formatter.result({
  "duration": 8464145700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "",
  "description": "Signup in with only username in the ProductStore",
  "id": "productstore--website;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@TC03_Project_ProductStore"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "if the user launch the chrome and application ,only username",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the user clicks on signup link ,only username",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the user enters only username \u003cusername\u003e and",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "the user clicks signup button ,with username",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "productstore--website;;",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 39,
      "id": "productstore--website;;;1"
    },
    {
      "cells": [
        "sushmitha"
      ],
      "line": 40,
      "id": "productstore--website;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "",
  "description": "Signup in with only username in the ProductStore",
  "id": "productstore--website;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@TC03_Project_ProductStore"
    },
    {
      "line": 1,
      "name": "@Project_ProductStore"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "if the user launch the chrome and application ,only username",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the user clicks on signup link ,only username",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the user enters only username sushmitha and",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "the user clicks signup button ,with username",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_TestCase.start2()"
});
formatter.result({
  "duration": 8388863500,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_TestCase.click_SingUp2()"
});
formatter.result({
  "duration": 4083070900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sushmitha",
      "offset": 30
    }
  ],
  "location": "SignUp_TestCase.enter_Details2(String)"
});
formatter.result({
  "duration": 2310224600,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_TestCase.submit2()"
});
formatter.result({
  "duration": 8329783500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "",
  "description": "Signup in with only password in the ProductStore",
  "id": "productstore--website;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@TC04_Project_ProductStore"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "if the user launch the chrome and application ,only password",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "the user clicks on signup link ,only password",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the user enters only password \u003cpassword\u003e,",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "the user clicks signup button ,with password",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "productstore--website;;",
  "rows": [
    {
      "cells": [
        "password"
      ],
      "line": 52,
      "id": "productstore--website;;;1"
    },
    {
      "cells": [
        "sushmitha"
      ],
      "line": 53,
      "id": "productstore--website;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 53,
  "name": "",
  "description": "Signup in with only password in the ProductStore",
  "id": "productstore--website;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@TC04_Project_ProductStore"
    },
    {
      "line": 1,
      "name": "@Project_ProductStore"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "if the user launch the chrome and application ,only password",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "the user clicks on signup link ,only password",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the user enters only password sushmitha,",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "the user clicks signup button ,with password",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_TestCase.start3()"
});
formatter.result({
  "duration": 7771554900,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_TestCase.click_SingUp3()"
});
formatter.result({
  "duration": 4077696900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sushmitha",
      "offset": 30
    }
  ],
  "location": "SignUp_TestCase.enter_Details3(String)"
});
formatter.result({
  "duration": 2294141300,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_TestCase.submit3()"
});
formatter.result({
  "duration": 8266152700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 56,
  "name": "",
  "description": "Signup in with duplicate details in the ProductStore",
  "id": "productstore--website;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@TC05_Project_ProductStore"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "if the user launch the chrome and application ,duplicate",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "the user clicks on signup link ,duplicate",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "the user enters \u003cusername\u003e,\u003cpassword\u003e ,duplicate",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "the user clicks signup button ,duplicate",
  "keyword": "Then "
});
formatter.examples({
  "line": 64,
  "name": "",
  "description": "",
  "id": "productstore--website;;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 65,
      "id": "productstore--website;;;1"
    },
    {
      "cells": [
        "triveni reddy",
        "",
        "triveni reddy"
      ],
      "line": 66,
      "id": "productstore--website;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 66,
  "name": "",
  "description": "Signup in with duplicate details in the ProductStore",
  "id": "productstore--website;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@TC05_Project_ProductStore"
    },
    {
      "line": 1,
      "name": "@Project_ProductStore"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "if the user launch the chrome and application ,duplicate",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "the user clicks on signup link ,duplicate",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "the user enters triveni reddy,triveni reddy ,duplicate",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "the user clicks signup button ,duplicate",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_TestCase.start1()"
});
formatter.result({
  "duration": 7635321300,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_TestCase.click_SingUp1()"
});
formatter.result({
  "duration": 4135652100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "triveni reddy",
      "offset": 16
    },
    {
      "val": "triveni reddy",
      "offset": 30
    }
  ],
  "location": "SignUp_TestCase.enter_Details1(String,String)"
});
formatter.result({
  "duration": 2500315800,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_TestCase.submit1()"
});
formatter.result({
  "duration": 8257640300,
  "status": "passed"
});
});