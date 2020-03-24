@Project_ProductStore
Feature: ProductStore  Website

  @TC01_Project_ProductStore
  Scenario Outline: 
    verify the title of the webapplication

    Given launching the application and login <username> and <password> into the application and
    When the user is on home page,take out the title and compare

    Examples: 
      | username      |  | password      |
      | triveni reddy |  | triveni reddy |

  @TC02_Project_ProductStore
  Scenario Outline: 
    Signup in the ProductStore

    Given when the user launch the chrome and application and,
    When the user clicks on signup link,
    Then the user enters un <username> and pwd <password>,
    Then the user clicks signup button

    Examples: 
      | username        |  | password         |
      | kokatam triveni |  | kokatam triveni  |
      | aitha sushmita  |  | aitha sushmitha1 |

  @TC03_Project_ProductStore
  Scenario Outline: 
    Signup in with only username in the ProductStore

    Given if the user launch the chrome and application ,only username
    When the user clicks on signup link ,only username
    Then the user enters only username <username> and
    Then the user clicks signup button ,with username

    Examples: 
      | username  |
      | sushmitha |

  @TC04_Project_ProductStore
  Scenario Outline: 
    Signup in with only password in the ProductStore

    Given if the user launch the chrome and application ,only password
    When the user clicks on signup link ,only password
    Then the user enters only password <password>,
    Then the user clicks signup button ,with password

    Examples: 
      | password  |
      | sushmitha |

  @TC05_Project_ProductStore
  Scenario Outline: 
    Signup in with duplicate details in the ProductStore

    Given if the user launch the chrome and application ,duplicate
    When the user clicks on signup link ,duplicate
    Then the user enters <username>,<password> ,duplicate
    Then the user clicks signup button ,duplicate

    Examples: 
      | username      |  | password      |
      | triveni reddy |  | triveni reddy |

  @TC06_Project_ProductStore
  Scenario Outline: 
    Login in the ProductStore

    Given the user launch the chrome application
    When the user open the ProductStore Home page
    Then the user login using <username> and <password>
    Then click on the login button user nagivate to the next page

    Examples: 
      | username      |  | password      |
      | triveni reddy |  | triveni reddy |

  @TC07_Project_ProductStore
  Scenario Outline: 
    Login in the ProductStore using Invalid details

    Given if user launch the chrome application and
    When if user open the ProductStore Home page and
    Then if user login using  Invalid <username> and <password> and
    Then click on the login button, user  should not nagivate to the next page

    Examples: 
      | username       |  | password       |
      | triveni reddy1 |  | triveni reddy1 |

  @TC08_Project_ProductStore
  Scenario: 
    Login in the ProductStore without details

    Given when user launches the chrome application and
    When when user opens the ProductStore Home page and
    Then by clicking on the login button user  should not nagivate to the next page

  @TC09_Project_ProductStore
  Scenario Outline: 
    Add each item to the cart

    Given if the user launch the website and login with <username> and <password>
    When the user adds the items
    Then click on cart and check if the items ared added or not

    Examples: 
      | username      |  | password      |
      | triveni reddy |  | triveni reddy |

  @TC10_Project_ProductStore
  Scenario Outline: 
    Add all phones  to the cart

    Given if the website is launched  and  login with <username> , <password>
    When the user adds all phones
    Then click on cart and check all the phones are added or not

    Examples: 
      | username  |  | password  |
      | kavya raj |  | kavya raj |

  @TC11_Project_ProductStore
  Scenario Outline: 
    Add items to the cart and place order

    Given if the user launch the website and login with <username> , <password> and
    When the user clicks on cart and  count no of items and
    Then click on place order and verify the purchase

    Examples: 
      | username      |  | password      |
      | triveni reddy |  | triveni reddy |

  @TC12_Project_ProductStore
  Scenario Outline: 
     do not add items to the cart and place order

    Given if the user launches the website and clicks login with <username> , <password>and
    When the user click on cart and  count number of items and
    Then click on place order and then  verify the purchase

    Examples: 
      | username  |  | password  |
      | kavya raj |  | kavya raj |

  @TC13_Project_ProductStore
  Scenario Outline: 
    enter email,name,message and click send

    Given the user launch the application and login with <username> , <password> into the application
    When the user clicks the contact link
    Then the user enters contact email
    Then the user enters contact name
    Then user enters message and click submit button

    Examples: 
      | username  |  | password   |
      | sushmita1 |  | sushmitha1 |

  @TC14_Project_ProductStore
  Scenario Outline: 
    enter email,name,message and click cancel

    Given if user launch the application and login with <username> , <password> into the application and
    When if user clicks the contact link and
    Then if user enters contact email and
    Then if user enters contact name and
    Then user enters message then click cancel button

    Examples: 
      | username  |  | password   |
      | sushmita1 |  | sushmitha1 |

  @TC15_Project_ProductStore
  Scenario Outline: 
    do not  enter email,name,message and click send

    Given might user launch the application and login with <username> , <password> into the application
    When might the user clicks the contact link
    Then the user do not enters contact email
    Then the user do not  enters contact name
    Then user do not enters message and click submit button

    Examples: 
      | username  |  | password   |
      | sushmita1 |  | sushmitha1 |
