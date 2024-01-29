import { GridComponent, 
    ColumnsDirective, 
    ColumnDirective, 
    Page, 
    Inject,
    Filter,
    Group,
    Edit,
    EditSettingsModel,
    Toolbar,
    ToolbarItems,
    SaveEventArgs,
    DataResult,
    DataSourceChangedEventArgs} from '@syncfusion/ej2-react-grids';
import { UserType } from '../../types/types';
import { useEffect, useState } from 'react';
import { createUser, deleteUser, getUsers } from '../../services/client-services/user-services';

import styles from './user.module.css'
  
const User = () => {
  const [datas, setDatas] = useState<UserType[]>([]);
 const [gridDatas, setGridDatas] = useState<DataResult>();
  useEffect(() => {
    getUsers().then(
      data =>{
        setDatas(data)
        const gridData: DataResult = {
          result: data, // array with data to be displayed in the grid
          count: data.length
        }
        setGridDatas(gridData);
      }
    )
  }, []); 
  
    const editOpts : EditSettingsModel = {allowEditing: true, allowDeleting:true, allowAdding:true}
    const toolbarOpts : ToolbarItems[] = ['Add', 'Edit', 'Update', 'Delete', 'Search' ]

     const dataSourceChanged= (state:DataSourceChangedEventArgs,):void=>{
    
      if(state.action ==="add"){
           createUser(state.data);
        
         
        
      }
      else if(state.action === "edit"){
        
      }
      if(state.requestType === "delete"){
        const arr:any=[state.data]
        const id=arr[0][0].id;
        deleteUser(id);
        
      }
      
    }
      return (
      <div className={styles.container}>
        <div className='control-pane'>
          <div className='control-section paging-api'>
            <GridComponent 
            gridLines='Both'
            dataSource={gridDatas} 
            width={1300}
            height='280' 
            allowPaging={true}
            allowFiltering={true}
            allowGrouping={true}          
            pageSettings={{pageCount: 5}} 
            editSettings={editOpts}
            toolbar={toolbarOpts}
            dataSourceChanged={dataSourceChanged}          
            >
              <ColumnsDirective>
                <ColumnDirective field='id' headerText='Id' width='40' textAlign='Right'></ColumnDirective>
                <ColumnDirective field='fullname' headerText='Fullname' width='150'></ColumnDirective>
                <ColumnDirective field='username' headerText='Username' width='130'  textAlign='Right'   />
                <ColumnDirective field='password' headerText='Password' width='130'  textAlign='Right'   />        
              </ColumnsDirective>
              <Inject services={[Page, Filter, Group,Edit, Toolbar]} />
            </GridComponent>
          </div>
        </div>
        </div>
      )
}

export default User
