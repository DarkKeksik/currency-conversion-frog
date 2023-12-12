import React, { FC } from "react"

type TIconDoubleArrows = {
  fill?: string
  size?: number
}

// @TODO need fix icon
const IconDoubleArrows:FC<TIconDoubleArrows> = ({
  size,
  fill
}) => {
  const sizeDefault = {
    width: 30,
    height: 30
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || sizeDefault.width}
      height={size || sizeDefault.height}
      viewBox="0 0 32 32"
    >
      <g transform="matrix(0.4326362516 0 0 0.3796153157 14.9592982136 15)" id="0hcwmv2Xyx0_mQ1wl3Qc5">
        <path
          fill={fill}
          transform=" translate(-49.9995116902, -1002.3621565697)"
          d="M 35.066406 976.37534 C 34.68831025996483 976.3863897520222 34.328345033190764 976.5398642674006 34.058594 976.8050300000001 L 17.449219 993.1292500000001 C 17.16200157911548 993.4113220746009 17.000204869525348 993.7969950957558 17.000204869525348 994.19956 C 17.000204869525348 994.6021249042443 17.16200157911548 994.9877979253993 17.449219 995.2698700000001 L 34.058594 1011.5941 C 34.489529362528664 1012.0169176968216 35.131934552236736 1012.1402113051118 35.688783252983 1011.9069740527262 C 36.245631953729266 1011.6737368003407 36.60840757306548 1011.1294210908262 36.609375 1010.5257 L 36.609375 1003.8616000000001 L 64.890625 1003.8616000000001 C 65.71897874610912 1003.8615171292064 66.39048690378262 1003.1900537387434 66.390625 1002.3617 L 66.390625 997.77768 L 79.361328 1010.5257 L 66.390625 1023.2718 L 66.390625 1018.6878 C 66.39054211793464 1017.8594072085582 65.71901779144183 1017.1878828820654 64.890625 1017.1878 L 50 1017.1878 C 49.459044439320294 1017.1801469919849 48.95587358628868 1017.4643597997125 48.68316244887849 1017.9316071888913 C 48.41045131146831 1018.3988545780701 48.41045131146831 1018.97674542193 48.68316244887849 1019.4439928111087 C 48.95587358628868 1019.9112402002876 49.459044439320294 1020.1954530080152 50 1020.1878 L 63.390625 1020.1878 L 63.390625 1026.8499 C 63.390828632158836 1027.4539665663958 63.75332339393369 1027.9989814354806 64.3103421056542 1028.2327048037957 C 64.86736081737472 1028.4664281721111 65.51022383926001 1028.3432583911979 65.941406 1027.9202 L 82.550781 1011.5941 C 82.83740224634302 1011.3120989511707 82.99881851095354 1010.9268399531151 82.99881851095354 1010.52475 C 82.99881851095354 1010.122660046885 82.83740224634302 1009.7374010488294 82.550781 1009.4554 L 65.941406 993.12925 C 65.5102225408037 992.7061903374465 64.86735710607627 992.5830212060996 64.31033749777438 992.8167471343394 C 63.75331788947251 993.0504730625793 63.390824607369886 993.5954916150291 63.390625 994.1995599999999 L 63.390625 1000.8616999999999 L 35.109375 1000.8616999999999 C 34.28098220855817 1000.8617828820653 33.60945788206536 1001.5333072085581 33.609375 1002.3616999999999 L 33.609375 1006.9455999999999 L 20.640625 994.1995599999999 L 33.609375 981.45346 L 33.609375 986.0374499999999 C 33.60945788206536 986.8658427914418 34.28098220855817 987.5373671179345 35.109375 987.5374499999999 L 50 987.5374499999999 C 50.540955560679706 987.5451030080151 51.04412641371132 987.2608902002875 51.31683755112151 986.7936428111086 C 51.58954868853169 986.3263954219299 51.58954868853169 985.74850457807 51.31683755112151 985.2812571888912 C 51.04412641371132 984.8140097997124 50.540955560679706 984.5297969919848 50 984.5374499999999 L 36.609375 984.5374499999999 L 36.609375 977.8753399999999 C 36.60949960308104 977.4699702981851 36.445566486868834 977.0818049346182 36.15490821800654 976.7992409924434 C 35.864249949144245 976.5166770502686 35.471610557946065 976.3637694816408 35.066406 976.3753399999999 z"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

export default IconDoubleArrows