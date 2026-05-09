// data.js — STEP 01: 時制 (Tense) quiz data

const QUIZ_DATA = {

  /* ───── FRAME 001–009 ───── */
  frames: [
    {
      id: 'f001', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 001', tagClass: 'tag-f',
      question: 'I ( ) in France for three years when I was a child, but I can\'t speak French at all.',
      options: ['have been', 'lived', 'have once stayed', 'went'],
      answer: 1, source: '奥羽大',
      translation: '私は子どものころ，3年間フランスに住んでいたが，フランス語はまったく話せない。',
      explanation: 'when以下より過去の内容であることがわかるので，過去形②livedを選ぶ。現在完了形は今の状況を示すので，①，③は誤り。④went「行った」はfor three years「3年間」と合わないので，誤り。'
    },
    {
      id: 'f002', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 002', tagClass: 'tag-f',
      question: 'He ( ) the book when I came here.',
      options: ['will read', 'was reading', 'has read', 'has been reading'],
      answer: 1, source: '東京農業大',
      translation: '私がここに来たとき，彼は本を読んでいた。',
      explanation: '空所に入る語はwhen以下が表す過去のある時点で進行していた動作を表すので，過去進行形②was readingを選ぶ。'
    },
    {
      id: 'f003', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 003', tagClass: 'tag-f',
      question: 'We will go outside when it ( ) raining.',
      options: ['stop', 'stops', 'stopping', 'stopped'],
      answer: 1, source: '東海大',
      translation: '雨があがったら，私たちは出かけるだろう。',
      explanation: 'when節は時を表す副詞節なので，未来のことでも現在形を用いる。主語itが3人称単数なので，②stopsを選ぶ。'
    },
    {
      id: 'f004', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 004', tagClass: 'tag-f',
      question: 'She ( ) the flower arrangement club.',
      options: ['belongs', 'belongs to', 'is belonging', 'is belonging to'],
      answer: 1, source: '共立女子大',
      translation: '彼女は華道部に所属している。',
      explanation: 'belong「所属する」は〈状態〉を表す動詞であり，原則として進行形にはできないので，現在形②belongs toを選ぶ。belongs to〜で「〜に所属する」という意味。'
    },
    {
      id: 'f005', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 005', tagClass: 'tag-f',
      question: 'She was ( ) to go out when it started raining.',
      options: ['almost', 'anyway', 'all', 'about'],
      answer: 3, source: '駒澤大',
      translation: '雨が降り出したとき，彼女は外出しようとしていたところだった。',
      explanation: 'be about to doで「まさに…するところだ」という意味を表すので，④aboutを選ぶ。'
    },
    {
      id: 'f006', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 006', tagClass: 'tag-f',
      question: 'It ( ) three years since the severe drought caused damage in the area.',
      options: ['has', 'is being', 'has been', 'has being'],
      answer: 2, source: '大東文化大',
      translation: '深刻な干ばつがその地域に被害を与えてから3年になる。',
      explanation: '「深刻な干ばつがその地域に被害を与えて」から現在までの〈状態の継続〉を表すように，現在完了形③has beenを選ぶ。'
    },
    {
      id: 'f007', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 007', tagClass: 'tag-f',
      question: 'Since Bob graduated from college last year, he ( ) around Asia.',
      options: ['is traveling', 'had been traveling', 'has been traveling', 'was traveling'],
      answer: 2, source: '玉川大',
      translation: 'ボブは去年大学を卒業して以来，アジア中をずっと旅行している。',
      explanation: '「ボブが去年大学を卒業して」から現在まで，「旅行する」という動作が継続していることを表すように，現在完了進行形③has been travelingを選ぶ。'
    },
    {
      id: 'f008', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 008', tagClass: 'tag-f',
      question: 'Before I arrived at the airport, the plane ( ).',
      options: ['had left', 'has left', 'will be left', 'will have left'],
      answer: 0, source: '奥羽大',
      translation: '私が空港に着く前に，飛行機は出発してしまっていた。',
      explanation: '「私が空港に着いた」ときより前に，飛行機が「出発してしまっていた」ということなので，過去のある時点までの〈完了〉を表す，過去完了形①had leftを選ぶ。'
    },
    {
      id: 'f009', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 009', tagClass: 'tag-f',
      question: 'By next week you ( ) the package.',
      options: ['will have received', 'receiving', 'received', 'have received'],
      answer: 0, source: '南山大',
      translation: '来週までに，あなたは小包を受け取っているだろう。',
      explanation: 'By next weekより，未来のある時点までの〈完了〉を表す，未来完了形①will have receivedを選ぶ。'
    }
  ],

  /* ───── EXERCISE A 01–21 ───── */
  exA: [
    {
      id: 'a01', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 01', tagClass: 'tag-a',
      question: 'The famous author ( ) the science fiction novel two years ago.',
      options: ['has been writing', 'writes', 'wrote', 'has written'],
      answer: 2, source: '東海大',
      translation: 'その有名な作家は2年前にそのSF小説を書いた。',
      explanation: 'two years agoと過去のある時点を表す表現があるので，過去形③wroteを選ぶ。現在完了形を用いることはできないので，④has writtenは不可。'
    },
    {
      id: 'a02', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 02', tagClass: 'tag-a',
      question: 'Sandy ( ) in the library when I saw her two hours ago.',
      options: ['was studying', 'has studied', 'has been studying', 'is studying'],
      answer: 0, source: '北里大',
      translation: '私がサンディーを2時間前に見かけたとき，彼女は図書館で勉強していた。',
      explanation: 'when以下が過去のある時点を表しているので，その時点で進行していた動作を表すように，過去進行形①was studyingを選ぶ。'
    },
    {
      id: 'a03', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 03', tagClass: 'tag-a',
      question: 'My brother ( ) beaten by me at tennis.',
      options: ['has never been', 'never have been', 'has been never', 'have never been'],
      answer: 0, source: '桜美林大',
      translation: '兄〔弟〕はテニスで私に負かされたことが1度もない。',
      explanation: 'neverを用いた現在完了の文で受動態にもなっている。否定の副詞neverはhasとbeenの間に入るので，①has never beenを選ぶ。'
    },
    {
      id: 'a04', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 04', tagClass: 'tag-a',
      question: 'I\'ll wait here until you ( ).',
      options: ['will come back', 'come back', 'are coming back', 'will have come back'],
      answer: 1, source: '玉川大',
      translation: 'あなたが戻ってくるまで，私はここで待っています。',
      explanation: 'until「…まで」は時を表す副詞節を導くので，未来のことでも現在形を用いる。したがって②come backを選ぶ。'
    },
    {
      id: 'a05', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 05', tagClass: 'tag-a',
      question: 'You have to return the book as soon as you ( ) reading it.',
      options: ['are finishing', 'had finished', 'will finish', 'have finished'],
      answer: 3, source: '東京歯科大',
      translation: 'あなたはその本を読み終えたらすぐに返却しなければならない。',
      explanation: 'as soon as ...「…するとすぐに」は時を表す副詞節を導くので，未来のことでも現在形を用いる。ここでは完了の意味が含まれ，その場合は未来完了形の代わりに現在完了形を用いるので，④have finishedを選ぶ。'
    },
    {
      id: 'a06', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 06', tagClass: 'tag-a',
      question: 'I don\'t know if he ( ) us next Sunday.',
      options: ['visit', 'will visit', 'will have visit', 'visits'],
      answer: 1, source: '関西大',
      translation: '私は彼が今度の日曜日に私たちを訪ねてくるのかどうかわからない。',
      explanation: 'このifは「…するかどうか」という意味で，knowの目的語となる名詞節を導く接続詞。名詞節の場合は，未来のことは未来形で表すので，②will visitを選ぶ。'
    },
    {
      id: 'a07', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 07', tagClass: 'tag-a',
      question: 'Tom and Mary ( ) each other since childhood.',
      options: ['are knowing', 'have known', 'are known', 'know'],
      answer: 1, source: '松山大',
      translation: 'トムとメアリーは子どものころからお互い知り合いだ。',
      explanation: '「子どものころ」から現在までの〈状態の継続〉を表すように，現在完了形②have knownを選ぶ。'
    },
    {
      id: 'a08', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 08', tagClass: 'tag-a',
      question: 'I have just ( ) to Hakata Station to see my girlfriend off.',
      options: ['go', 'going', 'went', 'been'],
      answer: 3, source: '日本大',
      translation: '私はガールフレンドを見送りに博多駅まで行ってきたところだ。',
      explanation: 'haveとjustに着目し，〈完了〉を表す現在完了形になるように，④beenを選ぶ。'
    },
    {
      id: 'a09', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 09', tagClass: 'tag-a',
      question: 'My father usually ( ) home from work at 7:00 p.m.',
      options: ['coming', 'comes', 'come', 'has come'],
      answer: 1, source: '甲南大',
      translation: '私の父は普段は午後7時に仕事から帰宅する。',
      explanation: '現在の習慣的行為を表す現在形にする。主語は3人称単数なので，②comesを選ぶ。'
    },
    {
      id: 'a10', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 10', tagClass: 'tag-a',
      question: 'At this time next Friday I ( ) in Canada.',
      options: ['am skiing', 'have skied', 'ski', 'will be skiing'],
      answer: 3, source: '大阪国際大',
      translation: '次の金曜日の今ごろは，私はカナダでスキーをしているだろう。',
      explanation: 'At this time next Friday「次の金曜日の今ごろ」という未来のある時点において進行中の動作を表すように，未来進行形④will be skiingを選ぶ。'
    },
    {
      id: 'a11', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 11', tagClass: 'tag-a',
      question: '"Did you know that Albert Einstein, the famous physicist, ( ) meat?" "Yes, if my memory serves, he became a strict vegetarian one year before he died."',
      options: ["hadn't stopped eating", 'has been stopped from eating', 'has stopped eating', 'stopped eating'],
      answer: 3, source: 'センター試験',
      translation: '「有名な物理学者のアルバート・アインシュタインが肉を食べるのをやめたということを知っていましたか」「ええ，私の記憶が正しければ，彼は亡くなる1年前に厳格な菜食主義者になったのです」',
      explanation: 'Did you know ...? とあるので，that節は過去形か過去完了形になる。ここでは，過去の内容を表す④stopped eatingを選ぶ。①では2つ目の発言と内容がつながらないので不可。現在完了形は今の状態を表すので，②，③は不可。'
    },
    {
      id: 'a12', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 12', tagClass: 'tag-a',
      question: 'Emily was ( ) to go out when the telephone rang.',
      options: ['about', 'close', 'for', 'used'],
      answer: 0, source: '神奈川工業大',
      translation: '電話が鳴ったとき，エミリーは外出しようとしていたところだった。',
      explanation: 'be about to doで「まさに…するところだ」という意味を表すので，①aboutを選ぶ。'
    },
    {
      id: 'a13', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 13', tagClass: 'tag-a',
      question: 'It ( ) ten years since the two companies merged.',
      options: ['has been', 'has passed', 'is passed', 'passed'],
      answer: 0, source: '青山学院大',
      translation: 'その2社が合併してから10年になる。',
      explanation: '「その2社が合併して」から現在までの〈状態の継続〉を表すように，①has beenを選ぶ。passを用いる場合は，Ten years have passed since ... という形になる。'
    },
    {
      id: 'a14', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 14', tagClass: 'tag-a',
      question: 'Since I forgot to pay the annual fee, this membership card ( ) last Monday.',
      options: ['expired', 'has expired', 'has been expired', 'has been expiring'],
      answer: 0, source: '杏林大',
      translation: '年会費を支払うのを忘れてしまったので，この会員カードは有効期限がこの前の月曜日で切れてしまった。',
      explanation: 'last Mondayという過去のある時点を表す表現があるので，過去形①expiredを選ぶ。ここでのSinceは「…ので」と理由を表す接続詞。'
    },
    {
      id: 'a15', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 15', tagClass: 'tag-a',
      question: 'Two months ( ) since Bob promised to pay his debt.',
      options: ['have passed', 'pass', 'passed', 'would pass'],
      answer: 0, source: '日本女子大',
      translation: 'ボブが借金を返すと約束してから2か月が経った。',
      explanation: '「ボブが借金を返すと約束して」から現在までの〈状態の継続〉を表すように，現在完了形①have passedを選ぶ。'
    },
    {
      id: 'a16', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 16', tagClass: 'tag-a',
      question: 'My father has been dead ( ) seven years.',
      options: ['since', 'in', 'on', 'for'],
      answer: 3, source: '東京工芸大',
      translation: '私の父は亡くなって7年になる。',
      explanation: 'has been deadは〈状態の継続〉を表す現在完了形。「死んだ状態が7年間続いている」と考え，「〜の間」を表す④forを選ぶ。'
    },
    {
      id: 'a17', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 17', tagClass: 'tag-a',
      question: 'Paul\'s yacht ( ) at Hawaii by the end of next March.',
      options: ['arrived', 'has arrived', 'used to arrive', 'will have arrived'],
      answer: 3, source: '日本大',
      translation: 'ポールのヨットは次の3月末までにはハワイに着いていることだろう。',
      explanation: 'by the end of next Marchより，未来のある時点までの〈完了〉を表すように，未来完了形④will have arrivedを選ぶ。'
    },
    {
      id: 'a18', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 18', tagClass: 'tag-a',
      question: 'We are all tired of snow. It ( ) for four weeks now.',
      options: ['has been snowing', 'is snowing', 'snowed', 'will be snowing'],
      answer: 0, source: '明治大',
      translation: '私たちはすっかり雪にはうんざりしている。もう4週間も雪が降り続いている。',
      explanation: 'for four weeksに着目し，現在まで「雪が降る」という動作が継続していることを表すように，現在完了進行形①has been snowingを選ぶ。'
    },
    {
      id: 'a19', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 19', tagClass: 'tag-a',
      question: 'She didn\'t want to go to the movies with us because she ( ) the film before.',
      options: ['had seen', 'sees', 'was seen', 'will see'],
      answer: 0, source: '明星大',
      translation: '彼女は前にその映画を見たことがあったので，私たちと一緒に映画に行きたいと思わなかった。',
      explanation: '過去のある時点より前に「見たことがあった」ということなので，過去のある時点までの〈経験〉を表すように，過去完了形①had seenを選ぶ。'
    },
    {
      id: 'a20', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 20', tagClass: 'tag-a',
      question: 'They ( ) here until quite recently.',
      options: ['been', 'were', 'will be', 'are'],
      answer: 1, source: '上智大',
      translation: '彼らはごく最近までここにいた。',
      explanation: 'until quite recently「ごく最近まで」より，過去の状態を表すように，過去形②wereを選ぶ。'
    },
    {
      id: 'a21', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 21', tagClass: 'tag-a',
      question: 'His mother and father ( ) already when he showed up.',
      options: ['are leaving', 'have been left', 'had left', 'will be leaving'],
      answer: 2, source: '東海大',
      translation: '彼の母親と父親は，彼が現れたときにすでに立ち去ってしまっていた。',
      explanation: 'when以下で表される過去のある時点までに「すでに立ち去っていた」ということなので，過去のある時点までの〈完了〉を表すように，過去完了形③had leftを選ぶ。'
    }
  ],

  /* ───── EXERCISE B 01–06 ───── */
  exB: [
    {
      id: 'b01', type: 'exB', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 01', tagClass: 'tag-b',
      question: 'We ①will notify you ②as soon as we ③will have further ④information.',
      options: ['①', '②', '③', '④'],
      answer: 2, source: '学習院大',
      correction: '③ will have → have',
      translation: '私たちがさらに情報を得たらすぐにあなたにお知らせします。',
      explanation: 'as soon as ...「…するとすぐに」は時を表す副詞節を導き，未来のことでも現在形を用いるので，③will haveは現在形haveにする。'
    },
    {
      id: 'b02', type: 'exB', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 02', tagClass: 'tag-b',
      question: '①When Mr. Brown came to the school ②in 1980, Ms. Carter ③has already been teaching there ④for ten years.',
      options: ['①', '②', '③', '④'],
      answer: 2, source: '東海大',
      correction: '③ has already been teaching → had already been teaching',
      translation: 'ブラウン先生が1980年に学校に来たとき，カーター先生はすでにそこで10年間教えていた。',
      explanation: '「ブラウン先生が学校に来た」ときには，カーター先生は「すでに10年間教えていた」ということなので，過去のある時点までの〈動作の継続〉を表すように，③has already been teachingは過去完了進行形のhad already been teachingにする。'
    },
    {
      id: 'b03', type: 'exB', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 03', tagClass: 'tag-b',
      question: 'If ①it ②will rain tomorrow, our athletic meet ③will ④be put off.',
      options: ['①', '②', '③', '④'],
      answer: 1, source: '東海大',
      correction: '② will rain → rains',
      translation: 'もし明日雨が降ったら，私たちの運動会は延期されるだろう。',
      explanation: 'If節は条件を表す副詞節で，tomorrow「明日」という未来のことでも現在形を用いるので，②will rainは現在形のrainsにする。'
    },
    {
      id: 'b04', type: 'exB', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 04', tagClass: 'tag-b',
      question: '①Many of the passengers ②have been sleeping when the pilot announced they ③were almost ④at the destination.',
      options: ['①', '②', '③', '④'],
      answer: 1, source: '麗澤大',
      correction: '② have been sleeping → were sleeping',
      translation: 'パイロットがほぼ目的地にいると告げたとき，乗客の多くは眠っていた。',
      explanation: 'when以下は過去のある時点での出来事を表しているので，主節は過去のある時点での進行中の動作を表す過去進行形となるように，②have beenはwereにする。'
    },
    {
      id: 'b05', type: 'exB', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 05', tagClass: 'tag-b',
      question: 'By ①the ②1890s, the movement ③has ④spread to Europe and North America.',
      options: ['①', '②', '③', '④'],
      answer: 2, source: '上智大',
      correction: '③ has → had',
      translation: '1890年代までには，その運動はヨーロッパと北アメリカに広まっていた。',
      explanation: 'By the 1890s「1890年代までには」とあるので，過去のある時点までの〈完了〉を表す過去完了形になるように，③hasをhadにする。'
    },
    {
      id: 'b06', type: 'exB', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 06', tagClass: 'tag-b',
      question: 'For two years the play ①has been performed continuously ②at a small theater in New York, but then was ③turned into a Hollywood movie, ④appealing to audiences world wide.',
      options: ['①', '②', '③', '④'],
      answer: 0, source: '中央大',
      correction: '① has been performed → had been performed',
      translation: 'ニューヨークの小さな劇場で2年間上演され続けていたその劇は，今度は世界中の観客を魅了するハリウッド映画に改編された。',
      explanation: 'had been performed「上演されていた」とwas turned into「改編された」という2つの過去の出来事の時間的な前後関係を明確にするために，前に起こった①has been performedを過去完了形had been performedにする。'
    }
  ],

  /* ───── EXERCISE C 01–07 ───── */
  exC: [
    {
      id: 'c01', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 01', tagClass: 'tag-c',
      japanese: '昨年以来，ビタミン剤を飲んでいる。',
      prefix: '', suffix: 'year.',
      words: ['been', 'have', 'I', 'last', 'since', 'supplements', 'taking', 'vitamin'],
      note: null, source: '金沢工業大',
      answer: 'I have been taking vitamin supplements since last year.',
      explanation: '「昨年以来」はsince last yearで表す。「飲んでいる」は過去のある時点から現在までの〈動作の継続〉を表す現在完了進行形にする。'
    },
    {
      id: 'c02', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 02', tagClass: 'tag-c',
      japanese: '読書を始めて1時間経ったとき，彼が私の部屋に入ってきた。',
      prefix: 'I', suffix: 'into my room.',
      words: ['an hour', 'been', 'came', 'for', 'had', 'he', 'reading', 'when'],
      note: null, source: '龍谷大',
      answer: 'I had been reading for an hour when he came into my room.',
      explanation: '「彼が私の部屋に入ってきたとき，1時間読書をし続けていた」と考え，主節は過去のある時点までの〈動作の継続〉を表す過去完了進行形にする。'
    },
    {
      id: 'c03', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 03', tagClass: 'tag-c',
      japanese: '私がバス停に着いたらバスはもう出ていた。〔2語不要〕',
      prefix: 'When', suffix: '',
      words: ['I', 'the bus stop,', 'left', 'had', 'arrived', 'the bus', 'got', 'at', 'already', 'has'],
      note: 'gotとhasが不要', source: '名古屋造形大',
      answer: 'When I arrived at the bus stop, the bus had already left.',
      explanation: '「私がバス停に着いたら」は過去の出来事を表すので，arrivedと過去形で表す。「バスはもう出ていた」は過去完了形にする。get to〜で「〜に到着する」となり，前置詞toがないので，gotは使えない。'
    },
    {
      id: 'c04', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 04', tagClass: 'tag-c',
      japanese: null,
      prefix: 'This time next year', suffix: '.',
      words: ['through', 'be', 'will', 'traveling', 'my parents', 'Europe'],
      note: null, source: '獨協大',
      answer: 'This time next year my parents will be traveling through Europe.',
      translation: '来年の今ごろは，私の両親はヨーロッパ中を旅行していることだろう。',
      explanation: 'This time next yearは未来のある時点を表すので，その時点での進行中の動作を表す未来進行形にする。'
    },
    {
      id: 'c05', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 05', tagClass: 'tag-c',
      japanese: null,
      prefix: 'The past two centuries', suffix: 'the range of garden plants.',
      words: ['in', 'seen', 'immense', 'have', 'an', 'increase'],
      note: null, source: '上智大',
      answer: 'The past two centuries have seen an immense increase in the range of garden plants.',
      translation: 'この2世紀で，園芸植物の種類はかなり増加してきた。',
      explanation: '現在までの〈状態の継続〉を表す現在完了形にする。seeには「（時代などが）〜を目撃する」という意味がある。'
    },
    {
      id: 'c06', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 06', tagClass: 'tag-c',
      japanese: 'あなたの息子さんは来月でどれくらいその会社に勤めたことになりますか。',
      prefix: 'How long', suffix: 'at that company by next month?',
      words: ['working', 'your son', 'will', 'been', 'have'],
      note: null, source: '日本大',
      answer: 'How long will your son have been working at that company by next month?',
      explanation: 'How long ... ? は「どのくらいの間…」の意の疑問文である。by next month「来月(まで)で」という未来を表す表現があるので，助動詞willを用いた未来完了進行形になる。'
    },
    {
      id: 'c07', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 07', tagClass: 'tag-c',
      japanese: 'まさに列車が発車しようとしていたときに地震が起きた。',
      prefix: '', suffix: ', there was an earthquake.',
      words: ['train', 'about', 'to leave', 'was', 'the', 'just as'],
      note: null, source: '福岡大',
      answer: 'Just as the train was about to leave, there was an earthquake.',
      explanation: 'be about to doで「…しようとしている」という意味で，差し迫った未来を表す。Just as ...は「まさに…するとき」。'
    }
  ]
};
