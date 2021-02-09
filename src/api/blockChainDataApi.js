export async function singleBlockData(block_hash) {
    const singleBlockDataUrl = `https://blockchain.info/rawblock/${block_hash}`
    return await fetch( singleBlockDataUrl, {
      method: "GET",
      "mode":"no-cors"
    })
      .then(res => res)
      .catch(err => console.log(err));
  }

  export async function latestBlockData(block_hash) {
    const latestBlockDataUrl = 'https://blockchain.info/latestblock';
    return await fetch( latestBlockDataUrl
        , {
      method: "GET",
      headers: {
          "access-control-request-headers": "",
          "access-control-allow-origin": "*"
      }
    })
    .then(res => {
      const {body} = res;
      return body;
    })
      .catch(err => console.log(err));
  }