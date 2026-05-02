document.addEventListener('DOMContentLoaded', () => {
    const bmiForm = document.getElementById('bmi-form');
    const bmiResult = document.getElementById('bmi-result');

    if (!bmiForm || !bmiResult) {
        return;
    }

    const getBmiCategory = (bmi) => {
        if (bmi < 18.5) return 'Underweight';
        if (bmi < 25) return 'Normal weight';
        if (bmi < 30) return 'Overweight';
        return 'Obese';
    };

    bmiForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const weight = Number(document.getElementById('weight').value);
        const heightCm = Number(document.getElementById('height').value);

        if (!weight || !heightCm || heightCm <= 0) {
            bmiResult.innerHTML = '<p>Please enter valid weight and height values.</p>';
            return;
        }

        const heightM = heightCm / 100;
        const bmi = weight / (heightM * heightM);
        const category = getBmiCategory(bmi);

        bmiResult.innerHTML = `
            <strong>Your BMI is ${bmi.toFixed(1)}</strong>
            <p>Category: ${category}</p>
        `;
    });
});