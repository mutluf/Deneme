import { GridComponent, 
  ColumnsDirective, 
  ColumnDirective, 
  Page, 
  Inject,
  Filter,
  Group} from '@syncfusion/ej2-react-grids';
import { PostType } from '../../types/types';
import styles from './posts.module.css'

interface PostProps{
  post:PostType[]
}

const Posts = ({post}: PostProps) =>{

    return (
    <div className={styles.container}>
      <div className='control-pane'>
        <div className='control-section paging-api'>
          <GridComponent 
          gridLines='Both'
          dataSource={post} 
          width={1300}
          height='280' 
          allowPaging={true}
          allowFiltering={true}
          allowGrouping={true}
          pageSettings={{pageCount: 5}}         
          >
            <ColumnsDirective>
              <ColumnDirective field='id' headerText='Id' width='40' textAlign='Right'></ColumnDirective>
              <ColumnDirective field='title' headerText='Title' width='150'></ColumnDirective>
              <ColumnDirective field='body' headerText='Content' width='130'  textAlign='Right'   />
              <ColumnDirective field='userId' headerText='User Id' width='40' textAlign='Right' />           
            </ColumnsDirective>
            <Inject services={[Page, Filter, Group]} />
          </GridComponent>
        </div>
      </div>
      </div>
    )
  }

export default Posts