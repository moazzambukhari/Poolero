import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../Redux/RootReducer';
import { addValue } from '../Redux/CalculatorSlice';

export default function Product() {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.calculator.value);
    const handleAdd = () => {
        console.log('handleAdd');
        dispatch(addValue()); // Dispatch the addValue action
    };
    return (
        <View style={styles.container}>
            <Text style={{ color: '#000' }}>Product</Text>

            <Text style={{ color: '#000' }}>Value from Store: {`counting : ${count}`}</Text>
            <Button title='Add' onPress={handleAdd} />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
        paddingHorizontal: 24,
    },
});
