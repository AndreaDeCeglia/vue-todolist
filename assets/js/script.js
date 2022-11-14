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

            markHowDone( index, element ){
                //boolean Var changes
                this.toDoList[index].done = true;
                console.log(`done is`, this.toDoList[index].done);
                //task goes out from the array
                
            }

        },
    }
);