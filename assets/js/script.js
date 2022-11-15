var app = new Vue(
    {
        el: '#root',

        data: {

            toDoList: [
                {
                    text: `to brush my dragon`,
                    done: false,
                },
                {
                    text: `to pet my pets`,
                    done: false,
                },
            ],

            doneList: [],

        },

        methods: {

            addNewTask(){
                newTask = {
                    text: this.taskInputName,
                    done: false
                }
                this.todoList.push(newTask)
                this.taskInputName = ''
            },

            markHowDone( index, element ){
                //boolean Var changes
                this.toDoList[index].done = true;
                console.log(`done is`, this.toDoList[index].done);
                //task goes out from the array and pushed in other array
                this.toDoList.splice(index, 1);

                this.doneList.push(element);

                console.log( `To Do :`, toDoList, ` & done`, doneList );
                
            },

            markHowToDo( index ){
                this.doneList.splice( index, 1);
            },

            removeToDo(index){
                this.toDoList.splice( index, 1);
            },

        },
    }
);