import Entrada from '../components/Entrada'
import styles from  '../styles/Blog.module.css'

const ListadoBlog = ({entradas}) => {
  return (
    <>
    <h2 className='heading'>Blog</h2>
    <div className={styles.blog}>
        {entradas.map(post => (
            <Entrada 
                key={post.id}
                post={post}
            />
        ))}
    </div>
    </>
  )
}

export default ListadoBlog