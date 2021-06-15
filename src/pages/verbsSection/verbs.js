const testOne = () => {
  const view = `
    <h2>Verbos</h2>
    <p>
      Como lo dije en la <a href="#/" target="_blank"><span class="words-links">página principal</span></a>, los verbos son las palabras que representan las acciones, tanto externas (correr, saltar, etc)
      como internas (amar, pensar, etc.). Solo con una palabra puedes dar a entender a una persona lo que quieres o por lo que estas pasando.
    </p><br>
    <div class="tips"></div><br>
    <h3>¿Qué es un verbo?</h3>
    <p>
      Los verbos son palabras que describen acciones, tanto mentales como físicas. Los verbos también describen un estado "del ser", como
      los verbos: be, become, exists, etc. Hay otros verbos que funcionan como <a href="#"><span class="words-links">verbos auxiliares</span></a>
      para cambiar el tiempo de otro verbo, al igual que poder negarlo.
    </p><br>
    <h3>Verbos Regulares & Irregulares</h3>
    <p>
      Los verbos tienen diferentes formas de darse a entender, diferentes usos, como pasa en el pasado o con una acción que sucede continuamente. <br><br>
      Los <strong>verbos regulares</strong> normalmente siguen los mismos patrones para poder conjugarse en todos los tiempos verbales, es decir, siguen
      las mismas reglas. De esta forma es más fácil poder recordarlos con más facilidad. <br><br>
      Desafortunadamente los <strong>verbos irregulares</strong> no siguen las mismas reglas, tienen su propia forma de conjugarse y no tienen patrones específicos,
      sobre todo para el pasado simple y el pasado participio. Por esta razón estos verbos son más difíciles de recordar.
    </p><br>
    <h3>Formas Verbales</h3>
    <p>
      Antes de conjugar los verbos, es importante conocer las diferentes formas verbales que tienen. Esto ayuda a poder identificar la forma y el tiempo que debes
      usar para cada conjugación de un verbo. En la siguiente tabla se muestra un ejemplo donde se puede apreciar la diferencia entre un verbo regular de uno irregular.
    </p><br>
    <div class="table-container">
      <table class="table">
        <tr>
          <th>Tipo de Verbo</th>
          <th>Base</th>
          <th>Tercera Persona del singular</th>
          <th>Pasado Simple</th>
          <th>Presente participio</th>
          <th>Pasado Participio</th>
        </tr>
        <tr>
          <td>Regular</td>
          <td>Dance</td>
          <td>Dances</td>
          <td>Danced</td>
          <td>Dancing</td>
          <td>Danced</td>
        </tr>
        <tr>
          <td>Irregular</td>
          <td>Sing</td>
          <td>Sings</td>
          <td>Sang</td>
          <td>Singing</td>
          <td>Sung</td>
        </tr>
      </table>
    </div>
  `
  return view;
}

export default testOne;
