// app/redux/slices/routinesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRoutinesFromFirestore } from '../../services/routineService';

// Example routine data structure
export interface Step {
  id: string;
  description: string;
  products?: string[]; // or an array of product IDs
  tips?: string;
}

export interface Milestone {
  week: number;
  benefit: string;
}

export interface Routine {
  id: string;
  name: string;
  duration: number; // in weeks
  milestones: Milestone[];
  steps: Step[];
}

interface RoutinesState {
  routines: Routine[];
  selectedRoutine: Routine | null;
}

const initialState: RoutinesState = {
  routines: [],
  selectedRoutine: null,
};

export const routinesSlice = createSlice({
  name: 'routines',
  initialState,
  reducers: {
    addRoutine: (state, action: PayloadAction<Routine>) => {
      state.routines.push(action.payload);
    },
    selectRoutine: (state, action: PayloadAction<string>) => {
      const routine = state.routines.find(r => r.id === action.payload) || null;
      state.selectedRoutine = routine;
    },
    // Additional reducers: updateRoutine, deleteRoutine, etc.
  },
});
export const fetchRoutines = createAsyncThunk(
    'routines/fetchRoutines',
    async () => {
      const routines = await fetchRoutinesFromFirestore();
      return routines; // Must match type of Routine[] ideally
    }
  );

export const { addRoutine, selectRoutine } = routinesSlice.actions;

export default routinesSlice.reducer;
