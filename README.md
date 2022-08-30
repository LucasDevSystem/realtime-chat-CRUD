<p align=center>
    <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
	width="70"
    style="margin-right: 20px">
    <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"  width="70" style="margin-right: 20px">
    <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png" 	width="70" style="margin-right: 20px">
    <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"	width="70" style="margin-right: 20px">

</p>

</p>

<h1 align=center>
    realtime-chat-CRUD
</h1>

<p align=center>
    <a href="#desc">Description</a> | <a href="#run">Run </a> | <a href="#author">Author</a>
</p>


<h2 align=center id="desc"> 
    
    Description 
</h2>



This is a real-time message chat server, you can create message, read, modify and delete.I hope you enjoy it : )

- - - -
<h2 align=center id="run">
    Running
</h2>
*Set up yout docker postgres database


<h2 align=center id="play" >
Lets Play
</h2>
<p align=center id="play" >
First u need start a chat pass your id as "sender_id" and to receiver "receiver_id",
the server will identify inexisting inbox and then create inbox and inbox users.
</p>
<h2 >
</h2>

```json
method: POST
route:"/message"

body:{
	"sender_id": 2,
	"receiver_id": 1,
	"text": "hey"
}
will return 
{
	"id": "909f6320-1804-442c-9624-c818d120bbe9",
	"inbox_id": "7053c6ee-beff-405a-a31b-72b78bd2bc56",
	"sender_id": 2,
	"receiver_id": 1,
	"text": "hey"
}
```

<p align=center>
You can get user inbox
</p>

```json
method: GET
route:"/inbox"

params:{
  "user":1
}
will return 
[
	{
		"id": "a104a014-d8ba-4869-9f61-3b90d91aaaab",
		"last_message": "hey",
		"last_sent_user_id": "1"
	},
	{
		"id": "7053c6ee-beff-405a-a31b-72b78bd2bc56",
		"last_message": "hru?",
		"last_sent_user_id": "1"
	},
]
```

<p align=center>
With inbox_id in hand u can find all messages from this inbox
</p>

```json
method: GET
route:"/message"

params:{
  "inbox_id":"a104a014-d8ba-4869-9f61-3b90d91aaaab"
}
will return 
[
	{
		"id": "ddc06c81-4770-4c3b-9ee2-257cfaf32848",
		"inbox_id": "a104a014-d8ba-4869-9f61-3b90d91aaaab",
		"sender_id": 1,
		"receiver_id": 2,
		"text": "hey",
		"created_at": "2022-08-29T05:26:54.820Z"
	},
]
```


<h2 align=center id="author">
    
 Author
</h2>

Lucas Emanuel, development intern.
