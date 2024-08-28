import { getData } from "@app/services";
import { useEffect, useState } from "react";

// Rename function to start with "use" for it to be a valid custom hook
export function useUserProfile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUserProfileInfo = async () => {
    try {
      const data = await getData("profile");
      setUserData(data);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserProfileInfo();
  }, []);

  return { pageLoading: loading, userData };
}
