export const getAllDonuts = async () => {
  const response = await fetch('https://donuts-manager-backend.onrender.com/donuts/');
  const donuts = await response.json();
  return donuts;
};

export const getDonutById = async (id) => {
  const response = await fetch('https://donuts-manager-backend.onrender.com/donuts/'+id);
  const donut = await response.json();
  return donut;
}

export const createDonut = async(bodyParam) => {
  try{
    console.log(bodyParam)
    const response = await fetch('https://donuts-manager-backend.onrender.com/donuts/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: bodyParam
    });
    const newDonut = await response.json();
    return newDonut

  } catch (error){
    console.error("Error creating donut:", error);
    throw error;
  }
}

export const deleteDonutById = async (id) => {
  try {
    const response = await fetch(`https://donuts-manager-backend.onrender.com/donuts/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log("Donut deleted successfully");
    return result;

  } catch (error) {
    console.error("Error deleting donut:", error);
    throw error;
  }
};

export const updateDonut = async (id, bodyParam) => {
  try{
    const response = await fetch('https://donuts-manager-backend.onrender.com/donuts/'+id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: bodyParam
    });

    const updatedDonut = await response.json() ;
    return updatedDonut;

  } catch(error){
    console.error("Error updating donut:", error);
    throw error;
  }
};