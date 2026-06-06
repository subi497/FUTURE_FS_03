function showPlan(plan) {

    const title = document.getElementById("planTitle");
    const features = document.getElementById("planFeatures");

    if (plan === "basic") {

        title.innerHTML = "Basic Plan Features";

        features.innerHTML = `
            <li>✔ Gym Access</li>
            <li>✔ Cardio Area Access</li>
            <li>✔ Locker Facility</li>
            <li>✔ Beginner Workout Guidance</li>
        `;
    }

    else if (plan === "premium") {

        title.innerHTML = "Premium Plan Features";

        features.innerHTML = `
            <li>✔ All Gym Facilities</li>
            <li>✔ Zumba Classes</li>
            <li>✔ Steam Bath</li>
            <li>✔ Ice Bath Recovery</li>
            <li>✔ Advanced Workout Plans</li>
        `;
    }

    else if (plan === "elite") {

        title.innerHTML = "Elite Plan Features";

        features.innerHTML = `
            <li>✔ Personal Training</li>
            <li>✔ Diet Consultation</li>
            <li>✔ Full Recovery Access</li>
            <li>✔ Priority Support</li>
            <li>✔ Customized Fitness Program</li>
        `;
    }
}