import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import swal from 'sweetalert';
import { registerService } from '../../components/services/apiService';

export const register = createAsyncThunk('register', async data => {
  const findWhiteSpacesRegex = / /g;
  const nameWithoutSpaces = data.name.replace(findWhiteSpacesRegex, '_');
  const lastNameWithoutSpaces = data.lastName.replace(
    findWhiteSpacesRegex,
    '_'
  );
  const age = data.age || '-1';
  const role = data.role == 1 ? 'administrador' : 'standard';
  const userData =
    nameWithoutSpaces + '*' + lastNameWithoutSpaces + '*' + age + '*' + role;

  const response = await registerService(userData, data.email, data.password);
  return response;
});

const initialState = {
  isLoading: false,
  isLogged: false,
  userData: {},
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLogged = true;
      state.userData = action.payload;
      state.isLoading = false;
      swal('Registro exitoso. Redirigiendo al home...', {
        icon: 'success',
        buttons: false,
        timer: 1500,
      });
    },
    [register.rejected]: state => {
      state.isLogged = false;
      state.isLoading = false;
      swal(
        'Hubo un error. Por favor verifique los datos e intente nuevamente.',
        {
          dangerMode: true,
          icon: 'error',
          buttons: {
            confirm: 'Ok',
          },
        }
      );
    },
    [register.pending]: state => {
      state.isLoading = true;
    },
  },
});

// export const { register } = registerSlice.actions;
export const selectIsLogged = state => state.register.isLogged;
export const selectIsLoading = state => state.register.isLoading;


export default registerSlice.reducer;
