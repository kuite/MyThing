import React, { Component } from 'react';
import _ from 'lodash';

export class RoleAwareComponent extends Component {

    constructor(props) {
      super(props);
      this.authorize = [];
    }
  
    shouldBeVisible() {

      const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
          return _.intersection(this.authorize).length > 0;
      }

      return false;
    }
  }


    export class RoleAwareComponentUser extends Component {
   
        constructor(props) {
          super(props);
         this.authorize = [];
        }
      
        shouldBeVisible() {
    
          const user = JSON.parse(localStorage.getItem('user'));
    
            if (user) {
                return _.intersection(this.authorize).length > 0;
            }

    
     
           return false;
         }
      }
    