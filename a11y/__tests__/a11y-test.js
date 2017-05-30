import React from 'react';
import { render } from 'enzyme';
import AAT from '@ibma/aat';

import Accordion from '../../components/Accordion';
import AccordionItem from '../../components/AccordionItem';
import AppContainer from '../../components/AppContainer';
import Breadcrumb from '../../components/Breadcrumb';
import BreadcrumbItem from '../../components/BreadcrumbItem';
import Button from '../../components/Button';
import Card from '../../components/Card';
import CardActionItem from '../../components/CardActionItem';
import CardActions from '../../components/CardActions';
import CardContent from '../../components/CardContent';
import CardFooter from '../../components/CardFooter';
import CardStatus from '../../components/CardStatus';
import Checkbox from '../../components/Checkbox';
import CodeSnippet from '../../components/CodeSnippet';
import ContentSwitcher from '../../components/ContentSwitcher';
import CopyButton from '../../components/CopyButton';
import DangerButton from '../../components/DangerButton';
import DetailPageHeader from '../../components/DetailPageHeader';
import Dropdown from '../../components/Dropdown';
import DropdownItem from '../../components/DropdownItem';
import FileUploader, {
  FileUploaderButton,
} from '../../components/FileUploader';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import FormGroup from '../../components/FormGroup';
import GridPanel from '../../components/GridPanel';
import GridPanelSettings from '../../components/GridPanelSettings';
import Grid from '../../components/Grid';
import GridBody from '../../components/GridBody';
import GridBodyRow from '../../components/GridBodyRow';
import GridHead from '../../components/GridHead';
import GridHeadCell from '../../components/GridHeadCell';
import Icon from '../../components/Icon';
import InteriorLeftNav from '../../components/InteriorLeftNav';
import InteriorLeftNavList from '../../components/InteriorLeftNavList';
import InteriorLeftNavItem from '../../components/InteriorLeftNavItem';
import Link from '../../components/Link';
import ListItem from '../../components/ListItem';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';
import ModalWrapper from '../../components/ModalWrapper';
import { Module, ModuleBody, ModuleHeader } from '../../components/Module';
import Notification from '../../components/Notification';
import NumberInput from '../../components/NumberInput';
import OrderedList from '../../components/OrderedList';
import OverflowMenu from '../../components/OverflowMenu';
import OverflowMenuItem from '../../components/OverflowMenuItem';
import Pagination from '../../components/Pagination';
import PrimaryButton from '../../components/PrimaryButton';
import RadioButton from '../../components/RadioButton';
import RadioButtonGroup from '../../components/RadioButtonGroup';
import Search from '../../components/Search';
import SecondaryButton from '../../components/SecondaryButton';
import Select from '../../components/Select';
import SelectItem from '../../components/SelectItem';
import SelectItemGroup from '../../components/SelectItemGroup';
import Switch from '../../components/Switch';
import Tab from '../../components/Tab';
import TabContent from '../../components/TabContent';
import Tabs from '../../components/Tabs';
import Tag from '../../components/Tag';
import TextArea from '../../components/TextArea';
import TextInput from '../../components/TextInput';
import Toggle from '../../components/Toggle';
import Tooltip from '../../components/Tooltip';
import {
  Toolbar,
  ToolbarItem,
  ToolbarOption,
  ToolbarTitle,
  ToolbarDivider,
} from '../../components/Toolbar';
import ToolbarSearch from '../../components/ToolbarSearch';
import UnorderedList from '../../components/UnorderedList';

describe('a11y scan', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 360000;

  it('Button', done => {
    const wrapper = render(<Button>Label</Button>);

    AAT.getCompliance(wrapper.html(), 'Button', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Accordion', done => {
    const wrapper = render(<Accordion />);

    AAT.getCompliance(wrapper.html(), 'Accordion', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('AccordionItem', done => {
    const wrapper = render(<AccordionItem />);

    AAT.getCompliance(wrapper.html(), 'AccordionItem', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('AppContainer', done => {
    const wrapper = render(<AppContainer />);

    AAT.getCompliance(wrapper.html(), 'AppContainer', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Breadcrumb', done => {
    const wrapper = render(<Breadcrumb />);

    AAT.getCompliance(wrapper.html(), 'Breadcrumb', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('BreadcrumbItem', done => {
    const wrapper = render(<BreadcrumbItem />);

    AAT.getCompliance(wrapper.html(), 'BreadcrumbItem', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Card', done => {
    const wrapper = render(<Card />);

    AAT.getCompliance(wrapper.html(), 'Card', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('CardActionItem', done => {
    const wrapper = render(
      <CardActionItem
        iconName="test iconName"
        description="test description"
        name="test name"
      />
    );

    AAT.getCompliance(wrapper.html(), 'CardActionItem', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('CardStatus', done => {
    const wrapper = render(<CardStatus />);

    AAT.getCompliance(wrapper.html(), 'CardStatus', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('CardFooter', done => {
    const wrapper = render(<CardFooter />);

    AAT.getCompliance(wrapper.html(), 'CardFooter', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('CardContent', done => {
    const wrapper = render(<CardContent />);

    AAT.getCompliance(wrapper.html(), 'CardContent', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('CardActions', done => {
    const wrapper = render(<CardActions />);

    AAT.getCompliance(wrapper.html(), 'CardActions', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Checkbox', done => {
    const wrapper = render(<Checkbox id="test id" />);

    AAT.getCompliance(wrapper.html(), 'Checkbox', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('CodeSnippet', done => {
    const wrapper = render(
      <CodeSnippet type="terminal">{'node -v'}</CodeSnippet>
    );

    AAT.getCompliance(wrapper.html(), 'CodeSnippet', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('ContentSwitcher', done => {
    const wrapper = render(
      <ContentSwitcher onChange={() => {}} className="extra-class">
        <Switch kind="anchor" text="one" />
        <Switch kind="anchor" text="two" />
      </ContentSwitcher>
    );

    AAT.getCompliance(wrapper.html(), 'ContentSwitcher', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('CopyButton', done => {
    const wrapper = render(<CopyButton>Label</CopyButton>);

    AAT.getCompliance(wrapper.html(), 'CopyButton', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Footer', done => {
    const wrapper = render(<Footer />);

    AAT.getCompliance(wrapper.html(), 'Footer', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Form', done => {
    const wrapper = render(
      <Form>
        <Button type="submit" className="some-class">
          Submit
        </Button>
      </Form>
    );

    AAT.getCompliance(wrapper.html(), 'Form', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('FormGroup', done => {
    const wrapper = render(<FormGroup legendText="example legend Text" />);

    AAT.getCompliance(wrapper.html(), 'FormGroup', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('FileUploader', done => {
    const wrapper = render(
      <FileUploader id="test id" labelDescription="test label" />
    );

    AAT.getCompliance(wrapper.html(), 'FileUploader', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('FileUploaderButton', done => {
    const wrapper = render(<FileUploaderButton />);

    AAT.getCompliance(wrapper.html(), 'FileUploaderButton', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('DropdownItem', done => {
    const wrapper = render(
      <DropdownItem value="test value" itemText="test itemText" />
    );

    AAT.getCompliance(wrapper.html(), 'DropdownItem', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Dropdown', done => {
    const wrapper = render(<Dropdown />);

    AAT.getCompliance(wrapper.html(), 'Dropdown', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('DetailPageHeader', done => {
    const wrapper = render(
      <DetailPageHeader onBackLinkClick={() => {}} title="test title" />
    );

    AAT.getCompliance(wrapper.html(), 'DetailPageHeader', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('DangerButton', done => {
    const wrapper = render(<DangerButton>Label</DangerButton>);

    AAT.getCompliance(wrapper.html(), 'DangerButton', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Icon', done => {
    const wrapper = render(<Icon name="test name" description="test desc" />);

    AAT.getCompliance(wrapper.html(), 'Icon', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('InteriorLeftNav', done => {
    const wrapper = render(<InteriorLeftNav />);

    AAT.getCompliance(wrapper.html(), 'InteriorLeftNav', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('InteriorLeftNavItem', done => {
    const wrapper = render(
      <InteriorLeftNavItem href="#">
        <a href="#">test-title</a>
      </InteriorLeftNavItem>
    );

    AAT.getCompliance(wrapper.html(), 'InteriorLeftNavItem', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('InteriorLeftNavList', done => {
    const wrapper = render(<InteriorLeftNavList title="test-title" />);

    AAT.getCompliance(wrapper.html(), 'InteriorLeftNavList', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Link', done => {
    const wrapper = render(<Link>Link</Link>);

    AAT.getCompliance(wrapper.html(), 'Link', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('ListItem', done => {
    const wrapper = render(<ListItem />);

    AAT.getCompliance(wrapper.html(), 'ListItem', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Loading', done => {
    const wrapper = render(<Loading />);

    AAT.getCompliance(wrapper.html(), 'Loading', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Modal', done => {
    const wrapper = render(
      <Modal
        modalHeading="modalHeading"
        modalLabel="modal label"
        primaryButtonText="primaryButtonText"
        secondaryButtonText="secondaryButtonText"
      />
    );

    AAT.getCompliance(wrapper.html(), 'Modal', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('ModalWrapper', done => {
    const wrapper = render(
      <ModalWrapper
        modalHeading="modalHeading"
        modalLabel="modalLabel"
        secondaryButtonText="secondaryButtonText"
        primaryButtonText="primaryButtonText"
        buttonTriggerText="buttonTriggerText"
      />
    );

    AAT.getCompliance(wrapper.html(), 'ModalWrapper', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('ModuleBody', done => {
    const wrapper = render(<ModuleBody />);

    AAT.getCompliance(wrapper.html(), 'ModuleBody', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Module', done => {
    const wrapper = render(<Module />);

    AAT.getCompliance(wrapper.html(), 'Module', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('ModuleHeader', done => {
    const wrapper = render(<ModuleHeader>ModuleHeader</ModuleHeader>);

    AAT.getCompliance(wrapper.html(), 'ModuleHeader', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Notification', done => {
    const wrapper = render(
      <Notification kind="success" title="test title" subtitle="test title" />
    );

    AAT.getCompliance(wrapper.html(), 'Notification', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('NumberInput', done => {
    const wrapper = render(<NumberInput id="test id" label="label" />);

    AAT.getCompliance(wrapper.html(), 'NumberInput', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('OrderedList', done => {
    const wrapper = render(<OrderedList />);

    AAT.getCompliance(wrapper.html(), 'OrderedList', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('SelectItem', done => {
    const wrapper = render(<SelectItem text="text" />);

    AAT.getCompliance(wrapper.html(), 'SelectItem', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('SelectItemGroup', done => {
    const wrapper = render(<SelectItemGroup label="text" />);

    AAT.getCompliance(wrapper.html(), 'SelectItemGroup', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Switch', done => {
    const wrapper = render(<Switch text="test text" />);

    AAT.getCompliance(wrapper.html(), 'Switch', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Tab', done => {
    const wrapper = render(<Tab label="test label" />);

    AAT.getCompliance(wrapper.html(), 'Tab', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Select', done => {
    const wrapper = render(<Select id="test id" />);

    AAT.getCompliance(wrapper.html(), 'Select', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('SecondaryButton', done => {
    const wrapper = render(<SecondaryButton>SecondaryButton</SecondaryButton>);

    AAT.getCompliance(wrapper.html(), 'SecondaryButton', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Search', done => {
    const wrapper = render(<Search labelText="label" />);

    AAT.getCompliance(wrapper.html(), 'Search', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('RadioButtonGroup', done => {
    const wrapper = render(<RadioButtonGroup name="test name" />);

    AAT.getCompliance(wrapper.html(), 'RadioButtonGroup', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('RadioButton', done => {
    const wrapper = render(
      <RadioButton value="test value" labelText="label" />
    );

    AAT.getCompliance(wrapper.html(), 'RadioButton', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('PrimaryButton', done => {
    const wrapper = render(<PrimaryButton>PrimaryButton</PrimaryButton>);

    AAT.getCompliance(wrapper.html(), 'PrimaryButton', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Pagination', done => {
    const wrapper = render(<Pagination pageSizes={[5, 10]} totalItems={50} />);

    AAT.getCompliance(wrapper.html(), 'Pagination', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('OverflowMenuItem', done => {
    const wrapper = render(<OverflowMenuItem itemText="test itemText" />);

    AAT.getCompliance(wrapper.html(), 'OverflowMenuItem', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('OverflowMenu', done => {
    const wrapper = render(<OverflowMenu />);

    AAT.getCompliance(wrapper.html(), 'OverflowMenu', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('TabContent', done => {
    const wrapper = render(<TabContent />);

    AAT.getCompliance(wrapper.html(), 'TabContent', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Tabs', done => {
    const wrapper = render(
      <Tabs triggerHref="#anotherAnchor" className="className">
        <Tab label="Overview">
          <div className="some-content">Overview Content</div>
        </Tab>
      </Tabs>
    );

    AAT.getCompliance(wrapper.html(), 'Tabs', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Tag', done => {
    const wrapper = render(<Tag type="beta" />);

    AAT.getCompliance(wrapper.html(), 'Tag', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('TextInput', done => {
    const wrapper = render(<TextInput id="test id" labelText="labelText" />);

    AAT.getCompliance(wrapper.html(), 'TextInput', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Toggle', done => {
    const wrapper = render(<Toggle id="test id" />);

    AAT.getCompliance(wrapper.html(), 'Toggle', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Tooltip', done => {
    const wrapper = render(<Tooltip text="test text" />);

    AAT.getCompliance(wrapper.html(), 'Tooltip', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('UnorderedList', done => {
    const wrapper = render(<UnorderedList />);

    AAT.getCompliance(wrapper.html(), 'UnorderedList', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('TextArea', done => {
    const wrapper = render(<TextArea id="id" labelText="labelText" />);

    AAT.getCompliance(wrapper.html(), 'TextArea', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('Toolbar', done => {
    const wrapper = render(<Toolbar><div>Children</div></Toolbar>);

    AAT.getCompliance(wrapper.html(), 'Toolbar', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('ToolbarItem', done => {
    const wrapper = render(
      <ToolbarItem type="search" placeHolderText="Search" />
    );

    AAT.getCompliance(wrapper.html(), 'ToolbarItem', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('ToolbarTitle', done => {
    const wrapper = render(<ToolbarTitle title="Filter by" />);

    AAT.getCompliance(wrapper.html(), 'ToolbarTitle', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('ToolbarOption', done => {
    const wrapper = render(<ToolbarOption />);

    AAT.getCompliance(wrapper.html(), 'ToolbarOption', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('ToolbarDivider', done => {
    const wrapper = render(<ToolbarDivider />);

    AAT.getCompliance(wrapper.html(), 'ToolbarDivider', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('ToolbarSearch', done => {
    const wrapper = render(
      <ToolbarSearch placeHolderText="Placeholder text" />
    );

    AAT.getCompliance(wrapper.html(), 'ToolbarSearch', data => {
      expect(AAT.assertCompliance(data)).toEqual(0);
      done();
    });
  });

  it('GridPanel', done => {
    const columns = [
      {
        name: 'firstName',
        title: 'First Name',
        render: data => data.firstName,
        width: 25,
      },
      {
        name: 'lastName',
        title: 'Last Name',
        render: data => data.lastName,
        width: 25,
      },
      {
        name: 'house',
        title: 'House',
        render: data => data.house,
      },
    ];

    const data = [];

    const wrapper = render(
      <GridPanel
        columns={columns}
        data={data}
        expandedDetailIndex={null}
        expandedRowIndices={[]}
        isFetching
        localStorageKey="a11yTestGrid"
        name="testGridpanel3"
        renderDetailExpansion={() => {}}
        renderRowExpansion={() => {}}
        resetGrid={() => {}}
        showPager
        sort={{
          direction: 'ASC',
          property: 'firstName',
        }}
        totalItems={0}
      />
    );

    AAT.getCompliance(wrapper.html(), 'GridPanel', aatData => {
      expect(AAT.assertCompliance(aatData)).toEqual(0);
      done();
    });
  });

  it('Grid', done => {
    const columns = [
      {
        name: 'column1',
        title: 'First Name',
        render: data => data.column1,
        width: 25,
      },
      {
        name: 'column2',
        title: 'Last Name',
        render: data => data.column2,
        width: 25,
      },
      {
        name: 'column3',
        title: 'House',
        render: data => data.column3,
      },
    ];

    const data = [
      {
        column1: 'stuff1',
        column2: 'more1',
        column3: 'test1',
      },
      {
        column1: 'stuff2',
        column2: 'more2',
        column3: 'test2',
        expander: 'expand2',
      },
      {
        column1: 'stuff3',
        column2: 'more3',
        column3: 'test3',
        expander: 'expand3',
      },
    ];
    const wrapper = render(
      <Grid
        columns={columns}
        data={data}
        expandedRowIndices={[1, 2]}
        onSort={() => {}}
        renderRowExpansion={(rowData, index) => `${rowData.expander}-${index}`}
        sort={{
          direction: 'ASC',
          property: 'column2',
        }}
      />
    );

    AAT.getCompliance(wrapper.html(), 'Grid', aatData => {
      expect(AAT.assertCompliance(aatData)).toEqual(0);
      done();
    });
  });

  it('GridBody', done => {
    const columns = [
      {
        name: 'column1',
        title: 'column1',
        render: data => data.column1,
        width: 50,
      },
      {
        name: 'column2',
        title: 'column2',
        render: data => data.column2,
        width: 25,
      },
      {
        name: 'column3',
        title: 'column3',
        render: data => data.column3,
        width: 25,
      },
    ];
    const data = [
      {
        column1: 'stuff1',
        column2: 'more1',
        column3: 'test1',
      },
      {
        column1: 'stuff2',
        column2: 'more2',
        column3: 'test2',
        expander: 'expand',
      },
      {
        column1: 'stuff3',
        column2: 'more3',
        column3: 'test3',
      },
    ];

    const wrapper = render(
      <GridBody
        columns={columns}
        data={data}
        expandedRowIndices={[2]}
        renderRowExpansion={rowData =>
          `${rowData.column1}-${rowData.column3}-${rowData.column2}-${rowData.expander}`}
      />
    );

    AAT.getCompliance(wrapper.html(), 'GridBody', aatData => {
      expect(AAT.assertCompliance(aatData)).toEqual(0);
      done();
    });
  });

  it('GridBodyRow', done => {
    const columns = [
      {
        name: 'column1',
        title: 'column1',
        render: data => data.column1,
        width: 50,
      },
      {
        name: 'column2',
        title: 'column2',
        render: data => data.column2,
        width: 25,
      },
      {
        name: 'column3',
        title: 'column3',
        render: data => data.column3,
        width: 25,
      },
    ];
    const data = {
      column1: 'stuff',
      column2: 'more',
      column3: 'test',
      expander: 'expandData',
    };

    const wrapper = render(
      <GridBodyRow
        columns={columns}
        data={data}
        index={2}
        key={2}
        renderRowExpansion={(rowData, index) => `${rowData.expander}-${index}`}
        rowExpanded
      />
    );

    AAT.getCompliance(wrapper.html(), 'GridBodyRow', aatData => {
      expect(AAT.assertCompliance(aatData)).toEqual(0);
      done();
    });
  });

  it('GridHead', done => {
    const columns = [
      {
        name: 'column1',
        title: 'column1',
        render: data => data.column1,
        width: 50,
      },
      {
        name: 'column2',
        title: 'column2',
        sortable: true,
        render: data => data.column2,
        width: 25,
      },
      {
        name: 'column3',
        title: 'column3',
        render: data => data.column3,
        width: 25,
      },
    ];

    const wrapper = render(
      <GridHead
        columns={columns}
        sort={{
          direction: 'ASC',
          property: 'column2',
        }}
        onSort={() => {}}
      />
    );

    AAT.getCompliance(wrapper.html(), 'GridHead', aatData => {
      expect(AAT.assertCompliance(aatData)).toEqual(0);
      done();
    });
  });

  it('GridHeadCell', done => {
    const wrapper = render(
      <GridHeadCell
        column={{
          name: 'column2',
          title: 'column2',
          render: data => data.column2,
          width: 25,
        }}
        key="column2"
        onSort={() => {}}
      />
    );

    AAT.getCompliance(wrapper.html(), 'GridHeadCell', aatData => {
      expect(AAT.assertCompliance(aatData)).toEqual(0);
      done();
    });
  });

  it('GridPanelSettings', done => {
    const wrapper = render(
      <GridPanelSettings
        items={[
          {
            name: 'column3',
            title: 'column3',
            hidden: true,
          },
          {
            name: 'column4',
            title: 'column4',
            hidden: false,
          },
        ]}
      />
    );

    AAT.getCompliance(wrapper.html(), 'GridPanelSettings', aatData => {
      expect(AAT.assertCompliance(aatData)).toEqual(0);
      done();
    });
  });
});
