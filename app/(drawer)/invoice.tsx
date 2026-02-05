import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Invoice = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
  };

  const handleSubmit = () => {
    alert("Invoice created! (not really, this is just a placeholder)");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        gap: 16,
        paddingHorizontal: 16,
      }}
    >
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Create Invoice</Text>
        <Text style={{ fontSize: 14, color: "gray" }}>
          This is where you can create a new invoice.
        </Text>
      </View>

      <View style={{ flexDirection: "row", gap: 16 }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{ fontSize: 16, fontWeight: "normal", paddingVertical: 6 }}
          >
            SL Number
          </Text>
          <TextInput
            keyboardType="numeric"
            style={{ borderWidth: 1, borderColor: "gray", padding: 8 }}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{ fontSize: 16, fontWeight: "normal", paddingVertical: 6 }}
          >
            Date
          </Text>

          <Pressable
            onPress={() => setShow(!show)}
            style={{ padding: 8, borderWidth: 1, borderColor: "gray" }}
          >
            {/* <Text>{date.toLocaleString()}</Text> */}
            <Text>{date.toLocaleDateString("en-GB")}</Text>
          </Pressable>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      </View>

      <View style={{ flexDirection: "column", gap: 16 }}>
        <View>
          <Text
            style={{ fontSize: 16, fontWeight: "normal", paddingVertical: 6 }}
          >
            Customer Name
          </Text>
          <TextInput
            keyboardType="default"
            style={{ borderWidth: 1, borderColor: "gray", padding: 8 }}
          />
        </View>

        <View>
          <Text
            style={{ fontSize: 16, fontWeight: "normal", paddingVertical: 6 }}
          >
            Customer Name
          </Text>
          <TextInput
            keyboardType="default"
            style={{ borderWidth: 1, borderColor: "gray", padding: 8 }}
          />
        </View>
      </View>

      <Pressable
        onPress={handleSubmit}
        style={({ pressed }) => [
          {
            alignItems: "center",
            backgroundColor: pressed ? "#004080" : "#007BFF",
            marginTop: 20,
            padding: 12,
          },
        ]}
      >
        <Text style={{ fontSize: 18, color: "white" }}>Submit Invoice</Text>
      </Pressable>

      <Text style={{ fontSize: 14, color: "gray", marginTop: 12 }}>
        Note: This is just a UI mockup. The submit button does not actually
        create an invoice.
      </Text>
    </SafeAreaView>
  );
};

export default Invoice;
