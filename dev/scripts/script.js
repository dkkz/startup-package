"use strict";
class Intro {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }
  out() {
    return this.title + ` ${this.text}`;
  }
}

let intro = new Intro('test babel', 'success');

export let output = intro.out();
