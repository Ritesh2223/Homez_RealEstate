import { Container, Modal, Stepper } from "@mantine/core";
import React, { useState } from "react";
import AddLocation from "../AddLocation/AddLocation";
import { useAuth0 } from "@auth0/auth0-react";
import UploadImage from "../UploadImage/UploadImage";
import BasicDetails from "../BasicDetails/BasicDetails";
import Facilities from "../Facilities/Facilities";
import axios from "axios";

const AddPropertyModal = ({ opened, setOpened }) => {
  const [active, setActive] = useState(0);
  const { isAuthenticated } = useAuth0(); // Use isAuthenticated from useAuth0 hook

  // Retrieve userEmail from localStorage
  const userEmail = localStorage.getItem("userEmail");

  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    price: 0,
    country: "",
    city: "",
    address: "",
    image: "", // Ensure this is a string URL or path
    facilities: {
      bedrooms: 0,
      parkings: 0,
      bathrooms: 0,
    },
    userEmail: userEmail || "", // Use userEmail retrieved from localStorage
  });

  const nextStep = () => {
    console.log("Next step clicked");
    setActive((current) => (current < 4 ? current + 1 : current));
  };

  const prevStep = () => {
    console.log("Previous step clicked");
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  const handleFormSubmit = async () => {
    console.log("Submitting form...");
    try {
      const response = await axios.post(`/residency/create`, {
        data: {
          ...propertyDetails,
          facilities: JSON.stringify(propertyDetails.facilities),
        },
      });
      console.log("Response:", response);
      if (response.status === 200) {
        alert("Property added successfully!");
        setOpened(false);
        setActive(0); // Reset to the first step
      } else {
        alert("Failed to add property. Please try again.");
      }
    } catch (error) {
      console.error("Error adding property:", error.message);
      alert("Failed to add property. Please try again.");
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      closeOnClickOutside
      size={"90rem"}
    >
      <Container h={"40rem"} w={"100%"}>
        <Stepper
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
          allowNextStepsSelect={false}
        >
          <Stepper.Step label="Location" description="Address">
            <AddLocation
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
            {/* Add userEmail input field */}
          </Stepper.Step>
          <Stepper.Step label="Images" description="Upload">
            <UploadImage
              prevStep={prevStep}
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          </Stepper.Step>
          <Stepper.Step label="Basics" description="Details">
            <BasicDetails
              prevStep={prevStep}
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          </Stepper.Step>

          <Stepper.Step label="Facilities" description="Amenities">
            <Facilities
              prevStep={prevStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              setOpened={setOpened}
              setActiveStep={setActive}
            />
          </Stepper.Step>
          <Stepper.Completed>
            <div>
              <p>Completed, click back button to get to previous step</p>
              {/* Render form submission button only if user is authenticated */}
              {isAuthenticated && (
                <button onClick={handleFormSubmit}>Submit Property</button>
              )}
              {/* Render message if user is not authenticated */}
              {!isAuthenticated && <p>Please log in to submit the property.</p>}
            </div>
          </Stepper.Completed>
        </Stepper>
      </Container>
    </Modal>
  );
};

export default AddPropertyModal;
