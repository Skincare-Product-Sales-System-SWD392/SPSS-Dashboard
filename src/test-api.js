// Test file để kiểm tra API skin analysis
// Chạy file này trong browser console để debug

const testSkinAnalysisAPI = async () => {
  try {
    // Lấy token từ localStorage
    const authUser = localStorage.getItem("authUser");
    const token = authUser ? JSON.parse(authUser).accessToken : null;
    
    console.log("Token being used:", token);
    
    if (!token) {
      console.error("No token found in localStorage");
      return;
    }
    
    // Manual token decode for testing
    try {
      const payload = JSON.parse(atob(token.split('.')[1] + '==='.slice((token.split('.')[1].length + 3) % 4)));
      console.log("Token payload:", payload);
      console.log("Token expires at:", new Date(payload.exp * 1000));
      console.log("Current time:", new Date());
      console.log("Is token expired?", Date.now() / 1000 > payload.exp);
      console.log("User role:", payload.Role);
      console.log("User ID:", payload.Id);
    } catch (e) {
      console.error("Failed to decode token:", e);
    }
    
    // Gọi API trực tiếp với fetch
    const response = await fetch("http://localhost:5041/api/skin-analysis/user/paged?pageNumber=1&pageSize=10", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    
    console.log("Response status:", response.status);
    console.log("Response headers:", [...response.headers.entries()]);
    
    if (response.ok) {
      const data = await response.json();
      console.log("Success:", data);
    } else {
      const errorData = await response.text();
      console.log("Error response:", errorData);
    }
    
  } catch (error) {
    console.error("Request failed:", error);
  }
};

// Gọi function này trong console
console.log("Run: testSkinAnalysisAPI()"); 