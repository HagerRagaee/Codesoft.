body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
  }
  
  .calculator {
    border: 2px solid #e1dddd;
    border-radius: 25px;
    padding: 30px;
    width: 280px;
    height: 350px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: rgb(57, 55, 55);
  }
  
  .display {
    height: 45px;
    width: 93%;
    margin-bottom: 10px;
    padding: 5px;
    font-size: 20px;
    color: black;
    border-radius: 5px;
    background-color: #e1dddd;
  }

  .equal{
    
    grid-column: span 2;

  }
  
  .keys {
    padding-top: 35px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 9px;
  }
  
  button {
    padding: 10px;
    border: none;
    border-radius: 18px;
    cursor: pointer;
    background-color: #ccc;
    font-size: 20px;    
  }
  
   .op{
    background: #ec6003;
  }
