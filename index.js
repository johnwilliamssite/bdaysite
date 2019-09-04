function checkDateLoop() {
    setInterval(function() {
        const currentDate = new Date();
        if ((currentDate.getDate() === 10 && currentDate.getMonth() === 7) || 
        (currentDate.getDate() === 4 && currentDate.getMonth() === 8)) {
            document.getElementById("answer").innerText = "Yes"
        } else {
            document.getElementById("answer").innerText = "No"
        }
        console.log("Checked date");
    }, 1000)
}