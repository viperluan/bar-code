const barCodes =
  'R1VG0402988N2|R1VH1415772ET|R1VH12162466O|R1VH1218951WZ|R1VH0912709AD|R1VH1409235QU|R1VH1902107RP|R1VH1216303V0|R1VG13181515B|R1VI17079082X|R1VH0840771XH|R1VH08408133F|R1VH0808499CV|R1VI170790904|R1VH1220056EV|R1VH1220060D2|R1VH1220058J1|R1VH1216305X8|R1VH1409234D0|R1VH084066238|R1VH1414664QA|R1VH14147584U|R1VH0840710IV|R1VG21219992K|R1VG3405853HB|R1VH12240482I|R1VG4106860YF|R1VH1409149AZ|R1VH121630476|R1VH121630117|R1VH0840711TS|R1VG3405781OO|R1VH14148187R|R1VG04029854V|R1VH08407733I|R1VH1224045VM|R1VG2121926SV|R1VG3405858ZC|R1VG2136645CQ|R1VH08407149W|R1VG05014763Z|R1VH1217712RR|WF1H4300707OA|WF1H16019823P|WF1I0904383LV|WF1H15052853U|WF1H1602114NV|WF1I0510558VO|WF1H1505857XY|WF1H4403188DJ|WF1H1505938EM|WF1I0510511HX|WF1I0802882T9|WF1H4404027ZA|WF1H1601981PF|WF1I03268215P|WF1I0326905ZD|WF1I0802713QL|WF1H4300033XB|WF1H4300728U0|WF1H1601980VI|WF1I0802885OX|WF1H5200867MA|WF1H4300030XE|';

const otherBarCodes =
  'R1VI170790904, R1VI170790905, R1VI170790906, R1VI170790907, R1VI170790908, R1VI170790909, R1VI170790910, R1VI170790911, R1VI170790912, R1VI170790913, R1VI170790914, R1VI170790915, R1VI170790916, R1VI170790917, R1VI170790918, R1VI170790919, R1VI170790920, R1VI170790921, R1VI170790922, R1VI170790923, R1VI170790924, R1VI170790925, R1VI170790926, R1VI170790927, R1VI170790928, R1VI170790929, R1VI170790930, R1VI170790931, R1VI170790932, R1VI170790933, R1VI170790934, R1VI170790935, R1VI170790936, R1VI170790937, R1VI170790938, R1VI170790939, R1VI170790940, R1VI170790941, R1VI170790942, R1VI170790943, R1VI170790944, R1VI170790945';

const barCodesArray = barCodes.split('|').filter((barCode) => barCode !== '');

const otherBarCodesArray = otherBarCodes
  .split(',')
  .filter((otherBar) => otherBar !== '');

const filterBarCodes = (otherBarCodesArray, barCodesArray) => {
  const filter = barCodesArray.forEach((bar) => {
    console.log(otherBarCodesArray.includes(bar));
  });
};

filterBarCodes(otherBarCodesArray, barCodesArray);
