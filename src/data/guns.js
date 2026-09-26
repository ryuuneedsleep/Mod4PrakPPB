const GUNS = [
  {
    name: 'Glock 17',
    type: 'Pistol',
    caliber: '9mm',
    price: 599,
    image: '/guns/pistol.svg',
    description:
      'The duty pistol everything else is measured against. Polymer frame, 17-round magazine, striker-fired trigger. Safe, boring, and it always goes bang.',
  },
  {
    name: 'AK-47',
    type: 'Rifle',
    caliber: '7.62mm',
    price: 899,
    image: '/guns/rifle.svg',
    description:
      'Gas-operated, loose tolerances, and famously indifferent to mud. Seven decades of service and still the benchmark for a rifle that will not quit.',
  },
  {
    name: 'Remington 870',
    type: 'Shotgun',
    caliber: '12 Gauge',
    price: 449,
    image: '/guns/shotgun.svg',
    description:
      'Pump-action workhorse. Five shells in the tube, a receiver that has taken more abuse than most trucks, and a sound that ends arguments.',
  },
  {
    name: 'AR-15',
    type: 'Rifle',
    caliber: '5.56mm',
    price: 799,
    image: '/guns/rifle.svg',
    description:
      'Light-recoiling, endlessly modular, and accurate well past the range most shooters can hold. The platform you can rebuild with one tool.',
  },
  {
    name: 'Desert Eagle',
    type: 'Pistol',
    caliber: '.50 AE',
    price: 1599,
    image: '/guns/pistol.svg',
    description:
      'Gas-operated hand cannon. Three and a half pounds of chromed steel that fires a round most pistols would refuse. Subtle it is not.',
  },
  {
    name: 'Mossberg 500',
    type: 'Shotgun',
    caliber: '12 Gauge',
    price: 399,
    image: '/guns/shotgun.svg',
    description:
      'The other pump gun. Twin action bars, a simple safety on the tang, and a price that leaves money for ammunition.',
  },

  {
    name: 'Beretta 92FS',
    type: 'Pistol',
    caliber: '9mm',
    price: 679,
    image: 'data:image/webp;base64,UklGRqgFAABXRUJQVlA4IJwFAADwHQCdASqmAGsAPvFIvF4poqmplCEwHglpANdkqVWFm6OyuXHDxZHysgeU7977RUO/x+rBL/eFLTdu5Moh0MImiYiDEMMXpZ4sERDq6WGdyOo9jW1/6/kzf89rs9HaiXTpIFgtuOT01d8VddjosVpkduGsTsYBHroTP9eaem4/CDVpdFr0emcH910v1Y3iXvC8NhQLgfe0F4HuMMoivG9va/z4n5shYU1km2pIU8KuTXJvR5FYohl1+9TUugqzsWeQf/hmjfAXvVdsrLDjtnxDErof1hkbsgCFRDT7LSVykZ0w3xBUAQXDIU+7XLuMXawE+UyzeGPYAAD++E34OPjY/pdh//RTa/WdJm9li1/BpD/BKVTOx0uJRZ5fWbnD1NOu9o/4+DzqR92aJIMXeDNbST4HsNto0dsdzwKKFD6D794ynKrh2lY2yw5nXJaoFBpg0dw4AVrS92bx/3L91sEUMTGZ1mVrCjzS8rxeYnADN7ftBf05YjI3GQh4ybm8q9CkHjO7vMeYLYGGZZhTqn3KM9hB4B6AyM2gV5nXOQ8YxRW7ogEs1Xpa7oDHpRI3Tgw7tISpgDRMTlnAfQsIqql3bttffPq5XWPIrfzbUF8pm6jZALXzy8LdfRD6iI5wsSN69kSxF5aav4owz/DC4VC+bQobAO7kVaXl+lAbgao97tUqUm2qeDlYF/sqpCP7IRb5pUFA1ZhFC+yWDd36gicAAfpo3iqQY8H2GoTccRkwydwwTGVifvEVyAcvA5+qwF3pXtX2dFJ3f13bqOo6y21fSuJWYXjiLXsElCFe7YbXbh6VQyBBZZT4AYxF1PtvvQDTe6K7xgMdKO23FQhhp2Vs3658QInq2M/a+eX72V9PsPag46HnEO1c+JS6KeKFmt5+S15hWUKfkGwIyAXb6mfLMOHJulr2EYojjtuKIK03mLj1EL05RazZM5GYhv7fq6LmWxMBTxvCGp/78NthwRmrXHzk5Cj6FYDEbo58GKtKSSvEqJzMfB0xTUcoponKBDm7K502Qn3KhhnqDH0SerQsKe2O0ZNMXMtr57IkHkEv21NnrmYSvr9LO2RYHtPGuE10mFqB062eZEu11f/Um6fOS3sAiiu0+hGAnuEbIoP+lt9k90ZoH18SDRExtEIgwYAwBiywhMo5W0wmT8dq2tT0A61lxkeLK1O5i21G8krUHtviZssRsV+e68/KfeAWmBgHbcJzNHqmJQ3mG+NmMwpPUYRFL+aMs8K/h3dDRCLISe69Z/i866WpP3h0MDGAEx1XJWV32BIbUiDNznbwpH7Y1k5T2011mozVchnkrWCw/d5uG59JWI2XV95H1Sfn5pj6400Sky/A18OEevaD4G2mubuexSquEeA0XFlitTwzdKwI1v+xrRpKtnpATVbjbokMZeC5eMFuQ5dll7E1TURp/vWHqX58Zoe15S3gvanH/hl8zxjtvqIq+1pSCbAfFsyi1DDDxt59u+dsSJoa92YoOGQ5Fuj6Dh6bZSnPJTmrr/78b4Icyhw7RazNJFR8roy1Rayxc1dw95/ctFau3nq4K0Zx8DQPqUMgmd1Te+JOHjtB/hpjpGsziLJEuXG8bNzeLaaI0ShW/NHr0WmJucl5AIDfu4fpO9eFS0LLNIf6S6xd68kVQUH2qYQI34SAaLEQZ2x8zd4E/tUtjTLs5YFkMOnQK2xYoVI119OIvMkt3LW5sMTm0R5VXMC/T1Bda517QRocAEJ8mxaufRea6JIEz/gVhsjN8q2YsXL1mxLkuSkoo+upzTjXxgwwV4gsRwGlz0CrLNMLhf90UTIpsZ4zBi4mBOezuyR1XIOXS+G/nENDQNM7dBCSvUayO1X+W13Ug8unYuFpCqxGDh29BSMDYr7og7GCUknnpVqo4CE3qHA8EZtTnWTAgAAAAA==',
    description:
      'Classic military sidearm featuring an open-top slide design. Smooth double-action pull and legendary cycling reliability.',
  },
  {
    name: 'Benelli M4',
    type: 'Shotgun',
    caliber: '12 Gauge',
    price: 1899,
    image: 'data:image/webp;base64,UklGRhgCAABXRUJQVlA4IAwCAAAwDgCdASqFAGsAPtE8tFooIigoFJEAGglpABbV/EOwGXawA0gUyryLGLYLshDIP7BKb0sYVNBNP/kolRnig4vnuDdWHk4byAvWiVxhs+RYYapeSOStsZk1Sb+xa3kDPlw59DvdmME/217oDyW0TxC63Mg/sEp2QhkHUAD+8sIAAgAXu4rZTFfTpM3pAhvtE399SnON/jX8ZYu9Jyary70wNUfE3lgmdkoXFzrWSSC0vh5atCZdwNK4fNmXci7k0z7nyaugqe63oUd6pQezghHQH3jw1PahFrimrIP1TzSoAa+x7e6bZof6y8drh/3QymWP4eZt7AJzK3z8iXrfgPLnil5I2NgjDK6eCn/BlF59jRjJIRKCzCjv/+85nYSkH/KY8LmeR7zzEA+Ql3C1Q7mRj+9X5H7GQH2YvaHaUlsxgekE6PVoUO7NKKS6n4TtIh1M9yWkIUZ8oU9cjEpyEYHpregqunNjVOE/okyvxg2yIV4aA/xpPU8P7qEaoPivhgcCVoeHgJl0xG0Ph9+AuLrq+FSl9PBHoLzzsVmm/YhXWWWP6Xmb526BsyA3b/5292KjmrnuKAxSSpv5KZyMWWmcuhaqvhwSRwKQD9pngesTv/0L44rap5gHPPcDm+eCuXEDqtB3WZ/ucu2D9lIusKs9Rm9UVjrOjUZnlYkbja2+wgRTmvOt8IrgAAAAAA==',
    description:
      'Auto-regulating gas-operated tactical shotgun. Renowned as the premier combat shotgun capable of handling any load without adjustment.',
  },
]

export default GUNS