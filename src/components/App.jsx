
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [formData, setFormData] = useLocalStorage("repairForm", {
    customerName: "",
    appliance: "",
    problem: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Your repair request has been saved!");
  }

  function clearForm() {
    setFormData({
      customerName: "",
      appliance: "",
      problem: ""
    });
  }

  return (
    <main>
      <h1>Repair Request Form</h1>
      <p>Your information is saved in this browser.</p>

      <form onSubmit={handleSubmit}>
        <label>
          Customer Name
          <input
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Appliance
          <input
            name="appliance"
            value={formData.appliance}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Describe the Problem
          <textarea
            name="problem"
            value={formData.problem}
            onChange={handleChange}
          />
        </label>

        <br />

        <button type="submit">Submit Request</button>
        <button type="button" onClick={clearForm}>
          Clear Form
        </button>
      </form>
    </main>
  );
}

export default App;
