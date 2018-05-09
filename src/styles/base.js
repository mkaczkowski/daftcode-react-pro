import { css } from 'emotion';

import queries from './mediaQueries';

const primaryColor = '#6772e5';
const secondaryColor = '#fefefe';

const button = css`
  margin-top: 20px;
  font-size: 1rem;
  text-shadow: 0px 0px 1px rgba(255, 255, 255, 1);
  text-decoration: none;

  ${queries.mobile`
		width: 100%;
		margin-top: 12px;
	`};
`;

const footer = css`
  .logo {
    img {
      margin: 12px 12px 30px;
    }
  }

  .column {
    padding: 0 45px;
  }

  .heading {
    color: #4f5882;
    text-transform: uppercase;
    margin: 12px 0;
    font-size: 0.85rem;
    letter-spacing: 0.05rem;
    font-weight: 700;
  }

  a {
    color: #8994c6;
    line-height: 1.6rem;
    text-decoration: none;

    &:hover {
      color: #eee;
    }
  }

  ${queries.tablet`
		flex-wrap: wrap;

		.column-wrapper {
			width: 100%;
		}

		.column {
			width: 25%;
			padding: 0 15px;
		}
	`};

  ${queries.mobile`
		.column-wrapper {
			flex-direction: column;
			text-align: center;
		}

		.column {
			width: 100%;
			margin-top: 25px;
		}
	`};
`;

const textCenter = css`
  text-align: center;
`;

export { button, footer, textCenter };
