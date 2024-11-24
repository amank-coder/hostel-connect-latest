import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const VerifyComplaint = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const verifyComplaint = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      const complaintId = urlParams.get("complaintId");

      if (!token || !complaintId) {
        setError("Invalid verification link.");
        setLoading(false);
        return;
      }

      try {
        // Call the update status API to verify the complaint
        const res = await axios.patch(
          `${import.meta.env.VITE_API_URL}/api/complaint/${complaintId}`,
          {
            status:true
          },{
            headers:{
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        );
        
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
        });
      } catch (err) {
        Swal.fire({
          title: "Error",
          text: err.response?.data?.message || "Something went wrong!",
          icon: "error",
        });
      } finally {
        setLoading(false);
      }
    };

    verifyComplaint();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Verifying your complaint...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Your complaint has been successfully verified.</p>
      )}
    </div>
  );
};

export default VerifyComplaint;
