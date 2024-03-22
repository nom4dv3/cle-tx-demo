//@ts-ignore
import { console, Transaction } from "@ora-io/cle-lib";
import { Bytes, Block } from "@ora-io/cle-lib";

export function handleBlocks(blocks: Block[]): Bytes {

  var txs = blocks[0].transactions;
  for (var i=0; i<txs.length; ++i){
    if (txs[i].to == Bytes.fromHexString("0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14")){
      break;
    }
  }
  var tx: Transaction = txs[i];

  console.log('Tx hash: ' + tx.hash.toHexString());
  console.log('Tx from: ' + tx.from.toHexString());
  console.log('Tx to: ' + tx.to.toHexString());
  console.log('Tx input: ' + tx.input.toHexString());
  console.log('Copying tx input as OUTPUT');

  return tx.input;
}
