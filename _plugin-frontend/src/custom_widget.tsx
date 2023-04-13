import WidgetProps from "trinity-types/types/Props/Widgets/WidgetProps";
import TrinityWidget from "trinity-types/types/Models/Widgets/TrinityWidget";


const CustomWidget = ({}: WidgetProps<TrinityWidget>) => {
  return (
    <>
      <p>this is a custom widget!</p>
    </>
  );
};

export default CustomWidget;
