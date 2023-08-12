import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet } from 'react-native';

const InfoDropdown = ({
  loading,
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  placeholder,
}) => {
  return (
    <DropDownPicker
      loading={loading}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={placeholder}
      style={styles.container}
      textStyle={styles.text}
      placeholderStyle={styles.placeholder}
      listItemLabelStyle={styles.listItemLabel}
      dropDownContainerStyle={styles.dropdownContainer}
      selectedItemLabelStyle={styles.selectedItemLabel}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    borderColor: '#f3f3f3',
    borderWidth: '1.2px',
    borderRadius: '12px',
  },
  text: {
    fontSize: '18px',
    fontWeight: '500',
  },
  dropdownContainer: {
    borderColor: '#f3f3f3',
    borderWidth: '1.2px',
  },
  placeholder: {
    fontSize: '18px',
    fontWeight: '500',
    color: '#c0c0c0',
  },
  listItemLabel: {
    fontSize: '16px',
    fontWeight: '400',
  },
  selectedItemLabel: {
    fontWeight: '600',
  },
});

export default InfoDropdown;
