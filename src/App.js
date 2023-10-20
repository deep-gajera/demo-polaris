import '@shopify/polaris/build/esm/styles.css';
import './App.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, LegacyCard, RangeSlider, TextField, Text, Banner, Link, TextContainer} from '@shopify/polaris';
import { useCallback, useState } from 'react';
import { Tabs } from '@shopify/polaris';
import { Thumbnail } from '@shopify/polaris';
import computer from "./assets/computer.png"
import parcel from "./assets/parcel.png"
import card from "./assets/shopping-cart.png"


function App() {
  const [selected, setSelected] = useState(2);
  const [selected2, setSelected2] = useState(1);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );
  const handleTabChange2 = useCallback(
    (selectedTabIndex) => setSelected2(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: '1',
      content: 'Block',
    },
    {
      id: '2',
      content: 'Icons',
    },
    {
      id: '3',
      content: 'Style',
    }
  ];
  const tabs2 = [
    {
      id: '1',
      content: 'DESKTOP',
    },
    {
      id: '2',
      content: 'MOBIEL',
    }
  ];
  const [rangeValue, setRangeValue] = useState(32);

  const handleRangeSliderChange = useCallback(
    (value) => setRangeValue(value),
    [],
  );

  const [value, setValue] = useState('1');
  const [value1, setValue1] = useState('1');
  const [value2, setValue2] = useState('1');
  const [value3, setValue3] = useState('1');
  const [value4, setValue4] = useState('1');
  const [value5, setValue5] = useState('1');
  const [value6, setValue6] = useState('1');
  const [value7, setValue7] = useState('1');
  const [value8, setValue8] = useState('1');

  const handleChange = useCallback(
    (newValue) => setValue(newValue),
    [],
  );
  const handleChange1 = useCallback(
    (newValue) => setValue1(newValue),
    [],
  );
  const handleChange2 = useCallback(
    (newValue) => setValue2(newValue),
    [],
  );
  const handleChange3 = useCallback(
    (newValue) => setValue3(newValue),
    [],
  );
  const handleChange4 = useCallback(
    (newValue) => setValue4(newValue),
    [],
  );
  const handleChange5 = useCallback(
    (newValue) => setValue5(newValue),
    [],
  );
  const handleChange6 = useCallback(
    (newValue) => setValue6(newValue),
    [],
  );
  const handleChange7 = useCallback(
    (newValue) => setValue7(newValue),
    [],
  );
  const handleChange8 = useCallback(
    (newValue) => setValue8(newValue),
    [],
  );
  const preview_data = [
    {
      id: 1,
      title: "Title 1",
      subtitle: "Subtitle 1",
      img: computer
    }, {
      id: 2,
      title: "Title 2",
      subtitle: "Subtitle 2",
      img: parcel
    }, {
      id: 3,
      title: "Title 3",
      subtitle: "Subtitle 3",
      img: card
    }
  ]

  
  return (
    <AppProvider i18n={enTranslations}>

      <Page title="Example app">
        <div className='page_polaris'>
          <div>
            <LegacyCard>
              <TextContainer>
                <Banner action={{ content: 'Enabel App' }} tone="warning">
                  <h5>
                    Iconito is not defined as your theme app extenstion
                  </h5>
                  <h6>Iconito will not be displayed properly to your customers until you set it up.</h6>
                </Banner>
              </TextContainer>
            </LegacyCard>
            <LegacyCard>
              <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
                <div className='range_slider'>
                  <div className='range'>
                    <RangeSlider
                      label="ICON SIZE (px)"
                      value={rangeValue}
                      onChange={handleRangeSliderChange}
                      output
                    /></div>
                  <div className='select_range'>
                    <TextField
                      type="number"
                      value={value}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className='color_picker'>
                  <Text variant="headingMd" as="h1">COLOR SETTING</Text>
                  <div className='select_typography'>
                    <div>
                    <div className=''>
                        <div className='color_head'>
                          <Text variant="heading" as="p">Background Color</Text>
                        </div>
                        <div  className='color_box'>
                          
                        </div>
                      </div>


                      <div className='icon_color'>
                        <div className='color_head'>
                          <Text variant="heading" as="p">Icon Color</Text>
                        </div>
                        <div  className='color_box'>
                          
                        </div>
                      </div>
                    </div>
                    <div>
                    <div className=''>
                        <div className='color_head'>
                          <Text variant="heading" as="p">Title Color</Text>
                        </div>
                        <div  className='color_box'>
                          
                        </div>
                      </div>
                      <div className='subtitle_color'>
                        <div className='color_head'>
                          <Text variant="heading" as="p">Subtitle Color</Text>
                        </div>
                        <div  className='color_box'>
                          
                        </div>
                      </div>


                    </div>
                  </div>
                </div>



                <div className='typography'>
                  <Text variant="headingMd" as="h1">TYPOGRAPHY </Text>
                  <div className='select_typography'>
                    <div>
                      <div className='title_one'>
                        <TextField
                          label="Title font size"
                          type="number"
                          value={value1}
                          onChange={handleChange1}
                          autoComplete="off"
                        /></div>


                      <div className='subtitle_two'>
                        <TextField
                          label="Subtitle font style"
                          type="number"
                          value={value2}
                          onChange={handleChange2}
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div>
                      <div className='title_two'>
                        <TextField
                          label="Title font style"
                          type="number"
                          value={value3}
                          onChange={handleChange3}
                          autoComplete="off"
                        />
                      </div>
                      <div className='subtitle_one'>
                        <TextField
                          label="Subtitle font size"
                          type="number"
                          value={value4}
                          onChange={handleChange4}
                          autoComplete="off"
                        />
                      </div>


                    </div>
                  </div>
                </div>

                <div className='setting'>
                  <Text variant="headingMd" as="h1">ICON SPACING SETTING </Text>
                  <div className='range_slider'>
                    <div className='range'>
                      <RangeSlider
                        label="Block Size"
                        value={rangeValue}
                        onChange={handleRangeSliderChange}
                        output
                      /></div>
                    <div className='select_range'>
                      <TextField
                        type="number"
                        value={value5}
                        onChange={handleChange5}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <Text variant="headingMd" as="h1">BORDER LOCATION </Text>
                  <div className='border'>
                    <div className='border_up'>
                      <TextField
                        label="Goes up"
                        type="number"
                        value={value7}
                        onChange={handleChange7}
                        autoComplete="off"
                      /></div>
                    <div className='border_down'>
                      <TextField
                        label="Goes down"
                        type="number"
                        value={value8}
                        onChange={handleChange8}
                        autoComplete="off"
                      /></div>
                  </div>
                  <div className='range_slider'>
                    <div className='range'>
                      <RangeSlider
                        label="Space in between Block"
                        value={rangeValue}
                        onChange={handleRangeSliderChange}
                        output
                      /></div>
                    <div className='select_range'>
                      <TextField
                        type="number"
                        value={value6}
                        onChange={handleChange6}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </Tabs>

            </LegacyCard>
            <LegacyCard>
              <Banner onDismiss={() => { }}>
                <h5>
                  Get daily updates, tips & hacks to help you grow your eCommerce business with advice from other merchants and experts.
                </h5><Link url=""> Click here & join our Facebook group</Link>
              </Banner>
            </LegacyCard>
          </div>
          <div className='preview'>
            <div>
              <LegacyCard >
                <div className='preview_heading'><Text variant="headingMd" as="h1">LIVE PREVIEW </Text></div>
                <div><Tabs tabs={tabs2} selected={selected2} onSelect={handleTabChange2} fitted>
                  <div className='preview_data'>{preview_data.map((i) => (
                    <div>
                      <Thumbnail
                        source={i.img}
                        alt="Black choker necklace"
                      />
                      <Text variant="headingmd" as="h5">
                        {i.title}
                      </Text>
                      <Text variant="headingmd" as="h6">
                        {i.subtitle}
                      </Text>
                    </div>
                  ))}</div>

                </Tabs></div>

              </LegacyCard>
            </div>
          </div>
        </div>
      </Page>
    </AppProvider>
  );
}

export default App;
