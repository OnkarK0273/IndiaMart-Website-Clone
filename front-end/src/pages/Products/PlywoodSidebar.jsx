import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import '../Styles/Sidebar.scss'

function PlywoodSidebar() {

  return (
    <div>
      <div className="sidebarmain">
        <div>
          <h1 className="heading">Related Category</h1>
        </div>
        <div>
          <p className="subHead">Gold Plywood</p>
          <p className="subHead">Marine Grade Plywood</p>
          <p className="subHead">Birch Plywood</p>
          <p className="subHead">PVC Plywood</p>
          <p className="subHead">Plastic Shuttering Plywood</p>
          <p className="subHead">Veneer Plywood</p>
          <p className="subHead">Bamboo Plywood</p>
          <p className="subHead">Chequered Plywood</p>
          <p className="subHead">WPC Plywood</p>
          <p className="subHead">Alternate Plywood</p>
          <p className="subHead">Flexible Plywood</p>
          <p className="subHead">Teak Veneer Plywood</p>
          <p className="subHead">Designer Plywood</p>
          <p className="subHead">Poplar Plywood</p>
          <p className="subHead">Fire Resistant Plywood</p>
        </div>
      </div>
      <div className="sidebarmain">
        <div>
          <h1 className="heading">Related Brands</h1>
        </div>
        <div>
          <p className="subHead">Centuryply Plywood</p>
          <p className="subHead">Greenply Plywood</p>
          <p className="subHead">Kitply Plywood</p>
          <p className="subHead">Duro Plywood</p>
          <p className="subHead">Austin Plywood</p>
          <p className="subHead">Sainik Plywood</p>
          <p className="subHead">Sharon Plywood</p>
          <p className="subHead">Everest Plywood</p>
          <p className="subHead">Archidply Plywood</p>
          <p className="subHead">Greenpanel Plywood</p>
          <p className="subHead">Trojan Plywood</p>
          <p className="subHead">Avron Plywood</p>
          <p className="subHead">National Plywood</p>
          <p className="subHead">Alishan Plywood</p>
          <p className="subHead">Centuryply Venner Plywood</p>
          <p className="subHead">Anchor Plywood</p>
        </div>
      </div>
      <div className="sidebarmain">
        <div>
          <h1 className="heading">Business Type</h1>
        </div>
        <div>
          <p className="subHead">Manufacturer</p>
          <p className="subHead">Exporter</p>
          <p className="subHead">Wholsesaler</p>
          <p className="subHead">Retailer</p>
        </div>
      </div>
    </div>
  );
}

export default PlywoodSidebar;