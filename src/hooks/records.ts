import { useRecords } from '@puzzlehq/sdk';

export const useGameRecords = () => {
  const { records } = useRecords({
    filter: {
      programIds: [
        'whos_your_guy.aleo',
        'my_puzzle_pieces.aleo',
        'multiparty_pvp_utils_v015.aleo',
      ],
      type: 'unspent',
    },
    multisig: false,
  });
  const gameNotifications = records?.filter(
    (record) => record.programId === 'whos_your_guy.aleo'
  );
  const puzzleRecords = records?.filter(
    (record) => record.programId === 'my_puzzle_pieces.aleo'
  );
  const utilRecords = records?.filter(
    (record) => record.programId === 'multiparty_pvp_utils_v015.aleo'
  );

  console.log([gameNotifications, puzzleRecords, utilRecords]);

  return { puzzleRecords, gameNotifications, utilRecords };
};
