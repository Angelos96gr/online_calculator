let display_text_box = document.querySelector("[id=display_text_box]")


function add_event_listeners() {

    let all_buttons = document.getElementsByTagName("button");

    console.log(display_text_box.textContent)
    for (let button of all_buttons) {

        if (button.textContent === "=") {
            $(button).on("click", function (e) {
                document.querySelector("[id=result]").textContent = compute(document.querySelector("[id=display_text_box]").textContent)
            })

        } else if (button.textContent === "Clear") {
            $(button).on("click", function (e) {
                document.querySelector("[id=display_text_box]").textContent = ""
                document.querySelector("[id=result]").textContent = ""
            })

        } else if (button.textContent === "Backspace") {
            $(button).on("click", function (e) {
                document.querySelector("[id=display_text_box]").textContent = document.querySelector("[id=display_text_box]").textContent.slice(0, -1)
            })

        } else if (button.id === "operator") {
            $(button).on("click", function (e) {
                document.querySelector("[id=display_text_box]").textContent = document.querySelector("[id=display_text_box]").textContent + " " + button.textContent + " "
            })
        }
        else {
            $(button).on("click", function (e) {
                document.querySelector("[id=display_text_box]").textContent = document.querySelector("[id=display_text_box]").textContent + button.textContent
            })
        }
    }

}

function compute(text) {
    let breakdown = text.split(" ")
    let num_list = [];
    let operators_list = [];
    let result = [];

    for (let item of breakdown) {
        console.log(item)
        if (Number(item) == item) {
            num_list.push(item)
        }
        else {
            operators_list.push(item)
        }
    }

    var math_map = {
        "+": function (x, y) { return x + y },
        "-": function (x, y) { return x - y },
        "*": function (x, y) { return x * y },
        "/": function (x, y) { return x / y },
    }

    for (let index = 0; index < num_list.length - 1; index += 2) {
        console.log(num_list[index], num_list[index + 1], operators_list[index])
        switch(operators_list[index]){
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
    let result_final = result

    return result_final


}
add_event_listeners()
