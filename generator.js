

    paragraphs = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus suscipit mattis. Nam ullamcorper mattis orci vel fermentum. Donec feugiat augue nunc, et efficitur risus bibendum vitae. Nulla maximus convallis nisi sed pretium. Suspendisse dictum vehicula lacinia. Maecenas consequat dolor elementum felis pretium cursus. Nam rhoncus quam ligula, consequat vehicula leo consequat nec. Cras feugiat tortor eu placerat mollis.",
        "Nulla eget placerat felis. Duis pulvinar tempor purus, vel posuere augue posuere nec. Aliquam sit amet felis eu nisi rutrum vulputate ut eget leo. Sed vitae purus volutpat, rutrum dolor id, lacinia tortor. Sed venenatis odio ipsum, quis maximus ipsum convallis vitae. Pellentesque molestie interdum nulla, at lobortis metus porta nec. Maecenas vitae tellus volutpat, faucibus ipsum luctus, tempor nulla. Mauris euismod tortor ut dictum vehicula. Nulla facilisi. Aenean quis pellentesque dolor, id faucibus tellus. Mauris convallis ex id magna tempor, nec elementum sapien viverra. Proin tristique turpis leo, et maximus sapien sodales vitae. Nulla aliquam nisl faucibus feugiat malesuada. Suspendisse laoreet ante in sagittis auctor. Donec finibus convallis justo in convallis.",
        "Nulla tincidunt velit nec ligula ultrices eleifend. Praesent auctor, libero ac commodo vehicula, augue ex lobortis augue, eu congue ligula mauris facilisis erat. Curabitur ac dapibus odio. Vivamus mattis, diam vel pretium aliquet, nulla sapien sollicitudin justo, eu mattis tortor turpis et arcu. Fusce nec quam bibendum, ullamcorper nibh eu, fermentum nisi. Donec quis elit lorem. Donec facilisis suscipit mauris vitae ultrices. Aenean consectetur diam vel lacus aliquet, gravida vehicula nunc tincidunt. Fusce lobortis nisi id justo vulputate facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ligula sem, efficitur a laoreet feugiat, vulputate quis lorem. Vivamus eu diam quis turpis facilisis pharetra et sit amet augue. Vivamus arcu purus, ultrices vel leo vitae, placerat pretium purus. Quisque eu risus et mauris pharetra molestie sed in justo.",
        "Phasellus ut lacus enim. Pellentesque luctus non tortor ut scelerisque. Ut nec massa hendrerit felis imperdiet feugiat quis a nibh. Donec ac luctus sapien, vel cursus metus. Curabitur volutpat, diam vitae viverra bibendum, urna nisi cursus quam, sit amet pulvinar purus est nec libero. Curabitur mi dui, volutpat quis mauris at, rhoncus convallis nisi. Morbi tortor diam, ultricies a maximus eu, placerat vitae tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. In arcu turpis, accumsan sit amet magna a, vulputate egestas ante. Curabitur at laoreet lectus. Aenean sit amet faucibus risus. Vivamus cursus sapien ut ligula consequat hendrerit.",
        "Curabitur venenatis justo diam, in egestas justo fermentum ut. Nulla facilisi. Curabitur consequat, mauris vel viverra mattis, mauris mi pretium lacus, quis gravida est dolor eget tellus. Duis scelerisque ante id aliquam interdum. Etiam placerat tellus id justo blandit, ut tincidunt justo tempus. Vivamus molestie tincidunt iaculis. Cras scelerisque augue sed fringilla aliquet. Maecenas pretium tincidunt elit non pharetra. Integer et sapien eu ex facilisis viverra dapibus sit amet nunc.",
        "Fusce nec urna ac est ultrices sagittis nec et ligula. Quisque a nibh sagittis purus euismod volutpat vitae non ipsum. Duis tempus est at luctus ultrices. Vivamus tincidunt, sem eget sagittis gravida, nibh mi semper magna, in egestas purus velit vel risus. Mauris pellentesque tempus tortor vel accumsan. Nulla sed lorem vulputate, luctus risus quis, ultrices ante. Fusce lobortis mauris et nibh euismod, vel pretium sapien accumsan. Sed vestibulum nulla et molestie aliquam. Sed et maximus mauris. Pellentesque tempor mauris nec scelerisque tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et ultrices eros, et pellentesque enim. Proin condimentum lacus magna, id malesuada tellus commodo a. Fusce ac leo libero.",
        "Nam quis felis sem. Nam lacinia, metus quis ornare congue, nunc ligula vehicula lacus, sit amet malesuada ipsum mauris ut neque. In elementum, nibh quis ultrices porta, ipsum tortor tincidunt lacus, non ornare elit augue eu ligula. Etiam eleifend mi eu odio scelerisque volutpat in a erat. Ut tempus orci nibh, pharetra ultricies odio aliquam nec. Pellentesque in dignissim arcu. Nulla quis aliquam nisl.",
        "Nam euismod, nunc sit amet viverra lacinia, massa erat dapibus erat, non feugiat nulla neque in nisi. Duis ac odio tempor, iaculis sapien ac, pretium tellus. Etiam ornare elit eget libero scelerisque bibendum. Aenean tincidunt enim faucibus mauris congue semper. Praesent accumsan, dolor et condimentum tristique, mi dui iaculis lacus, quis facilisis odio justo sit amet lectus. Donec et rutrum libero. Vestibulum sollicitudin libero id accumsan eleifend. Duis suscipit dignissim nibh, non tincidunt elit ultricies quis. Duis lobortis dignissim ante, vel porttitor tortor consequat sit amet. Suspendisse ex dolor, ultrices non varius quis, sagittis nec risus. Sed luctus dictum arcu, ac laoreet orci rhoncus rutrum. Vivamus varius, erat facilisis pulvinar imperdiet, libero risus cursus urna, ut sollicitudin velit purus vitae arcu. Integer sodales ut velit eget vulputate."
     ];

  function getRandomParagraph() { 
    let randomParagraph = this.paragraphs[Math.floor(Math.random() * this.paragraphs.length)]
      return randomParagraph;
  }

function getWords(numberOfWords){
    let words = "";
    let randomPar = getRandomParagraph()
    wordsInParagraph = randomPar.split(' ')
    for (var i = 0; i < numberOfWords; i++) {
        if (words === '') {
            words = wordsInParagraph[Math.floor(Math.random() * wordsInParagraph.length)]
        }
        words = words.concat(" " + wordsInParagraph[Math.floor(Math.random() * wordsInParagraph.length)])
    }
    return "<p>" + words + ".</p>"
}

function getSentences(numberOfSentences){
    let sentences = '';
    let randomPar = getRandomParagraph()
    sentencesInParagraph = randomPar.split('. ')
    for (var i = 0; i < numberOfSentences; i++) {
        if (sentences === '') {
            sentences = sentencesInParagraph[Math.floor(Math.random() * sentencesInParagraph.length)]
        }
        sentences = sentences.concat('. ' + sentencesInParagraph[Math.floor(Math.random() * sentencesInParagraph.length)])
    }
    return "<p>" + sentences + ".</p>"
}

  function getParagraphs(numberOfParagraphs) {
    let allParagraphs = [];
    // Generate the number of paragraphs as specified by the user
    for (var i=0; i < numberOfParagraphs; i++) {
      allParagraphs.push(getRandomParagraph());
    }
    // Convert array into HTML string
    let paragraphHTML = "";
    allParagraphs.forEach(function (paragraph) {
      paragraphHTML += "<p>" + paragraph + "</p>";
    });
    return paragraphHTML;
  }

module.exports.getWords = getWords;
module.exports.getSentences = getSentences;
module.exports.getParagraphs = getParagraphs;