export declare class MyComponent {
  /**
   * The first name
   */
  first: string;
  /**
   * The middle name
   */
  middle: string;
  /**
   * The last name
   */
  last: string;
  switchX: boolean;
  switchY: boolean;
  static X(): void;
  private getText;
  togglePadding(): Promise<void>;
  host: HTMLElement;
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
