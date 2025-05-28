const fetch = require('node-fetch'); // Only needed if you're not using Node 18+

function btoa(str) {
  return Buffer.from(str).toString('base64');
}

async function sendRequest(token) {
  const authProcess = "resetPassword";

  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
        "X-Auth-Process": authProcess,
        "authProcess": authProcess
      },
      body: JSON.stringify({ type: "resetPassword" })
    };

    const response = await fetch("https://learn.zone01oujda.ma/api/auth/email-validation", options);
    return await response.json();
  } catch (err) {
    return { error: err.message };
  }
}

exports.handler = async (event, context) => {
  const email = event.queryStringParameters.email || "someone";
  const token = `Basic ${Buffer.from(email + ":").toString("base64")}`;

  console.log("Reset Password request made by:", email);

  const response = await sendRequest(token);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(response)
  };
};
