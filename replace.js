const {readFileSync, promises: fsPromises} = require('fs');

async function asyncReadFile(filename) {
  try {
    const contents = await fsPromises.readFile(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);
    let newFile = ''

    for (let i = 0; i < arr.length; i++) {
      newFile += arr[i].replace(
        'lenster.xyz/u/',
        'lenstats.xyz/profile/'
      ) + '\n'
    }

    console.log(newFile)

    await fsPromises.writeFile(filename, newFile, 'utf8');

    return arr;
  } catch (err) {
    console.log(err);
  }
}

asyncReadFile('./sitemaps/profiles/100000.txt').then(() => {
  console.log('File read')
});