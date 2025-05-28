const axios = require("axios");

exports.handler = async function (event) {
  const email = event.queryStringParameters?.email || "someone@example.com";
  const token = `Basic ${Buffer.from(email + ":").toString("base64")}`;
  const authProcess = "resetPassword";
  console.log(`Token: ${token}, Auth Process: ${authProcess}`);
  console.log("email:", email);
  
  try {
    const response = await axios.post(
      "https://learn.zone01oujda.ma/api/auth/email-validation",
      { type: "resetPassword" },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": token,
          "X-Auth-Process": authProcess,
          "authProcess": authProcess
        }
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (err) {
    return {
      statusCode: err.response?.status || 500,
      body: JSON.stringify({
        error: "Internal Server Error",
        details: err.message,
        response: err.response?.data || null,
      }),
    };
  }
};
