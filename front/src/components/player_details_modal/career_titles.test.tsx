import { cleanup, findByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { loremIpsum } from 'lorem-ipsum';

import config from '../../config';
import CareerTitles from './career_titles';
import { PlayerTitle } from '../../interfaces';

const titlesMock = Array.from({length: 5}, (): PlayerTitle => ({
  content: loremIpsum({
    count: 2,
    units: "sentence",
    format: "plain"
  }),
  playerId: "playerId",
  id: "id"
}));

const server = setupServer(
  rest.get(`${config.API_URL}/player/titles/*`, (req, res, ctx) => {
    return res(ctx.json(titlesMock));
  })
);

let wrapper;
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe(CareerTitles.name, () => {
  it('Must list all the titles', () => {
    render(<CareerTitles playerId='playerId' />);

    titlesMock.forEach(async title => {
      const htmlElem = await screen.findByText(title.content);
      expect(htmlElem).toBeVisible();
    });
  });
});