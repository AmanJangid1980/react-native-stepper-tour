import { StyleSheet } from "react-native";

export const STEP_NUMBER_RADIUS: number = 14;
export const STEP_NUMBER_DIAMETER: number = STEP_NUMBER_RADIUS * 2;
export const ZINDEX: number = 1;
export const MARGIN: number = 13;
export const OFFSET_WIDTH: number = -1;
export const ARROW_SIZE: number = 8;

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: ZINDEX,
    borderRadius:10,
    // backgroundColor:'green',
  },
  arrow: {
    position: "absolute",
    // borderColor: "transparent",
    borderWidth: ARROW_SIZE,
    zIndex: ZINDEX+1,
  },
  tooltip: {
    position: "absolute",
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 3,
    overflow: "hidden",
  },
  tooltipText: {},
  tooltipContainer: {
    flex: 1,
  },
  stepNumberContainer: {
    position: "absolute",
    width: STEP_NUMBER_DIAMETER,
    height: STEP_NUMBER_DIAMETER,
    overflow: "hidden",
    zIndex: ZINDEX + 1,
  },
  stepNumber: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: STEP_NUMBER_RADIUS,
    borderColor: "#FFFFFF",
    backgroundColor: "#27ae60",
  },
  stepNumberText: {
    fontSize: 10,
    backgroundColor: "transparent",
    color: "#FFFFFF",
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: "#27ae60",
  },
  bottomBar: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  overlayRectangle: {
    position: "absolute",
    // backgroundColor: "rgba(0,0,0,0.5)",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  overlayContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    // backgroundColor:'red'
  },
});
