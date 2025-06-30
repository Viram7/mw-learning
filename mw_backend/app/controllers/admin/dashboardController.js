let batch_data_model = require('../../models/batch_data.model');
let user_model = require('../../models/user_data.model');
let teacher_model = require('../../models/teacher_data.model');
let payment_model = require('../../models/payment_details.model');

let dashboardController = async (req, res) => {
    try {
        // Count batches
        let batch = await batch_data_model.countDocuments();

        // Count users by gender
        let male_users = await user_model.countDocuments({ gender: "Male" });
        let female_users = await user_model.countDocuments({ gender: "Female" });
        let total_users = await user_model.countDocuments();
        let other_users = total_users - (male_users + female_users);


        // Count teachers
        let teacher = await teacher_model.countDocuments();

        // Aggregate total monthly sales
     const monthlySales = await payment_model.aggregate([
  {
    $match: {
      transactionId: { $ne: "" },
      totalAmount: { $ne: "", $ne: "0" }
    }
  },
  {
    $group: {
      _id: {
        year: { $year: "$createdAt" },
        month: { $month: "$createdAt" }
      },
      totalSales: {
        $sum: { $toDouble: "$totalAmount" }
      }
    }
  },
  {
    $sort: { "_id.year": 1, "_id.month": 1 }
  }
]);

// Convert month number to month name
const monthNames = [
  "", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const labels = monthlySales.map(item => `${monthNames[item._id.month]} ${item._id.year}`);
const salesData = monthlySales.map(item => item.totalSales);


        // Final response
        res.send({
            status: true,
            message: "Dashboard data retrieved successfully",
            data: {
                 teacher,
                batch,
                total_users,
                users:[male_users,female_users,other_users],
                this_year_sales: monthlySales.reduce((acc, item) => acc + item.totalSales, 0),
                sales: {
                    labels: labels,
                    data: salesData
                }
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).send({
            status: false,
            message: "Error retrieving dashboard data",
            error: err.message
        });
    }
}

module.exports = {
    dashboardController
}
