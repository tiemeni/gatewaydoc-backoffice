import StyledSelect from "./StyledSelect";

function SelectWithOption({ options = [], ...props }) {
    
    return (
      <StyledSelect style={{
        width: "100%",
        fontSize: "0.875rem",
        fontFamily: "IBM Plex Sans,sans-serif",
        fontWeight: 400,
        lineHeight: 1.5,
        color: "#1A2027",
        background: "#F3F6F9",
        border: "1px solid #CDD2D7",
        borderRadius: "8px",
        padding: "12px 12px"
      }}   {...props}>
        {
          options.map((option, index)=><option key={index} value={option.id}>{option.label}</option>)
        }
       
      </StyledSelect>
    );
  }

export default SelectWithOption;