# we-srds-eval

## Overview

`we-srds-eval` is a tool designed to calculate the correlation between the cosine similarity of word embeddings and human judgments of semantic relations. It processes datasets from `punuy-datasets` to evaluate how well word embeddings align with human semantic understanding.

## Features

- Computes cosine similarity for word pairs.
- Calculates the correlation between cosine similarity scores and human-judged scores.
- Supports multiple datasets and languages.

## Installation

To install the necessary dependencies, run:

```bash
npm install
```

## Usage

To process all datasets and calculate correlations, execute the following command:

```bash
node src/bin/proc-datasets.ts
```

This will output the correlation results for each dataset.

## Project Structure

- **src/bin/proc-datasets.ts**: Entry point for processing datasets.
- **src/lib/we-srd-corr.ts**: Core library functions for calculating cosine similarity and correlation.
- **src/lib/utils.ts**: Utility functions used across the project.
- **src/lib/ds-adapters.ts**: Adapters for handling different dataset formats.

## Development

This project uses TypeScript for type safety and Vitest for testing. To run tests, use:

```bash
npm test
```

## License

This project is licensed under the ISC License.

## Author

André Santos
