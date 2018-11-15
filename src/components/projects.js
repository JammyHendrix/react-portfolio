import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from "react-mdl";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}

	toggleCategories = () => {
		if (this.state.activeTab === 0) {
			return (
				<div className="projects-grid">
					<Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
						<CardTitle
							style={{
								color: "#fff",
								height: "176px",
								background: "url(https://storage.googleapis.com/eldarion-site/media/images/2016/11/14/react.png) center / cover",
							}}>
							React Projects #1
						</CardTitle>
						<CardText>Lorem Ipsum</CardText>
						<CardActions border>
							<Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: "#fff" }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					<Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
						<CardTitle
							style={{
								color: "#fff",
								height: "176px",
								background: "url(https://storage.googleapis.com/eldarion-site/media/images/2016/11/14/react.png) center / cover",
							}}>
							React Projects #2
						</CardTitle>
						<CardText>Lorem Ipsum</CardText>
						<CardActions border>
							<Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: "#fff" }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					<Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
						<CardTitle
							style={{
								color: "#fff",
								height: "176px",
								background: "url(https://storage.googleapis.com/eldarion-site/media/images/2016/11/14/react.png) center / cover",
							}}>
							React Projects #3
						</CardTitle>
						<CardText>Lorem Ipsum</CardText>
						<CardActions border>
							<Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: "#fff" }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 1) {
			return (
				<div>
					<h1>This is Node.JS</h1>
				</div>
			);
		} else if (this.state.activeTab === 2) {
			return (
				<div>
					<h1>This is Express</h1>
				</div>
			);
		} else if (this.state.activeTab === 3) {
			return (
				<div>
					<h1>This is MongoDB</h1>
				</div>
			);
		}
	};

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState({ activeTab: tabId })} ripple>
					<Tab>React</Tab>
					<Tab>Node.JS</Tab>
					<Tab>Express</Tab>
					<Tab>MongoDB</Tab>
				</Tabs>

				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Projects;
