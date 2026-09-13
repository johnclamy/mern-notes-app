{/* micro-blog-project/src/App.tsx */}
import Wrapper from './components/layout/Wrapper'
import Header from './components/layout/Header'
import PostList from './components/app/post/PostList'


const App: React.FC = () => {
    return (        
        <Wrapper>
            <Header />
            <PostList />
        </Wrapper>
    )
}


export default App
