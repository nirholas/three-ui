const API = 'https://fun-block.pump.fun/agents';

// The hosted builder still encodes the pre-2.0 create_v2 layout: it writes
// `cashback: true` into the instruction (rejected on-chain with 6082
// CashbackDeprecated) and silently drops `holderReward`. Refuse both here so a
// caller never co-signs a launch that fails or lands without the feature it
// asked for.
function assertSupportedLaunchFlags(args) {
	if (args.cashback === true) {
		throw new Error(
			'cashback launches were retired in Pump SDK 2 (on-chain error 6082). Relaunch without cashback, or use holder rewards via scripts/build-create-coin-tx.mjs --holder-reward.',
		);
	}
	if (args.holderReward === true) {
		throw new Error(
			'the hosted pump.fun builder does not encode holder-reward launches yet. Build it locally with scripts/build-create-coin-tx.mjs --holder-reward.',
		);
	}
}

export async function pumpfun_create_coin(args, ctx) {
	assertSupportedLaunchFlags(args);
	const { cashback, holderReward, ...body } = args;
	const res = await ctx.fetch(`${API}/create-coin`, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({ ...body, encoding: 'base64' }),
	});
	if (!res.ok) throw new Error(`pump.fun create-coin ${res.status}: ${await res.text()}`);
	return res.json();
}
