// Simulate a fake authentication service
const simulateDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

let isAuthenticated = false;

export const fakeAuth = {
  // Sign in
  signIn: async (email: string, password: string) => {
    await simulateDelay(500); // Simulate network delay
    if (email === "user@example.com" && password === "password") {
      isAuthenticated = true;
      return { success: true };
    }
    return { success: false, message: "Invalid email or password" };
  },

  // Sign up
  signUp: async (email: string, password: string) => {
    await simulateDelay(500); // Simulate network delay
    isAuthenticated = true;
    return { success: true };
  },

  // Sign out
  signOut: async () => {
    await simulateDelay(500); // Simulate network delay
    isAuthenticated = false;
  },

  // Check authentication status
  isAuthenticated: () => isAuthenticated,
};
