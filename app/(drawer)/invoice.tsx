import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Invoice = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(false);

    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleSubmit = () => {
    Keyboard.dismiss();
    alert("Invoice created! (not really, this is just a placeholder)");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 40}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 16,
            gap: 16,
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Create Invoice
            </Text>
            <Text style={{ fontSize: 14, color: "gray" }}>
              This is where you can create a new invoice.
            </Text>
          </View>

          <View style={{ flexDirection: "row", gap: 16 }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "normal",
                  paddingVertical: 6,
                }}
              >
                SL Number
              </Text>
              <TextInput
                keyboardType="number-pad"
                returnKeyType="next"
                style={{ borderWidth: 1, borderColor: "gray", padding: 8 }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "normal",
                  paddingVertical: 6,
                }}
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
              Mobile Number
            </Text>
            <TextInput
              keyboardType="phone-pad"
              returnKeyType="next"
              style={{ borderWidth: 1, borderColor: "gray", padding: 8 }}
            />
          </View>

          <View>
            <Text
              style={{ fontSize: 16, fontWeight: "normal", paddingVertical: 6 }}
            >
              Address
            </Text>
            <TextInput
              keyboardType="default"
              multiline
              numberOfLines={2}
              style={{
                borderWidth: 1,
                borderColor: "gray",
                padding: 8,
                minHeight: 80,
                textAlignVertical: "top",
              }}
            />
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
            <Text style={{ fontSize: 18, color: "white" }}>Order Confirm</Text>
          </Pressable>

          <Text style={{ fontSize: 14, color: "gray", marginTop: 12 }}>
            Note: This is just a UI mockup. The submit button does not actually
            create an invoice.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Invoice;
