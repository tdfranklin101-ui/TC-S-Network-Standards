export async function GET() {
  // JSON-LD representation of TC-S standards. No dummy values; purely structural.
  const doc = {
    "@context": {
      "tcs": "https://thecurrentsee.org/standards#"
    },
    "@id": "https://thecurrentsee.org/api/standards/list",
    "@type": "tcs:StandardsIndex",
    "tcs:version": "1.0",
    "tcs:standards": [
      {
        "@id": "https://thecurrentsee.org/standards/solar-standard-v1",
        "@type": "tcs:SolarStandard",
        "tcs:description": "1 Solar = 4,913 kWh of renewable energy; 1 Solar = 10,000 Rays."
      },
      {
        "@id": "https://thecurrentsee.org/standards/solar-index-v1",
        "@type": "tcs:SolarIndex",
        "tcs:description": "Composite metric of renewable production, consumption pressure, reserve health, compute demand, and ethical indices."
      },
      {
        "@id": "https://thecurrentsee.org/standards/solar-reserve-ledger-v1",
        "@type": "tcs:SolarReserveLedger",
        "tcs:description": "Daily generation and redemption ledger for the TC-S Solar Reserve."
      },
      {
        "@id": "https://thecurrentsee.org/standards/wallet-v1",
        "@type": "tcs:Wallet",
        "tcs:description": "Wallet schema for Solar and Rays balances with daily mint tracking."
      },
      {
        "@id": "https://thecurrentsee.org/standards/compute-governance-v1",
        "@type": "tcs:ComputeGovernance",
        "tcs:description": "Rays-priced compute requests with ledgered acceptance or rejection."
      },
      {
        "@id": "https://thecurrentsee.org/standards/identify-anything-v1",
        "@type": "tcs:IdentifyAnything",
        "tcs:description": "Provenance and valuation pipeline from object identity to Rays-valued market listing."
      }
    ]
  };

  return new Response(JSON.stringify(doc), {
    status: 200,
    headers: { "Content-Type": "application/ld+json" },
  });
}