import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

const  empty = async (...p) => {return []}


function CustomAutocomplete({ resolve= empty, value="", ...props }) {
  const [open, setOpen] = React.useState(false);
  const [term, setTerm] = React.useState(value||"");
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  console.log(term, props, value)
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {

      const options =  await resolve(term)
      if (active) {
        setOptions([...options]);
      }
    })();

    return () => {
      active = false;
    };
  }, [term]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete

      sx={{ width: "100%" }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      clearOnBlur={false}
     
      onChange={(e)=>{console.log(e)}}
      inputValue={term|| value}
      onInputChange={(event, newInputValue) => {
        setTerm(newInputValue);
        props.onChange({ target: { name: props.name, value: newInputValue }});
        
      }}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      getOptionLabel={(option) => option.label}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
       
          
          onChange={params.onChange}     
          label=""
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

// Top films as rated by IMDb users. http://www.imdb.com/chart/top


export default CustomAutocomplete;