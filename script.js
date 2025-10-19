//your JS code here. If required.
const changeBtn = document.getElementById("change_button");
        const resetBtn = document.getElementById("reset_button");

        changeBtn.addEventListener("click", () => changeColor());
        resetBtn.addEventListener("click", () => resetColor());

        function changeColor() {
            resetColor(); // reset all first

            const selectedBox = document.getElementById("block_id").value;
            const assignedColor = document.getElementById("colour_id").value;

            if (selectedBox < 1 || selectedBox > 9) {
                return alert("Please enter a valid box number (1-9)");
            }

            document.getElementById(selectedBox).style.backgroundColor = assignedColor;
        }

        function resetColor() {
            for (let i = 1; i <= 9; i++) {
                document.getElementById(i.toString()).style.backgroundColor = "transparent";
            }
        }