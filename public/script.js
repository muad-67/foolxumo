// Auto-switch theme based on current hour
function autoSetTheme() {
    const hour = new Date().getHours();
    const isDayTime = hour >= 6 && hour < 20;
    
    if (!isDayTime) {
        document.body.classList.add('dark-theme');
        console.log("Auto-set dark theme based on time of day");
    }
}

// Personalized Greeting
window.onload = function() {
    autoSetTheme();
    
    const studentName = prompt("Welcome to USIU! What's your first name?");
    if (studentName) {
        alert("Karibu, " + studentName + "! Welcome to USIU.");
        console.log("Student entered name:", studentName);
        document.getElementById("greeting").textContent = "Hello, " + studentName + " 👋";
        document.getElementById("student-id").textContent = studentName.toUpperCase() + "_" + Math.floor(Math.random() * 10000);
    }
};

// Estimator (basic arithmetic & types)
function runEstimator() {
    const days = Number(prompt("How many days per week do you come to campus? (e.g., 3)"));
    const costPerTrip = Number(prompt("Average transport cost per trip in KSh? (e.g., 120)"));
    const snacksPerDay = Number(prompt("Snacks per day? (e.g., 2)"));
    const snackPrice = Number(prompt("Average price per snack in KSh? (e.g., 80)"));
    
    // Validate inputs
    if (isNaN(days) || isNaN(costPerTrip) || isNaN(snacksPerDay) || isNaN(snackPrice)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }
    
    const transportWeekly = days * costPerTrip * 2; // to & from
    const snacksWeekly = days * snacksPerDay * snackPrice;
    const totalWeekly = transportWeekly + snacksWeekly;
    const save10 = totalWeekly * 0.10;
    const totalWithSavings = totalWeekly - save10;
    
    console.log({
        days,
        costPerTrip,
        snacksPerDay,
        snackPrice,
        transportWeekly,
        snacksWeekly,
        totalWeekly,
        totalWithSavings
    });
    
    const summary = `
 Weekly Transport: KSh ${transportWeekly}
 Weekly Snacks: KSh ${snacksWeekly}
 -------------------------------
 Weekly Total: KSh ${totalWeekly}
 If you save 10% (e.g., by carpooling 1 day/week): KSh ${Math.round(totalWithSavings)}
 Potential weekly savings: KSh ${Math.round(save10)}
    `;
    
    document.getElementById("summary").innerText = summary;
    alert("Check your summary on the page. All details logged to console for debugging.");
}

// Theme Toggle (via simple style change)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    console.log("Theme toggled. Dark theme now:", isDark);
}

// Reset Summary
function resetSummary() {
    document.getElementById("summary").innerText = "Run the estimator to see your weekly plan…";
    console.log("Summary reset to default state");
}