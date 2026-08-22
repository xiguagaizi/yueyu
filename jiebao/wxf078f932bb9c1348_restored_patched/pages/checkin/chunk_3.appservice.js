$gwx0_XC_3 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof(global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof(global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof(global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_3 || [];

        function gz$gwx0_XC_3_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1
            __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'navBack'])
                Z([1, false])
                Z([3, 'custom-nav'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'ohosHack']
                    ],
                    [1, false],
                    [1, true]
                ])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'ohosHack']
                    ],
                    [1, ''],
                    [1, '返回']
                ])
                Z([a, [3, '每日打卡'],
                    [
                        [2, '?:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'date']
                        ],
                        [
                            [2, '+'],
                            [
                                [2, '+'],
                                [1, '('],
                                [
                                    [6],
                                    [
                                        [7],
                                        [3, 'item']
                                    ],
                                    [3, 'date']
                                ]
                            ],
                            [1, ')']
                        ],
                        [1, '']
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'show']
                    ],
                    [
                        [7],
                        [3, 'item']
                    ]
                ])
                Z([3, 'handlePageTap'])
                Z([3, 'container'])
                Z([3, 'row'])
                Z([3, 'line'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'sentenceArr']
                ])
                Z(z[9])
                Z([3, '24'])
                Z([3, 'sentence'])
                Z([
                    [2, '&&'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'showReocordPanel']
                        ],
                        [1, true]
                    ],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'mode']
                        ],
                        [1, 'mandarin']
                    ]
                ])
                Z([
                    [7],
                    [3, 'line']
                ])
                Z([3, 'index'])
                Z([3, 'playWord'])
                Z([a, [3, 'checkin-ruby-token '],
                    [
                        [2, '?:'],
                        [
                            [2, '&&'],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'row']
                                ],
                                [
                                    [7],
                                    [3, 'currentRow']
                                ]
                            ],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'index']
                                ],
                                [
                                    [7],
                                    [3, 'currentCol']
                                ]
                            ]
                        ],
                        [1, 'current-word'],
                        [1, 'current-words']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [2, '&&'],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'showReocordPanel']
                                ],
                                [1, true]
                            ],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'mode']
                                ],
                                [1, 'jyutping']
                            ]
                        ],
                        [1, 'blur-zi'],
                        [1, '']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [2, '&&'],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'showReocordPanel']
                                ],
                                [1, true]
                            ],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'mode']
                                ],
                                [1, 'cantonese']
                            ]
                        ],
                        [1, 'blur-pin'],
                        [1, '']
                    ],
                    [3, ' '],
                    [
                        [2, '?:'],
                        [
                            [2, '&&'],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'showReocordPanel']
                                ],
                                [1, true]
                            ],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'mode']
                                ],
                                [1, 'mandarin']
                            ]
                        ],
                        [1, 'blur-zi blur-pin'],
                        [1, '']
                    ]
                ])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [1, 1]
                ])
                Z([
                    [7],
                    [3, 'row']
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [1, 2]
                    ],
                    [3, 'alternativeTokens']
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'showReocordPanel']
                        ],
                        [1, true]
                    ],
                    [
                        [2, '||'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'mode']
                            ],
                            [1, 'cantonese']
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'mode']
                            ],
                            [1, 'mandarin']
                        ]
                    ]
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [1, 2]
                    ],
                    [3, 'displayPinyin']
                ])
                Z([
                    [7],
                    [3, 'rubyDisplayStyle']
                ])
                Z([
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'row']
                            ],
                            [
                                [7],
                                [3, 'currentRow']
                            ]
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'index']
                            ],
                            [
                                [7],
                                [3, 'currentCol']
                            ]
                        ]
                    ],
                    [1, 'green'],
                    [1, '#666']
                ])
                Z([3, 'inherit'])
                Z([3, '32'])
                Z([3, '400'])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [1, 2]
                    ],
                    [3, 'pinyinParts']
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [1, 2]
                    ],
                    [3, 'text']
                ])
                Z([
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'row']
                            ],
                            [
                                [7],
                                [3, 'currentRow']
                            ]
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'index']
                            ],
                            [
                                [7],
                                [3, 'currentCol']
                            ]
                        ]
                    ],
                    [1, 'green'],
                    [1, '#000']
                ])
                Z(z[28])
                Z([3, '44'])
                Z(z[30])
                Z([3, 'word-inline'])
                Z([
                    [7],
                    [3, 'notice']
                ])
                Z([3, 'service-o'])
                Z([3, 'contact'])
                Z([3, 'normal'])
                Z(z[13])
                Z([3, 'play-wrap'])
                Z([3, 'teaching-play'])
                Z([3, 'playSentenseHandler'])
                Z([
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [7],
                            [3, 'isPlayingSentence']
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currSoundSource']
                            ],
                            [1, 'original']
                        ]
                    ],
                    [1, 'playing-btn'],
                    [1, '']
                ])
                Z([3, 'original'])
                Z([
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [7],
                            [3, 'isPlayingSentence']
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currSoundSource']
                            ],
                            [1, 'original']
                        ]
                    ],
                    [1, 'pause-circle-o'],
                    [1, 'play-circle-o']
                ])
                Z([3, 'small'])
                Z([3, 'primary'])
                Z([
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'slowSound']
                    ],
                    [
                        [2, '&&'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'teaching']
                        ],
                        [
                            [6],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'teaching']
                            ],
                            [3, 'slow']
                        ]
                    ]
                ])
                Z(z[45])
                Z([
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [7],
                            [3, 'isPlayingSentence']
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currSoundSource']
                            ],
                            [1, 'slow']
                        ]
                    ],
                    [1, 'playing-btn'],
                    [1, '']
                ])
                Z([3, 'slow'])
                Z([
                    [2, '?:'],
                    [
                        [2, '&&'],
                        [
                            [7],
                            [3, 'isPlayingSentence']
                        ],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currSoundSource']
                            ],
                            [1, 'slow']
                        ]
                    ],
                    [1, 'pause-circle-o'],
                    [1, 'play-circle-o']
                ])
                Z(z[49])
                Z(z[50])
                Z([3, 'playByWord'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isPlayingByWord']
                    ],
                    [1, 'playing-btn'],
                    [1, '']
                ])
                Z([3, 'detail'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isPlayingByWord']
                    ],
                    [1, 'pause-circle-o'],
                    [1, 'play-circle-o']
                ])
                Z(z[49])
                Z(z[50])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'mediaEpisodeUuid']
                ])
                Z([3, 'navToVideo'])
                Z([3, '#333'])
                Z(z[64])
                Z([3, '/images/home/sp.png'])
                Z(z[49])
                Z([3, 'info'])
                Z([
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'feedId']
                    ],
                    [
                        [2, '!'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'mediaEpisodeUuid']
                        ]
                    ]
                ])
                Z([3, 'navToSph'])
                Z(z[66])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'feedId']
                ])
                Z([3, '/images/sph.png'])
                Z(z[49])
                Z(z[70])
                Z([3, 'green'])
                Z([3, '4rpx'])
                Z([3, 'onDragChange'])
                Z([3, 'onDrag'])
                Z([3, 'onDragEnd'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'isPlayingByWord']
                    ],
                    [1, true],
                    [1, false]
                ])
                Z([3, '#d5d5d5'])
                Z([
                    [7],
                    [3, 'currentValue']
                ])
                Z([3, 'showSettingPanel'])
                Z(z[66])
                Z([3, 'setting-o'])
                Z([3, 'mini'])
                Z(z[13])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'vocabularies']
                    ],
                    [3, 'length']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'title']
                ])
                Z([
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'ext']
                    ],
                    [
                        [2, '!'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'feedId']
                        ]
                    ]
                ])
                Z(z[13])
                Z([3, 'smile-o'])
                Z([3, '18px'])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'ext']
                    ],
                    [3, 'list']
                ])
                Z(z[17])
                Z([3, 'openSPH'])
                Z(z[74])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'finderUserName']
                ])
                Z(z[49])
                Z([3, 'margin-right:10rpx;'])
                Z(z[70])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'showFilterPanel']
                    ],
                    [
                        [2, '||'],
                        [
                            [2, '||'],
                            [
                                [2, '>'],
                                [
                                    [6],
                                    [
                                        [7],
                                        [3, 'scopeOptions']
                                    ],
                                    [3, 'length']
                                ],
                                [1, 1]
                            ],
                            [
                                [2, '>'],
                                [
                                    [6],
                                    [
                                        [7],
                                        [3, 'vipFilterOptions']
                                    ],
                                    [3, 'length']
                                ],
                                [1, 1]
                            ]
                        ],
                        [
                            [2, '>'],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'studentCategoryOptions']
                                ],
                                [3, 'length']
                            ],
                            [1, 1]
                        ]
                    ]
                ])
                Z([3, 'filter-panel'])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'scopeOptions']
                        ],
                        [3, 'length']
                    ],
                    [1, 1]
                ])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'vipFilterOptions']
                        ],
                        [3, 'length']
                    ],
                    [1, 1]
                ])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'studentCategoryOptions']
                        ],
                        [3, 'length']
                    ],
                    [1, 1]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'list']
                    ],
                    [3, 'length']
                ])
                Z([3, 'mt10'])
                Z([
                    [7],
                    [3, 'list']
                ])
                Z(z[17])
                Z(z[13])
                Z([3, 'item'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'isGood']
                ])
                Z([3, 'userinfo'])
                Z([3, 'navToAdminManage'])
                Z([3, 'navToComment'])
                Z([3, 'avatar-info'])
                Z(z[20])
                Z(z[70])
                Z([3, 'name'])
                Z([
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'isVip']
                    ],
                    [
                        [2, '||'],
                        [
                            [7],
                            [3, 'isTeacher']
                        ],
                        [
                            [7],
                            [3, 'isAdmin']
                        ]
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'studentCategoryLabel']
                ])
                Z([
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'otherTeacherBinding']
                    ],
                    [
                        [6],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'otherTeacherBinding']
                        ],
                        [3, 'hasOtherThirdPartyTeacher']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'checkinNum']
                ])
                Z([3, 'likeClickHandle'])
                Z([3, 'like'])
                Z(z[20])
                Z([
                    [2, '?:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'hasLiked']
                    ],
                    [1, '#ff7500'],
                    [1, 'gray']
                ])
                Z([3, 'good-job-o'])
                Z([3, '25px'])
                Z([3, 'playerPlayHandler'])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'tools']
                        ],
                        [3, 'formatDuration']
                    ],
                    [
                        [5],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'duration']
                        ]
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'sound']
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '&&'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'checkined']
                        ],
                        [
                            [7],
                            [3, 'allowDelete']
                        ]
                    ],
                    [
                        [2, '!=='],
                        [
                            [7],
                            [3, 'isGood']
                        ],
                        [1, true]
                    ]
                ])
                Z([3, 'delete-tips'])
                Z([3, 'delete'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'uuid']
                ])
                Z(z[49])
                Z([3, 'danger'])
                Z([3, 'showDeleteRuleTips'])
                Z([3, 'gray'])
                Z([3, 'question-o'])
                Z([3, '28rpx'])
                Z([
                    [7],
                    [3, 'hasNext']
                ])
                Z(z[13])
                Z([3, 'loadMore'])
                Z(z[41])
                Z(z[70])
                Z([3, 'hideCheckin'])
                Z([3, 'shadow'])
                Z(z[1])
                Z([3, 'bottom'])
                Z([
                    [7],
                    [3, 'showReocordPanel']
                ])
                Z([3, 'record-panel'])
                Z([3, 'setMode'])
                Z([3, 'mode-bar'])
                Z([a, [3, 'color:'],
                    [
                        [2, '?:'],
                        [
                            [2, '!=='],
                            [
                                [7],
                                [3, 'mode']
                            ],
                            [1, 'normal']
                        ],
                        [1, '#45171d;'],
                        [1, '']
                    ]
                ])
                Z(z[88])
                Z([3, 'main'])
                Z(z[13])
                Z([3, 'recordHandle'])
                Z([3, 'padding: 10px'])
                Z([3, 'https://s.cantonesepi.top/pi/images/mp/home/microphone.png'])
                Z([3, 'large'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'recording']
                    ],
                    [1, 'danger'],
                    [1, 'info']
                ])
                Z(z[13])
                Z(z[134])
                Z([
                    [12],
                    [
                        [6],
                        [
                            [7],
                            [3, 'tools']
                        ],
                        [3, 'formatDuration']
                    ],
                    [
                        [5],
                        [
                            [7],
                            [3, 'duration']
                        ]
                    ]
                ])
                Z([3, 'player'])
                Z([
                    [7],
                    [3, 'tempFilePath']
                ])
                Z([3, 'btn-bar'])
                Z([
                    [7],
                    [3, 'openComment']
                ])
                Z([3, 'onCheckBoxChange'])
                Z([3, 'square'])
                Z([
                    [7],
                    [3, 'needFeedback']
                ])
                Z([3, 'checkinHandle'])
                Z(z[167])
                Z(z[50])
                Z([3, 'hideModePanel'])
                Z(z[182])
                Z([3, '取消'])
                Z([
                    [7],
                    [3, 'showModePanel']
                ])
                Z([3, '打卡模式'])
                Z([3, 'onChange'])
                Z([3, 'mode'])
                Z([
                    [7],
                    [3, 'mode']
                ])
                Z(z[41])
                Z([3, 'cantonese'])
                Z([3, 'jyutping'])
                Z([3, 'mandarin'])
                Z([3, 'onClose'])
                Z(z[194])
                Z(z[184])
                Z([
                    [7],
                    [3, 'showSettingPanel']
                ])
                Z([3, '播放设置'])
                Z(z[187])
                Z([3, '64rpx'])
                Z([3, 'sentenceRepeatCount'])
                Z([3, '80rpx'])
                Z([3, '10'])
                Z([3, '1'])
                Z([
                    [7],
                    [3, 'sentenceRepeatCount']
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '&&'],
                        [
                            [7],
                            [3, 'show']
                        ],
                        [
                            [7],
                            [3, 'item']
                        ]
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'hideNav']
                        ]
                    ]
                ])
                Z([3, 'bottom-panel'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'ohosHack']
                    ],
                    [1, true]
                ])
                Z([
                    [7],
                    [3, 'ohosCheckinResult']
                ])
                Z([3, 'arrow-left'])
                Z([3, 'launchApp'])
                Z(z[49])
                Z([3, 'showCheckin'])
                Z(z[70])
                Z([
                    [2, '!=='],
                    [
                        [7],
                        [3, 'ohosHack']
                    ],
                    [1, true]
                ])
                Z(z[215])
                Z([3, 'favHandle'])
                Z([3, 'outline-btn fav-btn'])
                Z([3, 'fav-btn__icon'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'favId']
                    ],
                    [1, '#ee3f2b'],
                    [1, '#909399']
                ])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'favId']
                    ],
                    [1, 'like'],
                    [1, 'like-o']
                ])
                Z(z[96])
                Z([
                    [7],
                    [3, 'feedbackCount']
                ])
                Z([3, 'navToFeedback'])
                Z([a, z[223],
                    [3, '条纠音']
                ])
                Z([3, 'comment-o'])
                Z([3, '30'])
            })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1);
            return __WXML_GLOBAL__.ops_cached.$gwx0_XC_3_1
        }
        __WXML_GLOBAL__.ops_set.$gwx0_XC_3 = z;
        __WXML_GLOBAL__.ops_init.$gwx0_XC_3 = true;
        var x = ['./pages/checkin/index/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx0_XC_3_1()
            var oVC = _mz(z, 'van-nav-bar', ['bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftArrow', 2, 'leftText', 3, 'title', 4], [], e, s, gg)
            _(r, oVC)
            var oTC = _v()
            _(r, oTC)
            if (_oz(z, 6, e, s, gg)) {
                oTC.wxVkey = 1
                var lWC = _mz(z, 'view', ['bind:tap', 7, 'class', 1], [], e, s, gg)
                var o2C = _v()
                _(lWC, o2C)
                var x3C = function(f5C, o4C, c6C, gg) {
                    var o8C = _n('van-row')
                    var c9C = _n('van-col')
                    _rz(z, c9C, 'span', 13, f5C, o4C, gg)
                    var o0C = _n('view')
                    _rz(z, o0C, 'class', 14, f5C, o4C, gg)
                    var lAD = _v()
                    _(o0C, lAD)
                    if (_oz(z, 15, f5C, o4C, gg)) {
                        lAD.wxVkey = 1
                    }
                    var aBD = _v()
                    _(o0C, aBD)
                    var tCD = function(bED, eDD, oFD, gg) {
                        var oHD = _mz(z, 'view', ['bind:tap', 18, 'class', 1, 'data-col', 2, 'data-p', 3, 'data-row', 4], [], bED, eDD, gg)
                        var fID = _mz(z, 'ruby-token', ['alternativeTokens', 23, 'blur', 1, 'displayPinyin', 2, 'displayStyle', 3, 'pinyinColor', 4, 'pinyinFontFamily', 5, 'pinyinFontSize', 6, 'pinyinFontWeight', 7, 'pinyinParts', 8, 'text', 9, 'textColor', 10, 'textFontFamily', 11, 'textFontSize', 12, 'textFontWeight', 13, 'variant', 14], [], bED, eDD, gg)
                        _(oHD, fID)
                        _(oFD, oHD)
                        return oFD
                    }
                    aBD.wxXCkey = 4
                    _2z(z, 16, tCD, f5C, o4C, gg, aBD, 'item', 'index', 'index')
                    lAD.wxXCkey = 1
                    _(c9C, o0C)
                    _(o8C, c9C)
                    _(c6C, o8C)
                    return c6C
                }
                o2C.wxXCkey = 4
                _2z(z, 11, x3C, e, s, gg, o2C, 'line', 'row', 'row')
                var aXC = _v()
                _(lWC, aXC)
                if (_oz(z, 38, e, s, gg)) {
                    aXC.wxVkey = 1
                    var cJD = _mz(z, 'van-button', ['block', -1, 'round', -1, 'icon', 39, 'openType', 1, 'size', 2], [], e, s, gg)
                    _(aXC, cJD)
                }
                var hKD = _n('van-row')
                var oLD = _n('van-col')
                _rz(z, oLD, 'span', 42, e, s, gg)
                var cMD = _n('view')
                _rz(z, cMD, 'class', 43, e, s, gg)
                var oND = _n('view')
                _rz(z, oND, 'class', 44, e, s, gg)
                var eRD = _mz(z, 'van-button', ['round', -1, 'bind:tap', 45, 'customClass', 1, 'data-source', 2, 'icon', 3, 'size', 4, 'type', 5], [], e, s, gg)
                _(oND, eRD)
                var lOD = _v()
                _(oND, lOD)
                if (_oz(z, 51, e, s, gg)) {
                    lOD.wxVkey = 1
                    var bSD = _mz(z, 'van-button', ['round', -1, 'bind:tap', 52, 'customClass', 1, 'data-source', 2, 'icon', 3, 'size', 4, 'type', 5], [], e, s, gg)
                    _(lOD, bSD)
                }
                var oTD = _mz(z, 'van-button', ['round', -1, 'bind:tap', 58, 'customClass', 1, 'data-source', 2, 'icon', 3, 'size', 4, 'type', 5], [], e, s, gg)
                _(oND, oTD)
                var aPD = _v()
                _(oND, aPD)
                if (_oz(z, 64, e, s, gg)) {
                    aPD.wxVkey = 1
                    var xUD = _mz(z, 'van-button', ['round', -1, 'bind:tap', 65, 'color', 1, 'data-uuid', 2, 'icon', 3, 'size', 4, 'type', 5], [], e, s, gg)
                    _(aPD, xUD)
                }
                var tQD = _v()
                _(oND, tQD)
                if (_oz(z, 71, e, s, gg)) {
                    tQD.wxVkey = 1
                    var oVD = _mz(z, 'van-button', ['round', -1, 'bind:tap', 72, 'color', 1, 'data-fid', 2, 'icon', 3, 'size', 4, 'type', 5], [], e, s, gg)
                    _(tQD, oVD)
                }
                lOD.wxXCkey = 1
                lOD.wxXCkey = 3
                aPD.wxXCkey = 1
                aPD.wxXCkey = 3
                tQD.wxXCkey = 1
                tQD.wxXCkey = 3
                _(cMD, oND)
                var fWD = _mz(z, 'van-slider', ['activeColor', 78, 'barHeight', 1, 'bind:change', 2, 'bind:drag', 3, 'bind:drag-end', 4, 'disabled', 5, 'inactiveColor', 6, 'value', 7], [], e, s, gg)
                _(cMD, fWD)
                var cXD = _mz(z, 'van-button', ['round', -1, 'bind:tap', 86, 'color', 1, 'icon', 2, 'size', 3], [], e, s, gg)
                _(cMD, cXD)
                _(oLD, cMD)
                _(hKD, oLD)
                _(lWC, hKD)
                var hYD = _n('van-row')
                var oZD = _n('van-col')
                _rz(z, oZD, 'span', 90, e, s, gg)
                var c1D = _v()
                _(oZD, c1D)
                if (_oz(z, 91, e, s, gg)) {
                    c1D.wxVkey = 1
                }
                var o2D = _v()
                _(oZD, o2D)
                if (_oz(z, 92, e, s, gg)) {
                    o2D.wxVkey = 1
                }
                c1D.wxXCkey = 1
                o2D.wxXCkey = 1
                _(hYD, oZD)
                _(lWC, hYD)
                var tYC = _v()
                _(lWC, tYC)
                if (_oz(z, 93, e, s, gg)) {
                    tYC.wxVkey = 1
                    var l3D = _n('van-row')
                    var a4D = _n('van-col')
                    _rz(z, a4D, 'span', 94, e, s, gg)
                    var t5D = _mz(z, 'van-icon', ['name', 95, 'size', 1], [], e, s, gg)
                    _(a4D, t5D)
                    var e6D = _v()
                    _(a4D, e6D)
                    var b7D = function(x9D, o8D, o0D, gg) {
                        var cBE = _mz(z, 'van-button', ['round', -1, 'bind:tap', 99, 'data-fid', 1, 'data-fname', 2, 'size', 3, 'style', 4, 'type', 5], [], x9D, o8D, gg)
                        _(o0D, cBE)
                        return o0D
                    }
                    e6D.wxXCkey = 4
                    _2z(z, 97, b7D, e, s, gg, e6D, 'item', 'index', 'index')
                    _(l3D, a4D)
                    _(tYC, l3D)
                }
                var eZC = _v()
                _(lWC, eZC)
                if (_oz(z, 105, e, s, gg)) {
                    eZC.wxVkey = 1
                    var hCE = _n('view')
                    _rz(z, hCE, 'class', 106, e, s, gg)
                    var oDE = _v()
                    _(hCE, oDE)
                    if (_oz(z, 107, e, s, gg)) {
                        oDE.wxVkey = 1
                    }
                    var cEE = _v()
                    _(hCE, cEE)
                    if (_oz(z, 108, e, s, gg)) {
                        cEE.wxVkey = 1
                    }
                    var oFE = _v()
                    _(hCE, oFE)
                    if (_oz(z, 109, e, s, gg)) {
                        oFE.wxVkey = 1
                    }
                    oDE.wxXCkey = 1
                    cEE.wxXCkey = 1
                    oFE.wxXCkey = 1
                    _(eZC, hCE)
                }
                var b1C = _v()
                _(lWC, b1C)
                if (_oz(z, 110, e, s, gg)) {
                    b1C.wxVkey = 1
                    var lGE = _n('van-row')
                    _rz(z, lGE, 'customClass', 111, e, s, gg)
                    var tIE = _v()
                    _(lGE, tIE)
                    var eJE = function(oLE, bKE, xME, gg) {
                        var fOE = _n('van-col')
                        _rz(z, fOE, 'span', 114, oLE, bKE, gg)
                        var cPE = _n('view')
                        _rz(z, cPE, 'class', 115, oLE, bKE, gg)
                        var hQE = _v()
                        _(cPE, hQE)
                        if (_oz(z, 116, oLE, bKE, gg)) {
                            hQE.wxVkey = 1
                        }
                        var cSE = _n('view')
                        _rz(z, cSE, 'class', 117, oLE, bKE, gg)
                        var oTE = _mz(z, 'view', ['bind:longpress', 118, 'bind:tap', 1, 'class', 2, 'data-index', 3], [], oLE, bKE, gg)
                        var lUE = _n('view')
                        _rz(z, lUE, 'class', 122, oLE, bKE, gg)
                        var tWE = _n('view')
                        _rz(z, tWE, 'class', 123, oLE, bKE, gg)
                        var eXE = _v()
                        _(tWE, eXE)
                        if (_oz(z, 124, oLE, bKE, gg)) {
                            eXE.wxVkey = 1
                        }
                        var bYE = _v()
                        _(tWE, bYE)
                        if (_oz(z, 125, oLE, bKE, gg)) {
                            bYE.wxVkey = 1
                        }
                        var oZE = _v()
                        _(tWE, oZE)
                        if (_oz(z, 126, oLE, bKE, gg)) {
                            oZE.wxVkey = 1
                        }
                        eXE.wxXCkey = 1
                        bYE.wxXCkey = 1
                        oZE.wxXCkey = 1
                        _(lUE, tWE)
                        var aVE = _v()
                        _(lUE, aVE)
                        if (_oz(z, 127, oLE, bKE, gg)) {
                            aVE.wxVkey = 1
                        }
                        aVE.wxXCkey = 1
                        _(oTE, lUE)
                        _(cSE, oTE)
                        var x1E = _mz(z, 'view', ['bind:tap', 128, 'class', 1, 'data-index', 2], [], oLE, bKE, gg)
                        var o2E = _mz(z, 'van-icon', ['color', 131, 'name', 1, 'size', 2], [], oLE, bKE, gg)
                        _(x1E, o2E)
                        _(cSE, x1E)
                        _(cPE, cSE)
                        var f3E = _mz(z, 'player', ['inactive', -1, 'bind:onPlay', 134, 'duration', 1, 'src', 2], [], oLE, bKE, gg)
                        _(cPE, f3E)
                        var oRE = _v()
                        _(cPE, oRE)
                        if (_oz(z, 137, oLE, bKE, gg)) {
                            oRE.wxVkey = 1
                            var c4E = _n('view')
                            _rz(z, c4E, 'class', 138, oLE, bKE, gg)
                            var h5E = _mz(z, 'van-button', ['round', -1, 'bind:tap', 139, 'data-uuid', 1, 'size', 2, 'type', 3], [], oLE, bKE, gg)
                            _(c4E, h5E)
                            var o6E = _mz(z, 'van-icon', ['bind:tap', 143, 'color', 1, 'name', 2, 'size', 3], [], oLE, bKE, gg)
                            _(c4E, o6E)
                            _(oRE, c4E)
                        }
                        hQE.wxXCkey = 1
                        oRE.wxXCkey = 1
                        oRE.wxXCkey = 3
                        _(fOE, cPE)
                        _(xME, fOE)
                        return xME
                    }
                    tIE.wxXCkey = 4
                    _2z(z, 112, eJE, e, s, gg, tIE, 'item', 'index', 'index')
                    var aHE = _v()
                    _(lGE, aHE)
                    if (_oz(z, 147, e, s, gg)) {
                        aHE.wxVkey = 1
                        var c7E = _n('van-col')
                        _rz(z, c7E, 'span', 148, e, s, gg)
                        var o8E = _mz(z, 'van-button', ['plain', -1, 'round', -1, 'bind:tap', 149, 'size', 1, 'type', 2], [], e, s, gg)
                        _(c7E, o8E)
                        _(aHE, c7E)
                    }
                    aHE.wxXCkey = 1
                    aHE.wxXCkey = 3
                    _(b1C, lGE)
                }
                aXC.wxXCkey = 1
                aXC.wxXCkey = 3
                tYC.wxXCkey = 1
                tYC.wxXCkey = 3
                eZC.wxXCkey = 1
                b1C.wxXCkey = 1
                b1C.wxXCkey = 3
                _(oTC, lWC)
            }
            var l9E = _mz(z, 'van-popup', ['closeable', -1, 'round', -1, 'bind:close', 152, 'customClass', 1, 'overlay', 2, 'position', 3, 'show', 4], [], e, s, gg)
            var a0E = _n('view')
            _rz(z, a0E, 'class', 157, e, s, gg)
            var tAF = _mz(z, 'view', ['bind:tap', 158, 'class', 1, 'style', 2], [], e, s, gg)
            var eBF = _n('van-icon')
            _rz(z, eBF, 'name', 161, e, s, gg)
            _(tAF, eBF)
            _(a0E, tAF)
            var bCF = _n('view')
            _rz(z, bCF, 'class', 162, e, s, gg)
            var oDF = _n('van-row')
            var xEF = _n('van-col')
            _rz(z, xEF, 'span', 163, e, s, gg)
            var oFF = _mz(z, 'van-button', ['round', -1, 'bind:tap', 164, 'customStyle', 1, 'icon', 2, 'size', 3, 'type', 4], [], e, s, gg)
            _(xEF, oFF)
            _(oDF, xEF)
            _(bCF, oDF)
            var fGF = _n('van-row')
            var cHF = _n('van-col')
            _rz(z, cHF, 'span', 169, e, s, gg)
            var hIF = _mz(z, 'player', ['inactive', -1, 'bind:onPlay', 170, 'duration', 1, 'id', 2, 'src', 3], [], e, s, gg)
            _(cHF, hIF)
            _(fGF, cHF)
            _(bCF, fGF)
            _(a0E, bCF)
            var oJF = _n('view')
            _rz(z, oJF, 'class', 174, e, s, gg)
            var cKF = _v()
            _(oJF, cKF)
            if (_oz(z, 175, e, s, gg)) {
                cKF.wxVkey = 1
                var oLF = _mz(z, 'van-checkbox', ['bind:change', 176, 'shape', 1, 'value', 2], [], e, s, gg)
                _(cKF, oLF)
            }
            var lMF = _mz(z, 'van-button', ['block', -1, 'round', -1, 'bind:tap', 179, 'size', 1, 'type', 2], [], e, s, gg)
            _(oJF, lMF)
            cKF.wxXCkey = 1
            cKF.wxXCkey = 3
            _(a0E, oJF)
            _(l9E, a0E)
            _(r, l9E)
            var aNF = _mz(z, 'van-action-sheet', ['bind:cancel', 182, 'bind:close', 1, 'cancelText', 2, 'show', 3, 'title', 4], [], e, s, gg)
            var tOF = _mz(z, 'van-radio-group', ['bind:change', 187, 'data-key', 1, 'value', 2], [], e, s, gg)
            var ePF = _n('van-radio')
            _rz(z, ePF, 'name', 190, e, s, gg)
            _(tOF, ePF)
            var bQF = _n('van-radio')
            _rz(z, bQF, 'name', 191, e, s, gg)
            _(tOF, bQF)
            var oRF = _n('van-radio')
            _rz(z, oRF, 'name', 192, e, s, gg)
            _(tOF, oRF)
            var xSF = _n('van-radio')
            _rz(z, xSF, 'name', 193, e, s, gg)
            _(tOF, xSF)
            _(aNF, tOF)
            _(r, aNF)
            var oTF = _mz(z, 'van-action-sheet', ['bind:cancel', 194, 'bind:close', 1, 'cancelText', 2, 'show', 3, 'title', 4], [], e, s, gg)
            var fUF = _mz(z, 'van-stepper', ['bind:change', 199, 'buttonSize', 1, 'data-key', 2, 'inputWidth', 3, 'max', 4, 'min', 5, 'value', 6], [], e, s, gg)
            _(oTF, fUF)
            _(r, oTF)
            var cUC = _v()
            _(r, cUC)
            if (_oz(z, 206, e, s, gg)) {
                cUC.wxVkey = 1
                var cVF = _n('view')
                _rz(z, cVF, 'class', 207, e, s, gg)
                var hWF = _v()
                _(cVF, hWF)
                if (_oz(z, 208, e, s, gg)) {
                    hWF.wxVkey = 1
                    var l1F = _mz(z, 'van-button', ['round', -1, 'appParameter', 209, 'icon', 1, 'openType', 2, 'size', 3], [], e, s, gg)
                    _(hWF, l1F)
                }
                var a2F = _mz(z, 'van-button', ['round', -1, 'bind:tap', 213, 'type', 1], [], e, s, gg)
                _(cVF, a2F)
                var oXF = _v()
                _(cVF, oXF)
                if (_oz(z, 215, e, s, gg)) {
                    oXF.wxVkey = 1
                }
                var cYF = _v()
                _(cVF, cYF)
                if (_oz(z, 216, e, s, gg)) {
                    cYF.wxVkey = 1
                    var t3F = _mz(z, 'view', ['bind:tap', 217, 'class', 1], [], e, s, gg)
                    var e4F = _mz(z, 'van-icon', ['class', 219, 'color', 1, 'name', 2, 'size', 3], [], e, s, gg)
                    _(t3F, e4F)
                    _(cYF, t3F)
                }
                var oZF = _v()
                _(cVF, oZF)
                if (_oz(z, 223, e, s, gg)) {
                    oZF.wxVkey = 1
                    var b5F = _mz(z, 'van-icon', ['bind:tap', 224, 'info', 1, 'name', 2, 'size', 3], [], e, s, gg)
                    _(oZF, b5F)
                }
                hWF.wxXCkey = 1
                hWF.wxXCkey = 3
                oXF.wxXCkey = 1
                cYF.wxXCkey = 1
                cYF.wxXCkey = 3
                oZF.wxXCkey = 1
                oZF.wxXCkey = 3
                _(cUC, cVF)
            }
            oTC.wxXCkey = 1
            oTC.wxXCkey = 3
            cUC.wxXCkey = 1
            cUC.wxXCkey = 3
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx0_XC_3";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_3();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/checkin/index/index.wxml'] = [$gwx0_XC_3, './pages/checkin/index/index.wxml'];
else __wxAppCode__['pages/checkin/index/index.wxml'] = $gwx0_XC_3('./pages/checkin/index/index.wxml');;
__wxRoute = "pages/checkin/index/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/checkin/index/index.js";
define("pages/checkin/index/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../@babel/runtime/helpers/defineProperty"),
        t = require("../../../@babel/runtime/helpers/objectSpread2"),
        n = require("../../../@babel/runtime/helpers/typeof"),
        a = require("../../../@babel/runtime/helpers/toConsumableArray"),
        i = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
        r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
        o = require("../../../commons/utils"),
        s = (require("../../../utils/login"), C(require("../../../utils/monitor"))),
        c = require("../../../commons/config"),
        u = C(require("../../../api/getCheckin")),
        l = C(require("../../../api/addLike")),
        d = C(require("../../../api/delLike")),
        h = C(require("../../../api/getUserCheckinList")),
        p = C(require("../../../api/addUserCheckin")),
        f = C(require("../../../api/delUserCheckin")),
        v = C(require("../../../api/addFav")),
        g = C(require("../../../api/getFavState")),
        m = C(require("../../../api/deleteFav")),
        w = C(require("../../../api/getNewAnswerCount")),
        y = C(require("../../../api/getBanners")),
        k = C(require("../../../api/getOSSPostPolicy")),
        x = C(require("../../../api/exchangeMiniappTicket")),
        S = require("../../../components/ruby-token/shared");

    function C(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var P = function(e) {
            var t = Math.floor(e / 60),
                n = Math.floor(e % 60);
            return "".concat(t.toString().padStart(2, "0"), ":").concat(n.toString().padStart(2, "0"))
        },
        T = {
            all: "全部",
            bound_students: "我的学员"
        },
        D = {
            all: "全部",
            vip_only: "仅VIP",
            non_vip_only: "仅非VIP"
        },
        _ = {
            all: "全部",
            active_member: "活跃会员",
            general_member: "一般会员",
            inactive_member: "暂不跟进",
            unclassified: "未分类"
        },
        b = getApp().isOHOS,
        I = void 0 !== b && b;
    Page({
        isGuest: !1,
        maxCheckinLimit: 3,
        page: 1,
        pageSize: 10,
        lastPageTapAt: 0,
        filterPreference: null,
        navBack: o.navBack,
        data: {
            isPlayingSentence: !1,
            isPlayingByWord: !1,
            showSettingPanel: !1,
            showModePanel: !1,
            mode: "normal",
            sentenceRepeatCount: 1,
            PINYIN_SCHEME: c.PINYIN_SCHEME,
            maxDuration: 6e4,
            show: !1,
            showReocordPanel: !1,
            list: [],
            currSoundSource: "original",
            currentValue: 0,
            fmtCurrentTime: "",
            isTeacher: !1,
            identity: null,
            currentScope: "all",
            currentVipFilter: "all",
            currentStudentCategory: "all",
            scopeOptions: [],
            vipFilterOptions: [],
            studentCategoryOptions: [],
            showFilterPanel: !1,
            pinyinScheme: "",
            rubyDisplayStyle: "annotated"
        },
        canToggleFilterPanel: function() {
            var e = this.data,
                t = e.isAdmin,
                n = void 0 !== t && t,
                a = e.identity,
                i = void 0 === a ? null : a;
            return !!n || "official" === (null == i ? void 0 : i.teacherType)
        },
        toggleFilterPanel: function() {
            var e = this;
            if (this.canToggleFilterPanel()) {
                var t = !this.data.showFilterPanel;
                this.setData({
                    showFilterPanel: t
                }, (function() {
                    e.persistFilterPreference({
                        showFilterPanel: t
                    })
                })), wx.showToast({
                    title: t ? "筛选已显示" : "筛选已隐藏",
                    icon: "none"
                })
            }
        },
        handlePageTap: function() {
            if (this.canToggleFilterPanel()) {
                var e = Date.now();
                e - this.lastPageTapAt > 300 ? this.lastPageTapAt = e : (this.lastPageTapAt = 0, this.toggleFilterPanel())
            }
        },
        navToAdminManage: function(e) {
            var t = this.data,
                n = t.isAdmin,
                a = void 0 !== n && n,
                i = t.list,
                r = void 0 === i ? [] : i;
            if (a) {
                var o = (e.currentTarget.dataset || {}).index;
                if (void 0 !== o && r[o]) {
                    var s = decodeURIComponent(r[o].uuid);
                    wx.navigateTo({
                        url: "/pages/admin/checkin/manage/index?id=".concat(s)
                    })
                }
            }
        },
        navToComment: function(e) {
            var t = this.data,
                n = t.isAdmin,
                a = void 0 !== n && n,
                i = t.list,
                r = void 0 === i ? [] : i,
                o = t.isTeacher;
            if (a || void 0 !== o && o) {
                var s = e.currentTarget.dataset.index,
                    c = decodeURIComponent(r[s].uuid),
                    u = "/pages/correction/session/detail?checkinId=".concat(c);
                wx.navigateTo({
                    url: u
                })
            }
        },
        play: function() {
            this.selectComponent("#player").play()
        },
        initRM: function() {
            var e = this,
                t = wx.getRecorderManager();
            t.onStart((function() {
                console.log("recorder start"), e.setData({
                    recTotalTime: 0
                }), e.countdown(), e.setRecordStatus(!0)
            })), t.onPause((function() {
                console.log("recorder pause"), e.setRecordStatus(!1), e.stopCountDown()
            })), t.onInterruptionBegin((function() {
                wx.showModal({
                    content: "录音已中断，请重新录音",
                    showCancel: !1
                }), e.setData({
                    recTotalTime: 0
                }), e.setRecordStatus(!1), e.stopCountDown()
            })), t.onError((function(t) {
                if (e.setRecordStatus(!1), null != t && t.errMsg.includes("auth deny")) wx.showModal({
                    title: "温馨提示",
                    content: "打卡需要授权麦克风录音，前往授权？",
                    confirmText: "去授权",
                    complete: function(e) {
                        e.confirm && wx.openSetting()
                    }
                });
                else {
                    var n = "录音失败|".concat(null == t ? void 0 : t.errMsg);
                    I && (n = "鸿蒙系统暂时不支持录音功能"), wx.showModal({
                        title: "温馨提示",
                        content: n,
                        showCancel: !1
                    })
                }
            })), t.onStop((function(t) {
                console.log("recorder stop", t), e.setRecordStatus(!1);
                var n = t.tempFilePath,
                    a = t.duration;
                e.setData({
                    recTotalTime: 0,
                    tempFilePath: n,
                    duration: a
                }), wx.showToast({
                    title: "录音完成"
                }), e.stopCountDown(), e.play()
            })), this.recorderManager = t
        },
        navToMpCheckin: function() {
            var e = this,
                t = e.data.item;
            wx.miniapp.launchMiniProgram({
                userName: "gh_a68981c02e83",
                miniprogramType: 0,
                path: "pages/checkin/index/index?id=".concat(t.uuid, "&ticket=").concat(t.ticket),
                success: function(t) {
                    "succ" === (null == t ? void 0 : t.extMsg) && (wx.showToast({
                        title: "打卡成功！",
                        icon: "success"
                    }), e.setData({
                        list: []
                    }), e.page = 1, e.getUserCheckinList({
                        showLoading: !0
                    }), e.hideCheckin(), s.default.sum("checkin_ohos_checkin_succ")), s.default.sum("checkin_ohos_launch_mp")
                }
            })
        },
        guideToMp: function() {
            var e = this,
                t = "nav_to_mp_checkin_directly";
            try {
                var n = e.data.item;
                I && n.ticket && wx.miniapp.hasWechatInstall({
                    success: function(n) {
                        if (n.hasWechatInstall) {
                            try {
                                if (!0 === wx.getStorageSync(t)) return void e.navToMpCheckin()
                            } catch (e) {}
                            wx.showModal({
                                content: "鸿蒙系统录音适配中，请前往小程序打卡。",
                                confirmText: "去打卡",
                                complete: function(n) {
                                    n.confirm && (e.navToMpCheckin(), wx.setStorage({
                                        key: t,
                                        data: !0
                                    }))
                                }
                            }), s.default.sum("checkin_ohos_has_wx_install")
                        } else wx.showModal({
                            content: "鸿蒙系统录音适配中，请安装微信后前往小程序打卡。",
                            showCancel: !1
                        }), s.default.sum("checkin_ohos_has_not_wx_install")
                    }
                })
            } catch (e) {}
        },
        showCheckin: function() {
            var e = this.data,
                t = e.allowDelete;
            if (e.checkined) wx.showModal({
                content: t ? "已完成打卡，如需重新打卡，请先删除当前记录。删除成功后可重新打卡。" : "已完成打卡",
                showCancel: !1
            });
            else if (this.isMakeupCheckinLimit()) wx.showModal({
                title: "温馨提示",
                showCancel: !1,
                content: "为了保证打卡质量，每天限定最多补打卡次数为".concat(this.maxCheckinLimit, "次。")
            });
            else {
                var n = this.auth || (0, o.getLoginInfo)();
                this.getOSSPostPolicy(), n && n.nickname && n.avatar ? (this.userInfo = {
                    nickname: n.nickname,
                    avatar: n.avatar,
                    openid: null == n ? void 0 : n.openid
                }, this.setData({
                    showReocordPanel: !0
                })) : wx.showModal({
                    content: "获取用户信息失败",
                    showCancel: !1,
                    complete: o.navBack
                })
            }
        },
        hideCheckin: function() {
            this.setData({
                showReocordPanel: !1
            })
        },
        checkinHandle: function(e) {
            var t, n = this;
            n.data.tempFilePath ? (null == e || null === (t = e.detail) || void 0 === t ? void 0 : t.x) > 80 ? n.checkin() : wx.showModal({
                title: "打卡确认",
                content: "请确认录音内容是否正确，提交后不可更改。",
                cancelText: "再看看",
                confirmText: "提交打卡",
                complete: function(e) {
                    e.confirm && n.checkin()
                }
            }) : wx.showModal({
                content: "请先完成录音",
                showCancel: !1
            })
        },
        checkin: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a, o, s, c, u, l, d, h;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (o = (a = e).data, s = o.tempFilePath, c = o.duration, u = a.data.item || {}, l = u.uuid) {
                                t.next = 5;
                                break
                            }
                            return t.abrupt("return");
                        case 5:
                            if (d = "".concat(Date.now()).concat(Math.random()), null !== (n = a.userInfo) && void 0 !== n && n.openid && (d = a.userInfo.openid), a.postPolicy) {
                                t.next = 14;
                                break
                            }
                            return t.next = 10, a.getOSSPostPolicy(!0);
                        case 10:
                            if (a.postPolicy = t.sent, a.postPolicy) {
                                t.next = 14;
                                break
                            }
                            return wx.showModal({
                                content: "上传音频失败[10023]，请稍后重试",
                                showCancel: !1
                            }), t.abrupt("return");
                        case 14:
                            h = "".concat(a.postPolicy.dir).concat(d, ".m4a"), a.uploadFileToOSS({
                                filePath: s,
                                key: h,
                                success: function() {
                                    var e = r(i().mark((function e(t) {
                                        return i().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    a.doCheckin({
                                                        ossTempFile: h,
                                                        duration: c,
                                                        checkinId: l,
                                                        tempFilePath: s
                                                    });
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                fail: function() {
                                    wx.showModal({
                                        content: "音频上传失败[100213]，请稍后重试。",
                                        showCancel: !1
                                    })
                                }
                            });
                        case 16:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))()
        },
        doCheckin: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var r, o, c, u, l, d, h, f, v, g, m, w, y, k, x, S;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return r = e.checkinId, o = e.duration, c = e.ossTempFile, u = e.tempFilePath, l = t, wx.showLoading({
                                title: "正在提交..."
                            }), n.prev = 3, n.next = 6, (0, p.default)({
                                checkinId: r,
                                duration: o,
                                tempFile: c
                            }, {
                                header: {
                                    openid: null === (d = l.auth) || void 0 === d ? void 0 : d.openid,
                                    token: null === (h = l.auth) || void 0 === h ? void 0 : h.token
                                }
                            });
                        case 6:
                            if (f = n.sent, v = f.code, g = f.data, 0 === v) {
                                wx.showToast({
                                    title: "打卡成功！",
                                    icon: "success"
                                }), k = l.data.list, x = void 0 === k ? [] : k, S = {
                                    avatar: (null === (m = l.userInfo) || void 0 === m ? void 0 : m.avatar) || "",
                                    nickname: (null === (w = l.userInfo) || void 0 === w ? void 0 : w.nickname) || "微信用户",
                                    openid: null === (y = l.userInfo) || void 0 === y ? void 0 : y.openid,
                                    sound: u,
                                    duration: o,
                                    like: 0,
                                    time: "刚刚",
                                    uuid: g.uuid,
                                    checkined: !0
                                }, l.setData({
                                    list: [S].concat(a(x)),
                                    showReocordPanel: !1,
                                    checkined: !0,
                                    allowDelete: !0,
                                    ohosCheckinResult: "succ"
                                });
                                try {
                                    l.getOpenerEventChannel().emit("checkedNotify", r)
                                } catch (e) {}
                                try {
                                    l.addCheckinLimit()
                                } catch (e) {}
                                s.default.sum("_ohos")
                            } else -2 === v ? wx.showToast({
                                title: "重复打卡",
                                icon: "error"
                            }) : wx.showToast({
                                title: "打卡失败",
                                icon: "error"
                            });
                            n.next = 16;
                            break;
                        case 12:
                            n.prev = 12, n.t0 = n.catch(3), console.error(n.t0), wx.showToast({
                                title: "打卡失败",
                                icon: "error"
                            });
                        case 16:
                            wx.hideLoading();
                        case 17:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [3, 12]
                ])
            })))()
        },
        report: function(e) {
            var t = e.id,
                n = e.msg,
                a = void 0 === n ? "" : n;
            wx.reportEvent("wxdata_perf_monitor", {
                wxdata_perf_monitor_id: t,
                wxdata_perf_monitor_level: 0,
                wxdata_perf_error_code: 0,
                wxdata_perf_error_msg: a,
                wxdata_perf_cost_time: 0,
                wxdata_perf_extra_info1: "",
                wxdata_perf_extra_info2: "",
                wxdata_perf_extra_info3: ""
            })
        },
        stopCountDown: function() {
            this.t && clearInterval(this.t)
        },
        countdown: function() {
            var e = this,
                t = this,
                n = t.data.maxDuration,
                a = 0;
            this.t = setInterval((function() {
                (a += 1) >= n ? clearInterval(e.t) : t.setData({
                    recTotalTime: a
                })
            }), 1e3)
        },
        setRecordStatus: function(e) {
            this.setData({
                recording: e
            }), this.recording = e
        },
        recordHandle: function() {
            this.recording ? this.stopRecord() : (this.stopSentensePlay(), this.startRecord()), this.recording = !this.recording
        },
        startRecord: function() {
            this.recording && this.stopRecord();
            var e = this.data.maxDuration,
                t = "aac";
            I && (t = "mp3");
            var n = {
                duration: e,
                sampleRate: 16e3,
                numberOfChannels: 1,
                encodeBitRate: 32e3,
                format: t
            };
            this.recorderManager.start(n)
        },
        stopRecord: function() {
            this.recorderManager.stop(), this.setRecordStatus(!1)
        },
        getData: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a, r, s, c, l;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = e, wx.showLoading({
                                title: "加载中..."
                            }), t.prev = 2, !1, t.next = 6, (0, u.default)(n.id, {
                                guest: !1,
                                accessToken: n.accessToken,
                                header: {
                                    openid: null === (a = n.auth) || void 0 === a ? void 0 : a.openid,
                                    token: null === (r = n.auth) || void 0 === r ? void 0 : r.token
                                }
                            });
                        case 6:
                            if (s = t.sent, c = s.code, l = s.data, 0 !== c) {
                                t.next = 20;
                                break
                            }
                            if (!0 !== (null == l ? void 0 : l.needVip)) {
                                t.next = 14;
                                break
                            }
                            return wx.hideLoading(), wx.showModal({
                                content: "该内容需开通会员后查看",
                                confirmText: "去开通",
                                success: function(e) {
                                    e.confirm && (0, o.navToOpenVip)(), (0, o.navBack)()
                                }
                            }), t.abrupt("return");
                        case 14:
                            n.formatData(l), l.maxCheckinLimit && (n.maxCheckinLimit = parseInt(l.maxCheckinLimit, 10)), l.maxRecordTime && n.setData({
                                maxDuration: l.maxRecordTime
                            }), !0 === n.isGuest || e.auth || (n.getFavState(), setTimeout((function() {
                                n.getNewAnswerCount(), n.getBanners()
                            }), 1e3)), t.next = 21;
                            break;
                        case 20:
                            throw new Error;
                        case 21:
                            t.next = 27;
                            break;
                        case 23:
                            t.prev = 23, t.t0 = t.catch(2), console.error(t.t0), wx.showModal({
                                content: "系统异常，请稍后再试",
                                complete: o.navBack,
                                showCancel: !1
                            });
                        case 27:
                            e.setData({
                                show: !0
                            }), wx.hideLoading();
                        case 29:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [2, 23]
                ])
            })))()
        },
        loadMore: function() {
            this.page += 1, this.getUserCheckinList({
                showLoading: !0
            })
        },
        getScopeOptions: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = e || this.data.identity,
                n = null == t ? void 0 : t.allowedScopes;
            return Array.isArray(n) && n.length ? n.map((function(e) {
                return {
                    value: e,
                    label: T[e] || e
                }
            })) : this.data.isTeacher && !this.data.isAdmin ? [{
                value: "bound_students",
                label: T.bound_students
            }] : []
        },
        getVipFilterOptions: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = e || this.data.identity,
                n = null == t ? void 0 : t.allowedVipFilters;
            return Array.isArray(n) && n.length ? n.map((function(e) {
                return {
                    value: e,
                    label: D[e] || e
                }
            })) : []
        },
        getStudentCategoryOptions: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = e || this.data.identity,
                n = null == t ? void 0 : t.allowedStudentCategoryFilters;
            return Array.isArray(n) && n.length ? n.length <= 1 ? [] : n.map((function(e) {
                return {
                    value: e,
                    label: _[e] || e
                }
            })) : []
        },
        getRequestScope: function() {
            var e = this.getScopeOptions();
            if (!e.length) return this.data.currentScope || "";
            var t = this.data.currentScope;
            return e.some((function(e) {
                return e.value === t
            })) ? t : e[0].value
        },
        getRequestVipFilter: function() {
            var e = this.getVipFilterOptions();
            if (!e.length) return this.data.currentVipFilter || "";
            var t = this.data.currentVipFilter;
            return e.some((function(e) {
                return e.value === t
            })) ? t : e[0].value
        },
        getRequestStudentCategory: function() {
            var e = this.getStudentCategoryOptions();
            if (!e.length) return "";
            var t = this.data.currentStudentCategory;
            return e.some((function(e) {
                return e.value === t
            })) ? t : e[0].value
        },
        loadFilterPreference: function() {
            try {
                var e = wx.getStorageSync("checkin_filter_preference");
                if (e && "object" === n(e)) return void(this.filterPreference = {
                    showFilterPanel: !!e.showFilterPanel,
                    currentScope: e.currentScope || "",
                    currentVipFilter: e.currentVipFilter || "",
                    currentStudentCategory: e.currentStudentCategory || ""
                })
            } catch (e) {}
            this.filterPreference = {
                showFilterPanel: !1,
                currentScope: "",
                currentVipFilter: "",
                currentStudentCategory: ""
            }
        },
        persistFilterPreference: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = this.filterPreference || {},
                a = t(t({}, n), {}, {
                    showFilterPanel: !!this.data.showFilterPanel,
                    currentScope: this.data.currentScope || "",
                    currentVipFilter: this.data.currentVipFilter || "",
                    currentStudentCategory: this.data.currentStudentCategory || ""
                }, e);
            this.filterPreference = a, wx.setStorage({
                key: "checkin_filter_preference",
                data: a
            })
        },
        resetCheckinList: function() {
            this.page = 1, this.setData({
                list: [],
                hasNext: !1
            })
        },
        onScopeChange: function(e) {
            var t = this,
                n = (e.currentTarget.dataset || {}).value,
                a = void 0 === n ? "" : n;
            a && a !== this.data.currentScope && this.setData({
                currentScope: a
            }, (function() {
                t.persistFilterPreference({
                    currentScope: a
                }), t.resetCheckinList(), t.getUserCheckinList({
                    showLoading: !0
                })
            }))
        },
        onVipFilterChange: function(e) {
            var t = this,
                n = (e.currentTarget.dataset || {}).value,
                a = void 0 === n ? "" : n;
            a && a !== this.data.currentVipFilter && this.setData({
                currentVipFilter: a
            }, (function() {
                t.persistFilterPreference({
                    currentVipFilter: a
                }), t.resetCheckinList(), t.getUserCheckinList({
                    showLoading: !0
                })
            }))
        },
        onStudentCategoryChange: function(e) {
            var t = this,
                n = (e.currentTarget.dataset || {}).value,
                a = void 0 === n ? "" : n;
            a && a !== this.data.currentStudentCategory && this.setData({
                currentStudentCategory: a
            }, (function() {
                t.persistFilterPreference({
                    currentStudentCategory: a
                }), t.resetCheckinList(), t.getUserCheckinList({
                    showLoading: !0
                })
            }))
        },
        getUserCheckinList: function() {
            var e = arguments,
                t = this;
            return r(i().mark((function n() {
                var r, o, s, c, u, l, d, p, f, v, g, m, w, y, k, x, S, C, P, T, D, _, b, I, F, A, L, R, M, E, O, q;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, o = r.showLoading, s = void 0 !== o && o, c = t.data.item || {}, u = c.uuid, l = t.page, d = t.pageSize, u) {
                                n.next = 5;
                                break
                            }
                            return n.abrupt("return");
                        case 5:
                            return s && wx.showLoading({
                                title: "加载中...",
                                mask: !0
                            }), n.prev = 6, p = t.getRequestScope(), f = t.getRequestVipFilter(), v = t.getRequestStudentCategory(), n.next = 12, (0, h.default)({
                                page: l,
                                pageSize: d,
                                checkinId: u,
                                teacherOnly: "bound_students" === p || !p && t.data.isTeacher,
                                scope: p,
                                vipFilter: f,
                                studentCategory: v
                            });
                        case 12:
                            g = n.sent, m = g.code, w = g.data, y = w.list, k = w.hasNext, x = w.checkined, S = void 0 !== x && x, C = w.allowDelete, P = void 0 !== C && C, T = w.identity, D = void 0 === T ? null : T, _ = w.filters, b = void 0 === _ ? {} : _, 0 === m && (I = t.data.list, F = D || t.data.identity, A = t.getScopeOptions(F), L = t.getVipFilterOptions(F), R = t.getStudentCategoryOptions(F), M = b.scope || p || A[0] && A[0].value || "all", E = b.vipFilter || f || L[0] && L[0].value || "all", O = b.studentCategory || v || R[0] && R[0].value || "all", q = !(null == F || !F.isAdmin) || "official" === (null == F ? void 0 : F.teacherType), t.setData({
                                list: [].concat(a(I), a(y)),
                                hasNext: k,
                                identity: F,
                                scopeOptions: A,
                                vipFilterOptions: L,
                                studentCategoryOptions: R,
                                currentScope: M,
                                currentVipFilter: E,
                                currentStudentCategory: O,
                                showFilterPanel: !!q && t.data.showFilterPanel
                            }, (function() {
                                t.persistFilterPreference({
                                    currentScope: M,
                                    currentVipFilter: E,
                                    currentStudentCategory: O,
                                    showFilterPanel: !!q && t.data.showFilterPanel
                                }), 1 === l && t.setData({
                                    checkined: S,
                                    allowDelete: P
                                })
                            }))), n.next = 31;
                            break;
                        case 28:
                            n.prev = 28, n.t0 = n.catch(6), console.error(n.t0);
                        case 31:
                            wx.hideLoading();
                        case 32:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [6, 28]
                ])
            })))()
        },
        formatData: function(e) {
            var i, r, o, s = t({}, e),
                c = /(.+?)\(([a-zA-Z]+\d?)\)/g,
                u = this.data.pinyinScheme || this.getCurrentPinyinScheme();
            if (s.sentenceArr = s.cantonese.split("\n").map((function(e) {
                    return a(e.matchAll(c)).map((function(e) {
                        return [e[1], e[2], (0, S.buildRubyToken)(e[1], e[2], u)]
                    }))
                })), s.ext) {
                var l = {},
                    d = s.ext.split("\n");
                l.desc = d.shift(), l.list = d.map((function(e) {
                    var t = e.split(" ");
                    return {
                        title: t[0],
                        feedId: t[2],
                        finderUserName: t[1]
                    }
                })), s.ext = l
            }
            s.feedId || null != s && null !== (i = s.ext) && void 0 !== i && null !== (r = i.list) && void 0 !== r && null !== (o = r[0]) && void 0 !== o && o.feedId && (s.feedId = s.ext.list[0].feedId);
            var h = !1;
            s.isAdmin && (h = !0, delete s.isAdmin);
            var p = !1;
            s.isTeacher && (p = !0, delete s.isTeacher);
            var f = null;
            s.identity && "object" === n(s.identity) && (f = s.identity);
            var v = !1;
            s.earlyCheckIn && (v = !0), delete s.earlyCheckIn;
            var g = this.filterPreference || {},
                m = f || this.data.identity,
                w = this.getScopeOptions(m),
                y = this.getVipFilterOptions(m),
                k = this.getStudentCategoryOptions(m),
                x = g.currentScope || "",
                C = g.currentVipFilter || "",
                P = g.currentStudentCategory || "",
                T = w.some((function(e) {
                    return e.value === x
                })),
                D = y.some((function(e) {
                    return e.value === C
                })),
                _ = k.some((function(e) {
                    return e.value === P
                })),
                b = (T ? x : "") || w[0] && w[0].value || (p && !h ? "bound_students" : "all"),
                I = (D ? C : "") || y[0] && y[0].value || "all",
                F = (_ ? P : "") || k[0] && k[0].value || "all",
                A = !(null == m || !m.isAdmin) || "official" === (null == m ? void 0 : m.teacherType);
            this.setData({
                item: s,
                isAdmin: h,
                isTeacher: p,
                identity: m,
                scopeOptions: w,
                vipFilterOptions: y,
                studentCategoryOptions: k,
                earlyCheckIn: v,
                currentScope: b,
                currentVipFilter: I,
                currentStudentCategory: F,
                showFilterPanel: !!A && !!g.showFilterPanel
            }), this.auth || this.getUserCheckinList()
        },
        openSPH: function(e) {
            var t = e.target.dataset,
                n = t.fid,
                a = t.fname;
            wx.openChannelsActivity({
                feedId: n,
                finderUserName: a
            })
        },
        navToVideo: function(e) {
            var t = e.target.dataset.uuid;
            t && wx.navigateTo({
                url: "/pages/video/detail/index?uuid=".concat(t),
                complete: function(e) {
                    s.default.sum("checkin_nav_to_video")
                }
            })
        },
        navToSph: function(e) {
            var t = e.target.dataset.fid;
            t && wx.navigateTo({
                url: "/pages/sph/index?feedId=".concat(t),
                complete: function(e) {
                    console.log(e)
                }
            })
        },
        playByWord: function() {
            var e = this,
                t = this.data,
                n = t.item,
                a = (void 0 === n ? {
                    item: {
                        sentenceArr: []
                    }
                } : n).sentenceArr,
                i = t.recording,
                r = t.isPlayingSentence,
                s = t.isPlayingByWord,
                c = a[0].length;
            if (s) return o.playAudio.destroy(), void this.resetCurrent();
            if (c)
                if (r && this.stopSentensePlay(), i) wx.showToast({
                    title: "正在录音",
                    icon: "error"
                });
                else {
                    ! function t(n, i) {
                        var r = "".concat(e.AUDIO_BASE, "/").concat(a[n][i][1], ".mp3"),
                            s = function() {
                                (i += 1) >= a[n].length && (i = 0, (n += 1) >= a.length) ? e.resetCurrent() : o.playAudio.t = setTimeout((function() {
                                    t(n, i)
                                }), 400)
                            };
                        (0, o.playAudio)(r, s, (function() {
                            s(), /\d\.mp3$/.test(r) && e.report({
                                id: "audioNotFound",
                                msg: "資源不存在" + r
                            })
                        })), e.setData({
                            currentRow: n,
                            currentCol: i,
                            isPlayingByWord: !0,
                            currSoundSource: "zi"
                        })
                    }(0, 0)
                }
        },
        resetCurrent: function() {
            this.setData({
                currentRow: -1,
                currentCol: -1,
                isPlayingByWord: !1
            })
        },
        playWord: function(e) {
            var t = e.currentTarget;
            if (this.data.recording) wx.showToast({
                title: "正在录音",
                icon: "error"
            });
            else {
                this.data.isPlayingSentence && this.stopSentensePlay();
                var n = t.dataset,
                    a = n.p,
                    i = n.row,
                    r = n.col,
                    s = "".concat(this.AUDIO_BASE, "/").concat(a, ".mp3");
                (0, o.playAudio)(s, this.resetCurrent, this.resetCurrent), this.setData({
                    currentRow: i,
                    currentCol: r
                })
            }
        },
        getCurrentPinyinScheme: function() {
            return (0, o.getPinyinScheme)() || ""
        },
        getCurrentRubyDisplayStyle: function() {
            return (0, o.getRubyDisplayStyle)() || "annotated"
        },
        refreshDisplayPreferences: function() {
            var e = this.getCurrentPinyinScheme(),
                t = this.getCurrentRubyDisplayStyle();
            if (e !== this.data.pinyinScheme || t !== this.data.rubyDisplayStyle) {
                var n, a = {};
                if (e !== this.data.pinyinScheme) a.pinyinScheme = e, null !== (n = this.data.item) && void 0 !== n && n.sentenceArr && (a["item.sentenceArr"] = this.data.item.sentenceArr.map((function(t) {
                    return (Array.isArray(t) ? t : []).map((function(t) {
                        return [t[0], t[1], (0, S.buildRubyToken)(t[0], t[1], e)]
                    }))
                })));
                t !== this.data.rubyDisplayStyle && (a.rubyDisplayStyle = t), this.setData(a)
            }
        },
        onLoad: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var a, r, s, c;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            (a = t).id = decodeURIComponent(e.id || "1"), a.accessToken = e.accessToken || "";
                            try {
                                a.accessToken = a.accessToken ? decodeURIComponent(a.accessToken) : ""
                            } catch (e) {}
                            if (a.loadFilterPreference(), null == e || !e.ticket) {
                                n.next = 9;
                                break
                            }
                            return n.next = 8, t.ohosCheckin(e.ticket);
                        case 8:
                            return n.abrupt("return");
                        case 9:
                            a.getData(), "comment" === e.from && a.setData({
                                hideNav: !0
                            }), t.AUDIO_BASE = (0, o.getAudioBasePath)(), r = t.getCurrentPinyinScheme(), s = t.getCurrentRubyDisplayStyle(), a.setData({
                                pinyinScheme: r,
                                rubyDisplayStyle: s
                            }), t.loadSetting(), (c = a.getOpenerEventChannel()) && c.on && c.on("acceptDataFromOpenerPage", (function(e) {
                                "history" === (null == e ? void 0 : e.from) && (a.fromHistory = !0)
                            }));
                        case 18:
                        case "end":
                            return n.stop()
                    }
                }), n)
            })))()
        },
        ohosCheckin: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var a, r;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return wx.showLoading("加载中..."), n.next = 3, (0, x.default)(e);
                        case 3:
                            a = n.sent, r = a.data, wx.hideLoading(), null != r && r.openid && null != r && r.token ? (t.auth = {
                                openid: r.openid,
                                token: r.token,
                                avatar: r.avatar,
                                nickname: r.nickname
                            }, t.userInfo = t.auth, t.setData({
                                ohosHack: !0
                            }), t.getData()) : (s.default.sum("checkin_ohos_exchange_error"), wx.showModal({
                                content: "系统繁忙，请稍后再试",
                                showCancel: !1,
                                complete: function(e) {}
                            }));
                        case 7:
                        case "end":
                            return n.stop()
                    }
                }), n)
            })))()
        },
        onUnload: function() {
            this.destroyAudio()
        },
        onHide: function() {
            this.pauseAudio()
        },
        destroyAudio: function() {
            this.audioIns && (this.audioIns.stop(), this.audioIns.destroy()), this.stopPlayAudio()
        },
        pauseAudio: function() {
            this.stopPlayAudio(), this.stopSentensePlay(), this.resetCurrent()
        },
        onReady: function() {
            var e = this;
            e.initRM(), wx.getStorage({
                key: c.CHECKIN_NEED_FEEDBACK_KEY,
                success: function(t) {
                    e.setData({
                        needFeedback: t.data
                    })
                }
            })
        },
        navToHistory: function() {
            this.fromHistory ? wx.navigateBack() : wx.navigateTo({
                url: "../history/index"
            })
        },
        likeClickHandle: function(n) {
            var a = n.currentTarget.dataset.index,
                i = this.data.list[a],
                r = i.hasLiked,
                o = i.like,
                s = "list.[".concat(a, "]");
            this.setData(e({}, s, t(t({}, i), {}, {
                hasLiked: !r,
                like: o + (r ? -1 : 1)
            }))), r ? this.removeLike(i.uuid, i.like) : this.addLike(i.uuid, i.openid, i.like)
        },
        updateLikeStatus: function(e, t) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                a = arguments.length > 3 ? arguments[3] : void 0,
                i = this,
                r = i.data.list;
            i.setData({
                list: r.map((function(i) {
                    return i.uuid === e && (i.hasLiked = t, !1 === n && (i.like = a)), i
                }))
            })
        },
        removeLike: function(e) {
            var t = arguments,
                n = this;
            return r(i().mark((function a() {
                var r, o, s, c;
                return i().wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                        case 0:
                            if (r = t.length > 1 && void 0 !== t[1] ? t[1] : 0, !(o = n).requesting) {
                                a.next = 4;
                                break
                            }
                            return a.abrupt("return");
                        case 4:
                            return o.requesting = !0, a.prev = 5, a.next = 8, (0, d.default)(e);
                        case 8:
                            s = a.sent, c = s.code, o.updateLikeStatus(e, 0 !== c, 0 === c, r), a.next = 16;
                            break;
                        case 13:
                            a.prev = 13, a.t0 = a.catch(5), o.updateLikeStatus(e, !0, !1, r);
                        case 16:
                            o.requesting = !1;
                        case 17:
                        case "end":
                            return a.stop()
                    }
                }), a, null, [
                    [5, 13]
                ])
            })))()
        },
        addLike: function(e, t) {
            var n = arguments,
                a = this;
            return r(i().mark((function r() {
                var o, s, c;
                return i().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (o = n.length > 2 && void 0 !== n[2] ? n[2] : 0, !a.requesting) {
                                i.next = 3;
                                break
                            }
                            return i.abrupt("return");
                        case 3:
                            return a.requesting = !0, i.prev = 4, i.next = 7, (0, l.default)({
                                userCheckinId: e,
                                toOpenid: t
                            });
                        case 7:
                            s = i.sent, c = s.code, a.updateLikeStatus(e, 0 === c, 0 === c, o), i.next = 15;
                            break;
                        case 12:
                            i.prev = 12, i.t0 = i.catch(4), a.updateLikeStatus(e, !1, !1, o);
                        case 15:
                            a.requesting = !1;
                        case 16:
                        case "end":
                            return i.stop()
                    }
                }), r, null, [
                    [4, 12]
                ])
            })))()
        },
        onShareAppMessage: function() {
            var e = "每日打卡，进步听得见",
                t = "/pages/checkin/index/index",
                n = this.data,
                a = n.isTeacher,
                i = void 0 !== a && a,
                r = n.isAdmin,
                o = void 0 !== r && r,
                s = n.item,
                u = void 0 === s ? {} : s;
            return (i || o) && (u.date && (e = "每日打卡-".concat(u.date)), t += "?id=".concat(u.uuid)), {
                title: e,
                path: t,
                imageUrl: c.SHARE_IMG_URLS.CHECKIN
            }
        },
        onShareTimeline: function() {
            var e = "每日打卡，进步听得见",
                t = "",
                n = this.data,
                a = n.isTeacher,
                i = void 0 !== a && a,
                r = n.isAdmin,
                o = void 0 !== r && r,
                s = n.item,
                u = void 0 === s ? {} : s;
            return (i || o) && u.date && (e = "每日打卡-".concat(u.date)), (i || o) && u.uuid && (t = "id=".concat(encodeURIComponent(u.uuid))), {
                title: e,
                query: t,
                imageUrl: c.SHARE_IMG_URLS.CHECKIN
            }
        },
        onCheckBoxChange: function(e) {
            var t = e.detail;
            this.setData({
                needFeedback: t
            }), wx.setStorage({
                key: c.CHECKIN_NEED_FEEDBACK_KEY,
                data: t
            })
        },
        getYMD: function() {
            return (new Date).toLocaleDateString("en-CA")
        },
        isMakeupCheckinLimit: function() {
            if (this.deleteFlag) return !1;
            var e = this.getCheckinCount();
            return !0 !== this.data.item.isToday && e >= this.maxCheckinLimit
        },
        addCheckinLimit: function() {
            if (!this.data.item.isToday && !this.deleteFlag) {
                var e = this.getCheckinCount(),
                    t = this.getYMD();
                e += 1, wx.setStorage({
                    key: c.HIS_CHECKIN_LIMIT,
                    data: "".concat(t, ":").concat(e)
                })
            }
        },
        getCheckinCount: function() {
            var e = 0,
                t = this.getYMD();
            try {
                var n = wx.getStorageSync(c.HIS_CHECKIN_LIMIT);
                if (n && n.includes(t)) {
                    var a = n.split("".concat(t, ":"));
                    2 === a.length && /^\d+$/.test(a[1]) && parseInt(a[1], 10) > 0 && (e = parseInt(a[1], 10))
                }
            } catch (e) {}
            return e
        },
        navToHelp: function() {
            wx.navigateTo({
                url: "../help/index"
            })
        },
        tipTapHandler: function() {
            var e = this.data,
                t = e.list;
            if (e.checkined)
                if (null != t && t.length) {
                    var n = decodeURIComponent(t[0].uuid);
                    wx.navigateTo({
                        url: "../comment/index?id=".concat(n)
                    })
                } else wx.showToast({
                    title: "参数错误",
                    icon: "error"
                });
            else this.navToHelp()
        },
        delUserCheckin: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var a, r, o, s, c, u;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return wx.showLoading({
                                title: "正在处理..."
                            }), n.prev = 1, n.next = 4, (0, f.default)(e, {
                                header: {
                                    openid: null === (a = t.auth) || void 0 === a ? void 0 : a.openid,
                                    token: null === (r = t.auth) || void 0 === r ? void 0 : r.token
                                }
                            });
                        case 4:
                            if (o = n.sent, s = o.code, c = o.msg, 0 !== s) {
                                n.next = 14;
                                break
                            }
                            wx.showToast({
                                title: "删除成功",
                                icon: "success"
                            }), u = t.data.list, t.setData({
                                list: u.filter((function(t) {
                                    return t.uuid !== e
                                })),
                                checkined: !1
                            }), t.deleteFlag = !0, n.next = 27;
                            break;
                        case 14:
                            if ("CHECKIN_HAS_CORRECTION" !== c) {
                                n.next = 18;
                                break
                            }
                            return wx.hideLoading(), wx.showModal({
                                title: "无法删除",
                                content: "该打卡已有纠音记录，不允许删除。",
                                showCancel: !1
                            }), n.abrupt("return");
                        case 18:
                            if ("DELETE_WINDOW_EXPIRED" !== c) {
                                n.next = 22;
                                break
                            }
                            return wx.hideLoading(), wx.showModal({
                                title: "无法删除",
                                content: "当前仅允许打卡后24小时内删除。",
                                showCancel: !1
                            }), n.abrupt("return");
                        case 22:
                            if ("CHECKIN_IS_GOOD" !== c) {
                                n.next = 26;
                                break
                            }
                            return wx.hideLoading(), wx.showModal({
                                title: "无法删除",
                                content: "该打卡已评优，不允许删除。",
                                showCancel: !1
                            }), n.abrupt("return");
                        case 26:
                            throw new Error(c || "DELETE_FAILED");
                        case 27:
                            n.next = 32;
                            break;
                        case 29:
                            n.prev = 29, n.t0 = n.catch(1), wx.showToast({
                                title: "删除失败",
                                icon: "error"
                            });
                        case 32:
                            wx.hideLoading();
                        case 33:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [1, 29]
                ])
            })))()
        },
        delete: function(e) {
            var t, n = this,
                a = e.currentTarget.dataset.uuid;
            a ? wx.showModal({
                content: "是否删除打卡？",
                confirmText: "确认删除",
                cancelText: "再想想",
                complete: (t = r(i().mark((function e(t) {
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                t.confirm && n.delUserCheckin(a);
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), function(e) {
                    return t.apply(this, arguments)
                })
            }) : wx.showToast({
                title: "参数错误"
            })
        },
        showDeleteRuleTips: function() {
            wx.showModal({
                title: "删除说明",
                content: "1. 打卡后24小时内可删除。2. 已评优的打卡不允许删除。3. 已有纠音记录的打卡不允许删除。",
                showCancel: !1
            })
        },
        showSettingPanel: function() {
            this.setData({
                showSettingPanel: !0
            }, (function() {
                s.default.sum("checkin_showSettingPanel")
            }))
        },
        onClose: function() {
            this.setData({
                showSettingPanel: !1
            })
        },
        onChange: function(t) {
            var n = this,
                a = t.currentTarget.dataset.key,
                i = t.detail;
            this.setData(e({}, a, i), (function() {
                n.updateSetting(), s.default.sum("checkin_play_setting_".concat(a, "_").concat(i))
            }))
        },
        loadSetting: function() {
            var e = this;
            wx.getStorage({
                key: c.CHECKIN_PLAY_SETTING_KEY,
                success: function(t) {
                    var n = t.data;
                    e.setData({
                        sentenceRepeatCount: n.sentenceRepeatCount || 1,
                        mode: n.mode || "normal"
                    })
                }
            }), e.useWebAudio = (0, o.isUseWebAudio)()
        },
        updateSetting: function() {
            var e = this.data,
                t = e.sentenceRepeatCount,
                n = void 0 === t ? 1 : t,
                a = e.mode,
                i = {
                    sentenceRepeatCount: n,
                    mode: void 0 === a ? "normal" : a
                };
            wx.setStorage({
                key: c.CHECKIN_PLAY_SETTING_KEY,
                data: i
            })
        },
        navToVocabulary: function(e) {
            var t = e.currentTarget.dataset.uuid;
            wx.navigateTo({
                url: "/pages/vocabulary/detail/index?id=".concat(t)
            })
        },
        getFavState: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a, r;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, (0, g.default)("checkin", e.id);
                        case 3:
                            if (n = t.sent, a = n.code, r = n.data.id, 0 !== a) {
                                t.next = 10;
                                break
                            }
                            e.setData({
                                favId: r
                            }), t.next = 11;
                            break;
                        case 10:
                            throw "error";
                        case 11:
                            t.next = 15;
                            break;
                        case 13:
                            t.prev = 13, t.t0 = t.catch(0);
                        case 15:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [0, 13]
                ])
            })))()
        },
        favHandle: function() {
            var e = this.data.favId;
            e ? this.doDeleteFav(e) : this.doAddFav()
        },
        doDeleteFav: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var a, r;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.prev = 0, n.next = 3, (0, m.default)(e);
                        case 3:
                            a = n.sent, 1 === (null == (r = a.data) ? void 0 : r.removed) && t.setData({
                                favId: 0
                            }), n.next = 10;
                            break;
                        case 8:
                            n.prev = 8, n.t0 = n.catch(0);
                        case 10:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [0, 8]
                ])
            })))()
        },
        doAddFav: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, (0, v.default)({
                                bid: e.data.item.uuid,
                                category: "checkin"
                            });
                        case 2:
                            n = t.sent, null != (a = n.data) && a.id && (e.setData({
                                favId: a.id
                            }), wx.showToast({
                                title: "收藏成功",
                                icon: "success"
                            }));
                        case 5:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))()
        },
        stopPlayAudio: function() {
            o.playAudio.stop(), o.playAudio.destroy()
        },
        onDrag: function(e) {
            if (this.lastTimeStamp && e.timeStamp - this.lastTimeStamp < 10) console.log("频率限制");
            else {
                var t;
                if (this.isDraging = !0, this.lastDragTimeStamp && e.timeStamp - this.lastTimeStamp > 500)
                    if (null != this && null !== (t = this.audioIns) && void 0 !== t && t.duration) {
                        var n = this.audioIns.duration * e.detail.value / 100;
                        this.setData({
                            fmtCurrentTime: P(n)
                        })
                    }
                this.lastDragTimeStamp = e.timeStamp
            }
        },
        onDragChange: function(e) {
            this.isDraging = !1, this.currentTime = e.detail
        },
        onDragEnd: function(e) {
            var t;
            if (console.log("onDragEnd", e), this.lastTimeStamp = e.timeStamp, this.isDraging = !1, this.audioIns) {
                if (this.isDraging = !1, null != this && null !== (t = this.audioIns) && void 0 !== t && t.duration) {
                    var n = Number((this.audioIns.duration * this.currentTime / 100).toFixed(6));
                    this.audioIns.seek(n), !0 !== this.data.isPlayingSentence && this.audioIns.play(), this.stopPlayByWord()
                }
            } else this.setData({
                currentValue: 0
            })
        },
        stopPlayByWord: function() {
            this.data.isPlayingByWord && this.resetCurrent(), this.stopPlayAudio()
        },
        stopSentensePlay: function() {
            this.setData({
                isPlayingSentence: !1
            }), this.audioIns && this.audioIns.pause()
        },
        playSentenseHandler: function(e) {
            var t, n, a = e.currentTarget.dataset.source,
                i = this.data,
                r = i.isPlayingSentence,
                o = i.currSoundSource,
                c = i.item;
            i.isPlayingByWord;
            if (r && a === o && this.audioIns) return this.audioIns.pause(), void(this.isPause = !0);
            if (this.isPause && o === a && this.audioIns) return this.audioIns.play(), void(this.isPause = !1);
            (this.sentencePlayTimes = 0, this.sound = c.sound, "slow" === a) && (this.sound = c.slowSound || (null == c || null === (t = c.teaching) || void 0 === t || null === (n = t.slow) || void 0 === n ? void 0 : n.audio));
            this.setData({
                currSoundSource: a
            }, this.playSentense), s.default.sum("打卡音频播放_" + a)
        },
        playSentense: function() {
            var e = this,
                t = e.data,
                n = t.recording,
                a = t.isPlayingByWord;
            if (n) wx.showToast({
                title: "正在录音",
                icon: "error"
            });
            else {
                if (e.stopPlayAudio(), a && e.resetCurrent(), e.resetCurrent(), this.audioIns) e.audioIns.src = e.sound;
                else {
                    var i = wx.createInnerAudioContext({
                        useWebAudioImplement: !!e.useWebAudio
                    });
                    i.src = e.sound, i.onTimeUpdate((function() {
                        if (console.log("onTimeUpdate", e.isDraging), i.currentTime > -1 == !0 && i.duration > -1 == !0)
                            if (!0 !== e.isDraging) {
                                var t = Math.floor(i.currentTime / i.duration * 100),
                                    n = P(i.duration),
                                    a = P(i.currentTime);
                                e.setData({
                                    currentValue: t,
                                    fmtDuration: n,
                                    fmtCurrentTime: a
                                })
                            } else console.log("进度拖动中");
                        else console.log("currentTime:".concat(i.currentTime, ", duration:").concat(i.duration))
                    })), i.onStop((function() {
                        console.log("stop")
                    })), i.onEnded((function() {
                        console.log("播放结束"), e.setData({
                            isPlayingSentence: !1,
                            currentValue: 0
                        }), e.sentencePlayTimes += 1, e.sentencePlayTimes < e.data.sentenceRepeatCount ? e.playSentense() : e.setData({
                            isPlayingSentence: !1,
                            currentValue: 0
                        })
                    })), i.onPlay((function() {
                        console.log("play", i.duration), e.setData({
                            isPlayingSentence: !0
                        })
                    })), i.onError((function() {
                        console.log("播放失败"), e.setData({
                            isPlayingSentence: !1
                        })
                    })), i.onPause((function() {
                        console.log("暂停播放"), e.setData({
                            isPlayingSentence: !1
                        })
                    })), e.audioIns = i
                }
                e.audioIns.play()
            }
        },
        playerPlayHandler: function(e) {
            this.stopSentensePlay(), this.stopPlayByWord()
        },
        getNewAnswerCount: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, (0, w.default)();
                        case 3:
                            n = t.sent, (a = n.data).count > 0 && e.setData({
                                feedbackCount: a.count
                            }), t.next = 10;
                            break;
                        case 8:
                            t.prev = 8, t.t0 = t.catch(0);
                        case 10:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [0, 8]
                ])
            })))()
        },
        navToFeedback: function() {
            var e = this;
            wx.navigateTo({
                url: "/pages/checkin/my/index?type=2",
                success: function() {
                    e.setData({
                        feedbackCount: 0
                    })
                }
            })
        },
        getBanners: function() {
            var e = this;
            return r(i().mark((function t() {
                var n, a, r, o, s;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = e, a = "7b0aeebe-bbfd-492f-9795-d125197f27d9", t.prev = 2, t.next = 5, (0, y.default)(a);
                        case 5:
                            r = t.sent, o = r.data, 0 === r.code && null != o && null !== (s = o[a]) && void 0 !== s && s.length && n.setData({
                                notice: o[a][0].title
                            }), t.next = 13;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(2);
                        case 13:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [2, 11]
                ])
            })))()
        },
        uploadFileToOSS: function(e) {
            var t = this;
            return r(i().mark((function n() {
                var a, r, o, s, c;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            a = e.filePath, r = e.key, o = e.success, s = e.fail, c = t.postPolicy, wx.showLoading({
                                title: "正在上传..."
                            }), wx.uploadFile({
                                url: c.host,
                                filePath: a,
                                name: "file",
                                formData: {
                                    key: r,
                                    policy: c.policy,
                                    OSSAccessKeyId: c.OSSAccessKeyId,
                                    signature: c.signature,
                                    success_action_status: "200"
                                },
                                success: o,
                                fail: s,
                                complete: function() {
                                    wx.hideLoading()
                                }
                            });
                        case 5:
                        case "end":
                            return n.stop()
                    }
                }), n)
            })))()
        },
        getOSSPostPolicy: function() {
            var e = arguments,
                t = this;
            return r(i().mark((function n() {
                var a;
                return i().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (a = e.length > 0 && void 0 !== e[0] && e[0], !t.postPolicy) {
                                n.next = 3;
                                break
                            }
                            return n.abrupt("return", t.postPolicy);
                        case 3:
                            return a && wx.showLoading({
                                title: "加载中..."
                            }), n.prev = 4, n.next = 7, (0, k.default)();
                        case 7:
                            t.postPolicy = n.sent, n.next = 13;
                            break;
                        case 10:
                            n.prev = 10, n.t0 = n.catch(4), t.postPolicy = null;
                        case 13:
                            return a && wx.hideLoading(), n.abrupt("return", t.postPolicy);
                        case 15:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [4, 10]
                ])
            })))()
        },
        setMode: function() {
            this.setData({
                showModePanel: !0
            })
        },
        hideModePanel: function() {
            this.setData({
                showModePanel: !1
            })
        },
        onShow: function() {
            this.refreshDisplayPreferences()
        }
    });
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/checkin/index/index.js'
});
require("pages/checkin/index/index.js");