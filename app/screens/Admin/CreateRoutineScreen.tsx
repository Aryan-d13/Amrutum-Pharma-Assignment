import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput, Card, Text } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';
import { addRoutine } from '../../redux/slices/routinesSlice';
import { nanoid } from 'nanoid';

const CreateRoutineScreen = () => {
  const dispatch = useDispatch();
  const [routineName, setRoutineName] = useState('');
  const [duration, setDuration] = useState('8');
  const [steps, setSteps] = useState([{ id: nanoid(), description: '', product: null }]);

  // Pre-Built Templates
  const templates = [
    {
      name: 'Skincare Routine',
      duration: 8,
      milestones: [
        { week: 1, benefit: 'Improved skin hydration' },
        { week: 4, benefit: 'Even skin tone' },
      ],
      steps: [
        { id: nanoid(), description: 'Cleanse face with mild cleanser', product: '1' },
        { id: nanoid(), description: 'Apply moisturizer with SPF', product: '2' },
      ],
    },
    {
      name: 'Mindfulness Routine',
      duration: 4,
      milestones: [
        { week: 1, benefit: 'Reduced stress levels' },
        { week: 4, benefit: 'Improved focus' },
      ],
      steps: [
        { id: nanoid(), description: 'Meditate for 10 minutes daily', product: null },
        { id: nanoid(), description: 'Practice deep breathing exercises', product: null },
      ],
    },
  ];

  const products = [
    { id: '1', name: 'Almond Oil' },
    { id: '2', name: 'Hydrating Serum' },
    { id: '3', name: 'Moisturizer' },
  ];

  const handleStepChange = (index, field, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index][field] = value;
    setSteps(updatedSteps);
  };

  const addNewStep = () => {
    setSteps([...steps, { id: nanoid(), description: '', product: null }]);
  };

  const handleLoadTemplate = (template) => {
    setRoutineName(template.name);
    setDuration(template.duration.toString());
    setSteps(template.steps);
  };

  const handleAddRoutine = () => {
    const newRoutine = {
      id: nanoid(),
      name: routineName,
      duration: parseInt(duration),
      milestones: [],
      steps,
    };

    dispatch(addRoutine(newRoutine));
    setRoutineName('');
    setDuration('8');
    setSteps([{ id: nanoid(), description: '', product: null }]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Load a Pre-Built Template" />
        <Card.Content>
          {templates.map((template) => (
            <Button
              key={template.name}
              mode="outlined"
              onPress={() => handleLoadTemplate(template)}
              style={styles.templateButton}
            >
              Load {template.name}
            </Button>
          ))}
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Create Routine" />
        <Card.Content>
          <TextInput
            mode="outlined"
            label="Routine Name"
            value={routineName}
            onChangeText={setRoutineName}
            style={styles.input}
          />
          <TextInput
            mode="outlined"
            label="Duration (weeks)"
            value={duration}
            onChangeText={setDuration}
            keyboardType="numeric"
            style={styles.input}
          />
          {steps.map((step, index) => (
            <View key={step.id} style={styles.stepContainer}>
              <TextInput
                mode="outlined"
                label={`Step ${index + 1}`}
                value={step.description}
                onChangeText={(value) => handleStepChange(index, 'description', value)}
                style={styles.input}
              />
              <Picker
                selectedValue={step.product}
                onValueChange={(value) => handleStepChange(index, 'product', value)}
              >
                <Picker.Item label="Select a Product" value={null} />
                {products.map((product) => (
                  <Picker.Item key={product.id} label={product.name} value={product.id} />
                ))}
              </Picker>
            </View>
          ))}
          <Button onPress={addNewStep} mode="outlined" style={styles.addButton}>
            Add Step
          </Button>
          <Button onPress={handleAddRoutine} mode="contained" style={styles.addButton}>
            Add Routine
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  card: { marginBottom: 16, elevation: 4, borderRadius: 8 },
  input: { marginVertical: 8 },
  stepContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  },
  addButton: { marginTop: 16 },
  templateButton: { marginVertical: 8 },
});

export default CreateRoutineScreen;
