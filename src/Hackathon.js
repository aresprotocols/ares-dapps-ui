import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSubstrate } from './substrate-lib';
import { ContractPromise } from '@polkadot/api-contract';

import ERC20 from './config/erc20_issue.json';
const DAI = "5CsPjvwJazAVFbMPbbqiC8RL1DZ7rrTNvTJQxESvGXwKo2WH";

import Maker from './config/patramaker.json';
const PatraMaker = "5F5oMxdGPcZqC73xLXPZSM5QVihv38kAQ6dF35YbyyCGy6oo";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Main (props) {
  const classes = useStyles();

  const { api } = useSubstrate();
  const contract = new ContractPromise(api, Maker, PatraMaker);
  (async () => {
  const readTotalSupply = await contract.query["totalSupply"](alicePair.address, {});
  console.log("readTotalSupply");
  console.log(readTotalSupply);

})();

  return (
    <div>
        Hackathon coming
    </div>
  );
}
