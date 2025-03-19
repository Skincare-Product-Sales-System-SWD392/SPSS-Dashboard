interface DecodedToken {
  [key: string]: any; // This can hold any claims present in the token
}

export const decodeJWT = (token: string): DecodedToken | null => {
  if (!token) {
    console.error("No token provided");
    return null;
  }

  // Split the token into its parts
  const parts = token.split(".");
  if (parts.length !== 3) {
    console.error("Invalid JWT token");
    return null;
  }

  // Decode the payload (the second part of the token)
  const payload = parts[1];
  const decodedPayload = JSON.parse(
    atob(payload.replace(/-/g, "+").replace(/_/g, "/"))
  );

  return decodedPayload;
};

const token = "your.jwt.token.here";
const decodedToken = decodeJWT(token);

if (decodedToken) {
  console.log("Decoded Token:", decodedToken);
} else {
  console.log("Token could not be decoded.");
}
