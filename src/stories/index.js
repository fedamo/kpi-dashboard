import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Timer } from '../app/components';

storiesOf('Timer', module)
  .add('draft with description', () => {
    return <Timer description="something" draft={true} />;
  })
  .add('draft timer with initial time of 01:20', () => {
    return <Timer description="something" draft={true} initialTime="01:20" />;
  })
  .add('draft with no description', () => {
    return <Timer draft={true} />;
  })
  .add('in play', () => {
    return <Timer description="timer which is running " isRunning={true} />;
  })
  .add('stopped', () => {
    return <Timer description="timer which is not running" isRunning={false} />;
  });
