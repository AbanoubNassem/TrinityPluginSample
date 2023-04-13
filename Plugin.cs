using AbanoubNassem.Trinity.Plugins;

namespace TrinityPluginSample;

public class PluginSample : TrinityPlugin
{
    public override List<string> GetScriptSources()
    {
        return new List<string>()
        {
            "/main.js"
        };
    }

    public override List<string> GetStyleSources()
    {
        return new List<string>()
        {
            "/style.css"
        };
    }
}