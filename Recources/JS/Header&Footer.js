// Función para crear y añadir el header y footer
function createHeaderAndFooter() {


    // Crear el contenido del header
    const headerContent = `
    <header class="bg-light mb-4">
      <nav class="navbar  navbar-dark ">

        <a href="/index.html" class="navbar-brand">
          <img src="../Recources/img/logo_iPN.svg" alt="InfineteLoop">
        </a>
        <div>
          <p class="d-inline" style="font-size: 1.2em;">Hola Amin</p>
          <i class="bi bi bi-person-square p-1" style="font-size: 1.5em;"></i>
        </div>
      </nav>
    </header>
`;

    // Crear el contenido del footer
    const footerContent = `
            <footer class="footer bg-light text-dark fixed-bottom mt-auto">
        <div class="container">
            <p class="text-center">&copy; 2024 IPN. Todos los derechos reservados.</p>
        </div>
    </footer>

    `;

    // Insertar el contenido del header
    const headerElement = document.querySelector(".header_insert");
    if (headerElement) {
        headerElement.innerHTML = headerContent;
    } else {
        console.error("No se encontró el elemento header en el documento");
    }

    // Insertar el contenido del footer
    const footerElement = document.querySelector(".footer_insert");
    if (footerElement) {
        footerElement.innerHTML = footerContent;
    } else {
        console.error("No se encontró el elemento footer en el documento");
    }
}

createHeaderAndFooter();