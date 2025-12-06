function handleSubmit(event){
    event.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    if(!name){
        alert("Name field is required")
        return
    }
    const result = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

    if(!result){
        alert("Email Pattern does not match")
        return
    }
    if(message.trim().split("").length<5){
        alert("message must be more than 5 words")
        return
    }
    alert("form submitted successfully")
}