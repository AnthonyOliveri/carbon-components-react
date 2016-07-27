import React, { Component }  from 'react';
import icons from '@console/bluemix-icons/icons.json';

class Icon extends Component {

  static propTypes = {
    className: React.PropTypes.string,
  }

  /**
   * Returns a single icon Object
   * @param {string} iconName - "name" property of icon
   * @param {Object} [iconsObj=icons] - JSON Array of Objects
   * @example
   * // Returns a single icon Object
   * this._findIcon('copy-code', icons.json);
   */
  _findIcon = (iconName, iconsObj = icons) => {
    return iconsObj.find(icon => {
      return (icon.name === iconName) ? icon : false;
    });
  }

  /**
   * Returns "svgData" Object
   * @param {string} iconName - "name" property of icon
   * @example
   * // Returns svgData Object for given iconName
   * this._getSvgData('copy-code');
   */
  _getSvgData = (iconName) => {
    return this._findIcon(iconName).svgData;
  }

  /**
   * Returns Elements/Nodes for SVG
   * @param {Object} svgData - JSON Object for an SVG icon
   * @example
   * // Returns SVG elements
   * const svgData = this._getSvgData('copy-code');
   * this._getSvgContent(svgData);
   */
  _getSvgContent = (svgData) => {
    const svgElements = Object.keys(svgData)
      .filter(key => {
        return svgData[key]
      })
      .map(svgProp => {
        const data = svgData[svgProp];

        if (svgProp === 'circles') {
          return data.map(circle => {
            const circleProps = {
              cx: circle.cx,
              cy: circle.cy,
              r: circle.r,
            };

            return <circle {...circleProps} />
          });
        }

        else if (svgProp === 'paths') {
          return data.map(path => {
            return <path d={path.d} />
          });
        }

        else if (svgProp === 'polygons') {
          return data.map(pointsData => {
            return <polygon points={poinstData.points}></polygon>
          })
        }

        else if (svgProp === 'polylines') {
          return data.map(pointsData => {
            return <polyline points={poinstData.points}></polyline>
          })
        }

        else if (svgProp === 'rects') {

          const rectProps = {
            width: data.width,
            height: data.height,
            x: data.x,
            y: data.y,
            rx: data.rx,
            ry: data.ry,
          };

          return <rect {...rectProps}></rect>
        }
      });


    return svgElements;
  }

  render() {

    // SVG Content and Data for Render
    const svgData = this._getSvgData(this.props.name);
    const svgContent = this._getSvgContent(svgData);

    // Props
    const idProp = this._findIcon(this.props.name).id;
    const iconProps = {
      className: this.props.className,
      name: this.props.name,
      fill: this.props.fill,
      fillRule: this.props.fillRule || 'evenodd',
    }

    return (
      <svg {...iconProps} aria-labelledby={idProp}>
        <title id={idProp}>{this.props.description}</title>
        {svgContent}
      </svg>
    );
  }
}

export default Icon;