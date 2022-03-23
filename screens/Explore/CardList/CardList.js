import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Card from './Card';

const CardList = (props) => {
    return (
    <FlatList
        horizontal
        data={props.data}
        renderItem={({ item: rowData }) => {
            console.log(rowData, "row")
          return (
            <Card
              {...rowData}
              title={rowData.title}
              image1={rowData.imageUrl}
            />  
          );
        }}
        keyExtractor={(item, index) => index}
      />
    )
}

export default CardList;