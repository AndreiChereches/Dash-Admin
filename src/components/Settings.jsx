import "../css/Tables.css";

function Settings() {
  return (
    <>
      <label style={{ marginBottom: "12px", fontSize: "24px" }}>Theme Color</label>
      <>
        <option value="fruit">Default</option>
        <option value="vegetable">Grey</option>
        <option value="meat">Purple</option>
      </>
    </>
  );
}

export default Settings;
