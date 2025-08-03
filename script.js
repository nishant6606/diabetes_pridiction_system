document.getElementById("diabetesForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const glucose = parseFloat(document.getElementById("glucose").value);
    const bmi = parseFloat(document.getElementById("bmi").value);
    const age = parseInt(document.getElementById("age").value);
    const dpf = parseFloat(document.getElementById("dpf").value);

    // Simple mock logic (you can replace with actual model)
    let riskScore = 0;

    if (glucose > 130) riskScore++;
    if (bmi > 30) riskScore++;
    if (age > 45) riskScore++;
    if (dpf > 0.5) riskScore++;

    const result = document.getElementById("result");
    if (riskScore >= 3) {
        result.innerHTML = "⚠️ High chance of Diabetes";
        result.style.color = "red";
    } else {
        result.innerHTML = "✅ Low chance of Diabetes";
        result.style.color = "green";
    }
});
