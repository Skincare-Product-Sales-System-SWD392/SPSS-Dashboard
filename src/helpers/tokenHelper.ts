// Helper functions để debug JWT token

export const decodeTokenPayload = (token: string) => {
  try {
    // JWT có 3 phần: header.payload.signature
    const parts = token.split('.');
    if (parts.length !== 3) {
      console.error('Invalid JWT format');
      return null;
    }
    
    // Decode base64 payload (phần thứ 2)
    const payload = parts[1];
    // Thêm padding nếu cần
    const paddedPayload = payload + '==='.slice((payload.length + 3) % 4);
    
    const decodedPayload = atob(paddedPayload);
    const parsedPayload = JSON.parse(decodedPayload);
    
    return parsedPayload;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

export const checkTokenExpiry = (token: string) => {
  const payload = decodeTokenPayload(token);
  if (!payload || !payload.exp) {
    return { isValid: false, error: 'No expiry found' };
  }
  
  const currentTime = Math.floor(Date.now() / 1000);
  const isExpired = currentTime > payload.exp;
  
  return {
    isValid: !isExpired,
    expiresAt: new Date(payload.exp * 1000),
    currentTime: new Date(currentTime * 1000),
    isExpired
  };
};

export const analyzeToken = (token: string) => {
  console.log('=== TOKEN ANALYSIS ===');
  console.log('Token:', token);
  
  const payload = decodeTokenPayload(token);
  console.log('Decoded payload:', payload);
  
  const expiryInfo = checkTokenExpiry(token);
  console.log('Expiry info:', expiryInfo);
  
  if (payload) {
    console.log('User info:', {
      id: payload.Id,
      username: payload.UserName,
      email: payload.Email,
      role: payload.Role,
      avatarUrl: payload.AvatarUrl
    });
  }
  
  return { payload, expiryInfo };
}; 