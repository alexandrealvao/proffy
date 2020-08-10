
document.querySelector("#add-time")

.addEventListener("click", cloneFields)

function cloneFields() {
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    const fields = newFieldContainer.querySelectorAll("input")

    fields.forEach(function(field) {

        field.value = ""
    })

    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}