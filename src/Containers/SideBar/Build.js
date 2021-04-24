import React from 'react';
import { Col, Collapse, Input, Row } from 'antd';

import General from './General';
import Listings from './Listings';
import Rentals from './Rentals';
import Sales from './Sales';
import StaffMembers from './StaffMembers';
import Office from './Office';

const { Panel } = Collapse;

const BuildComponents = () => {
	return (
		<Col>
			<Row className='search-box sider-section-wrapper'>
				<Col span={16} offset={1}>
					<Input.Search
						placeholder="input search text"
					/>
				</Col>
			</Row>
			<Col>
				<Collapse
					className="sider-section-wrapper"
					defaultActiveKey={['1', '2', '3', '4', '5', '6']}
					ghost
					expandIconPosition={'right'}
				>
					<Panel className='w-85' header="General" key="1">
						<General />
					</Panel>
					<Panel className='w-85' header="Listing" key="2">
						<Listings />
					</Panel>
					<Panel className='w-85' header="Rentals" key="3">
						<Rentals />
					</Panel>
					<Panel className='w-85' header="Sales" key="4">
						<Sales />
					</Panel>
					<Panel className='w-85' header="Staff Members" key="5">
						<StaffMembers />
					</Panel>
					<Panel className='w-85' header="Office" key="6">
						<Office />
					</Panel>
				</Collapse>
			</Col>
		</Col >
	)
}

export default BuildComponents