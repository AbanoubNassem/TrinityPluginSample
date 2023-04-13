using AbanoubNassem.Trinity.Components.TrinityWidget;

namespace TrinityPluginSample.Widgets;

public class CustomWidget : TrinityWidget<CustomWidget>
{
    public override string ComponentName => "PLUGIN_NAME::CustomWidget";
}