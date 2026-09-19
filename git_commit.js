const cp = require('child_process');

const git = 'C:\\Users\\Administrator\\AppData\\Local\\Programs\\MinGit\\cmd\\git.exe';
console.log(cp.execFileSync(git, ['status', '--short'], { encoding: 'utf8' }));

cp.execFileSync(git, ['add', '.']);
try {
  const commitOut = cp.execFileSync(git, ['commit', '-m', 'Add 6 autonomous AI games (Flappy, Car, Pacman, 2048, Tetris, Dino) + Hub expansion to 10 apps'], { encoding: 'utf8' });
  console.log(commitOut);
} catch (e) {
  console.log('Nothing to commit or commit error:', e.message);
}

const pushOut = cp.execFileSync(git, ['push', 'origin', 'main'], { encoding: 'utf8' });
console.log('Pushed to GitHub successfully!');
