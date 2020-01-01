const templateHTML = `
  <style>
    div {
      position: relative;
      width: 100%;
    }

    div iframe {
      position: absolute;
      top: 0;
      right: 0;
      width: 100% !important;
      height: 100% !important;
    }
  </style>
  <div>
    <iframe
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
`;

export default class ResponsiveIframe extends HTMLElement {
  div: HTMLElement;
  iframe: HTMLIFrameElement;

  static get observedAttributes(): string[] {
    return [
      'src',
      'title',
      'aspect'
    ];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    switch (name) {
      case 'src':
        this.iframe.src = newValue;
        break;
      case 'title':
        this.iframe.title = newValue;
        break;
      case 'aspect':
        this.div.style.paddingTop = `${this.aspectRatio}%`;
        break;
    }
  }

  /**
   * Gets src property of the object.
   */
  get src(): string | undefined {
    if (this.hasAttribute('src')) {
      return this.getAttribute('src') || undefined;
    }

    return undefined;
  }

  /**
   * Sets src property of the object.
   */
  set src(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('src');
    } else {
      this.setAttribute('src', value);
    }
  }

  /**
   * Gets aspect property of the object.
   */
  get aspect(): string | undefined {
    if (this.hasAttribute('aspect')) {
      return this.getAttribute('aspect') || undefined;
    }

    return undefined;
  }

  /**
   * Sets aspect property of the object.
   */
  set aspect(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('aspect');
    } else if (value.match(/\d+\:\d+/)) {
      this.setAttribute('aspect', value);
    }
  }

  /**
   * Gets aspect ratio calculated from aspect property.
   */
  get aspectRatio(): number {
    if (this.aspect == undefined) {
      return 56.25;
    }

    const tokens = this.aspect.split(':');
    const width = Number(tokens[0]);
    const height = Number(tokens[1]);
    const ratio = height / width;

    if (Number.isNaN(ratio)) {
      return 56.25;
    }

    return ratio;
  }

  constructor() {
    super();

    this.attachShadow({
      mode: 'closed'
    }).innerHTML = templateHTML;

    this.div = this.shadowRoot?.querySelector('div') as HTMLElement;
    this.iframe = this.shadowRoot?.querySelector('iframe') as HTMLIFrameElement;
    this.div.style.paddingTop = `${this.aspectRatio}%`;

    if (this.title) {
      this.iframe.title = this.title;
    }

    if (this.src) {
      this.iframe.src = this.src;
    }
  }
}
