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
    getEstudiante(nombres, apellidos, usuario, clave, email) {
        
        var estudiante = this.estudiante();
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
            this.getEstudiante("Juan",             "González",  "jgonzalez",  "1234567", "jgonzalez@localhost"),
            this.getEstudiante("José Luis",        "Rodríguez", "jrodriguez", "2901234", "jrodriguez@localhost"),
            this.getEstudiante("María Guadalupe",  "Gómez",     "mgomez",     "3678901", "mgomez@localhost"),
            this.getEstudiante("Francisco",        "Fernández", "gvelazque",  "4345678", "gvelazque@localhost"),
            this.getEstudiante("Guadalupe",        "López",     "glopez",     "5012345", "glopez@localhost"),
            this.getEstudiante("María",            "Díaz",      "mdiaz",      "6789012", "mdiaz@localhost"),
            this.getEstudiante("Juana",            "Martínez",  "jmartinez",  "7456789", "jmartinez@localhost"),
            this.getEstudiante("Antonio",          "Pérez",     "aperez",     "8123456", "aperez@localhost"),
            this.getEstudiante("Jesús",            "García",    "jgarcia",    "9890123", "jgarcia@localhost"),
            this.getEstudiante("Manuel",           "Gorut",     "mgorut",     "3234567", "mgorut@localhost"),
            this.getEstudiante("Miguel Sánchez",   "Sánchez",   "msanchez",   "1567890", "msanchez@localhost"),
            this.getEstudiante("Pedro",            "Romero",    "promero",    "2234567", "promero@localhost"),
            this.getEstudiante("Alejandro",        "Sosa",      "asosa",      "3901234", "asosa@localhost"),
            this.getEstudiante("Manuel",           "Torres",    "mtorres",    "4678901", "mtorres@localhost"),
            this.getEstudiante("Margarita",        "Álvarez",   "malvarez",   "5345678", "malvarez@localhost"),
            this.getEstudiante("Maria del Carmen", "Ruiz",      "mruiz",      "6012345", "mruiz@localhost"),
            this.getEstudiante("Juan Carlos",      "Ramírez",   "jramirez",   "7789012", "rparedes@localhost"),
            this.getEstudiante("Roberto",          "Flores",    "rflores",    "8456789", "pvasquez@localhost"),
            this.getEstudiante("Juan Carlos",      "Benítez",   "jnenitez",   "9123456", "enavarrete@localhost"),
            this.getEstudiante("Jorge",            "Acosta",    "jacosta",    "1890123", "jacosta@localhost"),
            this.getEstudiante("Ricardo",          "Medina",    "rmedina",    "2567890", "rmedina@localhost"),
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

    }

}
