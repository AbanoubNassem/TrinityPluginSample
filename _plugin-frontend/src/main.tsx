import "./plugin.scss";
import TestField from "@/test_field";
import CustomPage from "@/custom_page";
import CustomWidget from "@/custom_widget";

window.trinityApp.serving((app) => {
  app.registerField("PLUGIN_NAME::TestField", TestField);
  app.registerPage("PLUGIN_NAME::CustomPage", CustomPage);
  app.registerWidget("PLUGIN_NAME::CustomWidget", CustomWidget);
});
