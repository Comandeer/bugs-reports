import test from 'ava';

test( 'force the timeout', async () => {
	await wait( 5 );
} );

async function wait( seconds ) {
	return new Promise( resolve => {
		setTimeout( resolve, seconds * 1000 );
	} );
}
