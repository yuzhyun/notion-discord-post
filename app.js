import fetch from 'node-fetch';
import {Client} from '@notionhq/client';
process.env.NOTION_TOKEN = ""

// Initializing a client
const notion = new Client({
	auth: process.env.NOTION_TOKEN,
})

const getDB = async () => {
  const databaseId = "";
  const response = await notion.databases.query({ 
    database_id: databaseId, 
      "filter": {
    "property": "태그",
    "select": {
      "equals": "발송 예정" 
    }
  }
  });
  for (let article of response.results)
  {
    console.log(article.properties);
    const page = await notion.blocks.children.list(
      {block_id : article.id} 
    )
    const reservedTime = new Date(article.properties['예약 시간'].date.start);
    const nowTime = new Date(); 
    if (reservedTime > nowTime) continue;
    for (let block of page.results)
    {
      const type = block.type
      if (block[type].rich_text.length > 0)
      {
        const message = block[type].rich_text[0].plain_text;
        await fetch("webhookURL",{method:"POST", headers :{"Content-Type" : "application/json"}, body : JSON.stringify({"content" : message})});
        console.log(article.id);
        await notion.pages.update({
          page_id : article.id,
          properties : {
            "태그" : {
              select : {
                "name" : "발송 완료"
              }
            },
          }, 
        })
      }
    }
  }
};

getDB();