export const blocksTitle = '消除追逐名利之心 ｜俄羅斯方塊';
export const blocksLinesPerPoint = 5;

export function mountBlocks(container, { initialLines=0, points=5, onProgress } = {}){
  const targetLines = points * blocksLinesPerPoint;
  container.innerHTML=`<p>每消除 5 行就會顯示一句淨化金句，累計消除 ${targetLines} 行通關。<br>
    ← → 移動、↑ 旋轉、↓ 下移、空白鍵落到底。<br>
    平板可點下方按鈕。</p>
    <p class="arcade-score" role="status"></p>
    <div class="arcade-quote" hidden>
      <span class="arcade-quote-label">淨化金句</span>
      <p aria-live="polite" aria-atomic="true"></p>
    </div>
    <canvas width="300" height="480" aria-label="俄羅斯方塊棋盤"></canvas>
    <div class="arcade-actions"></div>
    <button type="button" class="primary" data-start>開始遊戲</button>`;
  const canvas = container.querySelector('canvas');
  const draw = canvas.getContext('2d');
  const scoreLabel = container.querySelector('.arcade-score');
  const quote = container.querySelector('.arcade-quote');
  const quoteText = quote.querySelector('p');
  const startButton = container.querySelector('[data-start]');
  const buttons = container.querySelector('.arcade-actions');
  let playing = false;
  let lastTime = 0;

  const milestoneMessages = [
    '名利或許使人風光，淡泊才能使人自在。',
    '山水洗去塵世的喧囂，也洗去心中的功名欲望。',
    '人生真正的高度，不在功名有多顯赫，而在心境有多豁達。',
    '山不言，卻能使人忘卻功名；水不語，卻能洗盡心中塵埃。',
    '「望峰息心，淡泊致遠。恭喜你，已通過名利的考驗！」'
  ];
  let clearedLines = initialLines;

  const filled = (length,value=0) => Array(length).fill(value);
  function displayScore(){
    const progress = '已消除 ' + Math.min(clearedLines,targetLines) + ' / ' + targetLines + ' 行';
    const earned = Math.floor(clearedLines / blocksLinesPerPoint);
    const message = milestoneMessages[earned-1];
    scoreLabel.textContent = progress + ' · 得分 ' + earned + ' / ' + points + ' 分';
    if (message && quoteText.textContent !== message){
      quote.hidden = false;
      quote.classList.toggle('arcade-quote-complete', earned===milestoneMessages.length);
      quoteText.textContent = message;
    }
  }

  const shapes = [
    [[1,1,1,1]], [[1,1],[1,1]], [[0,1,0],[1,1,1]], [[0,1,1],[1,1,0]],
    [[1,1,0],[0,1,1]], [[1,0,0],[1,1,1]], [[0,0,1],[1,1,1]]
  ];
  const colors = ['#38312a','#6cafbf','#efc775','#b59bc0','#8fc59a','#e48579','#929fde','#d19b6f'];
  let board, block, fallTime, bag;
  function nextBlock(){
    if(!bag.length){
      bag = shapes.map((_,i)=>i);
      for(let i=bag.length-1;i>0;i--){
        const pick=Math.floor(Math.random()*(i+1));
        [bag[i],bag[pick]]=[bag[pick],bag[i]];
      }
    }
    const id=bag.pop();
    const shape=shapes[id];
    block={shape,color:id+1,x:Math.floor((10-shape[0].length)/2),y:0};
    if(collides(block)) endGame();
  }
  function collides({shape,x,y}){
    return shape.some((row,j)=>row.some((cell,i)=>cell && (x+i<0 || x+i>=10 || y+j>=20 || (y+j>=0 && board[y+j][x+i]))));
  }
  function moveBlock(dx,dy){
    const candidate={...block,x:block.x+dx,y:block.y+dy};
    if(collides(candidate)) return false;
    block=candidate;
    return true;
  }
  function rotateBlock(){
    const shape=block.shape[0].map((_,i)=>block.shape.map(row=>row[i]).reverse());
    for(const offset of [0,-1,1,-2,2]){
      const candidate={...block,x:block.x+offset,shape};
      if(!collides(candidate)){block=candidate;return;}
    }
  }
  function dropBlock(){
    if(moveBlock(0,1)) return;
    for(const [y,row] of block.shape.entries())
      for(const [x,cell] of row.entries()) if(cell) board[y+block.y][x+block.x]=block.color;
    const remaining=board.filter(row=>row.some(cell=>!cell));
    const cleared=20-remaining.length;
    board=[...Array.from({length:cleared},()=>filled(10)),...remaining];
    if(cleared){
      clearedLines = Math.min(targetLines, clearedLines + cleared);
      displayScore();
      onProgress?.(clearedLines);
      if(clearedLines >= targetLines){
        endGame();
        block=undefined;
        startButton.hidden=true;
        return;
      }
    }
    nextBlock();
  }
  function paintCell(x,y,color){
    const left=30+x*24;
    const top=y*24;
    draw.fillStyle=colors[color];
    draw.fillRect(left+1,top+1,22,22);
    if (!color) return;
    draw.strokeStyle='#462a2860';
    draw.strokeRect(left+3.5,top+3.5,17,17);
    draw.fillStyle='#fff4cf85';
    draw.fillRect(left+4,top+4,16,2);
    draw.fillStyle='#62372e60';
    draw.fillRect(left+4,top+19,16,2);
  }
  function paintBlocks(){
    draw.fillStyle=clearedLines >= targetLines?'#ead8aa':'#553827';draw.fillRect(0,0,300,480);
    if(clearedLines >= targetLines){
      draw.fillStyle='#244b3e';
      draw.textAlign='center';
      draw.font='bold 28px serif';
      draw.fillText('望峰息心',150,219);
      draw.font='bold 16px sans-serif';
      draw.fillText(points+' / '+points+' 分',150,254);
      draw.textAlign='start';
      return;
    }
    draw.fillStyle='#211b16';
    draw.fillRect(29,0,242,480);
    draw.fillStyle='#b78645';
    draw.fillRect(20,0,2,480);
    draw.fillRect(278,0,2,480);
    draw.fillStyle='#d1a869';
    for (let y=12;y<480;y+=40){
      draw.strokeStyle='#d1a869';
      draw.strokeRect(17.5,y+.5,7,7);
      draw.strokeRect(275.5,y+.5,7,7);
    }
    board.forEach((row,y)=>row.forEach((cell,x)=>paintCell(x,y,cell)));
    block?.shape.forEach((row,y)=>row.forEach((cell,x)=>{if(cell)paintCell(x+block.x,y+block.y,block.color);}));
  }

  function endGame(){ playing=false;displayScore();startButton.textContent='再玩一次'; }
  function start(){
    playing=true;fallTime=0;
    board=Array.from({length:20},()=>filled(10));block=undefined;bag=[];
    nextBlock();
    displayScore();startButton.textContent='重新開始';
  }
  function action(name){
    if(!playing) return;
    if(name==='left') moveBlock(-1,0);
    if(name==='right') moveBlock(1,0);
    if(name==='rotate') rotateBlock();
    if(name==='drop') dropBlock();
    if(name==='hard'){
      while(moveBlock(0,1)){}
      dropBlock();
    }
  }
  const keys={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'rotate',ArrowDown:'drop',' ':'hard',a:'left',d:'right'};
  canvas.addEventListener('keydown',event=>{
    if(!playing) return;
    const name=keys[event.key];
    if(name){event.preventDefault();action(name);}
  });
  buttons.addEventListener('pointerdown',event=>{
    const button=event.target.closest('[data-action]');
    if(!button) return;
    event.preventDefault();
    action(button.dataset.action);
  });
  buttons.addEventListener('click',event=>{
    if(event.detail!==0 || !event.target.dataset.action) return;
    const name=event.target.dataset.action;
    action(name);
  });
  startButton.addEventListener('click',()=>{start();canvas.focus();});
  const tools = [['left','左移'],['right','右移'],['rotate','旋轉'],['drop','下移'],['hard','落到底']];
  buttons.innerHTML=tools.map(([id,label])=>`<button data-action="${id}">${label}</button>`).join('');
  canvas.tabIndex=0;
  board=Array.from({length:20},()=>filled(10));
  displayScore();
  if (clearedLines >= targetLines) startButton.hidden=true;
  paintBlocks();

  function frame(time){
    const elapsed=Math.min(time-lastTime,34);lastTime=time;
    if(playing){
      fallTime+=elapsed;
      if(fallTime>Math.max(550,950-clearedLines*45)){fallTime=0;dropBlock();}
    }
    paintBlocks();
    frameId=requestAnimationFrame(frame);
  }
  let frameId=requestAnimationFrame(frame);
  return () => cancelAnimationFrame(frameId);
}

const trialBoard = document.querySelector('[data-blocks-trial]');
if (trialBoard) mountBlocks(trialBoard);
