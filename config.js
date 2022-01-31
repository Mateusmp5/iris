/* ----------- VERY IMPORTANT NOTICE - AVISO MUITO IMPORTANTE - AVISO MUY IMPORTANTE ------------------
*
* Construído por Lucas R. - KillovSky, agradecimentos especiais ao grupo Legião Z.
*
* Reprodução, edição e outros estão autorizados MAS SEM REMOVER MEUS CRÉDITOS.
* Caso remova, resulta na quebra da licença do mesmo, o que é um crime federal.
* Leia mais em http://escolhaumalicenca.com.br/licencas/mit/ ou no comando /termos.
*
* Desculpe pelos comandos que estão em "inglês" como o "/groupinfo", amo o inglês! 
* Então os programo dessa forma. (Desconheco palavras suficientes em português) :'D
*
* Plagiar meus comandos não te torna coder, vá estudar, não seja um ladrão miserável.
* Levei meses nesse projeto e não paro de me empenhar em deixar todos felizes.
* Então você gostaria de ter algo que se esforçou muito de GRAÇA roubado de você? Pois eu não.
*
* Se ainda planeja roubar, saiba que eu espero de coração que você nunca seja roubado.
* P.S: Plagiar este BOT significa estar vendendo a alma para Lucas R. - KillovSky! ;D
*
* Obrigado a todos que me apoiam, que não roubam isso, que pegam e põem os créditos e...
*
* 						Obrigado a você que escolheu a Íris.
*
* ---------------------------------------------------------------------------------------------------*/

// MODULOS
const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const axios = require('axios')
const math = require('mathjs')
const { search } = require("simple-play-store-search")
const google = require('google-it')
const isPorn = require('is-porn')
const imgsearch = require('node-reverse-image-search')
const moment = require('moment-timezone')
const sinesp = require('sinesp-api')
const { Aki } = require('aki-api')
const request = require('request')
const canvas = require('canvacord')
const ffmpeg = require('fluent-ffmpeg')
const { spawn, exec, execFile } = require('child_process')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const { removeBackgroundFromImageBase64 } = require('remove.bg')
const fetch = require('node-fetch')
const ms = require('parse-ms')
const ytsearch = require('yt-search')
const removeAccents = require('remove-accents')
const { stdout } = require('process')
const bent = require('bent')
const tts = require('node-gtts')
const brainly = require('brainly-scraper-v2')
const deepai = require('deepai')
const wiki = require("@dada513/wikipedia-search")
const { EmojiAPI } = require("emoji-api");
const os = require('os')
const puppeteer = require('puppeteer')
const { XVDL } = require("xvdl")

// UTILIDADES
const { color, sleep, ss, isUrl, upload, addFilter, isFiltered, translate } = require('./lib/functions')
const { getLevel, getMsg, getXp, addLevel, addXp, getRank, isWin, wait, addLimit, addMsg, getLimit } = require('./lib/gaming')
const poll = require('./lib/poll')
const config = require('./lib/config/Bot/config.json')
const { mylang } = require('./lib/lang')

// ATIVADORES & CONFIGS
const region = config.lang
const aki = new Aki(region)
const akinit = async () => { try { await aki.start() } catch (error) { console.log(color('[AKI]', 'crimson'), color(`→ Obtive erros ao iniciar o akinator → ${error.message} - Você pode ignorar.`, 'gold')) } }
akinit()
const cd = 0.18e+7
const mess = mylang()
moment.tz.setDefault('America/Sao_Paulo').locale('pt_BR')
const emoji = new EmojiAPI();
var jogadas = 0

// JSON'S 
const nsfw_ = JSON.parse(fs.readFileSync('./lib/config/Grupos/NSFW.json'))
const welkom = JSON.parse(fs.readFileSync('./lib/config/Grupos/welcome.json'))
const atporn = JSON.parse(fs.readFileSync('./lib/config/Grupos/antiporn.json'))
const bklist = JSON.parse(fs.readFileSync('./lib/config/Grupos/blacklist.json'))
const xp = JSON.parse(fs.readFileSync('./lib/config/Grupos/xp.json'))
const nivel = JSON.parse(fs.readFileSync('./lib/config/Bot/level.json'))
const atbk = JSON.parse(fs.readFileSync('./lib/config/Bot/anti.json'))
const daily = JSON.parse(fs.readFileSync('./lib/config/Bot/diario.json'))
const faki = JSON.parse(fs.readFileSync('./lib/config/Grupos/fake.json'))
const slce = JSON.parse(fs.readFileSync('./lib/config/Bot/silence.json'))
const atstk = JSON.parse(fs.readFileSync('./lib/config/Grupos/sticker.json'))
const msgcount = JSON.parse(fs.readFileSync('./lib/config/Bot/msgcount.json'))
const atlinks = JSON.parse(fs.readFileSync('./lib/config/Grupos/antilinks.json'))

module.exports = kconfig = async (kill, message) => {
	
    // Prefix
    const prefix = config.prefix
	
	// Isso antes da try possibilita receber os alertas no WhatsApp
	const { type, id, from, t, sender, author, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
	let { body } = message
	const ownerNumber = config.owner
	const chats = (type === 'chat') ? body : ((type === 'image' || type === 'video')) ? caption : ''
	body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
	const comma = body.slice(1).trim().split(/ +/).shift().toLowerCase()
	const command = removeAccents(comma)
	
    try {
		
		// PARAMETROS
		const { name, formattedTitle } = chat
		let { pushname, verifiedName, formattedName } = sender
		pushname = pushname || verifiedName || formattedName
        const botNumber = await kill.getHostNumber()
        const blockNumber = await kill.getBlockedIds()
        const user = sender.id
		const isOwner = user.includes(ownerNumber)
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupMembers = isGroupMsg ? await kill.getGroupMembers(groupId) : false
        const groupAdmins = isGroupMsg ? await kill.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(user) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        const isNsfw = isGroupMsg ? nsfw_.includes(groupId) : false
        const autoSticker = isGroupMsg ? atstk.includes(groupId) : false
        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
		const processTime = (timestamp, now) => { return moment.duration(now - moment(timestamp * 1000)).asSeconds() }
		const arg = body.trim().substring(body.indexOf(' ') + 1)
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        const url = args.length !== 0 ? args[0] : ''
        const uaOverride = process.env.UserAgent
        const isBlocked = blockNumber.includes(user)
        const isAntiPorn = isGroupMsg ? atporn.includes(groupId) : false
        const isAntiLink = isGroupMsg ? atlinks.includes(groupId) : false
        const isxp = isGroupMsg ? xp.includes(groupId) : false
		const mute = isGroupMsg ? slce.includes(groupId) : false
		const pvmte = !isGroupMsg ? slce.includes(user) : false
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedSticker = quotedMsg && quotedMsg.type === 'sticker'
        const isQuotedGif = quotedMsg && quotedMsg.mimetype === 'image/gif'
        const isQuotedAudio = quotedMsg && quotedMsg.type === 'audio'
        const isQuotedPtt = quotedMsg && quotedMsg.type === 'ptt'
        const isImage = type === 'image'
        const isVideo = type === 'video'
        const isAudio = type === 'audio'
        const isPtt = type === 'ptt'
        const isGif = mimetype === 'image/gif'
        const arqs = body.trim().split(' ')
        const arks = args.join(' ')
		
		// OUTRAS
        const double = Math.floor(Math.random() * 2) + 1
		const lvpc = Math.floor(Math.random() * 100) + 1
        global.pollfile = 'poll_Config_' + groupId + '.json'
        global.voterslistfile = 'poll_voters_Config_' + groupId + '.json'
		const errorurl = 'https://img.wallpapersafari.com/desktop/1920/1080/19/44/evOxST.jpg'
		const errorImg = 'https://i.ibb.co/jRCpLfn/user.png'
		const irisMsgs = fs.readFileSync('./lib/config/Utilidades/reply.txt').toString().split('\n')
		const chatBotR = irisMsgs[Math.floor(Math.random() * irisMsgs.length)].replace('%name$', `${name}`).replace('%battery%', `${lvpc}`)
		const lgbt = fs.readFileSync('./lib/config/Utilidades/lgbt.txt').toString().split('\n')
		const guei = lgbt[Math.floor(Math.random() * lgbt.length)]
		
		// Sobe patente por nivel, mude pro que quiser dentro das aspas, não esqueca do case ranking
        const check = getLevel(user, nivel)
		var patente = 'Cobre'
		if (check <= 4) {
			patente = 'Bronze I'
		} else if (check <= 10) {
			patente = 'Bronze II'
		} else if (check <= 15) {
			patente = 'Bronze III'
		} else if (check <= 20) {
			patente = 'Bronze IV'
		} else if (check <= 25) {
			patente = 'Bronze V'
		} else if (check <= 30) {
			patente = 'Prata I'
		} else if (check <= 35) {
			patente = 'Prata II'
		} else if (check <= 40) {
			patente = 'Prata III'
		} else if (check <= 45) {
			patente = 'Prata IV'
		} else if (check <= 50) {
			patente = 'Prata V'
		} else if (check <= 55) {
			patente = 'Ouro I'
		} else if (check <= 60) {
			patente = 'Ouro II'
		} else if (check <= 65) {
			patente = 'Ouro III'
		} else if (check <= 70) {
			patente = 'Ouro IV'
		} else if (check <= 75) {
			patente = 'Ouro V'
		} else if (check <= 80) {
			patente = 'Diamante I'
		} else if (check <= 85) {
			patente = 'Diamante II'
		} else if (check <= 90) {
			patente = 'Diamante III'
		} else if (check <= 95) {
			patente = 'Diamante IV'
		} else if (check <= 100) {
			patente = 'Diamante V'
		} else if (check <= 200) {
			patente = 'Diamante Mestre'
		} else if (check <= 300) {
			patente = 'Elite'
		} else if (check <= 400) {
			patente = 'Global'
		} else if (check <= 500) {
			patente = 'Herói'
		} else if (check <= 600) {
			patente = 'Lendário'
		} else if (check <= 700) {
			patente = 'Semi-Deus'
		} else if (check <= 800) {
			patente = 'Arcanjo'
		} else if (check <= 900) {
			patente = 'Demoníaco'
		} else if (check <= 1000 || check >= 1000) {
			patente = 'Divindade'
		}

        // Sistema do XP - Baseado no de Bocchi - Slavyan
        if (isGroupMsg && isxp && !isWin(user) && !isBlocked) {
            try {
                wait(user)
                const levelAtual = getLevel(user, nivel)
                const xpAtual = Math.floor(Math.random() * 30) + 11 // XP de 10 a 40
                const neededXp = 5 * Math.pow(levelAtual, 2) + 50 * levelAtual + 100
                addXp(user, xpAtual, nivel)
                if (neededXp <= getXp(user, nivel)) {
                    addLevel(user, 1, nivel)
                    const userLevel = getLevel(user, nivel)
                    const takeXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    await kill.reply(from, `*「 +1 NIVEL 」*\n\n➸ *Nome*: ${pushname}\n➸ *XP*: ${getXp(user, nivel)} / ${takeXp}\n➸ *Level*: ${levelAtual} -> ${getLevel(user, nivel)} 🆙 \n➸ *Patente*: *${patente}* 🎉`, id)
                }
            } catch (err) { console.log(color('[XP]', 'crimson'), err) }
        }
		
		// Anti Imagens pornograficas
		if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isAntiPorn && isMedia && isImage && !isCmd && !isOwner) {
			try {
				console.log(color('[IMAGEM]', 'red'), color('Verificando a imagem por pornografia...', 'yellow'))
				const mediaData = await decryptMedia(message, uaOverride)
				const getUrl = await upload(mediaData, false)
				deepai.setApiKey(config.deepai)
				const resp = await deepai.callStandardApi("nsfw-detector", { image: `${getUrl}` })
				if (resp.output.nsfw_score >= 0.70) {
					await kill.removeParticipant(groupId, user)
					console.log(color('[NSFW]', 'red'), color(`A imagem contém traços de contéudo adulto, removerei o → ${pushname} - [${user}]...`, 'yellow'))
				} else { console.log(color('[SEM NSFW]', 'lime'), color(`→ A imagem não aparententa ser pornografica.`, 'gold')) }
			} catch (error) { return }
		}
		
        // Auto-stickers de fotos
        if (isGroupMsg && autoSticker && isMedia && isImage && !isCmd) {
            const mediaData = await decryptMedia(message, uaOverride)
            await kill.sendImageAsSticker(from, `data:${mimetype};base64,${mediaData.toString('base64')}`, { author: config.author, pack: config.pack, keepScale: true })
        }
		
		// Auto-sticker de videos & gifs
		if (isGroupMsg && autoSticker && isMedia && isVideo && !isCmd) {
			console.log('auto stker v')
			const mediaData = await decryptMedia(message, uaOverride)
			console.log('enviando')
			await kill.sendMp4AsSticker(from, `data:${mimetype};base64,${mediaData.toString('base64')}`, null, { stickerMetadata: true, pack: config.pack, author: config.author, fps: 10, crop: true, loop: 0 })
		}

        // Anti links de grupo
		if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isAntiLink && !isOwner) {
			try {
				if (chats.match(new RegExp(/(https:\/\/chat.whatsapp.com)/gi))) {
					const gplka = await kill.inviteInfo(chats)
					if (gplka) {
						console.log(color('[BAN]', 'red'), color('Link de grupo detectado, removendo participante...', 'yellow'))
						await kill.sendTextWithMentions(from, mess.baninjusto(user) + 'WhatsApp Link.')
						await sleep(3000)
						await kill.removeParticipant(groupId, user)
					} else { console.log(color('[ALERTA]', 'yellow'), color('Link de grupo invalido recebido...', 'yellow')) }
				}
			} catch (error) { return }
		}

        // Anti links pornograficos
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isAntiPorn && !isOwner) {
			try {
				if (isUrl(chats)) {
					const inilkn = new URL(chats)
					console.log(color('[URL]', 'yellow'), 'URL recebida →', inilkn.hostname)
					isPorn(inilkn.hostname, async (err, status) => {
						if (err) return console.error(err)
						if (status) {
							console.log(color('[NSFW]', 'red'), color(`O link é pornografico, removerei o → ${pushname} - [${user.replace('@c.us', '')}]...`, 'yellow'))
							await kill.sendTextWithMentions(from, mess.baninjusto(user) + 'Porno/Porn.')
							await sleep(3000)
							await kill.removeParticipant(groupId, user)
						} else { console.log(color('[SEM NSFW]', 'lime'), color(`→ O link não possui pornografia.`, 'gold')) }
					})
				}
			} catch (error) { return }
		}
		
		// Impede travas ou textos que tenham mais de 5.000 linhas
		if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && !isOwner) {
			try {
				if (chats.length > 5000) {
					console.log(color('[TRAVA]', 'red'), color(`Possivel trava recebida pelo → ${pushname} - [${user.replace('@c.us', '')}] em ${name}...`, 'yellow'))
					await kill.sendTextWithMentions(from, mess.baninjusto(user) + 'Travas.')
					await sleep(3000)
					await kill.removeParticipant(groupId, user)
					await kill.contactBlock(user) // Caso sua bot não seja imune
				}
			} catch (error) { return }
		}
		
		// Bloqueia travas no PV que tenham mais de 5.000 linhas
		if (!isGroupMsg && !isOwner) {
			try {
				if (chats.length > 5000) {
					console.log(color('[TRAVA]', 'red'), color(`Possivel trava recebida pelo → ${pushname} - [${user.replace('@c.us', '')}]...`, 'yellow'))
					await kill.sendText(ownerNumber, mess.recTrava(user))
					await kill.contactBlock(user) // Caso sua bot não seja imune
				}
			} catch (error) { return }
		}
		
		// Ative para banir quem mandar todos os tipos de links (Ative removendo a /* e */)
		/*if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isAntiLink && !isOwner && isUrl(chats)) { await kill.removeParticipant(groupId, user) }*/
		
		// Comandos sem prefix, esse responde se marcar a BOT
		if (!isFiltered(from) && !isMedia && !isCmd) { try { if (chats.includes(`@${botNumber.replace('@c.us', '')}`)) { await kill.reply(from, chatBotR, id) } } catch (error) { return } }
		
		// Caso deseje criar siga o estilo disso abaixo, para usar a base remova a /* e a */
		/*if (!isFiltered(from) && !isCmd) { try { if (chats == 'Mensagem a receber') await kill.reply(from, 'Resposta para enviar', id) } catch (error) { return } }*/
		
		// Impede comandos em PV'S mutados
		if (!isGroupMsg && isCmd && pvmte && !isOwner ) return console.log(color('> [SILENCE]', 'red'), color(`Ignorando comando de ${pushname} - [${user.replace('@c.us', '')}] pois ele está mutado...`, 'yellow'))
		
		// Impede comandos em grupos mutados
		if (isGroupMsg && isCmd && !isGroupAdmins && mute && !isOwner) return console.log(color('> [SILENCE]', 'red'), color(`Ignorando comando de ${name} pois ele está mutado...`, 'yellow'))

		// Ignora pessoas bloqueadas
		if (isBlocked && isCmd && !isOwner) return console.log(color('> [BLOCK]', 'red'), color(`Ignorando comando de ${pushname} - [${user.replace('@c.us', '')}] por ele estar bloqueado...`, 'yellow'))

        // Anti Flood para PV'S
        if (isCmd && isFiltered(from) && !isGroupMsg && !isOwner) { return console.log(color('> [FLOOD AS]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`"[${prefix}${command.toUpperCase()}] [${args.length}]"`, 'red'), 'DE', color(`"${pushname} - [${user.replace('@c.us', '')}]"`, 'red')) }
		
		// Anti Flood para grupos
        if (isCmd && isFiltered(from) && isGroupMsg && !isOwner) { return console.log(color('> [FLOOD AS]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`"[${prefix}${command.toUpperCase()}] [${args.length}]"`, 'red'), 'DE', color(`"${pushname} - [${user.replace('@c.us', '')}]"`, 'red'), 'EM', color(`"${name || formattedTitle}"`)) }
		
		// Contador de Mensagens (em grupo)
        if (isGroupMsg) { getMsg(user, msgcount); addMsg(user, 1, msgcount) }
		
        // Mensagens no PV
        if (!isCmd && !isGroupMsg) { return console.log('> MENSAGEM AS', color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'DE', color(`"${pushname} - [${user.replace('@c.us', '')}]"`)) }
		
		// Mensagem em Grupo
        if (!isCmd && isGroupMsg) { return console.log('> MENSAGEM AS', color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'DE', color(`"${pushname} - [${user.replace('@c.us', '')}]"`), 'EM', color(`"${name || formattedTitle}"`)) }
		
		// Comandos no PV
		if (isCmd && !isGroupMsg) { console.log(color(`> COMANDO "[${prefix}${command.toUpperCase()}]"`), 'AS', color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'DE', color(`"${pushname} - [${user.replace('@c.us', '')}]"`)) }
		
		// Comandos em grupo
        if (isCmd && isGroupMsg) { console.log(color(`> COMANDO "[${prefix}${command.toUpperCase()}]"`), 'AS', color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'DE', color(`"${pushname} - [${user.replace('@c.us', '')}]"`), 'EM', color(`"${name || formattedTitle}"`)) }
		
        // Impede SPAM
        if (isCmd && !isOwner) addFilter(from)

        switch(command) {
			
        
			
			
		case 'math':
            if (args.length == 0) return kill.reply(from, mess.noargs() + 'número & simbolos matematicos/numbers & mathematical symbols.', id)
            const mtk = body.slice(6)
			try {
				if (typeof math.evaluate(mtk) !== "number") return kill.reply(from, mess.onlynumber() + '\nUse +, -, *, /', id)
				await kill.reply(from, `${mtk}\n\n*=*\n\n${math.evaluate(mtk)}`, id)
			} catch (error) {
				await kill.reply(from, mess.onlynumber() + '\n+, -, *, /', id)
				console.log(color('[MATH]', 'crimson'), color(`→ Obtive erros no comando ${prefix}${command} → ${error.message} - Você pode ignorar.`, 'gold'))
			}
			break
			
			
			
        case 'fake':
			if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner) {
				if (args.length !== 1) return kill.reply(from, mess.onoff(), id)
				if (args[0] == 'on') {
					faki.push(groupId)
					fs.writeFileSync('./lib/config/Grupos/fake.json', JSON.stringify(faki))
					await kill.reply(from, mess.enabled(), id)
				} else if (args[0] == 'off') {
					faki.splice(groupId, 1)
					fs.writeFileSync('./lib/config/Grupos/fake.json', JSON.stringify(faki))
					await kill.reply(from, mess.disabled(), id)
				} else return kill.reply(from, mess.kldica1(), id)
            } else return kill.reply(from, mess.soademiro(), id)
            break
			
			
			
			
		case 'onlyadms':
			if (!isGroupMsg) return kill.reply(from, mess.sogrupo(), id)
            if (!isGroupAdmins) return kill.reply(from, mess.soademiro(), id)
            if (!isBotGroupAdmins) return kill.reply(from, mess.botademira(), id)
			if (args.length !== 1) return kill.reply(from, mess.onoff(), id)
            if (args[0] == 'on') {
				await kill.setGroupToAdminsOnly(groupId, true).then(() => kill.sendText(from, mess.admson()))
			} else if (args[0] == 'off') {
				await kill.setGroupToAdminsOnly(groupId, false).then(() => kill.sendText(from, mess.admsoff()))
			} else return kill.reply(from, mess.kldica1(), id)
			break
			
		
			
			
		case 'revoke':
			if (!isGroupMsg) return kill.reply(from, mess.sogrupo(), id)
            if (!isGroupAdmins) return kill.reply(from, mess.soademiro(), id)
            if (!isBotGroupAdmins) return kill.reply(from, mess.botademira(), id)
			await kill.revokeGroupInviteLink(groupId).then(() => kill.reply(from, mess.revoga(), id))
			break
			
			
			
			
		case 'setimage':
			if (!isGroupMsg) return kill.reply(from, mess.sogrupo(), id)
            if (!isGroupAdmins) return kill.reply(from, mess.soademiro(), id)
            if (!isBotGroupAdmins) return kill.reply(from, mess.botademira(), id)
			if (isMedia && type == 'image' || isQuotedImage) {
				const dataMedia = isQuotedImage ? quotedMsg : message
				const mediaData = await decryptMedia(dataMedia, uaOverride)
				const picgp = await kill.getProfilePicFromServer(groupId)
				if (picgp == undefined) { var backup = errorurl } else { var backup = picgp }
				await kill.sendFileFromUrl(from, backup, 'group.png', 'Backup', id)
				await kill.setGroupIcon(groupId, `data:${mimetype};base64,${mediaData.toString('base64')}`)
			} else if (args.length == 1) {
				if (!isUrl(url)) { await kill.reply(from, mess.nolink(), id) }
				const picgpo = await kill.getProfilePicFromServer(groupId)
				if (picgpo == undefined) { var back = errorurl } else { var back = picgpo }
				await kill.sendFileFromUrl(from, back, 'group.png', 'Backup', id)
				await kill.setGroupIconByUrl(groupId, url).then((r) => (!r && r !== undefined)
				? kill.reply(from, mess.nolink(), id) : kill.reply(from, mess.maked(), id))
			} else return kill.reply(from, mess.onlyimg(), id)
			break
			
			

			
			
  

        case 'criador':
			await kill.reply(from, `🌙 - Dev: https://wa.me/5516993761686`, id)
            break
			

	
       case 'poll':
			if (!isGroupMsg) return kill.reply(from, mess.sogrupo(), id)
            poll.get(kill, message, pollfile, voterslistfile)
			.catch(() => { kill.reply(from, '0 votações abertas.', id) })
            break    
			
			
       case 'vote':
			if (!isGroupMsg) return kill.reply(from, mess.sogrupo(), id)
            poll.vote(kill, message, pollfile, voterslistfile)
			.catch(() => { kill.reply(from, '0 votações abertas.', id) })
            break
			
			
       case 'newpoll':
			if (!isGroupMsg) return kill.reply(from, mess.sogrupo(), id)
            poll.reset(kill, message, message.body.slice(9), pollfile, voterslistfile)
            break
			
			
       case 'ins':
			if (!isGroupMsg) return kill.reply(from, mess.sogrupo(), id)
            poll.add(kill, message, message.body.slice(5), pollfile, voterslistfile)
			.catch(() => { kill.reply(from, '0 votações abertas.', id) })
            break
			
			
  
			
        case 'welcome':
			if (!isGroupMsg) return kill.reply(from, mess.sogrupo(), id)
			if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner) {
				if (args.length !== 1) return kill.reply(from, mess.onoff(), id)
				if (args[0] == 'on') {
					welkom.push(groupId)
					fs.writeFileSync('./lib/config/Grupos/welcome.json', JSON.stringify(welkom))
					await kill.reply(from, mess.enabled(), id)
				} else if (args[0] == 'off') {
					welkom.splice(groupId, 1)
					fs.writeFileSync('./lib/config/Grupos/welcome.json', JSON.stringify(welkom))
					await kill.reply(from, mess.disabled(), id)
				} else return kill.reply(from, mess.kldica1(), id)
			} else if (isGroupMsg) {
				await kill.reply(from, mess.soademiro(), id)
			} else return kill.reply(from, mess.sogrupo(), id)
            break
			

			
			
        case 'profile':
            if (isGroupMsg) {
				if (mentionedJidList.length !== 0) menUser = await kill.getContact(mentionedJidList[0])
				var qmid = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? menUser.id : user)
				const peoXp = getXp(qmid, nivel)
				const myMsg = getMsg(qmid, msgcount)
				const peoLevel = getLevel(qmid, nivel)
				const ineedxp = 5 * Math.pow(peoLevel, 2) + 50 * peoLevel + 100
				var pic = await kill.getProfilePicFromServer(qmid)
				var namae = quotedMsg ? quotedMsgObj.sender.pushname : (mentionedJidList.length !== 0 ? menUser.pushname : pushname)
				var sts = await kill.getStatus(qmid)
				var adm = groupAdmins.includes(qmid) ? 'Sim' : 'Não'
				var muted = slce.includes(qmid) ? 'Sim' : 'Não'
				var blocked = blockNumber.includes(qmid) ? 'Sim' : 'Não'
				const { status } = sts
				if (pic == undefined) { var pfp = errorurl } else { var pfp = pic }
				await kill.sendFileFromUrl(from, pfp, 'pfo.jpg', mess.profile(namae, myMsg, adm, muted, blocked, status, peoLevel, peoXp, ineedxp, patente))
			} else return kill.reply(from, mess.sogrupo(), id)
			break
	
			
			

        case 'link':
            if (!isBotGroupAdmins) return kill.reply(from, mess.botademira(), id)
            if (isGroupMsg) {
                const inviteLink = await kill.getGroupInviteLink(groupId);
                await kill.sendLinkWithAutoPreview(from, inviteLink, `❤️ - ${name}`)
            } else return kill.reply(from, mess.sogrupo(), id)
            break
			
			
        case 'broad':
            if (!isOwner) return kill.reply(from, mess.sodono(), id)
			if (args.length == 0) return kill.reply(from, mess.broad(), id)
			const chatall = await kill.getAllChatIds()
			const isGroupC = await chatall.filter(group => group.includes('@g.us'))
			const isPrivateC = await chatall.filter(group => group.includes('@c.us'))
			try {
				const sendQFileC = async (quotedMsgObj, ids) => {
					let replyOnReply = await kill.getMessageById(quotedMsgObj.id)
					let obj = replyOnReply.quotedMsgObj
					if (/ptt|audio|video|image|document|sticker/.test(quotedMsgObj.type)) {
						if (quotedMsgObj.animated) quotedMsgObj.mimetype = ''
					} else if (obj && /ptt|audio|video|image/.test(obj.type)) { quotedMsgObj = obj } else return
					const mediaData = await decryptMedia(quotedMsgObj)
					await kill.sendFile(ids, `data:${quotedMsgObj.mimetype};base64,${mediaData.toString('base64')}`, '', `Enviado pelo Dono.`)
				}
				let msg = body.slice(12)
				if (args[0] == '-all') {
					for (let ids of chatall) {
						var cvk = await kill.getChatById(ids)
						if (!cvk.isReadOnly) {
							await kill.sendText(ids, `[Transmissão do dono da Íris]\n\n${msg}`)
							if (quotedMsgObj) { sendQFileC(quotedMsgObj, ids) }
						}
					}
					await kill.reply(from, mess.maked(), id)
				} else if (args[0] == '-gps') {
					for (let ids of isGroupC) {
						var cvk = await kill.getChatById(ids)
						if (!cvk.isReadOnly) {
							await kill.sendText(ids, `[Transmissão do dono da Íris]\n\n${msg}`)
							if (quotedMsgObj) { sendQFileC(quotedMsgObj, ids) }
						}
					}
					await kill.reply(from, mess.maked(), id)
				} else if (args[0] == '-pvs') {
					for (let ids of isPrivateC) {
						await kill.sendText(ids, `[Transmissão do dono da Íris]\n\n${msg}`)
						if (quotedMsgObj) { sendQFileC(quotedMsgObj, ids) }
					}
					await kill.reply(from, mess.maked(), id)
				} else return kill.reply(from, mess.broad(), id)
			} catch (error) {
				await kill.reply(from, mess.noctt(), id)
				console.log(color('[BROADCAST]', 'crimson'), color(`→ Obtive erros no comando ${prefix}${command} → ${error.message} - Você pode ignorar.`, 'gold'))
			}
            break
			
			
    

			
			
        case 'groupinfo':
			if (!isGroupMsg) return kill.reply(from, mess.sogrupo(), id)
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
            let admgp = ''
            for (let admon of groupAdmins) {
				var adminsls = await kill.getContact(admon)
				var getAdmsLst = adminsls.pushname
				if (getAdmsLst == null) getAdmsLst = 'wa.me/' + admon.replace(/@c.us/g, '')
				admgp += `➸ ${getAdmsLst}\n`
			}
			var donodeGp = await kill.getContact(chat.groupMetadata.owner)
			var gpOwner = (donodeGp.pushname == undefined) ? `wa.me/${chat.groupMetadata.owner.replace('@c.us', '')}` : donodeGp.pushname
            var welgrp = welkom.includes(groupId) ? 'Sim' : 'Não'
            var fakegp = faki.includes(groupId) ? 'Sim' : 'Não'
            var bklistgp = bklist.includes(groupId) ? 'Sim' : 'Não'
            var xpgp = xp.includes(groupId) ? 'Sim' : 'Não'
            var slcegp = slce.includes(groupId) ? 'Sim' : 'Não'
            var ngrp = nsfw_.includes(groupId) ? 'Sim' : 'Não'
            var autostk = atstk.includes(groupId) ? 'Sim' : 'Não'
            var atpngy = atporn.includes(groupId) ? 'Sim' : 'Não'
            var atlka = atlinks.includes(groupId) ? 'Sim' : 'Não'
            var grouppic = await kill.getProfilePicFromServer(groupId)
            if (grouppic == undefined) { var pfp = errorurl } else { var pfp = grouppic }
            await kill.sendFileFromUrl(from, pfp, 'group.png', mess.groupinfo(groupname, totalMem, welgrp, atpngy, atlka, xpgp, fakegp, bklistgp, slcegp, autostk, ngrp, desc, gpOwner, admgp), id)
			break
			
			
		case 'wame':
			if (quotedMsg) {
				await kill.reply(from, `📞 - https://wa.me/${quotedMsgObj.sender.id.replace('@c.us', '')} - ${quotedMsgObj.sender.id.replace('@c.us', '')}`, id)
			} else if (mentionedJidList.length !== 0) {
				var wame = ''
				for (let i = 0; i < mentionedJidList.length; i++) { wame += `\n📞 - https://wa.me/${mentionedJidList[i].replace('@c.us', '')} - @${mentionedJidList[i].replace('@c.us', '')}` }
				await kill.sendTextWithMentions(from, wame, id)
			} else return kill.reply(from, `📞 - https://wa.me/${user.replace('@c.us', '')} - ${user.replace('@c.us', '')}`, id)
			break
			
        case 'marcar':
			if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner) {
				let hehe = `═✪〘 🎸 LISTA DE CORNOS 🐂 〙✪═\n═✪〘 🖊️ ${body.slice(10)} 〙✪═\n\n`
				for (let i = 0; i < groupMembers.length; i++) { hehe += `- @${groupMembers[i].id.replace(/@c.us/g, '')}\n` }
				hehe += '\n═✪〘 ❤️ - 𝐀𝐒𝐓𝐀 𝐁𝐎𝐓 - 📢〙✪═'
				await sleep(2000)
				await kill.sendTextWithMentions(from, hehe)
			} else if (isGroupMsg) {
				await kill.reply(from, mess.soademiro(), id)
			} else return kill.reply(from, mess.sogrupo(), id)
            break
			
			
        case 'random':
			if (!isGroupMsg) return kill.reply(from, mess.sogrupo(), id)
            const randme = groupMembers[Math.floor(Math.random() * groupMembers.length)]
            await kill.sendTextWithMentions(from, `═✪〘 🎸 - 🐂 〙✪═ \n\n @${randme.id.replace(/@c.us/g, '')}\n\n═✪〘 👉 ${body.slice(8)} 〙✪═`)
            await sleep(2000)
            break
			
			
			
        case 'leave':
            if (!isOwner) return kill.reply(from, mess.sodono(), id)
            const allGroups = await kill.getAllGroups()
            for (let gclist of allGroups) {
                await kill.sendText(gclist.contact.id, mess.goodbye())
                await kill.leaveGroup(gclist.contact.id)
            }
            await kill.reply(from, mess.maked(), id)
            break
			
			
        case 'clear':
            if (!isOwner) return kill.reply(from, mess.sodono(), id)
            const allChatz = await kill.getAllChats()
            for (let dchat of allChatz) { await kill.clearChat(dchat.id) }
            await kill.reply(from, mess.maked(), id)
            break
			
			
	    case 'add':
            if (!isGroupMsg) return kill.reply(from, mess.sogrupo(), id)
            if (!isGroupAdmins) return kill.reply(from, mess.soademiro(), id)
            if (!isBotGroupAdmins) return kill.reply(from, mess.botademira(), id)
	        if (args.length !== 1) return kill.reply(from, mess.usenumber(), id)
            try {
                await kill.addParticipant(from,`${args[0]}@c.us`)
            } catch (error) { 
				await kill.reply(from, mess.addpessoa(), id)
				console.log(color('[ADICIONAR]', 'crimson'), color(`→ Obtive erros no comando ${prefix}${command} → ${error.message} - Você pode ignorar.`, 'gold'))
			}
            break
			
			


			

	
	
			

			
		case 'unban':		
		case 'unkick':
			if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner) {
				if (!isBotGroupAdmins) return kill.reply(from, mess.botademira(), id)
				if (!quotedMsg) return kill.reply(from, mess.nomark, id) 
				const unbanq = quotedMsgObj.sender.id
				await kill.sendTextWithMentions(from, mess.unban(unbanq))
				await kill.addParticipant(groupId, unbanq).catch(() => { kill.reply(from, mess.addpessoa(), id) })
			} else if (isGroupMsg) {
				await kill.reply(from, mess.soademiro(), id)
			} else return kill.reply(from, mess.sogrupo(), id)
            break
			
			
        case 'kick':
			if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner) {
				if (!isBotGroupAdmins) return kill.reply(from, mess.botademira(), id)
				if (quotedMsg) {
					const negquo = quotedMsgObj.sender.id
					if (ownerNumber.includes(negquo)) return kill.reply(from, mess.vip(), id)
					if (groupAdmins.includes(negquo)) return kill.reply(from, mess.removeradm(), id)
					await kill.sendTextWithMentions(from, mess.ban(negquo))
					await kill.removeParticipant(groupId, negquo)
				} else {
					if (mentionedJidList.length == 0) return kill.reply(from, mess.semmarcar(), id)
					await kill.sendTextWithMentions(from, mess.kick(mentionedJidList))
					for (let i = 0; i < mentionedJidList.length; i++) {
						if (ownerNumber.includes(mentionedJidList[i])) return kill.reply(from, mess.vip(), id)
						if (groupAdmins.includes(mentionedJidList[i])) return kill.reply(from, mess.removeradm(), id)
						await kill.removeParticipant(groupId, mentionedJidList[i])
					}
				}
			} else if (isGroupMsg) {
				await kill.reply(from, mess.soademiro(), id)
			} else return kill.reply(from, mess.sogrupo(), id)
            break
			
			
        case 'sair':
			if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner) {
				await kill.sendText(from, mess.goodbye()).then(() => kill.leaveGroup(groupId))
			} else if (isGroupMsg) {
				await kill.reply(from, mess.soademiro(), id)
			} else return kill.reply(from, mess.sogrupo(), id)
            break
			
			
    
			
			
        case 'ping':
			const rTime = (seconds) => {
				const pad = (s) => { return (s < 10 ? '0' : '') + s }
				var hours = Math.floor(seconds / (60*60)); var minutes = Math.floor(seconds % (60*60) / 60); var seconds = Math.floor(seconds % 60)
				return `${pad(hours)} horas | ${pad(minutes)} minutos | ${pad(seconds)} segundos - HH:MM:SS`
			}
			const osUptime = () => {
				var up_sec = os.uptime(); var up_min = up_sec / 60; var up_hour = up_min / 60; up_sec = Math.floor(up_sec); up_min = Math.floor(up_min); up_hour = Math.floor(up_hour); up_hour = up_hour % 60; up_min = up_min % 60; up_sec = up_sec % 60
				return `${up_hour} horas | ${up_min} minutos | ${up_sec} segundos - HH:MM:SS`
			}
			const ramMemory = () => {
				var allRam = os.totalmem(); var kbRam = allRam/1024; var mbRam = kbRam/1024; var gbRam = mbRam/1024; kbRam = Math.floor(kbRam); mbRam = Math.floor(mbRam); gbRam = Math.floor(gbRam); mbRam = mbRam%1024; kbRam = kbRam%1024; allRam = allRam%1024;
				return `${gbRam}GB | ${mbRam}MB | ${kbRam}KB | ${allRam} Bytes`
			}
			const timeBot = rTime(process.uptime())
            const loadedMsg = await kill.getAmountOfLoadedMessages()
            const chatIds = await kill.getAllChatIds()
            const groups = await kill.getAllGroups()
            await kill.sendText(from, mess.stats(timeBot, osUptime, ramMemory, os, loadedMsg, groups, chatIds, processTime, t, moment))
            break
			
			
        case 'join':
            if (args.length == 0) return kill.reply(from, mess.nolink(), id)
            const gplk = body.slice(6)
            const tGr = await kill.getAllGroups()
            const isLink = gplk.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await kill.inviteInfo(gplk)
			const memberlmt = check.size
            if (!isLink) return kill.reply(from, mess.nolink(), id)
            if (tGr.length > config.memberLimit) return kill.reply(from, mess.cheio(tGr), id)
            if (check.size < config.memberLimit) return kill.reply(from, mess.noreq(memberlmt), id)
            if (check.status == 200) {
                await kill.joinGroupViaLink(gplk).then(() => kill.reply(from, mess.maked()))
            } else return kill.reply(from, mess.fail(), id)
            break
			
			
        case 'delete':
        case 'del':
			if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner) {
				if (!quotedMsg) return kill.reply(from, mess.mymess(), id)
				if (!quotedMsgObj.fromMe) return kill.reply(from, mess.mymess(), id)
				await kill.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
			} else if (isGroupMsg) {
				if (!quotedMsgObj.fromMe) return kill.reply(from, mess.mymess(), id)
				await kill.reply(from, mess.soademiro(), id)
			} else return kill.reply(from, mess.sogrupo(), id)
            break
			
			
        case 'tela':
            if (!isOwner) return kill.reply(from, mess.sodono(), id)
            const sesPic = await kill.getSnapshot()
            await kill.sendFile(from, sesPic, 'session.png', 'Neh...', id)
            break
			
			
		
			
			
	
       
			
        case 'blocklist':
            if (!isOwner) return kill.reply(from, mess.sodono(), id)
            let hih = `🔐 - Block: ${blockNumber.length}\n\n`
            for (let i of blockNumber) { hih += `➸ @${i.replace(/@c.us/g,'')}\n` }
            await kill.sendTextWithMentions(from, hih)
            break
			
			
        case 'shutdown':
            if (!isOwner) return kill.reply(from, mess.sodono(), id)
			await kill.reply(from, mess.shutdown(), id)
		    await sleep(10000)
			await kill.kill()
            break
			
			
    
			
		case 'chance':
			if (args.length == 0) return kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
			await kill.reply(from, mess.botmonkey(body, lvpc), id)
			break
			
			

			
       
	
			
        case 'menu':
			const theMsg = getMsg(user, msgcount)
			const uzrXp = getXp(user, nivel)
			const uzrlvl = getLevel(user, nivel)
			const uneedxp = 5 * Math.pow(uzrlvl, 2) + 50 * uzrlvl + 100
			const mping = processTime(t, moment())
			await kill.sendText(from, mess.menu(pushname, time, theMsg, uzrXp, uneedxp, uzrlvl, mping, patente))
            break
			
	
			
			
        case 'admins':
			if (!isGroupMsg) return kill.reply(from, mess.sogrupo(), id)
            if (!isGroupAdmins && !isOwner) return kill.reply(from, mess.soademiro(), id)
            await kill.sendText(from, mess.admins(pushname, time))
            break
		

			
			
        case 'dono':
            if (!isOwner) return kill.reply(from, mess.sodono(), id)
            await kill.sendText(from, mess.owner(pushname, time))
            break
			
				
	case 'updates':
            await kill.sendText(from, mess.updates(pushname, time))
            break		
			
			
	
			
			
		case 'cmd':
			if (!isOwner) return kill.reply(from, mess.sodono(), id)
			await kill.reply(from, mess.cmd(), id)
			const cmdw = exec(`bash -c '${body.slice(5)}'`, async (error, stdout, stderr) => {
				if (error || stderr || stdout == null || stdout == '') {
					console.log(stderr)
					await kill.reply(from, error + '\n\n' + stderr, id)
				} else {
					console.log(stdout)
					await kill.reply(from, stdout, id)
				}
			})
			break
			
			
		
			
			
		
			
			
        case 'mute':
        case 'silence':
			if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner) {
				if (args.length !== 1) return kill.reply(from, mess.onoff(), id)
				if (args[0] == 'on') {
					slce.push(groupId)
					fs.writeFileSync('./lib/config/Bot/silence.json', JSON.stringify(slce))
					await kill.reply(from, mess.enabled(), id)
				} else if (args[0] == 'off') {
					slce.splice(groupId, 1)
					fs.writeFileSync('./lib/config/Bot/silence.json', JSON.stringify(slce))
					await kill.reply(from, mess.disabled(), id)
				} else return kill.reply(from, mess.kldica1(), id)
            } else return kill.reply(from, mess.soademiro(), id)
            break
			
			
		
			
        case 'mutepv':
			if (args.length == 0) return kill.reply(from, mess.kldica2(), id)
            if (isOwner) {
				if (args[0] == 'on') {
					const pvmt = body.slice(11) + '@c.us'
					slce.push(pvmt)
					fs.writeFileSync('./lib/config/Bot/silence.json', JSON.stringify(slce))
					await kill.reply(from, mess.enabled(), id)
				} else if (args[0] == 'off') {
					const pvmt = body.slice(11) + '@c.us'
					slce.splice(pvmt, 1)
					fs.writeFileSync('./lib/config/Bot/silence.json', JSON.stringify(slce))
					await kill.reply(from, mess.disabled(), id)
				} else return kill.reply(from, mess.kldica2(), id)
			} else return kill.reply(from, mess.sodono())
			break
			

			
			
		case 'unblock':
			if (isOwner) {
				if (isGroupMsg && quotedMsg) {
					const unblokea = quotedMsgObj.sender.id
					await kill.contactUnblock(`${unblokea}`)
					await kill.sendTextWithMentions(from, mess.unblock(unblokea))
				} else {
					const unblocknq = args[0]
					await kill.contactUnblock(`${args[0]}@c.us`)
					await kill.sendTextWithMentions(from, mess.unblock(unblocknq))
				}
			} else return kill.reply(from, mess.sodono(), id)
			break
			
			
		case 'block':
			if (isOwner) {
				if (isGroupMsg && quotedMsg) {
					const blokea = quotedMsgObj.sender.id
					await kill.contactBlock(`${blokea}`)
					await kill.sendTextWithMentions(from, mess.block(blokea))
				} else {
					const blocknq = args[0]
					await kill.contactBlock(`${args[0]}@c.us`)
					await kill.sendTextWithMentions(from, mess.block(blocknq))
				}
			} else return kill.reply(from, mess.sodono(), id)
			break
			
			
		
			
			
		case 'help':
			if (args.length == 0) return kill.reply(from, mess.noargs() + 'motivo/razon/reason.', id)
			const hpgp = isGroupMsg ? groupId.replace('@g.us', '') : user.replace('@c.us', '')
			const nopvne = isGroupMsg ? name : pushname
			const isgorp = isGroupMsg ? '-gp' : '-pv'
			await kill.sendText(ownerNumber, mess.advise(nopvne, isgorp, user, body, hpgp))
			await kill.reply(from, mess.thanks(), id)
			break
			
	
			
			
   
			
		// Por Leonardo, updates KillovSky
		case 'softban':
			try {
				if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner) {
					if (!isBotGroupAdmins) return kill.reply(from, mess.botademira(), id)
					if (quotedMsg) {
						if (args.length == 0 || isNaN(args[0])) return kill.reply(from, mess.nomark() + ' + time/tempo (minutos/minutes)\n(Ex: 30)', id)
						const aatimep = Number(args[0]) * 60000
						const timeaddmsg = Number(aatimep) + 10000
						const bgmcomum = quotedMsgObj.sender.id
						await kill.sendTextWithMentions(from, mess.irritouqm(bgmcomum, args))
						await sleep(3000)
						await kill.removeParticipant(groupId, bgmcomum)
						setTimeout(() => {
							kill.reply(from, mess.timeadd(), id)
							kill.addParticipant(groupId, bgmcomum)
						}, aatimep)
						await sleep(timeaddmsg)
						await kill.sendText(from, mess.voltargp())
					} else {
						if (args.length == 0 || isNaN(args[1]) || mentionedJidList.length == 0) return kill.reply(from, mess.semmarcar() + '\n\n@user time/tempo (minutos/minutes)\n(Ex: @user 30)', id)
						const aatimep = Number(args[1]) * 60000
						const timeaddmsg = Number(aatimep) + 10000
						await kill.sendTextWithMentions(from, mess.irritouml(mentionedJidList, args))
						await sleep(3000)
						for (let i = 0; i < mentionedJidList.length; i++) {
							if (ownerNumber.includes(mentionedJidList[i])) return kill.reply(from, mess.vip(), id)
							if (groupAdmins.includes(mentionedJidList[i])) return kill.reply(from, mess.vip(), id)
							await kill.removeParticipant(groupId, mentionedJidList[i])
							setTimeout(() => {
								kill.reply(from, mess.timeadd(), id)
								kill.addParticipant(groupId, mentionedJidList[i])
							}, aatimep)
							await sleep(timeaddmsg)
						}
						await kill.sendText(from, mess.voltargp())
					}
				} else if (isGroupMsg) {
					await kill.reply(from, mess.soademiro(), id)
				} else return kill.reply(from, mess.sogrupo(), id)
            } catch (error) { 
				await kill.reply(from, mess.addpessoa(), id)
				console.log(color('[SOFTBAN]', 'crimson'), color(`→ Obtive erros no comando ${prefix}${command} → ${error.message} - Você pode ignorar.`, 'gold'))
			}
            break
			
			
	
			
		case 'botnome':
			if (!isOwner) return kill.reply(from, mess.sodono(), id)
			if (args.length == 0) return kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
			const newname = body.slice(6)
			if (newname.length >= 25) return kill.reply(from, mess.letlimit() + '25.', id)
			await kill.setMyName(newname)
			await kill.reply(from, mess.maked(), id)
			break
			
			
		case 'recado':
			if (!isOwner) return kill.reply(from, mess.sodono(), id)
			if (args.length == 0) return kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
			const newstat = body.slice(8)
			if (newstat.length >= 250) return kill.reply(from, mess.letlimit() + '250.', id)
			await kill.setMyStatus(newstat)
			await kill.reply(from, mess.maked(), id)
			break
			
			
		case 'botfoto':
			if (isMedia && type == 'image' || isQuotedImage) {
				if (!isOwner) return kill.reply(from, mess.sodono(), id)
				const dataMedia = isQuotedImage ? quotedMsg : message
				const mediaData = await decryptMedia(dataMedia, uaOverride)
				const bkmypic = await kill.getProfilePicFromServer(botNumber)
				if (bkmypic == undefined) { var backpt = errorurl } else { var backpt = bkmypic }
				await kill.sendFileFromUrl(from, backpt, '', 'Backup', id)
				await kill.setProfilePic(mediaData)
				await kill.reply(from, mess.maked(), id)
			} else return kill.reply(from, mess.onlyimg(), id)
			break
			
			
		case 'alarme':
			if (args.length == 0 || isNaN(args[0]) || !arks.includes('|')) return kill.reply(from, mess.timealarm() + '\n\n' + mess.argsbar() + 'use 1 "|".', id)
			const timetorem = Number(arg.split('|')[0]) * 60000
            const alarmname = arg.split('|')[1]
			await kill.reply(from, mess.alarmact(args), id)
			setTimeout(() => { kill.reply(from, `⏰ - ${alarmname}!`, id) }, timetorem)
			break
			
				
		case 'exec':
			if (args.length == 0) return kill.reply(from, mess.noargs() + `Wa Automate function/função da Wa Automate.\n\nEx: ${prefix}exec await kill.reply(from, 'Oi', id)`, id)
			if (!isOwner) return kill.reply(from, mess.sodono(), id)
			try {
				const waitEval = (cmd) => { return new Promise((resolve, reject) => { eval(cmd) }) }
				(async () => { await waitEval(body.slice(6).replace('await ', '')) })()
			} catch (error) {
				await kill.reply(from, mess.fail(), id)
				console.log(color('[EXEC]', 'crimson'), color(`→ Obtive erros no comando ${prefix}${command} → ${error.message} - Você pode ignorar.`, 'gold'))
			}
			break
			


			
		case 'diamante':
		case 'diamantes':
		case 'dima':
			await kill.sendText(from, mess.diamante(pushname, time))
			break
		
		case 'referencia':
		case 'referencias':			
		case 'ref':
			await kill.sendText(from, mess.referencia(pushname, time))
			break
		
		case 'faq':
			await kill.sendText(from, mess.faq(pushname, time))
			break
			
		case 'outros':
			await kill.sendText(from, mess.outros(pushname, time))
			break			
			
		/** INSTA **/
		case 'seguidoresmundi':
			await kill.sendText(from, mess.seguidoresmundi(pushname, time))
			break	
			
		case 'seguidoresbr':
			await kill.sendText(from, mess.seguidoresbr(pushname, time))
			break
		
		case 'reels':
			await kill.sendText(from, mess.faq(pushname, time))
			break
			
		case 'reelslike':
			await kill.sendText(from, mess.reelslike(pushname, time))
			break
			
		case 'curtida':
			await kill.sendText(from, mess.curtida(pushname, time))
			break
			
		case 'storys':
			await kill.sendText(from, mess.storys(pushname, time))
			break
		/** INSTA **/
			
		/** Tiktok **/
		case 'segtitok':
			await kill.sendText(from, mess.tiktok1(pushname, time))
			break
			
		case 'liketitok':
			await kill.sendText(from, mess.tiktok2(pushname, time))
			break
			
			
			
			
        default:
            if (isCmd) { await kill.reply(from, mess.nocmd(command), id) }
            break
			
			
        }
    } catch (err) {
		//await kill.sendText(ownerNumber, mess.wpprpt(command, err))
		await kill.reply(from, mess.fail(), id)
        console.log(color('[FALHA GERAL]', 'red'), err)
    }
}
