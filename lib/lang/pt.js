/* Autor, tradutor, revisador, programador e suporte: Lucas R. - KillovSky
* Beta Testers: Pedro, Tio das Trevas, Jon & Lucas R.
* Edite onde quiser, exceto nos créditos por gentiliza.
* Agradeço desde já, e se planeja remover, leia a "exports.tos" e tenha em mente que passei varias noites em claro e até doente pra terminar isso e trazer um excelente programa de graça.
*/

// Configurações
const config = require('../config/Bot/config.json')
const prefix = config.prefix

// Inicio
exports.updates = (pushname, time) => { return `

➣ Olá *${pushname}*, aqui está as últimas *Atualizações*!

	Data: *${time}*

╔════════════════╗
║
║   *→ ${prefix}help (mensagem)*
║   	ᐳ Em caso de dúvidas.
║
║    ❗ Prefixo: 「 ! 」
║ 
╠══〘 𝐀𝐓𝐔𝐀𝐋𝐈𝐙𝐀𝐂𝐎𝐄𝐒 〙 
║ 
║
║ _Sem atualizações no momento_
║
║
╠══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙` }

exports.wait = () => { return `❬❗❭ Aguarde por favor!` }

exports.antitrava = (user) => { return `❬❗❭ Caso isso não seja uma trava, peço que contate meus administradores caro @${user}.` }

exports.kickcount = () => { return `❬❗❭ Para que você use, adicione uma quantidade minima de mensagens que as pessoas devem ter na frente do comando.` }

exports.removeradm = () => { return `❬❗❭ Para evitar problemas mais sérios, remova o ademiro deles antes.` }

exports.addpessoa = () => { return `❬❗❭ Falhei, sera que ele proibe de ser adicionado em grupos? Acho que provavelmente pode ser por que ela não faz parte dos meus contatos.` }

exports.sodono = () => { return `❬❗❭ Apenas meu querido dono pode ter acesso a esses comandos.` }

exports.gpowner = () => { return `❬❗❭ Apenas o dono do grupo pode ter acesso a esse comando.` }

exports.soademiro = () => { return `❬❗❭ Você não é um dos ademiros, será que você se tornará digno de usar isso?` }

exports.sogrupo = () => { return `❬❗❭ Foi mal amiguinho, mas somente um grupo tem direito de usar isso, entre em um chamando meu dono ${prefix}criador.` }

exports.botademira = () => { return `❬❗❭ Só posso fazer esse comando se você me deixar ser um ademiro!` }

exports.noargs = () => { return `❬❗❭ Esse comando precisa de algo para funcionar, para que funcione insira um ` }

exports.serveroff = () => { return `❬❗❭ Hmm, acho que o servidor pode ter caido ou o arquivo é pesado demais pra enviar :(` }

exports.nolink = () => { return `❬❗❭ Uuu, mesmo sem meus oculos eu consigo ver que isso não é um link usavél para este comando.` }

exports.entrace = () => { return `❬❗❭ Foi mal meu amigo, mas você acaba de ser barrado pela gerente do estabelecimento 😎` }

exports.nofake = (event) => { return `Olá @${event.who.replace('@c.us', '')}, como parte do nosso sistema de segurança, números de fora do Brasil são banidos, se você não for alguém mal e quiser estar no grupo pacificamente, por favor contate os administradores 😉.\n\nHello @${event.who.replace('@c.us', '')}, as part of our security system, numbers outside Brazil are banned, if you are not someone bad and want to be in the group peacefully, please contact the administrators 😉.\n\nHalo @${event.who.replace('@c.us', '')}, sebagai bagian dari sistem keamanan kami, nomor di luar Brasil dilarang, jika Anda bukan orang jahat dan ingin berada di grup dengan damai, silakan hubungi administrator 😉.\n\nHola @${event.who.replace('@c.us', '')}, como parte de nuestro sistema de seguridad, los números fuera de Brasil están prohibidos, si no eres alguien malo y quieres estar en el grupo pacíficamente, por favor contacte a los administradores 😉.` }

exports.welcome = (pushname, name) => { return `Olá ${pushname}! 🥰 \n\nSeja bem vindo ao ${name} 😎 \n\nDesejamos que se divirta e obviamente que siga nossas regras! ✅ \n\nCaso precise, chame um Administrador ou digite ${prefix}menu. 👨🏻‍💻` }

exports.bye = (pushname) => { return `Adeus ${pushname}, você foi ou seria um excelente ~Gado Top de Linha~ amigo(a) e membro.` }

exports.novogrupo = () => { return `Oi! 🌟\nFui requisitado como BOT para esse grupo, e estarei a disposição de vocês! 🤖\nSe quiserem ver minhas funcões usem ${prefix}menu!` }

exports.noreq = (totalMem) => { return `Um novo grupo, Eba! 😃\nUma pena que vocês não tem o requisito, que é ter pelo menos ${config.memberLimit} membros. Você possui ${totalMem}, junte mais pessoas! 😉` }

exports.cheio = (lmtgru) => { return `❬❗❭ Desculpe, estamos no máximo de grupos!\nAtualmente estamos em ${lmtgru.length}/${config.gpLimit}` }

exports.blockcalls = () => { return `❬❗❭ Que pena! Chamadas não são suportadas e atrapalham muito! 😊\nTe bloqueei para evitar novas, contate o dono wa.me/${config.owner.replace('@c.us', '')} para efetuar o desbloqueio. 👋` }

exports.wasted = () => { return `Alguém viu essa pessoa? Ela está sendo procurada.` }

exports.nobgms = () => { return `❬❗❭ Como isso possui um uso mensal limitado, evite usar esse comando quando puder e use mais o comando ${prefix}sticker.` }

exports.fail = () => { return `⚠️ _Ops, por algum motivo obtive erros com esse comando, por favor evite usa-lo novamente e se possível contate os responsáveis com o comando ${prefix}help._` }

exports.onlyimg = () => { return `❬❗❭ Comandos desse tipo somente podem ser usados com imagens, outros tipos podem ser problematicos.` }

exports.onlyvgif = () => { return `❬❗❭ Use apenas com videos ou gifs, se quiser usar em fotos use o ${prefix}sticker.` }

exports.tempimg = (upImg) => { return `❬❗❭ *OBS!* _Não use esse comando com fotos pessoais, aqui está sua imagem em nuvem._\n\n${upImg}` }

exports.idgrupo = (groupId) => { return `❬❗❭ A id daqui é ${groupId}.` }

exports.onoff = () => { return `❬❗❭ Especifique entre <on> ou <off>.` }

exports.enabled = () => { return `❬❗❭ A função foi ativada, mas cuidado, se você usar muitas vezes, precisará desligar na mesma quantidade e.e` }

exports.disabled = () => { return `❬❗❭ Desativei a função, se você usou muitas vezes o ativar pode ser conveniente desativar na mesma quantidade, para saber se está desativado digite ${prefix}groupinfo.` }

exports.bkliston = () => { return `❬❗❭ Adicionei ela na blacklist e ela não pode voltar, se tentar tomará banimento ao entrar.` }

exports.bklistoff = () => { return `❬❗❭ Agora ela foi removida da lista negra e pode voltar, mas se foi banida, somente um administrador pode adicionar.` }

exports.admson = () => { return `❬❗❭ Os administradores tem total poder agora :O` }

exports.admsoff = () => { return `❬❗❭ Os membros comuns dominam! 😎` }

exports.kldica1 = () => { return `❬❗❭ Isso precisa de apenas <on> ou <off>.` }

exports.kldica2 = () => { return `❬❗❭ Isso precisa ser definido em ativado <on> ou desativado <off> e em seguida deve contar o número de telefone sem + or -.` }

exports.sopv = () => { return `❬❗❭ Isso somente pode ser usado em privados, vá no meu para utilizar.` }

exports.revoga = () => { return `❬❗❭ Link revogado, se precisar de um novo use o comando ${prefix}link.` }

exports.logomgs = () => { return `❬❗❭ Uma obra de arte muito bem feita.` }

exports.maked = () => { return `❬❗❭ Prontinho, fiz o que você pediu, não esqueça de me pagar!` }

exports.onlyst = () => { return `❬❗❭ Isso á para stickers, se tentar usar em fotos ou algo do tipo não funcionará.` }

exports.maked = () => { return `❬❗❭ Prontinho, fiz o que você pediu, não esqueça de me pagar!` }

exports.diary = () => { return `❬❗❭ Um otimo diario de fato, me lembra de quando eu escrevia a mesma coisa...não pera...` }

exports.noresult = () => { return `💔️ - Sinto muito, não encontrei resultados para o comando...` }

exports.insta = (ig) => { return `✪ Username: ${ig.data.graphql.user.username}\n\n✪ Biografia: ${ig.data.graphql.user.biography}\n\n✪ Seguidores: ${ig.data.graphql.user.edge_followed_by.count}\n\n✪ Seguindo: ${ig.data.graphql.user.edge_follow.count}\n\n✪ Verificada: ${ig.data.graphql.user.is_verified}` }

exports.play = (ytres) => { return `*Titulo >* ${ytres.all[0].title}\n\n*Descrição >* ${ytres.all[0].description}\n\n*Link >* https://youtu.be/${ytres.all[0].videoId}\n\n*Duração >*  ${ytres.all[0].timestamp} minutos\n\n*Feito a >* ${ytres.all[0].ago}\n\n*Visualizações >* ${ytres.all[0].views}\n\n*Autor >* ${ytres.all[0].author.name}\n\n*Canal >* ${ytres.all[0].author.url}` }

exports.verybig = (asize) => { return `❬❗❭ Pelo visto essa midia é pesada demais, ela tem ${asize.data.filesize} e nosso limite é de 16 MB por questões de segurança.` }

exports.gblock = () => { return `❬❗❭ Recebi algum erro nisso, talvez a google possa estar intervindo, tente depois.` }

exports.sporn = (xxxSearch, sPornX) => { return `Titulo → ${sPornX.title}\n\nCanal → ${sPornX.channel.name}\n${sPornX.channel.url}\nInscritos → ${sPornX.channel.subscribers}\n\nLikes → ${sPornX.ratings.likes}\n\nDislikes → ${sPornX.ratings.dislikes}\n\nID → ${xxxSearch.videos[0].id}\n\nViews → ${sPornX.views}\n\nComentarios → ${sPornX.comments}\n\nDuração → ${xxxSearch.videos[0].duration}\n\nLink → ${sPornX.url}` }

exports.akiresp = () => { return `❬❗❭ Para jogar akinator, responda com 0 ou 1, na qual 0 é "Sim" e 1 é "Não".` }

exports.akiwon = (aki, akiwon) => { return `✪ Palpite: ${akiwon.name}\n\n✪ De: ${akiwon.description}\n\n✪ Ranking: ${akiwon.ranking}\n\n✪ Pseudo-Nome: ${akiwon.pseudo}\n\n✪ Quantidade de Palpites: ${aki.guessCount}\n\nSe não for essa continue jogando para bater a quantidade de tentativas!` }

exports.akifail = () => { return `❬❗❭ Puts! A sessão de jogo fechou, vou tentar abrir uma nova, se não funcionar sugiro contatar o dono para que ele me reinicie em ${prefix}help <Detalhes>.` }

exports.akistart = (aki) => { return `❬❗❭ Questão: ${aki.question}\n\nProgresso: ${aki.progress}\n\nResponda com ${prefix}akinator -r [0 ou 1], na qual 0 é "Sim" e 1 é "Não".` }

exports.gaming = (xp) => { return `❬❗❭ Para apostar nesse comando você deve ter ao menos 1000 XP, especificar no que deseja apostar e também o valor da sua aposta (máximo de 500) em números, boa sorte.\nSeu XP → ${xp}` }

exports.limitgame = () => { return ` Sate, sate, sate, você já jogou demais hoje, evite virar um apostador compulsivo, espere 30 minutos.` }

exports.loseshot = (nrolxp) => { return `❬ Você não sobreviveu a isso, perdendo ${nrolxp} XP, F.` }

exports.winshot = (prolxp) => { return `❬ Parabéns, você sobreviveu e ganhou ${prolxp} XP!` }

exports.flipwin = (pflipxp) => { return ` Um apostador de sucesso! Ganhaste ${pflipxp} XP ao apostar em →` }

exports.fliplose = (pflipxp) => { return ` Um dia de azar! Você perdeu ${pflipxp} XP ao apostar em →` }

exports.fliphow = () => { return `❬❗❭ Nesse jogo você deve especificar entre cara e coroa e em seguida o valor de sua aposta.` }

exports.caswin = (cassin1, cassin2, cassin3, pcasxp) => { return `Ganhou, Ganhou, Ganhou! A resposta do cassino foi de...\n\n ${cassin1} - ${cassin2} - ${cassin3}\n\nVocê ganhou ${pcasxp} XP!` }

exports.caslose = (cassin1, cassin2, cassin3, ncasxp) => { return `Que pena! Não foi dessa vez, você recebeu um...\n\n ${cassin1} - ${cassin2} - ${cassin3}\n\nVocê perdeu ${ncasxp} XP!` }

// PROIBIDO A REMOÇÃO DESSA PARTE!
exports.tos = () => { return `` }
// NÃO REMOVA A FUNÇÃO ACIMA!

exports.nocand = () => { return `❌️ - éeee, não dá pra fazer uma votação sem candidatos certo? Adicione alguns com ${prefix}ins <Nome>.` }

exports.addcand = (candi) => { return `✅ - ${candi} agora é um candidato da lista!` }

exports.maxcand = () => { return `❌️ - Desculpe, batemos a quantidade maxima de candidatos, não pode passar de 10.` }

exports.howvote = () => { return `❓ - Se quiser votar, digite *${prefix}vote <número do candidato>*, exemplo → *${prefix}vote 1*.` }

exports.startvote = (polltitle) => { return `✓️ - Iniciada a votação para "${polltitle}"\n\n ❤ - Adicione os participantes com "${prefix}ins <Nome>".\n\n🤫 - Vote com "${prefix}Vote <número do candidato>".` }

exports.wttr = (clima) => { return `A foto acima contém uma previsão de 2 dias, a mensagem abaixo é o clima agora.\n\n${clima.data}` }

exports.modroid = (modo) => { return `• *Titulo* : ${modo.title}\n\n• *Quem criou* : ${modo.publisher}\n\n• *Peso* : ${modo.size}\n\n• *MOD* : ${modo.mod_info}\n\n• *Versão* : ${modo.latest_version}\n\n• *Gênero* : ${modo.genre}\n\n• *Link* : ${modo.link}\n\n• *Download* : ${modo.download}` }

exports.getanime = (syno, getAnime) => { return `✔️ - Era esse aqui?\n\n✨️ *Titulo:* ${getAnime.data.results[0].title}\n\n🎆️ *Episodios:* ${getAnime.data.results[0].episodes}\n\n💌️ *Classificação:* ${getAnime.data.results[0].rated}\n\n❤️ *Nota:* ${getAnime.data.results[0].score}\n\n💚️ *Sinopse:* ${syno}\n\n🌐️ *Link*: ${getAnime.data.results[0].url}` }

exports.getmanga = (syno, getManga) => { return `✔️ - Era esse aqui?\n\n✨️ *Titulo:* ${getManga.data.results[0].title}\n\n🎆️ *Capitulos:* ${getManga.data.results[0].chapters}\n\n💌️ *Volumes:* ${getManga.data.results[0].volumes}\n\n❤️ *Nota:* ${getManga.data.results[0].score}\n\n💚️ *Sinopse:* ${syno}\n\n🌐️ *Link*: ${getManga.data.results[0].url}` }

exports.nhentai = (title, parodies, tags, artists, groups, languages, categories, link) => { return `*Titulo* : ${title}\n\n*Parodia de* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artistas* : ${artists.join(', ')}\n\n*Grupos* : ${groups.join(', ')}\n\n*Linguagens* : ${languages.join(', ')}\n\n*Categoria* : ${categories}\n\n*Link* : ${link}\n\nAguarde, estou enviando o hentai, pode demorar varios minutos dependendo da quantidade de paginas.` }

exports.profile = (namae, myMsg, adm, muted, blocked, status, peoLevel, peoXp, ineedxp, patente) => { return `*Dados do seu perfil..* ✨️ \n\n 🔖️ *Qual sua Usertag? ${namae}*\n\n⏱️ *Mensagens*? ${myMsg}\n\n👑️ *Administrador? ${adm}*\n\n🔇 *Mutado? ${blocked}*\n\n🔐 *Bloqueado? ${blocked}*\n\n💌️ *Frase do recado?*\n${status}\n\n️📈 *Level: ${peoLevel}*\n\n🕹️ *XP: ${peoXp} / ${ineedxp}*\n\n🌐 *Patente: ${patente}*` }

exports.tenargs = () => { return `❬❗❭ Você só pode usar com no maximo 10 palavras.` }

exports.brainlyres = (res) => { return `❓ → Questão: ${res.data[0].pertanyaan}\n\n✔️ → *Resposta* : ${res.data[0].jawaban[0].text}` }

exports.store = (stsp, playst) => { return `*Nome >* ${stsp.name}\n\n*Link >* ${stsp.url}\n\n*Preço >* ${stsp.price}\n\n*Descrição >* ${playst}\n\n*Nota >* ${stsp.rating}/5\n\n*Desenvolvedora >* ${stsp.developer.name}\n\n*Outros>* ${stsp.developer.url}` }

exports.coins = () => { return `╭───「 💵 Moedas 💸 」 \n│\n│ 💰 AUD → Australian dollar\n│\n│ 💰 CAD → Canadian dollar\n│\n│ 💰 CHF → Swiss franc\n│\n│ 💰 CLP → Chilean peso\n│\n│ 💰 CNY → Chinese yuan\n│\n│ 💰 CZK → Czech koruna\n│\n│ 💰 DKK → Danish krone\n│\n│ 💰 EUR → Euro\n│\n│ 💰 GBP → Pound sterling\n│\n│ 💰 HKD → Hong Kong dollar\n│\n│ 💰 HUF → Hungarian forint\n│\n│ 💰 IDR → Indonesian rupiah\n│\n│ 💰 ILS → Israeli shekel\n│\n│ 💰 INR → Indian rupee\n│\n│ 💰 JPY → Japanese yen\n│\n│ 💰 KRW → South Korean won\n│\n│ 💰 MXN → Mexican peso\n│\n│ 💰 MYR → Malaysian ringgit\n│\n│ 💰 NOK → Norwegian krone\n│\n│ 💰 NZD → New Zealand dollar\n│\n│ 💰 PHP → Philippine peso\n│\n│ 💰 PKR → Pakistani rupee\n│\n│ 💰 PLN → Polish zloty\n│\n│ 💰 RUB → Russian ruble\n│\n│ 💰 SEK → Swedish krona\n│\n│ 💰 SGD → Singapore dollar\n│\n│ 💰 THB → Thai baht\n│\n│ 💰 TRY → Turkish lira\n│\n│ 💰 TWD → New Taiwan dollar\n│\n│\n│\n│ 💰 Moedas Digitais:\n│\n│ 💰\n│\n│ 💰 BTC → Bitcoin\n│\n│ 💰 XMR → Monero\n│\n│ 💰 1337 → 1337\n│\n│ 💰 1ST → FirstBlood\n│\n│ 💰 2GIVE → 2GIVE\n│\n│ 💰 300 → 300 Token\n│\n│ 💰 42 → 42-coin\n│\n│ 💰 611 → SixEleven\n│\n│ 💰 808 → 808Coin\n│\n│ 💰 888 → OctoCoin\n│\n│ 💰 8BIT → 8Bit\n│\n│ 💰 ABJ → Abjcoin\n│\n│ 💰 ABN → Abncoin\n│\n│ 💰 ABY → ArtByte\n│\n│ 💰 AC → AsiaCoin\n│\n│ 💰 ACC → Accelerator Network\n│\n│ 💰 ACC → AdCoin\n│\n│ 💰 ACOIN → Acoin\n│\n│ 💰 ACP → AnarchistsPrime\n│\n│ 💰 ACT → Achain\n│\n│ 💰 ADA → Cardano\n│\n│ 💰 ADC → AudioCoin\n│\n│ 💰 ADL → Adelphoi\n│\n│ 💰 ADST → AdShares\n│\n│ 💰 ADT → adToken\n│\n│ 💰 ADX → AdEx\n│\n│ 💰 ADZ → Adzcoin\n│\n│ 💰 AE → Aeternity\n│\n│ 💰 AEON → Aeon\n│\n│ 💰 AERM → Aerium\n│\n│ 💰 AGRS → Agoras Tokens\n│\n│ 💰 AHT → Bowhead\n│\n│ 💰 AIB → Advanced Internet Blocks\n│\n│ 💰 AION → Aion\n│\n│ 💰 AIR → AirToken\n│\n│ 💰 ALIS → ALIS\n│\n│ 💰 ALL → Allion\n│\n│ 💰 ALQO → ALQO\n│\n│ 💰 ALT → Altcoin\n│\n│ 💰 ALTCOM AltCommunity Coin\n│\n│ 💰 AMB → Ambrosus\n│\n│ 💰 AMMO → Ammo Reloaded\n│\n│ 💰 AMP → Synereo\n│\n│ 💰 AMS → AmsterdamCoin\n│\n│ 💰 ANC → Anoncoin\n│\n│ 💰 ANT → Aragon\n│\n│ 💰 ANTI → AntiBitcoin\n│\n│ 💰 APPC → AppCoins\n│\n│ 💰 APW → AppleCoin\n│\n│ 💰 APX → APX\n│\n│ 💰 ARC → ArcticCoin\n│\n│ 💰 ARCO → AquariusCoin\n│\n│ 💰 ARDR → Ardor\n│\n│ 💰 ARG → Argentum\n│\n│ 💰 ARGUS → Argus\n│\n│ 💰 ARI → Aricoin\n│\n│ 💰 ARK → Ark\n│\n│ 💰 ARN → Aeron\n│\n│ 💰 ART → Maecenas\n│\n│ 💰 ASAFE2 AllSafe\n│\n│ 💰 AST → AirSwap\n│\n│ 💰 ASTRO → Astro\n│\n│ 💰 ATB → ATBCoin\n│\n│ 💰 ATL → ATLANT\n│\n│ 💰 ATM → ATMChain\n│\n│ 💰 ATMS → Atmos\n│\n│ 💰 ATOM → Atomic Coin\n│\n│ 💰 ATS → Authorship\n│\n│ 💰 ATX → Artex Coin\n│\n│ 💰 AU → → AurumCoin\n│\n│ 💰 AUR → Auroracoin\n│\n│ 💰 AVT → Aventus\n│\n│ 💰 B2B → B2B\n│\n│ 💰 BAS → BitAsean\n│\n│ 💰 BASH → LuckChain\n│\n│ 💰 BAT → Basic Attention Token\n│\n│ 💰 BAY → BitBay\n│\n│ 💰 BBP → BiblePay\n│\n│ 💰 BBR → Boolberry\n│\n│ 💰 BBT → BitBoost\n│\n│ 💰 BCAP → BCAP\n│\n│ 💰 BCC → BitConnect\n│\n│ 💰 BCF → Bitcoin Fast\n│\n│ 💰 BCH → Bitcoin Cash\n│\n│ 💰 BCN → Bytecoin\n│\n│ 💰 BCO → BridgeCoin\n│\n│ 💰 BCPT → BlockMason Credit Protocol\n│\n│ 💰 BCY → Bitcrystals\n│\n│ 💰 BDL → Bitdeal\n│\n│ 💰 BELA → Bela\n│\n│ 💰 BENJI → BenjiRolls\n│\n│ 💰 BERN → BERNcash\n│\n│ 💰 BET → DAO.Casino\n│\n│ 💰 BIGUP → BigUp\n│\n│ 💰 BIOB → BioBar\n│\n│ 💰 BIP → BipCoin\n│\n│ 💰 BIS → Bismuth\n│\n│ 💰 BITB → Bean Cash\n│\n│ 💰 BITBTC → bitBTC\n│\n│ 💰 BITCNY → bitCNY\n│\n│ 💰 BITEUR → bitEUR\n│\n│ 💰 BITGOLD → bitGold\n│\n│ 💰 BITS → Bitstar\n│\n│ 💰 BITSILVER → bitSilver\n│\n│ 💰 BITUSD → bitUSD\n│\n│ 💰 BITZ → Bitz\n│\n│ 💰 BLAS → BlakeStar\n│\n│ 💰 BLC → Blakecoin\n│\n│ 💰 BLITZ → Blitzcash\n│\n│ 💰 BLK → BlackCoin\n│\n│ 💰 BLN → Bolenum\n│\n│ 💰 BLOCK → Blocknet\n│\n│ 💰 BLOCKPAY → BlockPay\n│\n│ 💰 BLU → BlueCoin\n│\n│ 💰 BLUE → BLUE\n│\n│ 💰 BMC → Blackmoon Crypto\n│\n│ 💰 BNB → Binance Coin\n│\n│ 💰 BNT → Bancor\n│\n│ 💰 BNTY → Bounty0x\n│\n│ 💰 BNX → BnrtxCoin\n│\n│ 💰 BOAT → BOAT\n│\n│ 💰 BOLI → Bolivarcoin\n│\n│ 💰 BON → Bonpay\n│\n│ 💰 BOT → Bodhi\n│\n│ 💰 BPC → Bitpark Coin\n│\n│ 💰 BPL → Blockpool\n│\n│ 💰 BQ → bitqy\n│\n│ 💰 BRAIN → Braincoin\n│\n│ 💰 BRAT → BROTHER\n│\n│ 💰 BRD → Bread\n│\n│ 💰 BRIT → BritCoin\n│\n│ 💰 BRK → Breakout\n│\n│ 💰 BRO → Bitradio\n│\n│ 💰 BRX → Breakout Stake\n│\n│ 💰 BSD → BitSend\n│\n│ 💰 BSTY → GlobalBoost-Y\n│\n│ 💰 BTA → Bata\n│\n│ 💰 BTB → BitBar\n│\n│ 💰 BTCD → BitcoinDark\n│\n│ 💰 BTCD → BitcoinDark\n│\n│ 💰 BTCR → Bitcurrency\n│\n│ 💰 BTCRED → Bitcoin Red\n│\n│ 💰 BTCS → Bitcoin Scrypt\n│\n│ 💰 BTCZ → BitcoinZ\n│\n│ 💰 BTDX → Bitcloud\n│\n│ 💰 BTG → Bitcoin Gold\n│\n│ 💰 BTM → Bitmark\n│\n│ 💰 BTM → Bytom\n│\n│ 💰 BTPL → Bitcoin Planet\n│\n│ 💰 BTQ → BitQuark\n│\n│ 💰 BTS → BitShares\n│\n│ 💰 BTWTY → Bit20\n│\n│ 💰 BTX → Bitcore\n│\n│ 💰 BUCKS → SwagBucks\n│\n│ 💰 BUMBA → BumbaCoin\n│\n│ 💰 BUN → BunnyCoin\n│\n│ 💰 BURST → Burst\n│\n│ 💰 BUZZ → BuzzCoin\n│\n│ 💰 BWK → Bulwark\n│\n│ 💰 BXT → BitTokens\n│\n│ 💰 BYC → Bytecent\n│\n│ 💰 C2 → Coin2.1\n│\n│ 💰 CAB → Cabbage\n│\n│ 💰 CACH → CacheCoin\n│\n│ 💰 CAG → Change\n│\n│ 💰 CALC → CaliphCoin\n│\n│ 💰 CANN → CannabisCoin\n│\n│ 💰 CARBON Carboncoin\n│\n│ 💰 CASH → Cashcoin\n│\n│ 💰 CAT → BlockCAT\n│\n│ 💰 CAT → Catcoin\n│\n│ 💰 CBX → Crypto Bullion\n│\n│ 💰 CCN → CannaCoin\n│\n│ 💰 CCO → Ccore\n│\n│ 💰 CCRB → CryptoCarbon\n│\n│ 💰 CCT → Crystal Clear\n│\n│ 💰 CDN → Canada eCoin\n│\n│ 💰 CDT → CoinDash\n│\n│ 💰 CDX → Commodity Ad Network\n│\n│ 💰 CFD → Confido\n│\n│ 💰 CFI → Cofound.it\n│\n│ 💰 CFT → CryptoForecast\n│\n│ 💰 CHAN → ChanCoin\n│\n│ 💰 CHC → ChainCoin\n│\n│ 💰 CHESS → ChessCoin\n│\n│ 💰 CHIPS → CHIPS\n│\n│ 💰 CJ → → Cryptojacks\n│\n│ 💰 CLAM → Clams\n│\n│ 💰 CLOAK → CloakCoin\n│\n│ 💰 CMPCO → CampusCoin\n│\n│ 💰 CMT → Comet\n│\n│ 💰 CMT → CyberMiles\n│\n│ 💰 CND → Cindicator\n│\n│ 💰 CNNC → Cannation\n│\n│ 💰 CNO → Coin(O)\n│\n│ 💰 CNT → Centurion\n│\n│ 💰 CNX → Cryptonex\n│\n│ 💰 COAL → BitCoal\n│\n│ 💰 COLX → ColossusCoinXT\n│\n│ 💰 CON → PayCon\n│\n│ 💰 CONX → Concoin\n│\n│ 💰 COSS → COSS\n│\n│ 💰 COVAL → Circuits of Value\n│\n│ 💰 CPC → Capricoin\n│\n│ 💰 CPN → CompuCoin\n│\n│ 💰 CRAVE → Crave\n│\n│ 💰 CRB → Creditbit\n│\n│ 💰 CRC → CrowdCoin\n│\n│ 💰 CRDNC → Credence Coin\n│\n│ 💰 CREA → Creativecoin\n│\n│ 💰 CRED → Verify\n│\n│ 💰 CREDO → Credo\n│\n│ 💰 CREVA → CrevaCoin\n│\n│ 💰 CRM → Cream\n│\n│ 💰 CRW → Crown\n│\n│ 💰 CRX → Chronos\n│\n│ 💰 CSNO → BitDice\n│\n│ 💰 CTIC2 → Coimatic 2.0\n│\n│ 💰 CTIC3 → Coimatic 3.0\n│\n│ 💰 CTR → Centra\n│\n│ 💰 CTX → CarTaxi Token\n│\n│ 💰 CUBE → DigiCube\n│\n│ 💰 CURE → Curecoin\n│\n│ 💰 CVC → Civic\n│\n│ 💰 CVCOIN CVCoin\n│\n│ 💰 CXT → Coinonat\n│\n│ 💰 CYP → Cypher\n│\n│ 💰 DAI → Dai\n│\n│ 💰 DALC → Dalecoin\n│\n│ 💰 DAR → Darcrus\n│\n│ 💰 DASH → Dash\n│\n│ 💰 DAT → Datum\n│\n│ 💰 DATA → Streamr DATAcoin\n│\n│ 💰 DAXX → DaxxCoin\n│\n│ 💰 DBC → DeepBrain Chain\n│\n│ 💰 DBET → DecentBet\n│\n│ 💰 DBIX → DubaiCoin\n│\n│ 💰 DBTC → Debitcoin\n│\n│ 💰 DCN → Dentacoin\n│\n│ 💰 DCR → Decred\n│\n│ 💰 DCT → DECENT\n│\n│ 💰 DCY → Dinastycoin\n│\n│ 💰 DDF → DigitalDevelopersFund\n│\n│ 💰 DEM → Deutsche eMark\n│\n│ 💰 DENT → Dent\n│\n│ 💰 DEW → DEW\n│\n│ 💰 DFS → DFSCoin\n│\n│ 💰 DFT → DraftCoin\n│\n│ 💰 DGB → DigiByte\n│\n│ 💰 DGC → Digitalcoin\n│\n│ 💰 DGCS → Digital Credits\n│\n│ 💰 DGD → DigixDAO\n│\n│ 💰 DGPT → DigiPulse\n│\n│ 💰 DIBC → DIBCOIN\n│\n│ 💰 DICE → Etheroll\n│\n│ 💰 DIME → Dimecoin\n│\n│ 💰 DIVX → Divi\n│\n│ 💰 DIX → Dix Asset\n│\n│ 💰 DLC → Dollarcoin\n│\n│ 💰 DLISK → DAPPSTER\n│\n│ 💰 DLT → Agrello\n│\n│ 💰 DMB → Digital Money Bits\n│\n│ 💰 DMD → Diamond\n│\n│ 💰 DNA → EncrypGen\n│\n│ 💰 DNR → Denarius\n│\n│ 💰 DNT → district0x\n│\n│ 💰 DOGE → Dogecoin\n│\n│ 💰 DOLLAR Dollar Online\n│\n│ 💰 DOPE → DopeCoin\n│\n│ 💰 DOT → Dotcoin\n│\n│ 💰 DOVU → Dovu\n│\n│ 💰 DP → DigitalPrice\n│\n│ 💰 DPY → Delphy\n│\n│ 💰 DRGN → Dragonchain\n│\n│ 💰 DRP → DCORP\n│\n│ 💰 DRS → Digital Rupees\n│\n│ 💰 DRT → DomRaider\n│\n│ 💰 DRXNE → DROXNE\n│\n│ 💰 DSH → Dashcoin\n│\n│ 💰 DSR → Desire\n│\n│ 💰 DTB → Databits\n│\n│ 💰 DTR → Dynamic Trading Rights\n│\n│ 💰 DUO → ParallelCoin\n│\n│ 💰 DYN → Dynamic\n│\n│ 💰 EAC → EarthCoin\n│\n│ 💰 EAGLE → EagleCoin\n│\n│ 💰 EBCH → eBitcoinCash\n│\n│ 💰 EBET → EthBet\n│\n│ 💰 EBST → eBoost\n│\n│ 💰 EBT → Ebittree Coin\n│\n│ 💰 EBTC → eBitcoin\n│\n│ 💰 ECA → Electra\n│\n│ 💰 ECASH → Ethereum Cash\n│\n│ 💰 ECC → ECC\n│\n│ 💰 ECN → E-coin\n│\n│ 💰 ECO → EcoCoin\n│\n│ 💰 ECOB → Ecobit\n│\n│ 💰 EDG → Edgeless\n│\n│ 💰 EDO → Eidoo\n│\n│ 💰 EDR → E-Dinar Coin\n│\n│ 💰 EFL → e-Gulden\n│\n│ 💰 EFYT → Ergo\n│\n│ 💰 EGAS → ETHGAS\n│\n│ 💰 EGC → EverGreenCoin\n│\n│ 💰 EGO → EGO\n│\n│ 💰 EL → Elcoin\n│\n│ 💰 ELE → Elementrem\n│\n│ 💰 ELF → aelf\n│\n│ 💰 ELIX → Elixir\n│\n│ 💰 ELLA → Ellaism\n│\n│ 💰 ELS → Elysium\n│\n│ 💰 ELTCOIN ELTCOIN\n│\n│ 💰 EMC → Emercoin\n│\n│ 💰 EMC2 → Einsteinium\n│\n│ 💰 EMD → Emerald Crypto\n│\n│ 💰 EMV → Ethereum Movie Venture\n│\n│ 💰 ENG → Enigma\n│\n│ 💰 ENJ → Enjin Coin\n│\n│ 💰 ENRG → Energycoin\n│\n│ 💰 ENT → Eternity\n│\n│ 💰 EOS → EOS\n│\n│ 💰 EOT → EOT Token\n│\n│ 💰 EPY → Emphy\n│\n│ 💰 EQT → EquiTrader\n│\n│ 💰 ERC → EuropeCoin\n│\n│ 💰 ERC20 → ERC20\n│\n│ 💰 EREAL → eREAL\n│\n│ 💰 ERO → Eroscoin\n│\n│ 💰 ERY → Eryllium\n│\n│ 💰 ESP → Espers\n│\n│ 💰 ETBS → Ethbits\n│\n│ 💰 ETC → Ethereum Classic\n│\n│ 💰 ETG → Ethereum Gold\n│\n│ 💰 ETH → Ethereum\n│\n│ 💰 ETHD → Ethereum Dark\n│\n│ 💰 ETHOS → Ethos\n│\n│ 💰 ETN → Electroneum\n│\n│ 💰 ETP → Metaverse ETP\n│\n│ 💰 ETT → EncryptoTel [WAVES]\n│\n│ 💰 EUC → Eurocoin\n│\n│ 💰 EVIL → Evil Coin\n│\n│ 💰 EVO → Evotion\n│\n│ 💰 EVX → Everex\n│\n│ 💰 EXCL → ExclusiveCoin\n│\n│ 💰 EXN → ExchangeN\n│\n│ 💰 EXP → Expanse\n│\n│ 💰 FAIR → FairCoin\n│\n│ 💰 FC2 → FuelCoin\n│\n│ 💰 FCN → Fantomcoin\n│\n│ 💰 FCT → Factom\n│\n│ 💰 FJC → FujiCoin\n│\n│ 💰 FLASH → Flash\n│\n│ 💰 FLAX → Flaxscript\n│\n│ 💰 FLDC → FoldingCoin\n│\n│ 💰 FLIK → FLiK\n│\n│ 💰 FLIXX → Flixxo\n│\n│ 💰 FLO → FlorinCoin\n│\n│ 💰 FLT → FlutterCoin\n│\n│ 💰 FNC → FinCoin\n│\n│ 💰 FOR → FORCE\n│\n│ 💰 FRD → Farad\n│\n│ 💰 FRST → FirstCoin\n│\n│ 💰 FST → Fastcoin\n│\n│ 💰 FTC → Feathercoin\n│\n│ 💰 FUCK → FuckToken\n│\n│ 💰 FUEL → Etherparty\n│\n│ 💰 FUN → FunFair\n│\n│ 💰 FUNC → FUNCoin\n│\n│ 💰 FUNK → The Cypherfunks\n│\n│ 💰 FUZZ → FuzzBalls\n│\n│ 💰 FXE → FuturXe\n│\n│ 💰 FYN → FundYourselfNow\n│\n│ 💰 FYP → FlypMe\n│\n│ 💰 G3N → G3N\n│\n│ 💰 GAIA → GAIA\n│\n│ 💰 GAM → Gambit\n│\n│ 💰 GAME → GameCredits\n│\n│ 💰 GAP → Gapcoin\n│\n│ 💰 GAS → Gas\n│\n│ 💰 GB → GoldBlocks\n│\n│ 💰 GBX → GoByte\n│\n│ 💰 GBYTE → Byteball Bytes\n│\n│ 💰 GCC → TheGCCcoin\n│\n│ 💰 GCN → GCoin\n│\n│ 💰 GCR → Global Currency Reserve\n│\n│ 💰 GEERT → GeertCoin\n│\n│ 💰 GEO → GeoCoin\n│\n│ 💰 GIM → Gimli\n│\n│ 💰 GLD → GoldCoin\n│\n│ 💰 GLT → GlobalToken\n│\n│ 💰 GMT → Mercury Protocol\n│\n│ 💰 GNO → Gnosis\n│\n│ 💰 GNT → Golem\n│\n│ 💰 GOLOS → Golos\n│\n│ 💰 GOOD → Goodomy\n│\n│ 💰 GP → → GoldPieces\n│\n│ 💰 GPL → Gold Pressed Latinum\n│\n│ 💰 GPU → GPU Coin\n│\n│ 💰 GRC → GridCoin\n│\n│ 💰 GRE → Greencoin\n│\n│ 💰 GRID → Grid+\n│\n│ 💰 GRIM → Grimcoin\n│\n│ 💰 GRS → Groestlcoin\n│\n│ 💰 GRWI → Growers International\n│\n│ 💰 GSR → GeyserCoin\n│\n│ 💰 GTC → Global Tour Coin\n│\n│ 💰 GTO → Gifto\n│\n│ 💰 GUN → Guncoin\n│\n│ 💰 GUP → Matchpool\n│\n│ 💰 GVT → Genesis Vision\n│\n│ 💰 GXS → GXShares\n│\n│ 💰 HAL → Halcyon\n│\n│ 💰 HAT → Hawala.Today\n│\n│ 💰 HBN → HoboNickels\n│\n│ 💰 HBT → Hubii Network\n│\n│ 💰 HDG → Hedge\n│\n│ 💰 HEAT → HEAT\n│\n│ 💰 HERO → Sovereign Hero\n│\n│ 💰 HGT → HelloGold\n│\n│ 💰 HKN → Hacken\n│\n│ 💰 HMC → HarmonyCoin\n│\n│ 💰 HMP → HempCoin\n│\n│ 💰 HMQ → Humaniq\n│\n│ 💰 HNC → Helleniccoin\n│\n│ 💰 HODL → HOdlcoin\n│\n│ 💰 HOLD → Interstellar Holdings\n│\n│ 💰 HONEY → Honey\n│\n│ 💰 HPC → Happycoin\n│\n│ 💰 HSR → Hshare\n│\n│ 💰 HST → Decision Token\n│\n│ 💰 HTC → HitCoin\n│\n│ 💰 HUC → HunterCoin\n│\n│ 💰 HUSH → Hush\n│\n│ 💰 HVCO → High Voltage\n│\n│ 💰 HVN → Hive\n│\n│ 💰 HWC → HollyWoodCoin\n│\n│ 💰 HXX → Hexx\n│\n│ 💰 HYP → HyperStake\n│\n│ 💰 I0C → I0Coin\n│\n│ 💰 IBANK → iBank\n│\n│ 💰 ICE → iDice\n│\n│ 💰 ICN → Iconomi\n│\n│ 💰 ICN → iCoin\n│\n│ 💰 ICOB → ICOBID\n│\n│ 💰 ICON → Iconic\n│\n│ 💰 ICOO → ICO OpenLedger\n│\n│ 💰 ICOS → ICOS\n│\n│ 💰 ICX → ICON\n│\n│ 💰 IETH → iEthereum\n│\n│ 💰 IFLT → InflationCoin\n│\n│ 💰 IFT → InvestFeed\n│\n│ 💰 IMPS → ImpulseCoin\n│\n│ 💰 IMS → Independent Money System\n│\n│ 💰 IMX → Impact\n│\n│ 💰 INCNT → Incent\n│\n│ 💰 IND → Indorse Token\n│\n│ 💰 INFX → Influxcoin\n│\n│ 💰 INK → Ink\n│\n│ 💰 INN → Innova\n│\n│ 💰 INSN → InsaneCoin\n│\n│ 💰 INXT → Internxt\n│\n│ 💰 IOC → I/O Coin\n│\n│ 💰 ION → ION\n│\n│ 💰 IOP → Internet of People\n│\n│ 💰 ITC → IoT Chain\n│\n│ 💰 ITI → iTicoin\n│\n│ 💰 ITNS → IntenseCoin\n│\n│ 💰 ITT → Intelligent Trading Tech\n│\n│ 💰 IXC → Ixcoin\n│\n│ 💰 IXT → iXledger\n│\n│ 💰 JET → Jetcoin\n│\n│ 💰 JIN → Jin Coin\n│\n│ 💰 JINN → Jinn\n│\n│ 💰 JNS → Janus\n│\n│ 💰 JOBS → JobsCoin\n│\n│ 💰 KAYI → Kayicoin\n│\n│ 💰 KCS → KuCoin Shares\n│\n│ 💰 KED → Darsek\n│\n│ 💰 KEK → KekCoin\n│\n│ 💰 KICK → KickCoin\n│\n│ 💰 KIN → Kin\n│\n│ 💰 KLC → KiloCoin\n│\n│ 💰 KLN → Kolion\n│\n│ 💰 KMD → Komodo\n│\n│ 💰 KNC → KingN Coin\n│\n│ 💰 KNC → Kyber Network\n│\n│ 💰 KOBO → Kobocoin\n│\n│ 💰 KORE → Kore\n│\n│ 💰 KRB → Karbo\n│\n│ 💰 KRONE → Kronecoin\n│\n│ 💰 KURT → Kurrent\n│\n│ 💰 KUSH → KushCoin\n│\n│ 💰 LA → LAToken\n│\n│ 💰 LANA → LanaCoin\n│\n│ 💰 LBC → LBRY Credits\n│\n│ 💰 LBTC → LiteBitcoin\n│\n│ 💰 LCP → Litecoin Plus\n│\n│ 💰 LDOGE → LiteDoge\n│\n│ 💰 LEA → LeaCoin\n│\n│ 💰 LEND → ETHLend\n│\n│ 💰 LEO → LEOcoin\n│\n│ 💰 LGD → Legends Room\n│\n│ 💰 LIFE → LIFE\n│\n│ 💰 LINDA → Linda\n│\n│ 💰 LINK → ChainLink\n│\n│ 💰 LINX → Linx\n│\n│ 💰 LKK → Lykke\n│\n│ 💰 LMC → LoMoCoin\n│\n│ 💰 LNK → Link Platform\n│\n│ 💰 LOC → LockChain\n│\n│ 💰 LRC → Loopring\n│\n│ 💰 LSK → Lisk\n│\n│ 💰 LTB → LiteBar\n│\n│ 💰 LTC → Litecoin\n│\n│ 💰 LTCR → Litecred\n│\n│ 💰 LTCU → LiteCoin Ultra\n│\n│ 💰 LUN → Lunyr\n│\n│ 💰 LUNA → Luna Coin\n│\n│ 💰 LUX → LUXCoin\n│\n│ 💰 LVPS → LevoPlus\n│\n│ 💰 MAC → Machinecoin\n│\n│ 💰 MAD → SatoshiMadness\n│\n│ 💰 MAG → Magnet\n│\n│ 💰 MAID → MaidSafeCoin\n│\n│ 💰 MANA → Decentraland\n│\n│ 💰 MAO → Mao Zedong\n│\n│ 💰 MAR → Marijuanacoin\n│\n│ 💰 MARS → Marscoin\n│\n│ 💰 MAX → MaxCoin\n│\n│ 💰 MAY → Theresa May Coin\n│\n│ 💰 MBI → Monster Byte\n│\n│ 💰 MBRS → Embers\n│\n│ 💰 MCAP → MCAP\n│\n│ 💰 MCO → Monaco\n│\n│ 💰 MCRN → MACRON\n│\n│ 💰 MDA → Moeda Loyalty Points\n│\n│ 💰 MEC → Megacoin\n│\n│ 💰 MED → MediBloc\n│\n│ 💰 MEME → Memetic / PepeCoin\n│\n│ 💰 MER → Mercury\n│\n│ 💰 MGM → Magnum\n│\n│ 💰 MGO → MobileGo\n│\n│ 💰 MILO → MiloCoin\n│\n│ 💰 MINT → Mintcoin\n│\n│ 💰 MIOTA → IOTA\n│\n│ 💰 MKR → Maker\n│\n│ 💰 MLN → Melon\n│\n│ 💰 MNC → Mincoin\n│\n│ 💰 MNE → Minereum\n│\n│ 💰 MNM → Mineum\n│\n│ 💰 MNX → MinexCoin\n│\n│ 💰 MOD → Modum\n│\n│ 💰 MOIN → Moin\n│\n│ 💰 MOJO → MojoCoin\n│\n│ 💰 MONA → MonaCoin\n│\n│ 💰 MONK → Monkey Project\n│\n│ 💰 MOON → Mooncoin\n│\n│ 💰 MOTO → Motocoin\n│\n│ 💰 MRT → Miners' Reward Token\n│\n│ 💰 MSCN → Master Swiscoin\n│\n│ 💰 MSP → Mothership\n│\n│ 💰 MST → MustangCoin\n│\n│ 💰 MTH → Monetha\n│\n│ 💰 MTL → Metal\n│\n│ 💰 MTLMC3 → Metal Music Coin\n│\n│ 💰 MTNC → Masternodecoin\n│\n│ 💰 MUE → MonetaryUnit\n│\n│ 💰 MUSIC → Musicoin\n│\n│ 💰 MXT → MarteXcoin\n│\n│ 💰 MYB → MyBit Token\n│\n│ 💰 MYST → Mysterium\n│\n│ 💰 MZC → MazaCoin\n│\n│ 💰 NANO → Nano\n│\n│ 💰 NANOX → Project-X\n│\n│ 💰 NAS → Nebulas\n│\n│ 💰 NAV → NAV Coin\n│\n│ 💰 NDC → NEVERDIE\n│\n│ 💰 NEBL → Neblio\n│\n│ 💰 NEO → NEO\n│\n│ 💰 NEOS → NeosCoin\n│\n│ 💰 NET → NetCoin\n│\n│ 💰 NET → Nimiq\n│\n│ 💰 NETKO → Netko\n│\n│ 💰 NEU → Neumark\n│\n│ 💰 NEVA → NevaCoin\n│\n│ 💰 NEWB → Newbium\n│\n│ 💰 NGC → NAGA\n│\n│ 💰 NIO → Autonio\n│\n│ 💰 NKA → IncaKoin\n│\n│ 💰 NLC2 → NoLimitCoin\n│\n│ 💰 NLG → Gulden\n│\n│ 💰 NMC → Namecoin\n│\n│ 💰 NMR → Numeraire\n│\n│ 💰 NOBL → NobleCoin\n│\n│ 💰 NOTE → DNotes\n│\n│ 💰 NRO → Neuro\n│\n│ 💰 NSR → NuShares\n│\n│ 💰 NTO → Fujinto\n│\n│ 💰 NTRN → Neutron\n│\n│ 💰 NTWK → Network Token\n│\n│ 💰 NUKO → Nekonium\n│\n│ 💰 NULS → Nuls\n│\n│ 💰 NVC → Novacoin\n│\n│ 💰 NVST → NVO\n│\n│ 💰 NXC → Nexium\n│\n│ 💰 NXS → Nexus\n│\n│ 💰 NXT → Nxt\n│\n│ 💰 NYAN → Nyancoin\n│\n│ 💰 NYC → NewYorkCoin\n│\n│ 💰 OAX → OAX\n│\n│ 💰 OBITS → OBITS\n│\n│ 💰 OCL → Oceanlab\n│\n│ 💰 OCT → OracleChain\n│\n│ 💰 ODN → Obsidian\n│\n│ 💰 OFF → Cthulhu Offerings\n│\n│ 💰 OK → → OKCash\n│\n│ 💰 OMG → OmiseGO\n│\n│ 💰 OMNI → Omni\n│\n│ 💰 ONG → onG.social\n│\n│ 💰 ONION → DeepOnion\n│\n│ 💰 ONX → Onix\n│\n│ 💰 OPAL → Opal\n│\n│ 💰 OPT → Opus\n│\n│ 💰 ORB → Orbitcoin\n│\n│ 💰 ORLY → Orlycoin\n│\n│ 💰 ORME → Ormeus Coin\n│\n│ 💰 OST → Simple Token\n│\n│ 💰 OTN → Open Trading Network\n│\n│ 💰 OTX → Octanox\n│\n│ 💰 OXY → Oxycoin\n│\n│ 💰 P7C → P7Coin\n│\n│ 💰 PAC → PACcoin\n│\n│ 💰 PAK → Pakcoin\n│\n│ 💰 PART → Particl\n│\n│ 💰 PASC → Pascal Coin\n│\n│ 💰 PASL → Pascal Lite\n│\n│ 💰 PAY → TenX\n│\n│ 💰 PAYX → Paypex\n│\n│ 💰 PBL → Publica\n│\n│ 💰 PBT → Primalbase Token\n│\n│ 💰 PCOIN → Pioneer Coin\n│\n│ 💰 PDC → Project Decorum\n│\n│ 💰 PEPECASH Pepe Cash\n│\n│ 💰 PEX → PosEx\n│\n│ 💰 PFR → Payfair\n│\n│ 💰 PGL → Prospectors Gold\n│\n│ 💰 PHO → Photon\n│\n│ 💰 PHR → Phore\n│\n│ 💰 PHS → Philosopher Stones\n│\n│ 💰 PIGGY → Piggycoin\n│\n│ 💰 PING → CryptoPing\n│\n│ 💰 PINK → PinkCoin\n│\n│ 💰 PIPL → PiplCoin\n│\n│ 💰 PIRL → Pirl\n│\n│ 💰 PIVX → PIVX\n│\n│ 💰 PIX → Lampix\n│\n│ 💰 PKB → ParkByte\n│\n│ 💰 PKT → Playkey\n│\n│ 💰 PLACO → PlayerCoin\n│\n│ 💰 PLAY → HEROcoin\n│\n│ 💰 PLBT → Polybius\n│\n│ 💰 PLNC → PLNcoin\n│\n│ 💰 PLR → Pillar\n│\n│ 💰 PLU → Pluton\n│\n│ 💰 PND → Pandacoin\n│\n│ 💰 POE → Po.et\n│\n│ 💰 POLL → ClearPoll\n│\n│ 💰 PONZI → PonziCoin\n│\n│ 💰 POP → PopularCoin\n│\n│ 💰 POS → PoSToken\n│\n│ 💰 POST → PostCoin\n│\n│ 💰 POSW → PoSW Coin\n│\n│ 💰 POT → PotCoin\n│\n│ 💰 POWR → Power Ledger\n│\n│ 💰 PPC → Peercoin\n│\n│ 💰 PPP → PayPie\n│\n│ 💰 PPT → Populous\n│\n│ 💰 PPY → Peerplays\n│\n│ 💰 PR → → Prototanium\n│\n│ 💰 PRC → PRCoin\n│\n│ 💰 PRG → Paragon\n│\n│ 💰 PRIX → Privatix\n│\n│ 💰 PRL → Oyster\n│\n│ 💰 PRO → ProChain\n│\n│ 💰 PRO → Propy\n│\n│ 💰 PROC → ProCurrency\n│\n│ 💰 PRS → Presearch\n│\n│ 💰 PRX → Printerium\n│\n│ 💰 PST → Primas\n│\n│ 💰 PTC → Pesetacoin\n│\n│ 💰 PTOY → Patientory\n│\n│ 💰 PURA → Pura\n│\n│ 💰 PURE → Pure\n│\n│ 💰 PUT → PutinCoin\n│\n│ 💰 PXC → Phoenixcoin\n│\n│ 💰 PXI → Prime-XI\n│\n│ 💰 PZM → PRIZM\n│\n│ 💰 Q2C → QubitCoin\n│\n│ 💰 QASH → QASH\n│\n│ 💰 QAU → Quantum\n│\n│ 💰 QBC → Quebecoin\n│\n│ 💰 QCN → QuazarCoin\n│\n│ 💰 QRK → Quark\n│\n│ 💰 QRL → Quantum Resistant Ledger\n│\n│ 💰 QSP → Quantstamp\n│\n│ 💰 QTL → Quatloo\n│\n│ 💰 QTUM → Qtum\n│\n│ 💰 QUN → QunQun\n│\n│ 💰 QVT → Qvolta\n│\n│ 💰 QWARK → Qwark\n│\n│ 💰 R → Revain\n│\n│ 💰 RADS → Radium\n│\n│ 💰 RAIN → Condensate\n│\n│ 💰 RBIES → Rubies\n│\n│ 💰 RBT → Rimbit\n│\n│ 💰 RBY → Rubycoin\n│\n│ 💰 RC → RussiaCoin\n│\n│ 💰 RCN → Ripio Credit Network\n│\n│ 💰 RDD → ReddCoin\n│\n│ 💰 RDN → Raiden Network Token\n│\n│ 💰 REAL → REAL\n│\n│ 💰 REC → Regalcoin\n│\n│ 💰 RED → RedCoin\n│\n│ 💰 REE → ReeCoin\n│\n│ 💰 REP → Augur\n│\n│ 💰 REQ → Request Network\n│\n│ 💰 REX → REX\n│\n│ 💰 RHOC → RChain\n│\n│ 💰 RIC → Riecoin\n│\n│ 💰 RISE → Rise\n│\n│ 💰 RIYA → Etheriya\n│\n│ 💰 RKC → Royal Kingdom Coin\n│\n│ 💰 RLC → iExec RLC\n│\n│ 💰 RLT → RouletteToken\n│\n│ 💰 RMC → Russian Miner Coin\n│\n│ 💰 RNS → Renos\n│\n│ 💰 ROC → Rasputin Online Coin\n│\n│ 💰 ROOFS → Roofs\n│\n│ 💰 RPC → RonPaulCoin\n│\n│ 💰 RPX → Red Pulse\n│\n│ 💰 RUP → Rupee\n│\n│ 💰 RUPX → Rupaya\n│\n│ 💰 RUSTBITS Rustbits\n│\n│ 💰 RVT → Rivetz\n│\n│ 💰 SAFEX → Safe Exchange Coin\n│\n│ 💰 SAGA → SagaCoin\n│\n│ 💰 SALT → SALT\n│\n│ 💰 SAN → Santiment Network Token\n│\n│ 💰 SBD → Steem Dollars\n│\n│ 💰 SC → → Siacoin\n│\n│ 💰 SCL → Social\n│\n│ 💰 SCORE → Scorecoin\n│\n│ 💰 SCS → Speedcash\n│\n│ 💰 SDC → ShadowCash\n│\n│ 💰 SDRN → Senderon\n│\n│ 💰 SEND → Social Send\n│\n│ 💰 SEQ → Sequence\n│\n│ 💰 SFC → Solarflarecoin\n│\n│ 💰 SGR → Sugar Exchange\n│\n│ 💰 SHIFT → Shift\n│\n│ 💰 SIB → SIBCoin\n│\n│ 💰 SIFT → Smart Investment Fund Token\n│\n│ 💰 SIGT → Signatum\n│\n│ 💰 SKC → Skeincoin\n│\n│ 💰 SKIN → SkinCoin\n│\n│ 💰 SKY → Skycoin\n│\n│ 💰 SLEVIN Slevin\n│\n│ 💰 SLFI → Selfiecoin\n│\n│ 💰 SLG → Sterlingcoin\n│\n│ 💰 SLR → SolarCoin\n│\n│ 💰 SLS → SaluS\n│\n│ 💰 SMART → SmartBillions\n│\n│ 💰 SMART → SmartCash\n│\n│ 💰 SMC → SmartCoin\n│\n│ 💰 SMLY → SmileyCoin\n│\n│ 💰 SNC → SunContract\n│\n│ 💰 SNGLS → SingularDTV\n│\n│ 💰 SNM → SONM\n│\n│ 💰 SNOV → Snovio\n│\n│ 💰 SNRG → Synergy\n│\n│ 💰 SNT → Status\n│\n│ 💰 SOAR → Soarcoin\n│\n│ 💰 SOCC → SocialCoin\n│\n│ 💰 SOIL → SOILcoin\n│\n│ 💰 SONG → SongCoin\n│\n│ 💰 SOON → SoonCoin\n│\n│ 💰 SPACE → SpaceCoin\n│\n│ 💰 SPANK → SpankChain\n│\n│ 💰 SPF → SportyFi\n│\n│ 💰 SPHR → Sphere\n│\n│ 💰 SPR → SpreadCoin\n│\n│ 💰 SPRTS → Sprouts\n│\n│ 💰 SPT → Spots\n│\n│ 💰 SRC → SecureCoin\n│\n│ 💰 SRN → SIRIN LABS Token\n│\n│ 💰 SSS → Sharechain\n│\n│ 💰 STA → Starta\n│\n│ 💰 STAK → STRAKS\n│\n│ 💰 STARS → StarCash Network\n│\n│ 💰 START → Startcoin\n│\n│ 💰 STEEM → Steem\n│\n│ 💰 STN → Steneum Coin\n│\n│ 💰 STORJ → Storj\n│\n│ 💰 STORM → Storm\n│\n│ 💰 STRAT → Stratis\n│\n│ 💰 STRC → StarCredits\n│\n│ 💰 STU → bitJob\n│\n│ 💰 STV → Sativacoin\n│\n│ 💰 STX → Stox\n│\n│ 💰 SUB → Substratum\n│\n│ 💰 SUMO → Sumokoin\n│\n│ 💰 SUPER → SuperCoin\n│\n│ 💰 SWIFT → Bitswift\n│\n│ 💰 SWING → Swing\n│\n│ 💰 SWT → Swarm City\n│\n│ 💰 SXC → Sexcoin\n│\n│ 💰 SYNX → Syndicate\n│\n│ 💰 SYS → Syscoin\n│\n│ 💰 TAAS → TaaS\n│\n│ 💰 TAG → TagCoin\n│\n│ 💰 TAJ → TajCoin\n│\n│ 💰 TALK → BTCtalkcoin\n│\n│ 💰 TAU → Lamden\n│\n│ 💰 TCC → The ChampCoin\n│\n│ 💰 TEK → TEKcoin\n│\n│ 💰 TES → TeslaCoin\n│\n│ 💰 TFL → TrueFlip\n│\n│ 💰 TGC → Tigercoin\n│\n│ 💰 TGT → Target Coin\n│\n│ 💰 THC → HempCoin\n│\n│ 💰 TIME → Chronobank\n│\n│ 💰 TIPS → FedoraCoin\n│\n│ 💰 TIT → Titcoin\n│\n│ 💰 TIX → Blocktix\n│\n│ 💰 TKN → TokenCard\n│\n│ 💰 TKR → CryptoInsight\n│\n│ 💰 TKS → Tokes\n│\n│ 💰 TNB → Time New Bank\n│\n│ 💰 TNT → Tierion\n│\n│ 💰 TOA → ToaCoin\n│\n│ 💰 TOKEN → SwapToken\n│\n│ 💰 TOR → Torcoin\n│\n│ 💰 TRC → Terracoin\n│\n│ 💰 TRCT → Tracto\n│\n│ 💰 TRDT → Trident Group\n│\n│ 💰 TRI → Triangles\n│\n│ 💰 TRIG → Triggers\n│\n│ 💰 TRK → Truckcoin\n│\n│ 💰 TROLL → Trollcoin\n│\n│ 💰 TRST → WeTrust\n│\n│ 💰 TRUMP → TrumpCoin\n│\n│ 💰 TRUST → TrustPlus\n│\n│ 💰 TRX → TRON\n│\n│ 💰 TSE → Tattoocoin (Standard Edition)\n│\n│ 💰 TSTR → Tristar Coin\n│\n│ 💰 TTC → TittieCoin\n│\n│ 💰 TX → TransferCoin\n│\n│ 💰 TZC → TrezarCoin\n│\n│ 💰 UBQ → Ubiq\n│\n│ 💰 UET → Useless Ethereum Token\n│\n│ 💰 UFO → UFO Coin\n│\n│ 💰 UFR → Upfiring\n│\n│ 💰 UIS → Unitus\n│\n│ 💰 UKG → Unikoin Gold\n│\n│ 💰 ULA → Ulatech\n│\n│ 💰 UNB → UnbreakableCoin\n│\n│ 💰 UNIC → UniCoin\n│\n│ 💰 UNIFY → Unify\n│\n│ 💰 UNIT → Universal Currency\n│\n│ 💰 UNITS → GameUnits\n│\n│ 💰 UNITY → SuperNET\n│\n│ 💰 UNO → Unobtanium\n│\n│ 💰 UNY → Unity Ingot\n│\n│ 💰 URC → Unrealcoin\n│\n│ 💰 URO → Uro\n│\n│ 💰 USDE → USDe\n│\n│ 💰 USDT → Tether\n│\n│ 💰 USNBT → NuBits\n│\n│ 💰 UTC → UltraCoin\n│\n│ 💰 UTK → UTRUST\n│\n│ 💰 V → → Version\n│\n│ 💰 VAL → Valorbit\n│\n│ 💰 VEC2 → VectorAI\n│\n│ 💰 VEE → BLOCKv\n│\n│ 💰 VEN → VeChain\n│\n│ 💰 VERI → Veritaseum\n│\n│ 💰 VIA → Viacoin\n│\n│ 💰 VIB → Viberate\n│\n│ 💰 VIBE → VIBE\n│\n│ 💰 VIDZ → PureVidz\n│\n│ 💰 VISIO → Visio\n│\n│ 💰 VIVO → VIVO\n│\n│ 💰 VLT → Veltor\n│\n│ 💰 VLTC → Vault Coin\n│\n│ 💰 VOISE → Voise\n│\n│ 💰 VOLT → Bitvolt\n│\n│ 💰 VOT → VoteCoin\n│\n│ 💰 VOX → Voxels\n│\n│ 💰 VPRC → VapersCoin\n│\n│ 💰 VRC → VeriCoin\n│\n│ 💰 VRM → VeriumReserve\n│\n│ 💰 VRS → Veros\n│\n│ 💰 VSL → vSlice\n│\n│ 💰 VSX → Vsync\n│\n│ 💰 VTA → Virtacoin\n│\n│ 💰 VTC → Vertcoin\n│\n│ 💰 VTR → vTorrent\n│\n│ 💰 VUC → Virta Unique Coin\n│\n│ 💰 WABI → WaBi\n│\n│ 💰 WAND → WandX\n│\n│ 💰 WAVES → Waves\n│\n│ 💰 WAX → WAX\n│\n│ 💰 WBB → Wild Beast Block\n│\n│ 💰 WCT → Waves Community Token\n│\n│ 💰 WDC → WorldCoin\n│\n│ 💰 WGO → WavesGo\n│\n│ 💰 WGR → Wagerr\n│\n│ 💰 WHL → WhaleCoin\n│\n│ 💰 WILD → Wild Crypto\n│\n│ 💰 WINGS → Wings\n│\n│ 💰 WISH → MyWish\n│\n│ 💰 WOMEN → WomenCoin\n│\n│ 💰 WORM → HealthyWormCoin\n│\n│ 💰 WRC → Worldcore\n│\n│ 💰 WTC → Walton\n│\n│ 💰 WTT → Giga Watt Token\n│\n│ 💰 XAS → Asch\n│\n│ 💰 XAUR → Xaurum\n│\n│ 💰 XBC → Bitcoin Plus\n│\n│ 💰 XBL → Billionaire Token\n│\n│ 💰 XBTC21 → Bitcoin 21\n│\n│ 💰 XBTS → Beatcoin\n│\n│ 💰 XBY → XTRABYTES\n│\n│ 💰 XCN → Cryptonite\n│\n│ 💰 XCO → X-Coin\n│\n│ 💰 XCP → Counterparty\n│\n│ 💰 XCPO → Copico\n│\n│ 💰 XCRE → Creatio\n│\n│ 💰 XCS → CybCSec\n│\n│ 💰 XCT → C-Bit\n│\n│ 💰 XCXT → CoinonatX\n│\n│ 💰 XDN → DigitalNote\n│\n│ 💰 XEL → Elastic\n│\n│ 💰 XEM → NEM\n│\n│ 💰 XFT → Footy Cash\n│\n│ 💰 XGOX → XGOX\n│\n│ 💰 XGR → GoldReserve\n│\n│ 💰 XHI → HiCoin\n│\n│ 💰 XIOS → Xios\n│\n│ 💰 XJO → Joulecoin\n│\n│ 💰 XLC → LeviarCoin\n│\n│ 💰 XLM → Stellar\n│\n│ 💰 XLR → Solaris\n│\n│ 💰 XMCC → Monoeci\n│\n│ 💰 XMG → Magi\n│\n│ 💰 XMY → Myriad\n│\n│ 💰 XNG → Enigma\n│\n│ 💰 XNN → Xenon\n│\n│ 💰 XP → → Experience Points\n│\n│ 💰 XPA → XPlay\n│\n│ 💰 XPD → PetroDollar\n│\n│ 💰 XPM → Primecoin\n│\n│ 💰 XPTX → PlatinumBAR\n│\n│ 💰 XPY → PayCoin\n│\n│ 💰 XRA → Ratecoin\n│\n│ 💰 XRB → RaiBlocks\n│\n│ 💰 XRC → Rawcoin\n│\n│ 💰 XRE → RevolverCoin\n│\n│ 💰 XRL → Rialto\n│\n│ 💰 XRP → Ripple\n│\n│ 💰 XSH → SHIELD\n│\n│ 💰 XSPEC → Spectrecoin\n│\n│ 💰 XST → Stealthcoin\n│\n│ 💰 XTO → Tao\n│\n│ 💰 XTZ → Tezos\n│\n│ 💰 XUC → Exchange Union\n│\n│ 💰 XVC → Vcash\n│\n│ 💰 XVG → Verge\n│\n│ 💰 XVP → Virtacoinplus\n│\n│ 💰 XWC → WhiteCoin\n│\n│ 💰 XZC → ZCoin\n│\n│ 💰 YOC → Yocoin\n│\n│ 💰 YOYOW → YOYOW\n│\n│ 💰 YTN → YENTEN\n│\n│ 💰 ZCG → Zlancer\n│\n│ 💰 ZCL → ZClassic\n│\n│ 💰 ZEC → Zcash\n│\n│ 💰 ZEIT → Zeitcoin\n│\n│ 💰 ZEN → ZenCash\n│\n│ 💰 ZENI → Zennies\n│\n│ 💰 ZEPH → Zephyr\n│\n│ 💰 ZER → Zero\n│\n│ 💰 ZET → Zetacoin\n│\n│ 💰 ZMC → ZetaMicron\n│\n│ 💰 ZNY → Bitzeny\n│\n│ 💰 ZOI → Zoin\n│\n│ 💰 ZRC → ZrCoin\n│\n│ 💰 ZRX → 0x\n│\n│ 💰 ZSC → Zeusshield\n│\n│ 💰 ZUR → Zurcoin\n│\n│ 💰 ZZC → ZoZoCoin\n╰───────────────────` }

// PROIBIDO A REMOÇÃO DESSA PARTE!
exports.about = () => { return `` }
// NÃO REMOVA A FUNÇÃO ACIMA!

exports.searchanime = () => { return `Irei dar uma olhada, lembre-se, use apenas com prints da tela e nada de imagens feitas por fãs.` }

exports.sanimetk = (title, title_chinese, title_romaji, title_english, is_adult, episode, similarity) => { return `➸ *Titulo em Japonês* : ${title}\n➸ *Titulo em Chinês* : ${title_chinese}\n➸ *Titulo em Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n➸ *Ecchi* : ${is_adult}\n➸ *Episodio* : ${episode.toString()}\n➸ *Similaridade dos traços* : ${(similarity * 100).toFixed(1)}%\n` }

exports.broad = () => { return `Para usar isso, digite o comando, em seguida defina se quer todos[-all], grupos[-gp] e em seguida a sua mensagem de transmissão.` }

exports.broadfin = () => { return `Prontinho, sua mensagem foi enviada.` }

exports.onlyaudio = () => { return `❬❗❭ Isso á para audios, se tentar usar em fotos ou algo do tipo não funcionará (use marcando!).` }

exports.onlymidia = () => { return `❬❗❭ Use esse comando apenas em documentos, videos, imagens, fotos e outros tipos que você queira receber (marque-os!).` }

exports.groupinfo = (groupname, totalMem, welgrp, atpngy, atlka, xpgp, fakegp, bklistgp, slcegp, autostk, ngrp, desc, gpOwner, admgp) => { return `*${groupname}*\n\n*️👷 Membros > ${totalMem}*\n\n*💌️ Welcome/Bye > ${welgrp}*\n\n*🌙 Anti-Porn > ${atpngy}*\n\n*🌏 Anti-Links > ${atlka}*\n\n*🎮 XP > ${xpgp}*\n\n*👤 Anti-Fakes > ${fakegp}*\n\n*🔏 Black-List > ${bklistgp}*\n\n*🔕 Mutado > ${slcegp}*\n\n*🎥 Auto-Stickers > ${autostk}*\n\n*🔞 Contéudo adulto > ${ngrp}*\n\n*📃️ Descrição ↓*\n ${desc}\n\n*🌙 Dono >* @${gpOwner}\n\n*☀️ Administradores ↓*\n${admgp}` }

exports.sip = (ip) => { return `✪ IP: ${ip.data.ip}\n\n✪ Tipo: ${ip.data.type}\n\n✪ Região: ${ip.data.region}\n\n✪ Cidade: ${ip.data.city}\n\n✪ Latitude: ${ip.data.latitude}\n\n✪ Longitude: ${ip.data.longitude}\n\n✪ Provedor: ${ip.data.isp}\n\n✪ Continente: ${ip.data.continent}\n\n✪ Sigla do continente: ${ip.data.continent_code}\n\n✪ País: ${ip.data.country}\n\n✪ Sigla do País: ${ip.data.country_code}\n\n✪ Capital do País: ${ip.data.country_capital}\n\n✪ DDI: ${ip.data.country_phone}\n\n✪ Países Vizinhos: ${ip.data.country_neighbours}\n\n✪ Fuso Horário: ${ip.data.timezone} ${ip.data.timezone_name} ${ip.data.timezone_gmt}\n\n✪ Moeda: ${ip.data.currency}\n\n✪ Sigla da Moeda: ${ip.data.currency_code}\n\n✪ Google Maps: http://www.google.com/maps/place/${ip.data.latitude},${ip.data.longitude}` }

exports.scep = (cep) => { return `✪ CEP: ${cep.data.cep}\n\n✪ Logradouro: ${cep.data.logradouro}\n\n✪ Complemento: ${cep.data.complemento}\n\n✪ Bairro: ${cep.data.bairro}\n\n✪ Estado: ${cep.data.localidade}\n\n✪ DDD: ${cep.data.ddd}\n\n✪ Sigla do Estado: ${cep.data.uf}\n\n✪ Código IBGE: ${cep.data.ibge}\n\n✪ Código GIA: ${cep.data.gia}\n\n✪ Código Siafi: ${cep.data.siafi}.` }

exports.goodbye = () => { return `Foi uma honra permanecer com vocês, mas me mandaram sair, vejo vocês, com sorte, na proxima.` }

exports.argsbar = () => { return `❬❗❭ Isso deve ser usado digitando o comando e em seguida os argumentos, separando eles pelo |, exemplo, ${prefix}comando parte 1 | parte 2 | parte 3 e assim vai, nesse comando ` }

exports.nomark = () => { return `❬❗❭ Para usar isso marque a mensagem da pessoa e então digite o comando.` }

exports.unban = (unban) => { return `A entrada do @${unban} foi novamente permitida no cabaré...` }

exports.ban = (ban) => { return `@${ban} você foi oficialmente expulso desse bar!` }

exports.vip = () => { return `Não posso fazer contra alguém VIP, é uma pena...` }

exports.kick = (mentionedJidList) => { return `Você não é mas bem vindo aqui ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')} seu bebado! Caia fora do meu cabaré!` }

exports.promote = (promote) => { return `Parabéns @${promote}, você será um dos fiscais do bar, trabalhe bem em!` }

exports.semmarcar = () => { return `❬❗❭ Marque a pessoa que deseja que eu faça isso!` }

exports.isadm = () => { return `A pessoa é um(a) administrador já, portanto, nada séra feito.` }

exports.notadm = () => { return `Ele não é um dos administradores, portanto, não farei nada.` }

exports.demote = (demote) => { return `Você teve um péssimo rendimento esse mês @${demote}! 100 reais em roupinha de LOL? Demitido!` }

exports.stats = (timeBot, osUptime, ramMemory, os, loadedMsg, groups, chatIds, processTime, t, moment) => { return `
🏓 Pong!

🐌 - Velocidade > ${processTime(t, moment())} segundos

📊 - *${loadedMsg}* Mensagens após inicio

📱 - *${groups.length}* Conversas em grupo

👥 - *${chatIds.length - groups.length}* Conversas no PV

📈 - *${chatIds.length}* Total de chats

⌛ Uptime - ${timeBot}
` }

exports.mymess = () => { return `Obviamente só posso deletar as mensagens que estão marcadas e que são minhas, peça pra pessoa deletar as dela.` }

exports.cats = () => { return `❬❗❭ Para usar esse comando, defina o tamanho que deseja obter, por exemplo, se quiser uma foto 1080p, use "${prefix}cat 1920 1080", ou seja, digite o comando, a altura e por fim a largura da foto para ganhar uma foto que se encaixe no seu pedido, mas não abuse! O.O` }

exports.enviar = () => { return `❬❗❭ Para usar digite o comando e na frente digite -pv para privado, ou -gp para grupos, e na frente deles use o ID, separando a mensagem por |. Exemplo:\n${prefix}enviar -gp 5518998****-174362736 | ola?\n\nVocê pode obter as IDs com o comando ${prefix}grupos e você pode mandar arquivos com esse comando.` }

exports.shutdown = () => { return `Ahhh, mas já? Mas tudo bem, vou me desligar em 10 segundos...` }

exports.book = (getBook) => { return `📚 - Titulo: ${getBook.data.volumeInfo.title}\n\n✍️ - Autor: ${getBook.data.volumeInfo.authors[0]}\n\n📅 - Publicado em: ${getBook.data.volumeInfo.publishedDate}\n\n📝 - Publicado por: ${getBook.data.volumeInfo.publisher}\n\n📄 - Paginas: ${getBook.data.volumeInfo.pageCount}\n\n👓 - Ler: ${getBook.data.accessInfo.webReaderLink}\n\n📖 - Descrição: ${getBook.data.volumeInfo.description}\n\n➕ - Saiba mais: ${getBook.data.volumeInfo.canonicalVolumeLink}` }

exports.cors = (user) => { return `Você esqueceu de colocar se quer criativo [1 ou c ou creative], survival [0 ou s ou survival], adventure [2 ou a ou adventure] ou espectador [3 ou spectator].` }

exports.mine = (user) => { return `O modo de jogo de "@${user}" foi definido para ` }

exports.moneyerr = () => { return `❬❗❭ Para usar digite o comando, a sua moeda em sigla e em seguida o valor e tipo da moeda que deseja obter.\n\nExemplo: ${prefix}valor EUR 1USD\n\nDigite ${prefix}coins para ver a lista de moedas que podem ser usadas, inclusive a sua. [É uma lista enormeeeeee].` }

exports.noporn = () => { return `❬❗❭ Se estiver em um grupo e ele permitir pornografia, ok, mas se não permite, não use sites +18 nesse comando.` }

exports.nocrush = () => { return `❬❗❭ Marque o casal de pombinhos ou insira o nome da sua crush!` }

exports.lovepv = (arqs, lvpc) => { return `❤️ A chance de você namorar a consagrada ${arqs[1]} é de ${lvpc}%. 👩‍❤️‍👨` }

exports.love = (arqs, lvpc) => { return `❤️ ${arqs[1]} a sua chance de namorar a morena ${arqs[2]} é de ${lvpc}%. 👩‍❤️‍👨` }

exports.lgbt = (lvpc, guei, lvrq, twgui) => { return `🌈 - Com certeza é ${lvpc}% ${guei} e ${lvrq}% ${twgui}!` }

exports.botmonkey = (body, lvpc) => { return `_De acordo com meus calculos super avançados de ~macaco femea~ robô "cuie" a chance de..._ \n\n*"${body.slice(8)}"*\n\n_...ser realidade é de_ *${lvpc}%.*` }

exports.kiss = (user, arqs) => { return `Acorda pessoal! @${user.replace('@c.us', '')} finalmente cansou de um gado que só olhava e deu um beijo em ${arqs[1]}!` }

exports.tapa = (user, arqs) => { return `Olhaaa a briga! @${user.replace('@c.us', '')} deu um tapasso perfeitamente encaixado em ${arqs[1]}!` }

exports.cmd = () => { return `❬❗❭ Pode ser que esse comando seja muito lento caso você use com "apt" ou programas demorados.` }

exports.onlynumber = () => { return `❬❗❭ Certifique-se de digitar certinho e utilize apenas números para evitar obter possiveis futuros problemas.` }

exports.block = (block) => { return `Adeus @${block} você não é mais bem vindo em minha vida.` }

exports.unblock = (unblock) => { return `Entendido! Agradeça meu dono(a) @${unblock} por ter me mandado te desbloquear do meu WhatsApp.` }

exports.conv = () => { return `_Para usar você deve digitar_ *${prefix}conv [-sigla] [Número para conversão]* _, confira abaixo as siglas e um exemplo._\n\n*-h* _= Esse menu._\n\n*-c* _= Converte de Fahfenheit para Celsius._\n\n*-f* _= Converte Celsius para Fahfenheit._\n\n*-q* _= Converte Milhas para Quilômetros._\n\n*-m* _= Converte Quilômetros para Milhas._\n\n_Exemplo de uso:_ *${prefix}conv -c 113*` }

exports.thanks = () => { return `Agradecemos por informar um de nossos erros, fique atento que quando vermos iremos responder!` }

exports.advise = (nopvne, isgorp, user, body, hppv) => { return `⚠️ _Requisição de suporte feita pelo_ *${nopvne}* _do número_ wa.me/${user.replace('@c.us', '')}.\n\n_Motivo:_ ${body.slice(6)}\nResponda com: ${prefix}enviar ${isgorp} ${hppv} | Coloque aqui a solução` }

exports.needxpon = () => { return `❬❗❭ Para usar um comando desse tipo, peça para seu adminitrador caso você não seja que ative o sistema de XP.` }

exports.tenpeo = () => { return ` Puts, não temos nem 10 "jogadores" ainda, experimente novamente quando obtermos!` }

exports.gainxpm = (args, give) => { return `O player ${args[1]} recebeu a quantidade de @${give} XP.` }

exports.gainxp = (args) => { return `O jogador XP @${args[0]} recebeu a quantidade de ${args[1]} XP.` }

exports.irritouqm = (bgmcomum, args) => { return `Que tristeza, você irritou alguém @${bgmcomum}, reflita sobre seus atos antes de voltar em ${args[0]} minutos, se tiver bloquado a função adicionar o banimento é eterno.` }

exports.irritouml = (mentionedJidList, args) => { return `Que tristeza, você irritou alguém ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}, reflita sobre seus atos antes de voltar em ${args[0]} minutos, se tiver bloquado a função adicionar o banimento é eterno.` }

exports.voltargp = () => { return `Espero que tenha refletido sobre seus erros e repensado o motivo de você estar aqui, se não, seu proximo ban pode ser realmente eterno.` }

exports.timeadd = () => { return `É hora do nosso ~macaco~ querido membro voltar, espero que ele tenha se acalmado.` }

exports.coviderr = () => { return `Para buscar o número de casos, use o nome do País em inglês e sem acentos, para uma lista dos países use ${prefix}paises.` }

exports.covidata = (covidnb) => { return `*✪ Casos no ${covidnb.data.country} >* ${covidnb.data.cases}\n\n*✪ Casos diarios >* ${covidnb.data.todayCases}\n\n*✪ Mortes >* ${covidnb.data.deaths}\n\n*✪ Mortes diarias >* ${covidnb.data.todayDeaths}\n\n*✪ Recuperados >* ${covidnb.data.recovered}\n\n*✪ Ativos >* ${covidnb.data.active}\n\n*✪ Casos criticos >* ${covidnb.data.critical}\n\n*✪ Testes totais >* ${covidnb.data.totalTests}` }

exports.mails = () => { return `O email pode ter sido enviado e eu errei em algo ou ele pode ter obtido um erro ao enviar.` }

exports.usenumber = () => { return `A forma correta de usar isso é inserir apenas números sem traços, letras ou +.` }

exports.nobomb = (pushname, user) => { return `O ${pushname} do número wa.me/${user.replace('@c.us', '')} tentou usar o Bomb em mim ou você.` }

exports.fuckbomb = () => { return `Ah é? Pois saiba que meu dono vai ficar sabendo do que você tentou fazer!` }

exports.bombstd = (args) => { return `Beleza! Pedido recebido e iniciado, o "@${args[0]}" será atacado dentro de alguns segundos!` }

exports.bombend = () => { return `O programa fechou, isso indica um erro, fechamento manual ou termino do ataque` }

exports.letlimit = () => { return `Infelizmente, a quantidade natural de letras que o WhatsApp suporta nessa função é ` }

exports.wpprpt = (command, err) => { return `_Olá, caro dono(a)!_\n_Obtive erros ao executar o comando..._\n\n*${prefix}${command}*\n\n_Peço que corrija por gentileza para podermos usar sem preocupações._\n_Agradecido, Asta._\n\n_Qual erro?_\n\n*${err}*` }

exports.nocmd = (command) => { return `⚠️ O comando ${prefix}${command} não existe, reveja nossa lista em ${prefix}menu para continuar.` }

exports.timealarm = () => { return `Para definir um alarme de lembrete, insira o comando, o tempo em minutos e então o nome do seu alarme separando por |, por exemplo, ${prefix}alarme 60 | Comer.` }

exports.alarmact = (args) => { return `Seu alarme foi ajustado, daqui ${args[0]} minutos irei te mandar um aviso.` }

exports.diamante = (pushname, time) => { return `

➣ Olá *${pushname}*, Bem vindo(a) a *Tabela*!

	Data: *${time}*

╔════════════════╗
║
║   *→ ${prefix}help (mensagem)*
║   	ᐳ Em caso de dúvidas.
║
║    ❗ Prefixo: 「 ! 」
║ 
╠══〘 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒 〙 
║ 
║  
║
║ 
║  
║
╠
╠══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙` }

exports.menu = (pushname, time, theMsg, uzrXp, uneedxp, uzrlvl, mping, patente) => { return `


➣ Olá *${pushname}*, Bem vindo(a) ao *Menu*!

	Data: *${time}*

╔════════════════╗
║
║   *→ ${prefix}help (mensagem)*
║   	ᐳ Em caso de dúvidas.
║
║    ❗ Prefixo: 「 ! 」
║ 
╠══〘 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 〙 
║ 
║   *→ ${prefix}diamante*
║   	ᐳ Tabela de valores.
║
║   *→ ${prefix}referencia*
║      ᐳ Todas nossas referências.
║
║   *→ ${prefix}faq*
║      ᐳ Perguntas frequentes.
║
║
║   *→ ${prefix}outros*
║      ᐳ Perguntas frequentes.
║
╠══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙` }

exports.faq = (pushname, time) => { return `

➣ Olá *${pushname}*, Bem vindo(a) as *Referências*!

	Data: *${time}*

╔════════════════╗
║
║   *→ ${prefix}help (mensagem)*
║   	ᐳ Em caso de dúvidas.
║
║    ❗ Prefixo: 「 ! 」
║ 
╠══〘 𝐅𝐀𝐐 〙 
║ 
║  
║
║ 
║  
║
║
╠══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙` }

exports.referencia = (pushname, time) => { return `


➣ Olá *${pushname}*, Bem vindo(a) as *Referências*!

	Data: *${time}*

╔════════════════╗
║
║   *→ ${prefix}help (mensagem)*
║   	ᐳ Em caso de dúvidas.
║
║    ❗ Prefixo: 「 ! 」
║ 
╠══〘 𝐑𝐄𝐅𝐄𝐑𝐄𝐍𝐂𝐈𝐀𝐒 〙 
║ 
║  
║
║ 
║  
║
║
╠══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙` }

exports.owner = () => { return `╭───「 📓 Apenas o Dono 💻 」\n│\n│ 🧹 - *1° → ${prefix}Clear*\n│ ᐳ _Limparei todas as mensagens._\n│\n│ ✉️ - *2° → ${prefix}Broad <-all/-gps/-pvs> (mensagem|midia)*\n│ ᐳ _Transmissão (Envie arquivos marcando eles)._\n│\n│ 👋 - *3° → ${prefix}Leave*\n│ ᐳ _Se desejar saio de todos os grupos._\n│\n│ 💬 - *4° → ${prefix}Tela*\n│ ᐳ _Peça-me um print da tela de conversas._\n│\n│ 🚫 - *5° → ${prefix}Blocklist*\n│ ᐳ _Saiba quem tentou me ligar, atacar ou floodar._\n│\n│ 🔇 - *6° → ${prefix}MutePV <número sem + ou ->*\n│ ᐳ _Quer que eu ignore alguém no PV?_\n│\n│ 🔘 - *7° → ${prefix}Shutdown*\n│ ᐳ _Posso me desligar se precisar._\n│\n│ 🆙 - *8° → ${prefix}Give <@Pessoa> <Quantidade>*\n│ ᐳ _Envie XP, para remover use <-quantidade>._\n│\n│ 🔪 - *9° → ${prefix}Arquivar*\n│ ᐳ _Quer remover todos os membros? Eu ajudo!_\n│\n│ 💻 - *10° → ${prefix}CMD <comando>*\n│ ᐳ _Rode CMD/Terminal Linux aqui._\n│\n│ 🔒 - *11° → ${prefix}Block <número/marcar mensagem>*\n│ ᐳ _Quer bloquear alguém no meu WhatsApp?_\n│\n│ 🔓 - *12° → ${prefix}Unblock <número/marcar mensagem>*\n│ ᐳ _Quer desbloquear alguém que estava no block?_\n│\n│ ✏️ - *13° → ${prefix}BotNome <Nome>*\n│ ᐳ _Quer me dar um novo nome?_\n│\n│ 📜 - *14° → ${prefix}Recado <descrição>*\n│ ᐳ _Que tal um novo recado de perfil?_\n│\n│ 🖼️ - *15° → ${prefix}BotFoto <Foto>*\n│ ᐳ _Você tem uma nova imagem de perfil pra mim?_\n│\n│ 🌟 - *16° → ${prefix}Exec <func|case|var|let|const...>*\n│ ᐳ _Execute functions, cases ou outros tipos pelo WhatsApp._\n│\n│ 🧑🏻‍💻 - *43° → ${prefix}Github <username>*\n│ ᐳ _Obtenha informações de desenvolvedores._\n│\n╰───────────────────` }

exports.admins = (pushname, time) => { return `

➣ Bem-vindo *${pushname}* aos comandos de *Admins*!

	Data: *${time}*

╔═🥷🏻〘 𝐀𝐃𝐌𝐈𝐍𝐒 〙🥷🏻═╗
║
║
║ *→ ${prefix}kick <@user ou marque mensagem>*
║	ᐳ Expulse bebados do bar.
║
║ *→ ${prefix}unkick <Marque a Mensagem>*
║	ᐳ Volta no tempo, voltando a pessoa junto.
║
║ *→ ${prefix}promote <@user|mensagem>*
║	ᐳ Transforme bebados em administradores.
║
║ *→ ${prefix}sair*
║	ᐳ Se quiser eu saio do barzinho.
║
║ *→ ${prefix}onlyadms [on|off]*
║	ᐳ Feche seu bar para Administradores e vice versa.
║
║ ️*→ ${prefix}demote <@user|mensagem>*
║	ᐳ Demita o gerente do barzinho.
║
║ *→ ${prefix}tagall <assunto>*
║	ᐳ Marque todos os bebados para uma porradaria!
║
║ *→ ${prefix}del [Marque a mensagem do BOT]*
║	ᐳ Delete minhas mensagens.
║
║ *→ ${prefix}setimage <Imagem|Link>*
║	ᐳ Dê ao seu bar uma cara nova!
║
║ *→ ${prefix}revoke*
║	ᐳ Resete o link do bar.
║
║ *→ ${prefix}blacklist <On/Off>*
║	ᐳ Bane os bebados dela ao entrarem no grupo.
║
║ *→ ${prefix}fake <On/Off>*
║	ᐳ Bane números de fora do seu país.
║
║ *→ ${prefix}mute <On/Off>*
║	ᐳ Impede de chamarem o barman Asta BOT.
║
║ *→ ${prefix}welcome <On/Off>*
║	ᐳ Ative o meu modo garçom.
║
║ *→ ${prefix}antiporn <On/Off>*
║	ᐳ Bane pornografia visual e Links.
║
║ *→ ${prefix}Softban <@user|mensagem tempo(m)>*
║	ᐳ Expulsa clientes pelo tempo que desejar.
║
║ *→ ${prefix}add (número)*
║	ᐳ Adicione mais clientes.
║
║ *→ ${prefix}antilinks [on|off]*
║	ᐳ Bane Links de grupo do WhatsApp.
║
║ *→ ${prefix}ghost <minimo de mensagens>*
║	ᐳ Bane os ghost do grupo. _[Ele funciona após o grupo ficar um tempo no grupo]_
║
╚══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙══╝` }

exports.faq = (pushname, time) => { return `

➣ Olá *${pushname}*, Bem vindo(a) as *Referências*!

	Data: *${time}*

╔════════════════╗
║
║   *→ ${prefix}help (mensagem)*
║   	ᐳ Em caso de dúvidas.
║
║    ❗ Prefixo: 「 ! 」
║ 
╠══〘 𝐅𝐀𝐐 〙 
║ 
║  
║
║ 
║  
║
║
╠══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙` }


exports.ttsiv = () => { return `❬❗❭ Você usou uma lingua invalida, de uma olhada no ${prefix}idiomas e tente digitar novamente! ^^` }

exports.recTrava = (user) => { return `Posso ter recebido uma trava de texto pelas mãos do wa.me/${user.replace('@c.us', '')} e então o bloqueei, peço que verifique.` }

exports.baninjusto = (user) => { return `❬❗❭ Caro @${user.replace('@c.us', '')}, você não é mais bem vindo aqui por quebrar a lei, caso ache que seu ban foi injusto contate os administradores deste grupo - não eu.\nRegra = ` }

exports.noctt = () => { return `❬❗❭ O broadcast falhou em alguma parte especifica, mas se algumas mensagens foram enviadas, isso significa que a wa-automate bloqueou o envio, pois enviar mensagens a pessoas que não fazem parte dos contatos é algo que eles deixam de recuso pago.` }

exports.outros = (pushname, time) => { return `

➣ Olá *${pushname}*, Bem vindo(a) aos *Outros Serviços*!

	Data: *${time}*

╔════════════════╗
║
║   *→ ${prefix}help (mensagem)*
║   	ᐳ Em caso de dúvidas.
║
║    ❗ Prefixo: 「 ! 」
║ 
╠══〘 𝐎𝐔𝐓𝐑𝐎𝐒 〙 
║ 
║ ⚠ - EM BREVE MAIS SERVIÇOS
║
║   *→ ${prefix}instagram (mensagem)*
║   	ᐳ Nossos serviços no instagram.
║
║   *→ ${prefix}tiktok (mensagem)*
║   	ᐳ Nossos serviços no tiktok.
║
╠══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙
` }

exports.instagram = (pushname, time) => { return `

➣ Olá *${pushname}*, Bem vindo(a) aos *Serviços Instagram*!

	Data: *${time}*

╔════════════════╗
║
║   *→ ${prefix}help (mensagem)*
║   	ᐳ Em caso de dúvidas.
║
║    ❗ Prefixo: 「 ! 」
║ 
╠══〘 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 〙 
║
║ *→ ${prefix}seguidoresmundi*
║	ᐳ Tabela dos seguidores mundiais.
║
║ *→ ${prefix}seguidoresbr*
║	ᐳ Tabela dos seguidores brasileiros.
║
║ *→ ${prefix}reels*
║	ᐳ Vizualizações no Reels.
║
║ *→ ${prefix}reelslike*
║	ᐳ Curtidas no Reels.
║
║ *→ ${prefix}curtida*
║	ᐳ Curtidas em fotos.
║
║ *→ ${prefix}storys*
║	ᐳ Vizualizações nos storys.
║
╠══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙
` }

exports.instagram = (pushname, time) => { return `

➣ Olá *${pushname}*, Bem vindo(a) aos *Seguidores Mundiais*!

	Data: *${time}*

╔════════════════╗
║
║   *→ ${prefix}help (mensagem)*
║   	ᐳ Em caso de dúvidas.
║
║    ❗ Prefixo: 「 ! 」
║ 
╠══〘 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 〙 
║
║ ⚠ - Tempo pra iniciar - *5 MIN*
║ ⚠ - Garantia do serviço
║   	ᐳ Selo de Qualidade / Publico: *MUNDIAS*
║
║
║ *→ 100 Seguidores | R$8,00 [TESTE]*
║   	ᐳ Só pode ser comprado 1 vez.
║
║ *→ 500 Seguidores | R$12,00*
║ *→ 1.000 Seguidores | R$24,00*
║ *→ 2.000 Seguidores | R$48,00*
║ *→ 3.000 Seguidores | R$68,00*
║ *→ 4.000 Seguidores | R$88,00*
║ *→ 5.000 Seguidores | R$108,00*
║ *→ 10.000 Seguidores | R$200,00*
║ *→ Outros valores à combinar*
║
╠══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙
` }

exports.seguidoresbr = (pushname, time) => { return `

➣ Olá *${pushname}*, Bem vindo(a) aos *Seguidores Brasileiros*!

	Data: *${time}*

╔════════════════╗
║
║   *→ ${prefix}help (mensagem)*
║   	ᐳ Em caso de dúvidas.
║
║    ❗ Prefixo: 「 ! 」
║ 
╠══〘 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 〙 
║
║ ⚠ - Tempo pra iniciar - *5 MIN*
║ ⚠ - Garantia do serviço
║   	ᐳ Selo de Qualidade / Publico: *Homens, Mulheres* / *93% Reais e ativos*
║
║
║ *→ 100 Seguidores | R$10,00 [TESTE]*
║   	ᐳ Só pode ser comprado 1 vez.
║
║ *→ 500 Seguidores | R$20,00*
║ *→ 1.000 Seguidores | R$30,00*
║ *→ 2.000 Seguidores | R$50,00*
║ *→ 3.000 Seguidores | R$70,00*
║ *→ 4.000 Seguidores | R$90,00*
║ *→ 5.000 Seguidores | R$110,00*
║ *→ 10.000 Seguidores | R$210,00*
║ *→ Outros valores à combinar*
║
╠══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙
` }

exports.reels = (pushname, time) => { return `

➣ Olá *${pushname}*, Bem vindo(a) as *Vizualizações do Reels*!

	Data: *${time}*

╔════════════════╗
║
║   *→ ${prefix}help (mensagem)*
║   	ᐳ Em caso de dúvidas.
║
║    ❗ Prefixo: 「 ! 」
║ 
╠══〘 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 〙 
║
║ ⚠ - Tempo pra iniciar - *5 MIN*
║ ⚠ - Garantia do serviço
║   	ᐳ Selo de Qualidade
║
║
║ *→ 100 Visualizações | R$10,00 [TESTE]*
║   	ᐳ Só pode ser comprado 1 vez.
║
║ *→ 500 Visualizações | R$18,00*
║ *→ 1.000 Visualizações | R$36,00*
║ *→ 2.000 Visualizações | R$44,00*
║ *→ 3.000 Visualizações | R$52,00*
║ *→ 4.000 Visualizações | R$60,00*
║ *→ 5.000 Visualizações | R$75,00*
║ *→ 10.000 Visualizações | R$100,00*
║ *→ Outros valores à combinar*
║
╠══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙
` }


exports.reelslike = (pushname, time) => { return `

➣ Olá *${pushname}*, Bem vindo(a) as *Curtidas do Reels*!

	Data: *${time}*

╔════════════════╗
║
║   *→ ${prefix}help (mensagem)*
║   	ᐳ Em caso de dúvidas.
║
║    ❗ Prefixo: 「 ! 」
║ 
╠══〘 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 〙 
║
║ ⚠ - Tempo pra iniciar - *5 MIN*
║ ⚠ - Garantia do serviço
║   	ᐳ Selo de Qualidade
║
║
║ *→ 25 Curtidas | R$10,00 [TESTE]*
║   	ᐳ Só pode ser comprado 1 vez.
║
║ *→ 30 Curtidas | R$15,00*
║ *→ 60 Curtidas | R$25,00*
║ *→ 70 Curtidas | R$35,00*
║ *→ 100 Curtidas | R$50,00*
║ *→ Outros valores à combinar*
║
╠══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙
` }


exports.storys = (pushname, time) => { return `

➣ Olá *${pushname}*, Bem vindo(a) as *Vizualizações do Storys*!

	Data: *${time}*

╔════════════════╗
║
║   *→ ${prefix}help (mensagem)*
║   	ᐳ Em caso de dúvidas.
║
║    ❗ Prefixo: 「 ! 」
║ 
╠══〘 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 〙 
║
║ ⚠ - Tempo pra iniciar - *5 MIN*
║ ⚠ - Garantia do serviço
║   	ᐳ Selo de Qualidade / Publico: *Homens, Mulheres* / *93% Reais e ativos*
║
║
║ *→ 100 Visualizações | R$15,00 [TESTE]*
║   	ᐳ Só pode ser comprado 1 vez.
║
║ *→ 500 Visualizações | R$25,00*
║ *→ 1.000 Visualizações | R$36,00*
║ *→ 2.000 Visualizações | R$44,00*
║ *→ 3.000 Visualizações | R$52,00*
║ *→ 4.000 Visualizações | R$60,00*
║ *→ 5.000 Visualizações | R$75,00*
║ *→ 10.000 Visualizações | R$100,00*
║ *→ Outros valores à combinar*
║
╠══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙
` }

//////////////////////////////////////// tik tok

exports.tiktok1 = (pushname, time) => { return `

➣ Olá *${pushname}*, Bem vindo(a) as *Curtidas do Reels*!

	Data: *${time}*

╔════════════════╗
║
║   *→ ${prefix}help (mensagem)*
║   	ᐳ Em caso de dúvidas.
║
║    ❗ Prefixo: 「 ! 」
║ 
╠══〘 𝐓𝐈𝐊𝐓𝐎𝐊 〙 
║
║ ⚠ - Tempo pra iniciar - *5 MIN*
║ ⚠ - Garantia do serviço
║   	ᐳ Selo de Qualidade / Publico: *Homens, Mulheres* / *90% Reais e ativos*
║
║
║ *→ 25 Curtidas | R$10,00 [TESTE]*
║   	ᐳ Só pode ser comprado 1 vez.
║
║ *→ 30 Curtidas | R$15,00*
║ *→ 60 Curtidas | R$25,00*
║ *→ 70 Curtidas | R$35,00*
║ *→ 100 Curtidas | R$50,00*
║ *→ Outros valores à combinar*
║
╠══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙
` }

exports.tiktok2 = (pushname, time) => { return `

➣ Olá *${pushname}*, Bem vindo(a) aos *Seguidores do Tiktok*!

	Data: *${time}*

╔════════════════╗
║
║   *→ ${prefix}help (mensagem)*
║   	ᐳ Em caso de dúvidas.
║
║    ❗ Prefixo: 「 ! 」
║ 
╠══〘 𝐓𝐈𝐊𝐓𝐎𝐊 〙 
║
║ ⚠ - Tempo pra iniciar - *5 MIN*
║ ⚠ - Garantia do serviço
║   	ᐳ Selo de Qualidade / Publico: *Homens, Mulheres* / *93% Reais e ativos*
║
║
║ *→ 100 Seguidores | R$10,00 [TESTE]*
║   	ᐳ Só pode ser comprado 1 vez.
║
║ *→ 500 Seguidores | R$20,00*
║ *→ 1.000 Seguidores | R$33,00*
║ *→ 2.000 Seguidores | R$53,00*
║ *→ 3.000 Seguidores | R$73,00*
║ *→ 4.000 Seguidores | R$93,00*
║ *→ 5.000 Seguidores | R$120,00*
║ *→ 10.000 Seguidores | R$220,00*
║ *→ Outros valores à combinar*
║
╠══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙
` }

exports.instagram = (pushname, time) => { return `

➣ Olá *${pushname}*, Bem vindo(a) aos *Serviços Tiktok*!

	Data: *${time}*

╔════════════════╗
║
║   *→ ${prefix}help (mensagem)*
║   	ᐳ Em caso de dúvidas.
║
║    ❗ Prefixo: 「 ! 」
║ 
╠══〘 𝐓𝐈𝐊𝐓𝐎𝐊 〙 
║
║ *→ ${prefix}segtiktok*
║	ᐳ Tabela dos seguidores brasileiros.
║
║ *→ ${prefix}liketiktok*
║	ᐳ Curtidas brasileiras.
║
╠══〘 𝐊𝐈𝐍𝐆 𝐃𝐈𝐀𝐌𝐎𝐍𝐃𝐒 〙
` }
