import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.css',
  shadow: true
})
export class MyCounter {

  @State()
  count = 0;

  @Prop()
  name: string | undefined;

  render() {

    return (

      <div>

        <h2>
          Name: {this.name}
          <br />
          Counter : {this.count}

        </h2>

        <button onClick={() => this.count++}>

          +

        </button>

      </div>

    );

  }

}