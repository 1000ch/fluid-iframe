import FluidIframe from '../src/index';

describe('FluidIframe', (): void => {
  beforeAll(() => {
    customElements.define('fluid-iframe', FluidIframe);
  });

  test('should be defined', (): void => {
    expect(FluidIframe).toBeDefined();
    expect(customElements.get('fluid-iframe')).toBe(FluidIframe);
  });

  test('should update actual aspect ratio of <iframe>', () => {
    const fluidIframe = new FluidIframe();
    expect(fluidIframe).toBeInstanceOf(HTMLElement);
    expect(fluidIframe.aspect).toBeUndefined();
  });
})
