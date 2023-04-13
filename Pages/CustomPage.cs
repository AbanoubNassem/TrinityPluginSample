using AbanoubNassem.Trinity.Pages;

namespace TrinityPluginSample.Pages;

public class CustomPage : TrinityPage
{
    public override string Slug => "custom-page";

    public override string PageView => "PLUGIN_NAME::CustomPage";

    public override object GetData()
    {
        return new List<string>()
        {
            "some",
            "data"
        };
    }
}