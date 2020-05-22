export const util = {

    /**
     * Método que permite construir un modelo de usuario
     */
    usuario() {
       
        const model = {
            usuario: '', 
            clave: '',
            recordar_datos: ''
        };
       
        return model;
    },

    /**
     * Método que permite construir un modelo de estudiante
     */
    estudiante() {
       
        const model = {
            id: '',
            nombres: '', 
            apellidos: '', 
            usuario: '', 
            clave: '',
            email: ''
        };
       
        return model;
    },

    /**
     * Método que permite crear un estudiante
     * 
     * @param {*} nombres nombres del estudiante
     * @param {*} apellidos apellidos del estudiante
     * @param {*} usuario nombre de usuario
     * @param {*} clave contraseña
     * @param {*} email correo electrónico
     */
    getEstudiante(id, nombres, apellidos, usuario, clave, email) {
        
        var estudiante = this.estudiante();
        estudiante.id = id;
        estudiante.nombres = nombres;
        estudiante.apellidos = apellidos; 
        estudiante.usuario = usuario; 
        estudiante.clave = clave,
        estudiante.email = email;

        return estudiante;
    },

    /**
     * Método que permite crear un listado de estudiantes
     */
    getEstudiantes() {

        const estudiantes = [
            this.getEstudiante( 1, "Juan",             "González",  "jgonzalez",  "1234567", "jgonzalez@localhost"),
            this.getEstudiante( 2, "José Luis",        "Rodríguez", "jrodriguez", "2901234", "jrodriguez@localhost"),
            this.getEstudiante( 3, "María Guadalupe",  "Gómez",     "mgomez",     "3678901", "mgomez@localhost"),
            this.getEstudiante( 4, "Francisco",        "Fernández", "gvelazque",  "4345678", "gvelazque@localhost"),
            this.getEstudiante( 5, "Guadalupe",        "López",     "glopez",     "5012345", "glopez@localhost"),
            this.getEstudiante( 6, "María",            "Díaz",      "mdiaz",      "6789012", "mdiaz@localhost"),
            this.getEstudiante( 7, "Juana",            "Martínez",  "jmartinez",  "7456789", "jmartinez@localhost"),
            this.getEstudiante( 8, "Antonio",          "Pérez",     "aperez",     "8123456", "aperez@localhost"),
            this.getEstudiante( 9, "Jesús",            "García",    "jgarcia",    "9890123", "jgarcia@localhost"),
            this.getEstudiante(10, "Manuel",           "Gorut",     "mgorut",     "3234567", "mgorut@localhost"),
            this.getEstudiante(11, "Miguel Sánchez",   "Sánchez",   "msanchez",   "1567890", "msanchez@localhost"),
            this.getEstudiante(12, "Pedro",            "Romero",    "promero",    "2234567", "promero@localhost"),
            this.getEstudiante(13, "Alejandro",        "Sosa",      "asosa",      "3901234", "asosa@localhost"),
            this.getEstudiante(14, "Manuel",           "Torres",    "mtorres",    "4678901", "mtorres@localhost"),
            this.getEstudiante(15, "Margarita",        "Álvarez",   "malvarez",   "5345678", "malvarez@localhost"),
            this.getEstudiante(16, "Maria del Carmen", "Ruiz",      "mruiz",      "6012345", "mruiz@localhost"),
            this.getEstudiante(17, "Juan Carlos",      "Ramírez",   "jramirez",   "7789012", "rparedes@localhost"),
            this.getEstudiante(18, "Roberto",          "Flores",    "rflores",    "8456789", "pvasquez@localhost"),
            this.getEstudiante(19, "Juan Carlos",      "Benítez",   "jnenitez",   "9123456", "enavarrete@localhost"),
            this.getEstudiante(20, "Jorge",            "Acosta",    "jacosta",    "1890123", "jacosta@localhost"),
            this.getEstudiante(21, "Ricardo",          "Medina",    "rmedina",    "2567890", "rmedina@localhost"),
        ];

        return estudiantes;
    },

    /**
     * Método que permite verificar si un usuario puede 
     * hacer login o no en el sistema de estudiantes
     * 
     * @param {*} usuario 
     */
    login(usuario) {

        const estudiantes = this.getEstudiantes();
        const length = estudiantes.length;
        var found = false;
        
        for (var index = 0; index < length && found == false; index++) {
            const estudiante = estudiantes[index];
            if (estudiante.usuario == usuario.usuario && estudiante.clave == usuario.clave) {
                found = true;
            }
        }

        return found;

    },

    /**
     * Método que permite ver el detalle del estudiante
     *
     * @param {*} title título de la ventana
     * @param {*} est datos del estudiante
     */
    verDetalle(title, est) {

        var message = "<div class='_vue-flash-msg-wrapper'>"
                     + " <div class='_vue-flash-msg-body__content'>"
                     + "  <h3>" + title +"</h3><ul>";

        message += "<li>Nombres: " + est.nombres + "</li>";
        message += "<li>Apellidos: " + est.apellidos + "</li>";
        message += "<li>Usuario: " + est.usuario + "</li>";
        message += "<li>Email: " + est.email + "</li>";
        message += "</ul></div></div>";

        return message;

    }

}
