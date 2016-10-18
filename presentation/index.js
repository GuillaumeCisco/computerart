// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Fit,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text,
    S
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
    monochrome: require('../assets/white-monochrome.jpg'),
    rage: require('../assets/Derpina-rage-comic-joke.jpg'),
    bg: require('../assets/bg.jpg'),
};

preloader(images);

// clear blue: #00abc9
// dark blue: #104974
// dark grey: #56595c

const clearBlue = '#00abc9',
    darkBlue = '#104974',
    darkGrey = '#56595c';

let theme = createTheme({
    primary: darkBlue,
    secondary: clearBlue,
    tertiary: darkGrey
});


theme.screen.components.quote.color = clearBlue;
theme.screen.components.cite.color = 'white';

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme} style={{backgroundImage: images.bg.replace("/", "")}}>
                <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="number" controls={true}>
                    <Slide transition={["slide"]} bgImage={images.bg.replace("/", "")}>
                        <Heading size={1} fit caps textColor="white" margin={'0 0 60px 0'}>
                            Computer Science and Art
                        </Heading>
                        <Heading size={2} fit caps textColor={clearBlue}>
                            Science and Computer Programming
                        </Heading>
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.bg.replace("/", "")}>
                        <Heading size={1} caps textColor="white" margin={'0 0 60px 0'}>
                            Why?
                        </Heading>
                        <Image src={images.rage.replace("/", "")} margin="0 auto" height="600px"/>
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.bg.replace("/", "")}
                           notes="Art is the root for Technology and Technique.">
                        <Heading size={1} caps textColor="white" margin={'0 0 60px 0'}>
                            What is art?
                        </Heading>
                        <Appear>
                            <Text textColor="white">Art is opposed to Nature and to...</Text>
                        </Appear>
                        <Appear>
                            <Heading textColor="secondary" size={4} margin={'20px 0 0 0'}>SCIENCE</Heading>
                        </Appear>
                        <Appear>
                            <Text textColor="white" margin={'40px 0 0 0'}>But Art tends towards <span style={{color: clearBlue}}><S type="underline">beauty</S></span>...</Text>
                        </Appear>
                        <Appear style={{width: '50%'}}>
                            <Text textColor="white" textAlign="left" margin="30px auto 20px">
                                Latin: ars, artis, <S type="strikethrough">artemis</S><br/>
                                Greek: τεχνη
                            </Text>
                        </Appear>
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.bg.replace("/", "")}>
                        <Heading size={1} textColor="white">Differents art theme</Heading>
                        <Layout>
                            <Fill>
                                <div style={{padding: '20px 40px'}}>
                                    <Heading textColor="white" size={6} textAlign="left">Fine Art</Heading>
                                    <List textColor="white">
                                        <ListItem>painting</ListItem>
                                        <ListItem>sculpture</ListItem>
                                    </List>
                                </div>
                            </Fill>
                            <Fill>
                                <div style={{padding: '20px 40px'}}>
                                    <Heading textColor="white" size={6} textAlign="left">Liberal Art</Heading>
                                    <List textColor="white">
                                        <ListItem>grammar</ListItem>
                                        <ListItem>rhetoric</ListItem>
                                        <ListItem>logic</ListItem>
                                        <ListItem>arithmetic</ListItem>
                                        <ListItem>geometry</ListItem>
                                        <ListItem>music</ListItem>
                                        <ListItem>astronomy</ListItem>
                                    </List>
                                </div>
                            </Fill>
                        </Layout>
                        <Heading textColor="white" size={7} textAlign="left">Manual Art: plowing</Heading>
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.bg.replace("/", "")}>
                        <BlockQuote>
                            <Quote>
                                It was once thought that the imaginative outlook of the artist was death for the
                                scientist.
                                And the logic of science seemed to spell doom to all possible artistic flights of fancy.
                            </Quote>
                            <Cite>
                                Robert E. Mueller, The Science of Art
                            </Cite>
                        </BlockQuote>
                    </Slide>
                    <Slide transition={["none"]} bgImage={images.bg.replace("/", "")}>
                        <Heading textColor="white" size={1} fit margin={'0 0 60px 0'}>
                            White Monochrome (Li Yuan-chia)
                        </Heading>
                        <Image src={images.monochrome.replace("/", "")} margin="0 auto" height="600px"/>
                        <Link textColor="tertiary" target="_blank"
                              href="http://www.tate.org.uk/art/artworks/li-monochrome-white-painting-t11871">http://www.tate.org.uk/art/artworks/li-monochrome-white-painting-t11871</Link>
                    </Slide>
                    <Slide transition={["none"]} bgImage={images.bg.replace("/", "")}>
                        <Heading textColor="white" size={1} fit margin={'0 0 60px 0'}>
                            Whitespace (programming language)
                        </Heading>
                        <CodePane
                            lang="whitespace"
                            source={require("raw!../assets/whitespace")}
                            margin="20px auto"
                            style={{backgroundColor: 'rgb(229, 234, 255)'}}
                        />
                        <Text textColor="white">This code prints Hello World</Text>
                    </Slide>
                    <Slide transition={['none']} bgImage={images.bg.replace("/", "")}>
                        <Heading textColor="white" size={1} fit margin={'0 0 60px 0'}>
                            Whitespace (programming language)
                        </Heading>
                        <CodePane
                            lang="whitespace"
                            source={require("raw!../assets/whitespace-light")}
                            margin="20px auto"
                            style={{backgroundColor: 'rgb(229, 234, 255)', color: '#333'}}
                        />
                        <Link textColor="tertiary" target="_blank"
                              href="https://en.wikipedia.org/wiki/Whitespace_(programming_language)">https://en.wikipedia.org/wiki/Whitespace_(programming_language)</Link>
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.bg.replace("/", "")}>
                        <Heading textColor="white" size={1}>99 bottles of beer</Heading>
                        <CodePane lang="perl"
                                  source={require("raw!../assets/99_bottles")}
                                  margin="20px auto"/>
                        <Link textColor="tertiary" target="_blank" href="http://www.99-bottles-of-beer.net/lyrics.html">http://www.99-bottles-of-beer.net/lyrics.html</Link>
                        <br/>
                        <Link textColor="tertiary" target="_blank"
                              href="https://en.m.wikipedia.org/wiki/International_Obfuscated_C_Code_Contest">https://fr.m.wikipedia.org/wiki/International_Obfuscated_C_Code_Contest</Link>
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.bg.replace("/", "")}>
                        <BlockQuote>
                            <Quote>
                                Logic is "the Science of Sciences, and the Art of
                                Arts"
                            </Quote>
                            <Cite>
                                Duns Scotus
                            </Cite>
                            <Appear>
                                <Text textColor="white" margin={'80px 0'}>
                                    During the middle ages the word "art" by itself usually meant logic, which usually
                                    meant the study of syllogisms.
                                </Text>
                            </Appear>
                        </BlockQuote>
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.bg.replace("/", "")}>
                        <Text textColor="white"
                              note="Thus, the science of astronomy was the basis for the art of navigation. distinction between 'science' and 'engineering.'">
                            "science" is being used to stand for knowledge, and "art" for the application of knowledge.
                        </Text>
                        <Appear>
                            <Text textColor="white" margin={'80px 0'}>
                                Science is knowledge which we understand so well that we can teach it to a computer; and
                                if we don't fully understand something, it is an art to deal with it.
                            </Text>
                        </Appear>
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.bg.replace("/", "")}>
                        <Heading textColor="white" size={1} fit>Work of Art and Science</Heading>
                        <Text textColor="white">
                            Photography, Dictionary...
                        </Text>
                        <Appear>
                            <Text textColor="white" margin={'80px 0'}>
                                Art -> Science -> Art -> Science
                            </Text>
                        </Appear>
                        <Appear>
                            <Text textColor="white" margin={'80px 0'}>
                                Science + Science + Science -> Art -> Science
                            </Text>
                        </Appear>
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.bg.replace("/", "")}>
                        <Heading textColor="white" size={1} fit margin={'0 0 60px 0'}>
                            Transforming the art of programming into a science
                        </Heading>
                        <Appear>
                            <BlockQuote>
                                <Quote>Meanwhile we have actually succeeded in making our discipline a science, and in a
                                    remarkably simple way: merely by deciding to call it "computer science"</Quote>
                                <Cite>Manna, Zohar, and Pnueli, Amir. Formalization of properties of functional
                                    programs. J.
                                    ACM 17 (July 1970)</Cite>
                            </BlockQuote>
                        </Appear>
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.bg.replace("/", "")}>
                        <Heading textColor="white" size={1}>Computer Arts</Heading>
                        <Appear>
                            <Text textColor="white" margin={'20px 0 0 0'}>Computer Arts <span
                                style={{color: clearBlue}}>≠</span> Computer Art</Text>
                        </Appear>
                        <Appear>
                            <List textColor="white">
                                <ListItem>New Media Art</ListItem>
                                <ListItem>Multimedia Art</ListItem>
                                <ListItem>Digital Art</ListItem>
                                <ListItem>Virtual Art</ListItem>
                                <ListItem>Cybernetic</ListItem>
                                <ListItem>Internet Art</ListItem>
                                <ListItem>Software Art</ListItem>
                                <ListItem>Video Game Art</ListItem>
                                <ListItem>Security/Hacking Art</ListItem>
                            </List>
                        </Appear>
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.bg.replace("/", "")} note="it is a real achievement to master complexity and to
                            establish a system of consistent rules.">
                        <BlockQuote>
                            <Quote>
                                Programming can give us both intellectual and emotional
                                satisfaction
                            </Quote>
                            <Cite>
                                Andrei Ershov
                            </Cite>
                        </BlockQuote>
                        <Appear>
                            <Text textColor="white">
                                Programing can be like composing <S type="bold">poetry</S> or <S type="bold">music</S>.
                                Some programs are <span style={{color: clearBlue}}><S type="bold">elegant</S></span>,
                                some are <span style={{color: clearBlue}}><S type="bold">exquisite</S></span>,
                                some are <span style={{color: clearBlue}}><S type="bold">sparkling</S></span>.
                                <br/>
                                <br/>
                                We can write <span style={{color: clearBlue}}><S type="bold">grand programs</S></span>,
                                <span style={{color: clearBlue}}><S type="bold"> noble programs</S></span>, <span
                                style={{color: clearBlue}}><S
                                type="bold">truly magnificent ones!</S></span>
                            </Text>
                        </Appear>
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.bg.replace("/", "")}>
                        <Heading textColor="white" fit size={1} margin={'0 0 100px'}>Can computer programmers become
                            artists?</Heading>
                        <Appear>
                            <Text textColor="white">
                                Computer programming is an art, because it applies accumulated knowledge to the world,
                                because it requires skill and ingenuity, and especially because it produces objects of
                                beauty.
                                <br/>
                                <br/>
                                A programmer who subconsciously views himself as an artist will enjoy what he does and
                                will do it better.
                            </Text>
                        </Appear>
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.bg.replace("/", "")}>
                        <Heading textColor="white" size={2} margin={'50px 0'}>References</Heading>
                        <Link textColor="tertiary" target="_blank" href="http://www.paulgraham.com/knuth.html">Knuth:
                            Computer Programming as an Art</Link>
                        <br/>
                        <Link textColor="tertiary" target="_blank" href="https://www.nap.edu/read/10671/chapter/1">Beyond
                            Productivity</Link>
                        <br/>
                        <Link textColor="tertiary" target="_blank"
                              href="http://home.deib.polimi.it/schiaffo/TFI/Computer_Science_Art_Verdicchio.pdf">Computer
                            Science and Art: Then and Now</Link>
                        <Text textColor="white" style={{margin: '60px 0 0 0'}}>Thanks to my lovely girlfriend for
                            having an argument about
                            this exciting subject</Text>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
