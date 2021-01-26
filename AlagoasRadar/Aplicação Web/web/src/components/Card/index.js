import { Wrapper, TopContent, MidContent, DescContent, BottomContent, Img } from './styles';


const Card = () => {
    return(
        <section>
            <Wrapper>
                <TopContent>
                    <img></img>

                    <div>
                        <img></img>
                        <img></img>

                    </div>

                </TopContent>
                <MidContent>
                    <div>
                        <h3>Tiamen Mountain</h3>
                        <span><img></img> 4.5 </span> &nbsp;&nbsp;
                        <span><img></img> 17 C </span> &nbsp;&nbsp;
                        <span><img></img> 17Hrs </span>

                    </div>

                </MidContent>

                <DescContent>
                    <div>
                        <span>Description</span>
                        <span>Review</span>
                        <span>About</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aliquam iaculis tristique elit id ullamcorper. Praesent tincidunt arcu quis ultricies pellentesque.
                        <a>Know More</a>
                    </p>

                </DescContent>
                <BottomContent>
                    <div>
                        <p> $300 <span>Person</span></p>
                    </div>
                    <button>Book a Trip</button>

                </BottomContent>
            </Wrapper>
        </section>
    )

}