const keyPressed = document.querySelector('.key');

window.addEventListener('keydown', (e) => {
                                  // events on key press
  keyPressed.innerHTML = `
  <div class="table">
    <table>
      <tr>
        <th>Key</th>
        <th>Key Code</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key === ' ' ? 'Space' : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  </div>
  `
})