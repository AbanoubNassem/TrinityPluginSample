using AbanoubNassem.Trinity.Components.TrinityField;

namespace TrinityPluginSample.Fields;

public class TestField : TrinityField<TestField, string>
{
    public override string ComponentName => "PLUGIN_NAME::TestField";
    
    public TestField(string columnName) : base(columnName)
    {
    }
}