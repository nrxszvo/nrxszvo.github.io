export const equLorenz = `
\\begin{align}
\\dot{x} & = \\sigma(y-x) \\\\
\\dot{y} & = \\rho x - y - xz \\\\
\\dot{z} & = -\\beta z + xy
\\end{align}`;
export const equParams = `
\\begin{align}
\\sigma & = 10 \\\\
\\beta & = \\frac{8}{3} \\\\
\\rho & = 28 \\\\
\\end{align}`;

export const lyapunovExp = `
\\begin{align}
\dt & \\approx 0.015 \\mathrm{s} \\\\
\\lambda_{max}^{-1} & \\approx 1.121 \\mathrm{s} \\\\
\H = 100 \\text{ points} & \\approx 1.34\\lambda_{max}^{-1} \\\\
\\end{align}`;

export const sMAPE = `
\\begin{align} 
\\operatorname{\\epsilon}(t) := \\frac{200}{t} \\sum_{t'=1}^t \\frac{|\\operatorname{\\boldsymbol{y}}(t')-\\operatorname{\\boldsymbol{\\hat{y}}}(t')|}{|\\operatorname{\\boldsymbol{y}}(t')| + |\\operatorname{\\boldsymbol{\\hat{y}}}(t')|} \\\\
\\end{align}`;

export const modelOneHPs = [
	{ desc: 'horizon length', val: 100 },
	{ desc: 'lookback window length', val: 500 },
	{ desc: 'dt', val: 0.015008 },
	{ desc: 'number of stacks', val: 3 },
	{ desc: 'blocks per stack', val: 1 },
	{ desc: 'mlp layers per block', val: 4 },
	{ desc: 'mlp layer size', val: 1024 },
	{ desc: 'activation function', val: 'ReLU' },
	{ desc: 'max pooling factors', val: '2, 2, 2' },
	{ desc: 'frequency downsampling factors', val: '24, 12, 1' },
	{ desc: 'batch size', val: 512 },
	{ desc: '# training steps', val: 10000 },
	{ desc: 'learning rate', val: '1e-3' },
	{ desc: 'learning rate schedule', val: 'halve every 3,333 steps' },
	{ desc: 'total trainable parameters', val: '~20 million' }
];
export const modelTwoHPs = [
	{ desc: 'number of stacks', val: 4 },
	{ desc: 'blocks per stack', val: 8 },
	{ desc: 'mlp layer size', val: 2048 },
	{ desc: 'max pooling factors', val: '10, 4, 2, 1' },
	{ desc: 'frequency downsampling factors', val: '25, 12, 6, 1' },
	{ desc: 'batch size', val: 512 },
	{ desc: '# training steps', val: 150000 },
	{ desc: 'run validation every', val: '5000 steps' },
	{ desc: 'learning rate', val: '1e-4' },
	{ desc: 'learning rate schedule', val: 'halve whenever validation loss does not decrease' },
	{ desc: 'all other hyperparameters', val: 'same as Model 1' },
	{ desc: 'total trainable parameters', val: '~687 million' }
];
export const modelThreeHPs = [
	{ desc: 'horizon', val: 500 },
	{ desc: 'lookback', val: 2500 },
	{ desc: 'blocks per stack', val: 4 },
	{ desc: 'dt', val: 0.0030016 },
	{ desc: 'all other hyperparameters', val: 'same as Model 2' },
	{ desc: 'total trainable parameters', val: '~644 million' }
];
