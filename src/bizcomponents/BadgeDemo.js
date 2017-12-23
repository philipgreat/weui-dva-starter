import React, { Component } from 'react';



import {   Badge, Cells, Cell, CellBody, CellFooter, CellHeader, CellsTitle} from 'react-weui';
import { connect } from 'dva';
import Page from '../components/Page'

import { Article } from 'react-weui';
import srcArticle from '../assets/yay.jpg';
import '../assets/react-weui.css';
class BadgeDemo extends Component {

    render(){


return(
    <Page>
        <CellsTitle>Footer Notification Badge</CellsTitle>
        <Cells>
            <Cell access>
                <CellBody>Label</CellBody>
                <CellFooter>
                    Details
                    <Badge dot preset="footer" />
                </CellFooter>
            </Cell>
        </Cells>

        <CellsTitle>Header & Body Badge</CellsTitle>
        <Cells>
            <Cell>
                <CellHeader style={{position: 'relative', marginRight: '10px'}}>
                    
                    <Badge preset="header">8</Badge>
                </CellHeader>
                <CellBody>
                    <p>Contact Name</p>
                    <p style={{fontSize: '13px', color: '#888888'}}>Descriptions</p>
                </CellBody>
            </Cell>
            <Cell access>
                <CellBody>
                    Label
                    <Badge preset="body">8</Badge>
                </CellBody>
                <CellFooter />
            </Cell>
            <Cell access>
                <CellBody>
                    Label
                    <Badge preset="body">8</Badge>
                </CellBody>
                <CellFooter>
                    Details
                </CellFooter>
            </Cell>
            <Cell access>
                <CellBody>
                    Label
                    <Badge preset="body">new</Badge>
                </CellBody>
                <CellFooter />
            </Cell>
        </Cells>
        </Page>
);
}

}

export default connect()(BadgeDemo);
//export default BadgeDemo;

/*

   render(){


    return(
        <Page className="badge" title="Badge" subTitle="徽章">
            <CellsTitle>Footer Notification Badge</CellsTitle>
            <Cells>
                <Cell access>
                    <CellBody>Label</CellBody>
                    <CellFooter>
                        Details
                        <Badge dot preset="footer" />
                    </CellFooter>
                </Cell>
            </Cells>
    
            <CellsTitle>Header & Body Badge</CellsTitle>
            <Cells>
                <Cell>
                    <CellHeader style={{position: 'relative', marginRight: '10px'}}>
                        <img src={iconSrc} style={{width: '50px', display: 'block'}} />
                        <Badge preset="header">8</Badge>
                    </CellHeader>
                    <CellBody>
                        <p>Contact Name</p>
                        <p style={{fontSize: '13px', color: '#888888'}}>Descriptions</p>
                    </CellBody>
                </Cell>
                <Cell access>
                    <CellBody>
                        Label
                        <Badge preset="body">8</Badge>
                    </CellBody>
                    <CellFooter />
                </Cell>
                <Cell access>
                    <CellBody>
                        Label
                        <Badge preset="body">8</Badge>
                    </CellBody>
                    <CellFooter>
                        Details
                    </CellFooter>
                </Cell>
                <Cell access>
                    <CellBody>
                        Label
                        <Badge preset="body">new</Badge>
                    </CellBody>
                    <CellFooter />
                </Cell>
            </Cells>
        </Page>
    );
   }


*/