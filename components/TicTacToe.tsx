"use client";

import { ticTacToeItems, ticTacToeWinCondition } from "@/data";
import React, { use, useEffect, useState } from "react";

const TicTacToe = () => {
  const [turn, setTurn] = useState(true);
  const [player1Position, setPlayer1Position] = useState<number[]>([]);
  const [player2Position, setPlayer2Position] = useState<number[]>([]);
  const [disabledButtons, setDisabledButtons] = useState<number[]>([]);
  const [winner, setwinner] = useState<string | null>(null);

  const turnHandler = (index: number) => {
    if (!disabledButtons.includes(index)) {
      setDisabledButtons((prev) => [...prev, index]);
      if (turn) {
        setPlayer1Position((prev) => [...prev, index].sort());
      } else {
        setPlayer2Position((prev) => [...prev, index].sort());
      }
      setTurn(!turn);
    }
  };

  const getCellColor = (index: number) => {
    if (player1Position.includes(index)) {
      return "bg-red-800";
    } else if (player2Position.includes(index)) {
      return "bg-blue-600";
    } else {
      return "bg-black";
    }
  };

  useEffect(() => {
    checkWinCondition();
  }, [player1Position, player2Position]);

  const checkWinCondition = () => {
    for (const condition of ticTacToeWinCondition) {
      if (condition.every((position) => player1Position.includes(position))) {
        setwinner("Player 1");
      }
    }
    for (const condition of ticTacToeWinCondition) {
      if (condition.every((position) => player2Position.includes(position))) {
        setwinner("Player 2");
        return;
      }
    }
    if (disabledButtons.length === 9 && !winner) {
      setwinner("Draw");
    }
  };

  const resetGame = () => {
    setPlayer1Position([]);
    setPlayer2Position([]);
    setDisabledButtons([]);
    setwinner(null);
    setTurn(true);
  };

  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <div>
        {winner ? (
          <div>{winner === "Draw" ? "It is a Draw" : `${winner} Wins`}</div>
        ) : (
          <div>Current Turn: {turn ? "Player 1" : "Player 2"}</div>
        )}
      </div>
      <div className="grid grid-cols-3">
        {ticTacToeItems.map((items, index) => (
          <button
            key={index}
            className={`bg-black h-10 w-10 border border-white gap-2 ${getCellColor(
              index
            )}`}
            aria-label={`Tic tac toe cell ${index}`}
            onClick={() => turnHandler(index)}
            disabled={disabledButtons.includes(index) || winner !== null}
          />
        ))}
      </div>
      {winner && (
        <button className="mt-4 px-4 bg-red-800 text-white" onClick={resetGame}>
          Play Again
        </button>
      )}
    </div>
  );
};

export default TicTacToe;
