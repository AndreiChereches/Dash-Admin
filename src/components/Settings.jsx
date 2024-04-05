import "../css/Tables.css";

function Settings() {
  return (
    <>
      <label
        style={{ marginBottom: "12px", fontSize: "24px", marginRight: "12px" }}
      >
        Theme Color
      </label>
      <select>
        <option value="fruit">Default</option>
        <option value="vegetable">Grey</option>
        <option value="meat">Purple</option>
      </select>
    </>
  );
}

export default Settings;
