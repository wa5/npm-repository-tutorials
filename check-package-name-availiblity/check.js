import npmName from 'npm-name';

// Check a package name

(async () => {

    // Check a package name
    console.log(await npmName('base64-encode-file'));
    //=> false--if not avilable
    //=>if available true
 
 
    // Check an organization name
    //console.log(await npmName('@ava'));
    //=> false 
})();