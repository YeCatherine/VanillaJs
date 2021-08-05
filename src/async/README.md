## Async	Javascript
###1.	Write	your	own	Promise	class	with	syncThen	method.
      Example:
      let	promise	=	new	MyPromise((resolve)	=>	{
      console.log(1);
      resolve();
      }).synchThen(()	=>	{
      console.log(2);
      }).then(()	=>	{
      console.log(3);
      })
      console.log(4);
      //1,	2,	4,	3
###2.	Write	ReversePromise	class	so	that	‘then’	functions	are	calling	from	the	end	to
      the	start.
      Example:
      let	promise	=	new	ReversePromise((resolve)	=>	{
      console.log(1);
      resolve();
      })
      .then(()	=>	console.log(2))
      .then(()	=>	console.log(3))
      .then(()	=>	console.log(4))