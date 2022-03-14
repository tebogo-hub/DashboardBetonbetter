import { Alert} from 'react'

const Alerting = (title, msg) => {
  Alert.alert(
    title,
    msg,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      { 
        text: "OK", 
        onPress: () => console.log("OK Pressed") 
      }
    ]
  );
}
export default Alerting