import * as vue from "vue";
import { createTimeago } from "../../src/timeago";
import { mount, config } from "@vue/test-utils";
import TimeAgo from "../../src/install";
import { defineComponent, nextTick, Plugin } from "vue";
import { de, es } from "date-fns/locale";
import {vi, describe, expect, it} from 'vitest';

const TestComponent = {
  name: "test-component",
  setup() {
    return () => vue.h("timeago", {});
  },
};

const App = {
  components: {
    TestComponent,
  },
  setup() {
    return () =>
      vue.h("div", { class: "main" }, [
        vue.h("div", {
          id: "timeago",
        }),
        vue.h(TestComponent),
      ]);
  },
};

describe("exports", () => {
  it("exports", () => {
    expect(typeof createTimeago).toEqual("function");
  });
});

describe("global options", () => {
  it("should be created with a custom name", () => {
    const Component = createTimeago({ name: "test" });

    const wrapper = mount(Component, {
      propsData: {
        datetime: new Date(),
      },
    });

    expect(wrapper.vm.$options.name).toBe("test");
  });

  it("should be with with a custom locale", () => {
    const Component = createTimeago({ locale: es });

    const wrapper = mount(Component, {
      propsData: {
        datetime: new Date(),
      },
    });

    expect(wrapper.vm.timeago).toBe("hace menos de un minuto");
  });

  it("should use global converter options", () => {
    const Component = createTimeago({
      converterOptions: { includeSeconds: true, addSuffix: false },
    });

    const wrapper = mount(Component, {
      propsData: {
        datetime: new Date(),
      },
    });
    expect(wrapper.vm.timeago).toBe("less than 5 seconds");
  });
});

describe("props", () => {
  it("autoUpdate: should automatically update", () => {
    const Component = createTimeago();

    const wrapper = mount(Component, {
      propsData: {
        datetime: new Date(),
        autoUpdate: true,
        converterOptions: { includeSeconds: true },
      },
    });

    expect(wrapper.vm.timeago).toBe("less than 5 seconds ago");
    setTimeout(() => {
      expect(wrapper.vm.timeago).toBe("less than 10 seconds ago");
    }, 500);
  });

  it("autoUpdate: should set a timer update", () => {
    const Component = createTimeago();

    const wrapper = mount(Component, {
      propsData: {
        datetime: new Date(),
        autoUpdate: true,
      },
    });

    expect(wrapper.vm.updateTimer).not.toBeUndefined();
  });

  it("autoUpdate: should delete a timer before unmount", async () => {
    const Component = createTimeago();

    const wrapper = mount(Component, {
      propsData: {
        datetime: new Date(),
        autoUpdate: true,
      },
    });
    expect(wrapper.vm.updateTimer).not.toBeUndefined();
    await wrapper.unmount();
    expect(wrapper.vm.updateTimer).toBeUndefined();
  });

  it("converterOptions: should include seconds", () => {
    const Component = createTimeago();

    const wrapper = mount(Component, {
      propsData: {
        datetime: new Date(),
        converterOptions: { includeSeconds: true },
      },
    });

    expect(wrapper.vm.timeago).toBe("less than 5 seconds ago");
  });

  it("converterOptions: remove a suffix", () => {
    const Component = createTimeago();

    const wrapper = mount(Component, {
      propsData: {
        datetime: new Date(),
        converterOptions: { addSuffix: false },
      },
    });

    expect(wrapper.vm.timeago).toBe("less than a minute");
  });

  it("locale: should use custom locale", () => {
    const Component = createTimeago();

    const wrapper = mount(Component, {
      propsData: {
        datetime: new Date(),
        locale: es,
      },
    });

    expect(wrapper.vm.timeago).toBe("hace menos de un minuto");
  });

  it("should override global options", async () => {
    const Component = createTimeago({
      locale: es,
      converterOptions: { addSuffix: false, includeSeconds: true },
    });

    const wrapper = mount(Component, {
      propsData: {
        datetime: new Date(),
      },
    });

    expect(wrapper.vm.timeago).toBe("menos de 5 segundos");

    await wrapper.setProps({
      locale: de,
      converterOptions: { addSuffix: true, includeSeconds: false },
      datetime: new Date(),
    });
    expect(wrapper.vm.timeago).toBe("vor weniger als 1 Minute");
  });
});

describe("watcher", () => {
  it("props - converterOptions", async () => {
    const Component = createTimeago();

    const wrapper = mount(Component, {
      propsData: {
        datetime: new Date(),
      },
    });
    expect(wrapper.vm.timeago).toBe("less than a minute ago");
    await wrapper.setProps({ converterOptions: { addSuffix: false } });
    expect(wrapper.vm.timeago).toBe("less than a minute");
  });

  it("props - datetime", async () => {
    const Component = createTimeago();

    const wrapper = mount(Component, {
      propsData: {
        datetime: new Date("1.1.1990"),
      },
    });
    expect(wrapper.vm.timeago).not.toBe("less than a minute ago");
    await wrapper.setProps({ datetime: new Date() });
    expect(wrapper.vm.timeago).toBe("less than a minute ago");
  });

  it("props - autoUpdate", async () => {
    const Component = createTimeago();

    const wrapper = mount(Component, {
      propsData: {
        datetime: new Date(),
        autoUpdate: false,
      },
    });
    setTimeout(() => {
      expect(wrapper.vm.timeago).toBe("less than a minute ago");
    }, 5000);

    expect(wrapper.vm.updateTimer).toBe(undefined);

    await wrapper.setProps({ autoUpdate: true });
    setTimeout(() => {
      expect(wrapper.vm.timeago).not.toBe("less than a minute ago");
    }, 5000);

    expect(wrapper.vm.updateTimer).not.toBe(undefined);
  });
});
