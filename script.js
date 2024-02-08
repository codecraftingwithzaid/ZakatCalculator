// Function to handle Zakat calculation
// Function to handle Zakat calculation
function calculateZakat() {
    // Get input elements and result div
    const wealthInput = document.getElementById("wealth");
    const itemTypeSelect = document.getElementById("itemType");
    const zakatSummaryDiv = document.getElementById("zakatSummary");
    const zakatBenefitsMarquee = document.getElementById("zakatBenefitsMarquee");

    // Extract values from input elements
    const wealth = parseFloat(wealthInput.value);
    const itemType = itemTypeSelect.value;

    // Call a helper function to calculate Zakat amount
    const { zakatAmount, zakatPercentage, zakatDescription } = calculateZakatAmount(wealth, itemType);

    // Display the result in a table
    zakatSummaryDiv.innerHTML = `
        <table>
            <tr>
                <th>Zakat Amount</th>
                <th>Zakat Percentage</th>
                <th>Zakat Description</th>
            </tr>
            <tr>
                <td>${zakatAmount.toFixed(2)}</td>
                <td>${zakatPercentage}%</td>
                <td>${zakatDescription}</td>
            </tr>
        </table>
    `;

    // Populate the Zakat benefits in the marquee
    zakatBenefitsMarquee.innerHTML = "Zakat Benefits: ";
    zakatBenefitsMarquee.innerHTML += "Supporting the needy, Alleviating poverty, Fostering community welfare, Promoting social justice, Sustaining the spirit of giving.";
}


// Helper function to calculate Zakat amount based on wealth and item type
function calculateZakatAmount(wealth, itemType) {
    // Initialize Zakat percentage and description variables
    let zakatPercentage;
    let zakatDescription;

    // Determine Zakat percentage and description based on the item type
    switch (itemType) {
        case 'cash':
            zakatPercentage = 2.5;
            zakatDescription = "Zakat on cash wealth.";
            break;
        case 'gold':
            zakatPercentage = 2.5; // Adjust based on gold value or weight
            zakatDescription = "Zakat on gold wealth.";
            break;
        case 'silver':
            zakatPercentage = 2.5; // Adjust based on silver value or weight
            zakatDescription = "Zakat on silver wealth.";
            break;
        default:
            // Handle invalid item type
            zakatPercentage = 0;
            zakatDescription = "Invalid item type.";
    }

    // Calculate Zakat amount based on wealth and percentage
    const zakatAmount = (zakatPercentage / 100) * wealth;

    // Return an object containing Zakat details
    return { zakatAmount, zakatPercentage, zakatDescription };
}
