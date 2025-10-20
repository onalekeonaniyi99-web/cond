        // 1
        // 1. A delivery company in Aroje is facing complaints about incorrect package sorting due to the use of mixed uppercase and lowercase addresses. You have been employed to develop an algorithm that ensures all address labels are transformed to lowercase before processing. Write a function to solve this issue.
        const toLowercase = () => {
            addressResult.innerHTML = address.value.toLowerCase();
        }

        // 2
        // 2. A school in Ado-Ekiti found that students submit essays with multiple spaces between words, making it hard for teachers to grade them. You have been hired to write an algorithm that removes extra spaces from essays while keeping only one space between words.
        const removeExtraSpaces = () => {
            spaceResult.innerHTML = essay.value.trim().replace(/\s+/g, " ");
        }

        // 3
        // 3. A grocery store in Taki wants to reward customers who shop for an even number of items. You have been hired to write an algorithm that checks if the number of items in a customer’s cart is even and returns a discount if true.
        const checkEven = () => {
            evenResult.innerHTML = cartItems.value % 2 === 0
                ? "Eligible for discount"
                : "Not eligible";
        };

        // 4
        // 4. A weather station in LAUTECH is experiencing issues with its temperature recording system. The system needs to categorise temperatures as 'Cold' (below 19°C), 'Warm' (20°C to 28°C), or 'Hot' (above 28°C). Write an algorithm that categorizes the temperature based on these criteria.
        const checkTemperature = () => {
            let category = "";
            if (temp.value < 19) {
                category = "Cold";
            } else if (temp.value <= 28) {
                category = "Warm";
            } else {
                category = "Hot";
            }
            tempResult.innerHTML = category;
        };

        // 5. BMI
        // 5. SQI clinic is developing a system to calculate the Body Mass Index (BMI) of patients. You have been asked to write an algorithm that takes weight (in kilograms) and height (in meters) as inputs and returns the BMI along with the category: 'Underweight', 'Normal', 'Overweight', or 'Obese'.(Do further research on this)
        const calculateBMI = () => {
            const bmi = weight.value / (height.value * height.value);
            if (bmi < 18.5) bmiResult.innerHTML = "Underweight";
            else if (bmi < 25) bmiResult.innerHTML = "Normal weight";
            else if (bmi < 30) bmiResult.innerHTML = "Overweight";
            else bmiResult.innerHTML = "Obese";
        };

        // 6. Username
        // 6. A gaming company in Abuja has noticed players creating usernames with spaces and special characters, which causes issues in their database. You have been tasked to write a function that validates usernames by ensuring they contain only letters, numbers, and underscores.
        const validateUsername = () => {
            if (/^[A-Za-z0-9_]+$/.test(username.value)) {
                usernameResult.innerHTML = "Valid username ";
            } else {
                usernameResult.innerHTML = "Invalid username ";
            }
        };

        // 7. Luggage
        // 7. An airline in Kano needs an algorithm to determine if a passenger’s luggage is overweight. The algorithm should take the luggage weight as input and return 'Underweight', 'Allowed', or 'Overweight' based on the weight limits (under 20kg is 'Underweight', 20-30kg is 'Allowed', above 30kg is 'Overweight').
        const checkLuggage = () => {
            const w = luggage.value;
            if (w < 20) luggageResult.innerHTML = "Underweight";
            else if (w <= 30) luggageResult.innerHTML = "Allowed";
            else luggageResult.innerHTML = "Overweight";
        };

        // 8. Email
        // 8. Obafemi Awolowo University is building a student portal where only emails ending with "@oauife.edu.ng" are allowed for registration. Write a function that checks if an email address ends with the correct domain and returns true or false.
        const validateEmail = () => {
            if (email.value.endsWith("@oauife.edu.ng")) {
                emailResult.innerHTML = "Valid email ";
            } else {
                emailResult.innerHTML = "Invalid email ";
            }
        };

        // 9. Grade
        // 9. A secondary school in Enugu wants to automate their grading system. Write a function that takes a student's score (0-100) and returns their grade based on these criteria:
        // 70-100: A (Excellent)
        // 60-69: B (Very Good)
        // 50-59: C (Good)
        // 40-49: D (Pass)
        // 0-39: F (Fail)
        const getGrade = () => {
            const s = score.value;
            if (s >= 70) gradeResult.innerHTML = "A (Excellent)";
            else if (s >= 60) gradeResult.innerHTML = "B (Very Good)";
            else if (s >= 50) gradeResult.innerHTML = "C (Good)";
            else if (s >= 40) gradeResult.innerHTML = "D (Pass)";
            else gradeResult.innerHTML = "F (Fail)";
        };

        // 10. Discount
        // 10. A supermarket in Port Harcourt offers discounts based on purchase amount. Write a function that calculates the final price after discount:
        // Below ₦5,000: No discount
        // ₦5,000 - ₦10,000: 5% discount
        // ₦10,001 - ₦20,000: 10% discount
        // Above ₦20,000: 15% discount
        const toClaimDiscount = () => {
            const d = DiscountInput.value;
            if (d < 5000) discountresult.innerHTML = "No discount";
            else if (d >= 5000 && d <= 10000)  discountresult.innerHTML = "5% discount";
            else if (d >= 10001 && d <= 20000)  discountresult.innerHTML = "10% discount";
            else if (d > 20000)  discountresult.innerHTML = "15% discount";
        };
        // 11. JAMB
        // 11. A university in Katangua requires a minimum JAMB score for different courses. Write a function that takes a student's JAMB score and course choice, then returns if they are eligible:
        // Medicine: 280 and above
        // Engineering: 250 and above
        // Sciences: 220 and above
        // Arts: 200 and above
        const checkJamb = () => {
            const s = jambScore.value;
            const c = course.value;
            const cutoffs = { Medicine: 280, Engineering: 250, Sciences: 220, Arts: 200 };
            if (s >= cutoffs[c]) jambResult.innerHTML = "Eligible ";
            else jambResult.innerHTML = "Not eligible ";
        };

        // 12. Voter
        // 12. INEC is developing a voter registration system. Write a function that takes a person's birth year and determines if they are eligible to vote (18 years or older in 2025). The function should also return how many years until they can vote if they're not eligible yet.
        const checkVoter = () => {
            const y = birthYear.value;
            const age = 2025 - y;
            if (age >= 18) voteResult.innerHTML = "Eligible to vote"
            else voteResult.innerHTML = `Not eligible   wait till you turn 18`;
        };