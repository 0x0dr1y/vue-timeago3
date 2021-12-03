import * as vue from "vue";
import install from "../../src/install";

const App = {};

describe("exports", () => {
  it("exports", () => {
    expect(typeof install).toEqual("function");
  });
});

describe("plugin", () => {
  it("should load the plugin", () => {
    const app = vue.createApp(App);
    const componentSpy = jest.spyOn(app, "component");
    expect(componentSpy).toHaveBeenCalledTimes(0);
    app.use(install);
    expect(componentSpy).toHaveBeenCalledTimes(1);
  });

  it("should not load plugin twice", () => {
    const app = vue.createApp(App);
    const componentSpy = jest.spyOn(app, "component");
    app.config.globalProperties.$timeago = "already defined";
    app.use(install);
    expect(componentSpy).not.toHaveBeenCalled();
  });

  it("should throw a warning for a invalid vue version", () => {
    const app = vue.createApp(App);
    app.version = "2.1";
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const consoleSpy = jest.spyOn(console, "warn").mockImplementation(() => {});

    app.use(install);

    expect(consoleSpy).toHaveBeenCalledWith(
      "[vue-timeago3] This plugin requires at least Vue version 3.0"
    );
  });
});
