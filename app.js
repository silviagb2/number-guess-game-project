const app = Vue.createApp({
    data(){
        return{
            appNumber: Math.floor(Math.random() * 101),
            userNumber: "",
            checkMessage: "",
            guessesNumber:[],
            remainingGuesses: 10,
            show: false
        }
    },
    methods:{
        checkGuess(){
            this.guessesNumber.push(this.userNumber) 
            this.remainingGuesses--

            if(this.userNumber == this.appNumber){
                this.checkMessage = "You guessed correctly!"
                this.show = true
            }
            else if(this.userNumber < this.appNumber){
                this.checkMessage = "Too low! Try again!"
            }
            else if(this.userNumber > this.appNumber){
                this.checkMessage = "Too high! Try again!"  
            }
            
            return this.userNumber = ""
        },
        endGame(){
            if(this.remainingGuesses == 0){
                this.checkMessage = `Game Over! Number was ${this.appNumber}`
                this.show = true
            }
        },
        reset(){
            Object.assign(this.$data, this.$options.data.apply(this))
        }
    }
})

app.mount("#wrapper")

//Que la aplicación tenga un número random.
//Coger el número que nos da el usuario en el input.
//Evento click para comprobar si el número del input coincide con el de la app.
//Si no coincide:
   //-Dar un mensaje de si es muy alto o muy bajo.
   //-Poner el número en un array de números intentados y mostrarlos por pantalla.
   //-Restar 1 a guesses remaining
//Si coincide: 
    //-Mensaje de enhorabuena.
    //-Botón para reiniciar el juego (resetear todos los valores.)
//Si guesses remaining llega a 0 se termina el juego:
    //- Mostrar por pantalla: Game Over! Number was "random number"
    //-Botón para reiniciar el juego (resetear todos los valores.)


//EXTRA:
//-Borrar numero al apretar botón
//-Poder apretar "enter" para hacer submit del numero.
//-Quitar parentesis y comillas array.