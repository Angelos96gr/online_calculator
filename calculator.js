const display_text_box = document.querySelector("#display_text_box")
const all_buttons = document.querySelectorAll("button");
const wrong_expression_message = document.querySelector("#wrong_expression_message")

function add_event_listeners() {

    for (let button of all_buttons) {
        if (button.textContent === "=") {
            button.addEventListener("click", (e) => {
                try{
                    display_text_box.textContent = eval(display_text_box.textContent)
                    wrong_expression_message.style.visibility = "hidden"

                    
                }catch(error){
                    console.log("Evaluation could not be performed")
                    wrong_expression_message.style.visibility = "visible"
                }
            })

        } else if (button.textContent === "Clear") {
            button.addEventListener("click", (e) => {
                display_text_box.textContent = ""
                wrong_expression_message.style.visibility = "hidden"

            })

        } else if (button.textContent === "Backspace") {
            button.addEventListener("click", (e) => {
                display_text_box.textContent = display_text_box.textContent.slice(0, -1)
                wrong_expression_message.style.visibility = "hidden"
            })
        }
        else {
            button.addEventListener("click", (e) => {
                display_text_box.textContent = display_text_box.textContent + button.textContent
                wrong_expression_message.style.visibility = "hidden"
            })
        }
    }

}

// Unused function because eval() is used (despite its security risks)
function compute(expression) {


    // The hard way and does not account for operator precedence

    let breakdown_display_text_box = text.split(" ")
    let num_list = [];
    let operators_list = [];
    let result;

    for (let item of breakdown_display_text_box) {
        console.log(item)
        if (Number(item) == item) {
            num_list.push(item)
        }
        else {
            operators_list.push(item)
        }
    }


    for (let index = 0; index < num_list.length - 1; index += 2) {
        console.log(num_list[index], num_list[index + 1], operators_list[index])
        switch (operators_list[index]) {
            case "+":
                result = Number(num_list[index]) + Number(num_list[index + 1])
                break;
            case "-":
                result = Number(num_list[index]) - Number(num_list[index + 1])
                break;
            case "*":
                result = Number(num_list[index]) * Number(num_list[index + 1])
                break;
            case "/":
                result = Number(num_list[index]) / Number(num_list[index + 1])
                break;
        }


    }

    return result


}
add_event_listeners()
