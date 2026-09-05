const js = require('@eslint/js');

module.exports = [
    //Reglas para la verificacion del codigo
    //Reglas base de Eslint (JavaScript)

    js.configs.recommended, {
        languageOptions : {
            ecmaVersion: 2022,
            sourceType: 'commonjs',
            globals: {
                require : 'readonly',
                module : 'writable',
                exports : 'writable',
                __dirname: 'readonly'
            }

        },
        rules : {
            'no-unused-vars' : 'warn'
        },
    },
    //Configuracion adicional (Solo aplica para los archivos .tests)
    {
        files: ['tests/**/*.js'],
        languageOptions: {
            globals: {
                require: 'readonly',
                module: 'writable',
                exports: 'writable',
                describe: 'readonly',
                test:'readonly',
                expect:'readonly',
                beforeEach:'readonly',
                jest:'readonly'
            }
        }
    },
    //Exclusiones globales (Carpetas o archivas que Eslint no debe analizar)
    {
        ignores: [
            'node_modules/', 'logs/'
        ]

    },
];