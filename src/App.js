import './App.css';
import React, { useState,Component} from 'react';
import { Navbar} from 'reactstrap';
import { UncontrolledCollapse} from 'reactstrap';
import { Form, FormGroup, Label, Col ,FormFeedback,InputGroup, InputGroupAddon, Button, Input} from 'reactstrap';


import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



class App1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownOpen:false,
      toggle1:false,
      dropdownOpen1:false,
      toggle:false,
      user:'Shashank',
      name: '',
      dob:'',
      profession:'',
      designation:'',
      SQL:'',
      show1:false,
      show2:false,
      show3:false,
      touched:{
        name: false,
      
      profession:false,
      designation:false

      }
      
      
  };
  this.handleInputChange=this.handleInputChange.bind(this);
  this.validate=this.validate.bind(this);
  this.open=this.open.bind(this);
  this.open1=this.open1.bind(this);


  }

  open(){
    this.setState({dropdownOpen:!this.state.dropdownOpen})
  }
  open1(){
    this.setState({dropdownOpen1:!this.state.dropdownOpen1})
  }
  handleBlur=(field)=>(event)=>{
    this.setState({
      touched:{ ...this.state.touched,[field]:true}
    });

  }
  validate(name,profession,designation){
    const errors={
      name: '',
      dob:'',
      profession:'',
      designation:''
      }

      const reg=/^[A-Za-z]+$/;
      if(this.state.touched.name && !reg.test(name) && name.length < 10)
          errors.name='Name should contain less than 30 characters and alphabets only';
      
      if( this.state.touched.profession && !reg.test(profession) && profession.length < 10)
          errors.profession='Profession should contain less than 30 characters and alphabets only';
      

      if(  this.state.touched.designation && !reg.test(designation)  && designation.length < 10)
          errors.designation='Designation should contain less than 30 characters and alphabets only';
    
      return errors;


      
  }
  


  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
}

  render(){
   
    const errors=this.validate(this.state.name,this.state.dob,this.state.profession,this.state.designation)
   
    
    
    
  return (
    <div>
    
    <div>
    <Navbar  color="dark" light expand="md">
      
     <div className="col-lg-3 col-sm-4 col-md-6 offset-lg-9 offset-sm-8 offset-md-8">
  <div className="nav">Hello {this.state.user}</div>

  
    </div>
    </Navbar>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-3 mt-2 t1">
       

      <div className="button3" id="toggler">
    Profile
      
    </div>
    <UncontrolledCollapse toggler="#toggler">
      <div>
      <div className="button4" onClick={()=>this.setState({show1:!this.state.show1,show2:false,show3:false})}>
      Setting
      </div>
      </div>
     <div className="button4" onClick={()=>this.setState({show2:!this.state.show2,show1:false,show3:false})}>
        Notification
        
        </div>
      </UncontrolledCollapse>

<div>
      <div className="button3" id="toggler1">
    My Task
      
    </div>
    <UncontrolledCollapse toggler="#toggler1">
     <div>
      <div className="button4" onClick={()=>this.setState({show1:false,show2:false,show3:!this.state.show3})}>
      Task1
      </div>
      </div>
     <div><div className="button4">
        Task2
        </div>
        </div>
     </UncontrolledCollapse>
      
</div>


    </div>


{this.state.show1?
    
    <div className="col-lg-6 col-md-6 col-sm-6 offset-lg-1 mt-2 t2">
     <div className="profile">Profile Info</div>


<Form>
                            <FormGroup row>
                                <Label htmlFor="name"md={2} >Name</Label>
                                <Col md={8}>
                                    <Input type="text" id="name" name="name"
                                        placeholder="First Name"
                                        value={this.state.name}
                                        valid={errors.name === ''}
                                        invalid={errors.name !== ''}
                                        onBlur={this.handleBlur('name')}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.name}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="dob"md={2} >Date of Birth</Label>
                                <Col md={8}>
                                    <Input type="date" id="dob" name="dob"
                                        placeholder="Date of Birth"
                                        value={this.state.dob}
                                        onBlur={this.handleBlur('dob')}
                                        valid={errors.dob === ''}
                                        invalid={errors.dob !== ''}
                                        onChange={this.handleInputChange} />
                                       
                                </Col>
                                <FormFeedback>{errors.dob}</FormFeedback>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="profession"md={2} >Profession</Label>
                                <Col md={8}>
                                    <Input type="text" id="profession" name="profession"
                                        placeholder="Profession"
                                        value={this.state.profession}
                                        valid={errors.profession === ''}
                                        onBlur={this.handleBlur('profession')}
                                        invalid={errors.profession !== ''}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.profession}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="designation"md={2} >Designation</Label>
                                <Col md={8}>
                                    <Input type="text" id="designation" name="designation"
                                        placeholder="designation"
                                        value={this.state.designation}
                                        valid={errors.designation === ''}
                                        onBlur={this.handleBlur('designation')}
                                        invalid={errors.designation !== ''}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.designation}</FormFeedback>
                                </Col>
                            </FormGroup>
  </Form>

  <div className="row justify-content-center">
  <div  className="button0 col-lg-2 col-md-2 col-sm-2 offset-1 mt-2">Cancel</div>
  <div  className="button col-lg-2 col-md-2 col-sm-2 offset-1 mt-2 ">Submit</div>
  </div>

  
</div>

:null}






{this.state.show2?

<div className="col-lg-6 col-md-6 col-sm-6 offset-lg-1 mt-2 t2">
     <div className="profile">Profile Info</div>


<Form>
                            <FormGroup row>
                              
                                <Label htmlFor="name"md={4} >Send All Alerts</Label>
                                <Col md={2}>
                                  
                                <Label class="switch">
                                     <input type="checkbox"/>
                                      <div class="slider"></div>
                                    </Label>
                                  
                                    
                                </Col>
                               
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="dob"md={4} >Alerts Only Task Success</Label>
                                <Col md={8}>
                                <Label class="switch">
                                     <input type="checkbox"/>
                                      <div class="slider"></div>
                                    </Label>
                                  
                                    
                                       
                                </Col>
                                
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="profession"md={4} >Alerts Only Failed Tasks</Label>
                                <Col md={8}>
                                <Label class="switch">
                                     <input type="checkbox"/>
                                      <div class="slider"></div>
                                    </Label>
                                  
                                    
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="designation"md={4} >I Do Not Want Any Alert</Label>
                                <Col md={8}>
                                <Label class="switch">
                                     <input type="checkbox"/>
                                      <div class="slider"></div>
                                    </Label>
                                  
                                    
                                </Col>
                            </FormGroup>
  </Form>

  <div className="row justify-content-center">
  <div  className="button0 col-lg-2 col-md-2 col-sm-2 offset-1 mt-2">Cancel</div>
  <div  className="button col-lg-2 col-md-2 col-sm-2 offset-1 mt-2 ">Submit</div>
  </div>

  
</div>


:null}

{this.state.show3?
<div className="col-lg-6 col-md-6 col-sm-6 offset-lg-1 mt-2 t2">
     <div className="profile">Task 1</div>


<Form>
                            <FormGroup row>
                              
                                <Label htmlFor="name"md={4} >Source Name</Label>
                                <Col md={2}>
                                  
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.open}>
      <DropdownToggle caret>
        Select Option
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem >Choose1</DropdownItem>
        <DropdownItem>Choose2</DropdownItem>
        <DropdownItem >Choose3 </DropdownItem>
        
        <DropdownItem>Choose4</DropdownItem>
        <DropdownItem>Choose5</DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
                                
                                  
                                    
                                </Col>
                               
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="dob"md={4} >Enable Logging</Label>
                                <Col md={8}>
                                <Label class="switch">
                                     <input type="checkbox"/>
                                      <div class="slider"></div>
                                    </Label>
                                  
                                    
                                       
                                </Col>
                                
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="profession"md={4} >Enter SQL Here</Label>
                                <Col md={8}>
                                    <Input type="text" id="profession" name="SQL"
                                        placeholder="SQL"
                                        value={this.state.SQL}
                                        
                                        onChange={this.handleInputChange} />
                                        
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="designation"md={4} >Target Result</Label>
                                <Col md={8}>

                                <Dropdown isOpen={this.state.dropdownOpen1} toggle={this.open1}>
      <DropdownToggle caret>
        Select Option
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem >Choose1</DropdownItem>
        <DropdownItem>Choose2</DropdownItem>
        <DropdownItem >Choose3 </DropdownItem>
        
        <DropdownItem>Choose4</DropdownItem>
        <DropdownItem>Choose5</DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
                               
                                  
                                    
                                </Col>
                            </FormGroup>
  </Form>

  <div className="row justify-content-center">
  <div  className="button0 col-lg-2 col-md-2 col-sm-2 offset-1 mt-2">Cancel</div>
  <div  className="button col-lg-2 col-md-2 col-sm-2 offset-1 mt-2 ">Validate</div>
  </div>

  
</div>


:null}



 
 
 
 
 
 
 
 
  </div>
  </div>
  );
}
}

export default App1;
