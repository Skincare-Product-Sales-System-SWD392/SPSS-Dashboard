export default function authHeader() {
  const authUserStr = localStorage.getItem("authUser");
  
  if (!authUserStr) {
    return {};
  }
  
  try {
    const authUser = JSON.parse(authUserStr);
    const token = authUser.accessToken || authUser.token;
    
    if (token) {
      return { Authorization: `Bearer ${token}` };
    } else {
      return {};
    }
  } catch (error) {
    console.error("Error parsing auth user:", error);
    return {};
  }
}
