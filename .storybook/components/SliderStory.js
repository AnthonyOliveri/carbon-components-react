import React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from '../../components/Slider';

storiesOf('Slider', module)
  .addWithInfo(
    'default',
    `
      Sliders provide a visual indication of adjustable content, where the user can move the handle along a horizontal track to increase or decrease the value.
    `,
    () => (
      <div style={{ marginTop: '2rem' }}>
        <Slider id="slider" value={50} min={0} max={100} step={1} labelText="Slider Label"/>
      </div>
    )
  )
  .addWithInfo(
    'without TextInput',
    `
      This example shows the Slider without it's accompanying TextInput. This is an exception and the majority of the time the default state should be used.
    `,
    () => (
      <div style={{ marginTop: '2rem' }}>
        <Slider id="slider" value={50} min={0} max={100} step={1} labelText="Slider Label" hideTextInput={true}/>
      </div>
    )
  )
  .addWithInfo(
    'disabled',
    `
      This example shows the disabled state of the Slider
    `,
    () => (
      <div style={{ marginTop: '2rem' }}>
        <Slider id="slider" value={50} min={0} max={100} step={1} labelText="Slider Label" disabled/>
      </div>
    )
  );
