function checkDateLoop() {
    setInterval(function() {
        const currentDate = new Date();
        if (currentDate.getDate() === 10 && currentDate.getMonth() === 7) {
            document.getElementById("answer").innerText = "Yes"
        } else {
            document.getElementById("answer").innerText = "No"
        }
        console.log("Checked date");
    }, 1000)
}