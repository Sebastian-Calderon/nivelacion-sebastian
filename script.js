
// login

// Alternar entre login y registro
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const toggleLink = document.getElementById('toggle-link');
    const formTitle = document.getElementById('form-title');

    toggleLink.onclick = (e) => {
        e.preventDefault();
        if (loginForm.style.display === 'none') {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
            formTitle.textContent = 'Iniciar Sesión';
            toggleLink.textContent = 'Regístrate aquí';
        } else {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            formTitle.textContent = 'Registro';
            toggleLink.textContent = 'Inicia sesión aquí';
        }
    };

    // Simular inicio de sesión y registro
    const simulateLoginOrRegister = (e, isRegister = false) => {
        e.preventDefault();
        const redirectURL = "main.html"; // Cambia esto por tu URL de producción si es necesario
        if (isRegister) {
            alert('Registro exitoso. Redirigiendo a la página principal...');
        } else {
            alert('Inicio de sesión exitoso. Redirigiendo a la página principal...');
        }
        window.location.href = redirectURL;
    };

    loginForm.onsubmit = (e) => simulateLoginOrRegister(e, false);
    registerForm.onsubmit = (e) => simulateLoginOrRegister(e, true);
});


// fin login

let movies = [
    {
        id: 1,
        name: "iron man 3",
        image: "./medios/1.jpg",
        estreno: '06-Abr-2023',
        genero: ["Accion", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    },
    {
        id: 2,
        name: "Thor",
        image: "./medios/2.jpg",
        estreno: '26-Jul-2022',
        genero: ["Accion", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    },
    {
        id: 3,
        name: "Thor Ragnarok",
        image: "./medios/3.jpg",
        estreno: '12-May-2023',
        genero: ["Accion", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    },
    {
        id: 4,
        name: "Resident Evil",
        image: "./medios/4.jpg",
        estreno: '06-Abr-2023',
        genero: ["Accion", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    },
    {
        id: 5,
        name: "La vieja guardia",
        image: "./medios/5.jpg",
        estreno: '06-Abr-2023',
        genero: ["Accion", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    },
    {
        id: 6,
        name: "Espectral",
        image: "./medios/6.jpg",
        estreno: '06-Abr-2023',
        genero: ["Accion", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    },
    {
        id: 7,
        name: "300: el origen de un imperio",
        image: "./medios/7.jpg",
        estreno: '06-Abr-2023',
        genero: ["Accion", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    },
    {
        id: 8,
        name: "Project power",
        image: "./medios/8.jpg",
        estreno: '06-Abr-2023',
        genero: ["Accion", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    },
    {
        id: 9,
        name: "Venom",
        image: "./medios/9.jpg",
        estreno: '06-Abr-2023',
        genero: ["Animada", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    },
    {
        id: 10,
        name: "Venom X Tom Hardby",
        image: "./medios/10.jpg",
        estreno: '06-Abr-2023',
        genero: ["Animada", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    }
    , {
        id: 11,
        name: "Spider-man no way home",
        image: "./medios/11.jpg",
        estreno: '06-Abr-2023',
        genero: ["Animada", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    }
    , {
        id: 12,
        name: "Avengers infinity war",
        image: "./medios/12.jpg",
        estreno: '06-Abr-2023',
        genero: ["Animada", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    }, {
        id: 13,
        name: "Avengers End game",
        image: "./medios/13.jpg",
        estreno: '06-Abr-2023',
        genero: ["Animada", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    }
    , {
        id: 14,
        name: "Mad Max fury road",
        image: "./medios/14.jpg",
        estreno: '06-Abr-2023',
        genero: ["Animada", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    }
    , {
        id: 15,
        name: "Duro de matar 4.0",
        image: "./medios/15.jpg",
        estreno: '06-Abr-2023',
        genero: ["Animada", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    }
    , {
        id: 16,
        name: "Duro de matar un buen dia para morir",
        image: "./medios/16.jpg",
        estreno: '06-Abr-2023',
        genero: ["Animada", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    }
    , {
        id: 17,
        name: "Life",
        image: "./medios/17.jpg",
        estreno: '06-Abr-2023',
        genero: ["Aventura", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    }
    , {
        id: 18,
        name: "Morbius",
        image: "./medios/18.jpg",
        estreno: '06-Abr-2023',
        genero: ["Aventura", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    }
    , {
        id: 19,
        name: "Wanda Vision",
        image: "./medios/19.jpg",
        estreno: '06-Abr-2023',
        genero: ["Aventura", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    }
    , {
        id: 20,
        name: "Batman",
        image: "./medios/20.jpg",
        estreno: '06-Abr-2023',
        genero: ["Aventura", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    }
    , {
        id: 21,
        name: "Bohemian Rhapsody",
        image: "./medios/21.jpg",
        estreno: '06-Abr-2023',
        genero: ["Aventura", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    }
    , {
        id: 22,
        name: "Star Wars Rogue One",
        image: "./medios/22.jpg",
        estreno: '06-Abr-2023',
        genero: ["Aventura", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    }
    , {
        id: 23,
        name: "Black Widow",
        image: "./medios/23.jpg",
        estreno: '06-Abr-2023',
        genero: ["Aventura", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    }
    , {
        id: 24,
        name: "Black Adam",
        image: "./medios/24.jpg",
        estreno: '06-Abr-2023',
        genero: ["Aventura", "Comedia"],
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis ullamcorper lacus. Nullam in tincidunt augue. Pellentesque feugiat diam at imperdiet facilisis. Integer nunc sapien, sodales at ipsum id, laoreet volutpat libero. Sed faucibus ante et mauris sollicitudin, in imperdiet arcu auctor. Nulla sed ipsum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus at luctus tortor. Duis vitae vestibulum quam. Proin sollicitudin mi non erat scelerisque molestie. Quisque finibus nulla fringilla, consequat magna ut, dapibus nibh. Mauris in nisi et est venenatis lacinia. Etiam pharetra, ante id hendrerit accumsan, tellus nibh pretium erat, ut lacinia est justo non risus. Integer consectetur maximus mollis. Ut aliquet ipsum sed vulputate blandit. Praesent urna lacus, sagittis at elementum ut, dapibus eu ipsum.'
    }

]



const moviesContainers = document.querySelectorAll('.movies-container')
const prevBtn = [...document.querySelectorAll('.btnPrev')]
const nextBtn = [...document.querySelectorAll('.btnNext')]


const moviesWrappers = document.querySelectorAll('.movies-wrapper');

moviesWrappers.forEach(wrapper => {
    const moviesContainer = wrapper.querySelector('.movies-container');
    const prevBtn = wrapper.querySelector('.btnPrev');
    const nextBtn = wrapper.querySelector('.btnNext');


    if (!moviesContainer || !prevBtn || !nextBtn) {
        console.error('No se encontraron los elementos necesarios en este wrapper:', wrapper);
        return;
    }


    const containerWidth = moviesContainer.getBoundingClientRect().width;


    prevBtn.addEventListener('click', () => {
        moviesContainer.scrollLeft -= containerWidth;
    });

    nextBtn.addEventListener('click', () => {
        moviesContainer.scrollLeft += containerWidth;
    });
});

const showModalBtns = document.querySelectorAll('.card_movie');
const movieModal = document.getElementById('movieModal');
const closeBtn = document.getElementById('closeBtn');
const movieImg = document.getElementById('movieImg');
const movieTitle = document.getElementById('movieTitle');
const movieDescription = document.getElementById('movieDescription');
const movieYear = document.getElementById('movieYear');
const movieGenre = document.getElementById('movieGenre');


function openModal(e) {
    const movieId = e.currentTarget.getAttribute('data-id');
    console.log(movieId);

    const movie = movies.find(movie => movie.id == movieId);

    if (movie) {
        movieImg.src = movie.image;
        movieTitle.textContent = movie.name;
        movieDescription.textContent = movie.descripcion;
        movieYear.textContent = movie.estreno;
        movieGenre.textContent = movie.genero.join(', ');

        movieModal.style.display = "block";
    }
}


function closeModal() {
    movieModal.style.display = "none";
}


function addEventListenersToCards() {
    const showModalBtns = document.querySelectorAll('.card_movie');

    showModalBtns.forEach(card => {
        card.addEventListener('click', openModal);
    });
}

const filterMoviesByGenre = (genre) => {
    return movies.filter(movie => movie.genero.includes(genre));
};

// Función para renderizar las películas
function renderMovies(movies, genre) {
    const genreContainer = document.querySelector(`#${genre}Container .movies-container`);
    genreContainer.innerHTML = ""; // Limpiar el contenedor del género correspondiente

    movies.forEach((item) => {
        const article = document.createElement("article");
        article.className = "card_movie";
        article.setAttribute('data-id', item.id);

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.name; // Alt para accesibilidad

        const paragraphName = document.createElement("p");
        paragraphName.textContent = item.name;

        genreContainer.appendChild(article);
        article.appendChild(image);
        article.appendChild(paragraphName);
    });

    addEventListenersToCards(); // Añadir eventos a las tarjetas (si es necesario)
}

// Función para mostrar las películas filtradas
const displayMoviesByGenre = (genre) => {
    const filteredMovies = filterMoviesByGenre(genre); // Filtrar las películas por género
    renderMovies(filteredMovies, genre); // Renderizar las películas filtradas en el contenedor adecuado
};

// Llamar a la función para mostrar las películas de cada género
displayMoviesByGenre('Accion');
displayMoviesByGenre('Animada');
displayMoviesByGenre('Aventura');


closeBtn.addEventListener('click', closeModal);


window.addEventListener('click', function (event) {
    if (event.target === movieModal) {
        closeModal();
    }
});


const btnMenu = document.querySelector('#btnMenu');
const sideBar = document.querySelector('.sideBar');

btnMenu.addEventListener('click', () => {
    sideBar.classList.toggle('inactive')
})
