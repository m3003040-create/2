/* style.css – полная стилизация покерного стола, анимации, адаптивность */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
}

body {
    background: linear-gradient(145deg, #1a472a 0%, #0e2a1a 100%);
    font-family: 'Segoe UI', 'Roboto', 'Poppins', sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    overflow-x: auto;
}

.game-container {
    position: relative;
    width: 1300px;
    max-width: 98vw;
    margin: 0 auto;
}

/* СТОЛ */
.poker-table {
    background: radial-gradient(circle at 30% 20%, #2c6e3c, #0f3b1a);
    border-radius: 200px / 120px;
    box-shadow: 0 25px 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,200,0.3);
    padding: 30px 20px 40px 20px;
    position: relative;
    border: 12px solid #c9a87b;
    border-top-color: #e7c99e;
    border-bottom-color: #a57c4a;
    transition: all 0.2s;
}

/* Делер-баттон */
.dealer-button {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    background: radial-gradient(circle, #ffdd99, #ccaa66);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    color: #4a2a0a;
    box-shadow: 0 2px 8px black;
    z-index: 10;
    font-family: monospace;
}

/* Банк */
.pot-display {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(6px);
    padding: 8px 20px;
    border-radius: 40px;
    color: gold;
    font-weight: bold;
    font-size: 1.4rem;
    letter-spacing: 1px;
    border: 1px solid #ffd966;
    box-shadow: 0 2px 8px black;
    white-space: nowrap;
}

/* Общие карты */
.community-cards {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: 100px auto 40px;
    min-height: 140px;
    flex-wrap: wrap;
    background: rgba(0,30,0,0.3);
    border-radius: 30px;
    padding: 15px;
}

/* Зона игроков (flex-сетка) */
.players-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 20px 0 30px;
}

/* Карточка игрока */
.player-card {
    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
    border-radius: 28px;
    padding: 12px 12px 8px;
    width: 190px;
    text-align: center;
    box-shadow: 0 8px 18px black;
    transition: transform 0.2s, box-shadow 0.2s;
    border: 1px solid #5a5a5a;
    color: #eee;
}

.player-card.active {
    border: 3px solid gold;
    box-shadow: 0 0 15px gold;
    background: linear-gradient(145deg, #3a3a3a, #222);
}

.player-name {
    font-weight: bold;
    font-size: 1.2rem;
    background: #00000066;
    display: inline-block;
    padding: 4px 12px;
    border-radius: 30px;
    margin-bottom: 8px;
}

.player-chips {
    font-size: 1rem;
    color: #ffd966;
    margin: 5px 0;
}

.player-bet {
    font-size: 0.85rem;
    color: #ffaa66;
    background: #000000aa;
    display: inline-block;
    padding: 2px 8px;
    border-radius: 20px;
}

.player-cards {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin: 8px 0;
    min-height: 85px;
}

/* Стили карт */
.card {
    width: 60px;
    height: 84px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 6px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.8rem;
    position: relative;
    transition: all 0.2s;
}

.card-back {
    background: repeating-linear-gradient(45deg, #2c6e9e, #2c6e9e 10px, #1e4a6e 10px, #1e4a6e 20px);
    border: 1px solid #aaa;
}

.card-rank {
    font-size: 1.8rem;
    font-weight: bold;
}

.card-suit {
    font-size: 2.2rem;
}

.card.red {
    color: #c33;
}

.card.black {
    color: #222;
}

/* Кнопки действий */
.action-buttons {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: 20px 0 10px;
    flex-wrap: wrap;
}

.action-buttons button {
    background: radial-gradient(circle at 30% 10%, #ffdd99, #ccaa66);
    border: none;
    padding: 12px 20px;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.1s linear;
    box-shadow: 0 4px 6px black;
    color: #2c1a0a;
}

.action-buttons button:active {
    transform: scale(0.96);
}

.action-buttons button:disabled {
    opacity: 0.5;
    transform: none;
    cursor: not-allowed;
    filter: grayscale(0.1);
}

/* Слайдер рейза */
.raise-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 10px auto;
    background: #000000aa;
    padding: 8px 20px;
    border-radius: 60px;
    width: fit-content;
}

#raiseAmount {
    width: 260px;
}

#raiseValue {
    background: #ffdd99;
    padding: 4px 12px;
    border-radius: 30px;
    font-weight: bold;
    color: #2a1a0a;
}

/* Лог действий */
.action-log {
    background: #0a0f0ae6;
    backdrop-filter: blur(8px);
    border-radius: 28px;
    margin-top: 20px;
    padding: 12px;
    max-height: 180px;
    overflow-y: auto;
    color: #cfc;
    font-family: monospace;
    font-size: 0.85rem;
    border: 1px solid #6a6a4a;
}

.action-log h3 {
    font-size: 1rem;
    margin-bottom: 6px;
    color: #ffd966;
}

.log-messages {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.log-entry {
    border-bottom: 1px solid #3a5a2a;
    padding: 3px 0;
}

/* Модальное окно */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: #2d2a1f;
    padding: 30px;
    border-radius: 40px;
    width: 400px;
    max-width: 90vw;
    color: #f5e7c8;
    box-shadow: 0 0 40px gold;
    border: 1px solid #c9aa5f;
}

.modal-content h2 {
    margin-bottom: 20px;
    text-align: center;
}

.modal-content form {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.modal-content label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
}

.modal-content input {
    background: #1e1a0f;
    border: 1px solid #caa55a;
    padding: 8px;
    border-radius: 20px;
    color: #ffeaac;
    width: 150px;
    text-align: center;
}

.modal-content button {
    background: #f0bc6e;
    padding: 12px;
    border-radius: 60px;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    margin-top: 10px;
    border: none;
}

.close {
    float: right;
    font-size: 28px;
    cursor: pointer;
    color: #ffcc88;
}

/* Кнопка настроек */
.settings-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #1e3a2a;
    border: none;
    font-size: 32px;
    padding: 8px 14px;
    border-radius: 60px;
    cursor: pointer;
    box-shadow: 0 4px 12px black;
    z-index: 200;
}

/* Анимации */
@keyframes cardFlip {
    0% { transform: rotateY(90deg); opacity: 0; }
    100% { transform: rotateY(0); opacity: 1; }
}

.card {
    animation: cardFlip 0.2s ease-out;
}

@keyframes chipMove {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-40px) scale(0.8); opacity: 0; }
}

.chip-animation {
    position: absolute;
    width: 30px;
    height: 30px;
    background: radial-gradient(circle, gold, #b57c1c);
    border-radius: 50%;
    pointer-events: none;
    animation: chipMove 0.5s forwards;
    z-index: 500;
}

/* Адаптивность */
@media (max-width: 900px) {
    .poker-table {
        padding: 20px 10px;
    }
    .player-card {
        width: 150px;
        padding: 8px;
    }
    .card {
        width: 45px;
        height: 66px;
        font-size: 1.2rem;
    }
    .card-rank { font-size: 1.2rem; }
    .card-suit { font-size: 1.6rem; }
    .action-buttons button {
        padding: 6px 12px;
        font-size: 0.8rem;
    }
}

/* Стили для скроллбара */
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-track {
    background: #1e3a1e;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb {
    background: #c9a87b;
    border-radius: 10px;
}
