html, body {
  height: 100%;
  margin: 0;
}

body {
  display: flex;
  flex-direction: column;
}

header {
  height: 100px;
  width: auto;
  background-color: #39A136;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  padding: 10px; /* Ajusta el padding si es necesario */
  margin: 20px;
  position: relative; /* Necesario para que los elementos hijos se posicionen en relación con el header */
}

header img {
  position: absolute;
  top: 10px; /* Ajusta la distancia desde el borde superior */
  left: 10px; /* Ajusta la distancia desde el borde izquierdo */
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

#calculadora table {
  height: 300px;
  margin: 10px;
  margin: auto;
}

#calculadora button,
#calculadora input {
  width: 100%;
  height: 100%;
  font-size: 1em;
  padding: 10px;
}

#calculadora input {
  padding: 5%;
  margin: 0.95px;
  color: white;
  border: none;
  background-color: rgba(0, 0, 0, .4);
  border-radius: 10px;
  font-size: 25px; 
  padding: 20px;
  cursor: pointer; 
  width: 100%;
  height: 65px;
}

#calculadora button {
  background-color: rgba(0, 0, 0, .5);
  border-radius: 10px;
  border: 1px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

#calculadora button:hover {
  background-color: rgba(0, 0, 0, .5);
  border-radius: 10px;
}

#calculadora button.operacion {
  background-color: rgb(36, 39, 231);
  border-radius: 10px;
}

#calculadora button.operacion#restar,
#calculadora button.operacion#clear {
  background-color: rgb(36, 39, 231);
  border-radius: 10px;
}

#calculadora button.operacion#igual {
  background-color: red;
  border-radius: 10px;
}

footer {
  height: 120px;
  width: 100%;
  color: white;
  background-color: #39A136;
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem 2rem;
  margin: 0;
  box-sizing: border-box;
  text-align: center;
}

.footer-imageceet {
  max-width: 300px; 
  height: auto;
  float: left;
  margin: 20px; 
}

.footer-imagesennova {
  max-width: 200px; 
  height: auto; 
  float: right; 
  margin-left: 20px; 
}
