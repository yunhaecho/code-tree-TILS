const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
// 입력 파싱 시 trim() 필수
const commands = input.slice(1).map(line => line.trim().split(' '));

function solution() {
    const OFFSET = 100000;
    const MAX_RANGE = 200000 + 1;

    let tile = Array(MAX_RANGE).fill(0); // 최종 색상 기록용 (1:W, 2:B, 3:G)가 아니라 그냥 문자열로 해도 됨
    let cntW = Array(MAX_RANGE).fill(0);
    let cntB = Array(MAX_RANGE).fill(0);
    let lastColor = Array(MAX_RANGE).fill(0); // 0:None, 1:W, 2:B (마지막 색상 기록)

    let cur = OFFSET; 
    
    for (let i = 0; i < commands.length; i++) {
        const order = commands[i];
        let step = Number(order[0]);
        const dir = order[1];

        let s = 0;
        let e = 0;
        
        // [핵심 수정] cur 위치를 포함해서 구간을 잡고, cur를 마지막 칠한 위치로 업데이트
        if (dir === "R") {
            s = cur;
            e = cur + step; 
            cur = cur + step - 1; // 오른쪽 끝이 새로운 cur
        } else { // "L"
            s = cur - step + 1;   // 왼쪽 끝이 s가 됨
            e = cur + 1;          // 현재 위치까지 포함해야 하므로 +1
            cur = cur - step + 1; // 왼쪽 끝이 새로운 cur
        }

        // 구간 칠하기
        for (let j = s; j < e; j++) {
            // 회색(Gray)이 된 타일은 더 이상 카운트하지 않음 (문제 조건 확인 필요)
            // 보통 회색이 되면 덧칠해도 의미가 없으므로 continue 처리하거나
            // 카운트는 세되 색깔만 안 바꾸거나 해야 함. 
            // 여기서는 '회색 확정 후에는 로직 영향 없음'으로 가정
            if (cntW[j] >= 2 && cntB[j] >= 2) continue;

            if (dir === "R") {
                cntB[j]++;
                lastColor[j] = 2; // Black
            } else {
                cntW[j]++;
                lastColor[j] = 1; // White
            }
        }
    }

    let w = 0, b = 0, g = 0;

    // 최종 결과 집계
    for (let k = 0; k < MAX_RANGE; k++) {
        // 1. 회색 조건 먼저 확인 (W >= 2 그리고 B >= 2)
        if (cntW[k] >= 2 && cntB[k] >= 2) {
            g++;
        }
        // 2. 회색이 아니라면 마지막 색깔 확인
        else if (lastColor[k] === 1) {
            w++;
        }
        else if (lastColor[k] === 2) {
            b++;
        }
    }

    console.log(w, b, g);
}

solution();