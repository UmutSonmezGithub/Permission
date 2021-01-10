//Discord.js v12

//permission//


//Discord Yetkisine göre

if (!message.member.hasPermission("BURAYA")) return

Aşağıdaki izileri **BURAYA** Yazan Kısmına yazmanız gerekmekte

 /* 
 
  CREATE_INSTANT_INVITE
  KICK_MEMBERS
  BAN_MEMBERS
  ADMINISTRATOR
  MANAGE_CHANNELS
  MANAGE_GUILD
  ADD_REACTIONS
  READ_MESSAGES
  SEND_MESSAGES
  SEND_TTS_MESSAGES
  MANAGE_MESSAGES
  EMBED_LINKS
  ATTACH_FILES
  READ_MESSAGE_HISTORY
  MENTION_EVERYONE
  EXTERNAL_EMOJIS
  CONNECT
  SPEAK
  MUTE_MEMBERS
  DEAFEN_MEMBERS
  MOVE_MEMBERS
  USE_VAD
  CHANGE_NICKNAME
  MANAGE_NICKNAMES
  MANAGE_ROLES_OR_PERMISSIONS
  MANAGE_WEBHOOKS
  MANAGE_EMOJIS

Eğer yetkisi olmayan kişilere uyarı mesajı göndermek istiyorsanız return kısmının ardından message.channel.send('Buna Yetkin Yok!') Şeklinde yapabilrsiniz.
 */
 
 
 // Peki belirlediğim role özel nasıl yapabilirim ?

if (!message.member.roles.cache.find(r => r.id=== "ROLİD")) return 

// Şeklinde belirtilen role özel yapılabilir




// Ama ben sadece komutun belirledğim kanalda çalışmasını istiyorum diyorsanız

let KomutKanalı = "KANAL İD" 
        if(message.channel.id !== KomutKanalı) return
        
// Şeklinde belirtilen Kanala özel yapılabilir        



//Hazırlayan : 𝙳𝚛𝚊𝚙𝚙𝚎𝚛#5522
