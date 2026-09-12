{/* micro-blog-project/src/App.tsx */}
import Wrapper from './components/layout/Wrapper'
import Header from './components/layout/Header'


const App: React.FC = () => {
    return (        
        <Wrapper>
            <Header />
            <p className="col-span-full">content goes here...</p>
        </Wrapper>
    )
}


export default App
