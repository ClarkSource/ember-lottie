import { action } from '@ember/object';
import Component from '@glimmer/component';

import lottie from 'lottie-web';

interface LottieArgs {
  path?: string;
  data?: string;
  loop?: boolean | number;
  autoplay?: boolean;
  renderer?: 'svg' | 'canvas' | 'html';
}

export default class LottieComponent extends Component<LottieArgs> {
  #animation?: unknown;

  private get loop() {
    return this.args.loop ?? true;
  }

  private get autoplay() {
    return this.args.autoplay ?? true;
  }

  private get renderer() {
    return this.args.renderer ?? 'svg';
  }

  @action
  setup(element: HTMLElement): void {
    this.#animation = lottie.loadAnimation({
      container: element,
      autoplay: this.autoplay,
      loop: this.loop,
      renderer: this.renderer,
      path: this.args.path,
      animationData: this.args.data
    });
  }
}
