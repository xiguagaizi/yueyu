/* [OBFUSCATED] status=partial techniques=hex-literal */
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
                Z([3, 'mandarin'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'chinese']
                ]])
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
                Z(z[30])
                Z([3, '44'])
                Z(z[32])
                Z([3, 'word-inline'])
                Z([
                    [7],
                    [3, 'notice']
                ])
                Z([3, 'notice-wrap'])
                Z([3, 'service-o'])
                Z([3, 'contact'])
                Z([3, 'normal'])
                Z([a, [
                    [7],
                    [3, 'notice']
                ]])
                Z(z[13])
                Z([3, 'play-wrap'])
                Z([3, 'play-btn-wrap'])
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
                Z([3, '原话'])
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
                Z(z[50])
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
                Z(z[54])
                Z(z[55])
                Z([3, '慢读'])
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
                Z(z[54])
                Z(z[55])
                Z([3, '逐字'])
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
                Z(z[72])
                Z([3, '/images/home/sp.png'])
                Z(z[54])
                Z([3, 'info'])
                Z([3, '睇片'])
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
                Z(z[74])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'feedId']
                ])
                Z([3, '/images/sph.png'])
                Z(z[54])
                Z(z[78])
                Z(z[79])
                Z([3, 'player-progress'])
                Z([3, 'time'])
                Z([a, [
                    [2, '||'],
                    [
                        [7],
                        [3, 'fmtCurrentTime']
                    ],
                    [1, '00:00']
                ]])
                Z([3, 'player-progress-bar'])
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
                Z(z[89])
                Z([a, [
                    [2, '||'],
                    [
                        [7],
                        [3, 'fmtDuration']
                    ],
                    [1, '00:00']
                ]])
                Z([3, 'content-tips'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'currSoundSource']
                    ],
                    [1, 'slow']
                ])
                Z([3, '慢速朗读'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'currSoundSource']
                    ],
                    [1, 'original']
                ])
                Z([a, [
                    [2, '||'],
                    [
                        [6],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'ext']
                        ],
                        [3, 'desc']
                    ],
                    [1, '当前内容：原话']
                ]])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'currSoundSource']
                    ],
                    [1, 'zi']
                ])
                Z([3, '可点击对应的字听发音'])
                Z([3, 'position:absolute;bottom:15rpx;right:15rpx;'])
                Z([3, 'showSettingPanel'])
                Z(z[74])
                Z([3, 'setting-o'])
                Z([3, 'mini'])
                Z([3, '设置'])
                Z(z[13])
                Z([3, 'chinese-new'])
                Z([3, 'chinese-new-title'])
                Z([3, '翻译:'])
                Z([3, 'chinese-new-content'])
                Z([a, z[17][1]])
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
                Z([3, 'vocabularies'])
                Z([3, 'vocabularies-title'])
                Z([3, '重点词汇:'])
                Z([3, 'vocabularies-list'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'vocabularies']
                ])
                Z([3, 'uuid'])
                Z([3, 'navToVocabulary'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'uuid']
                ])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'name']
                ]])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'title']
                ])
                Z([3, 'chinese'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'title']
                ]])
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
                Z(z[132])
                Z([3, 'color:green;'])
                Z([3, 'smile-o'])
                Z([3, '18px'])
                Z([a, [
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'ext']
                    ],
                    [3, 'desc']
                ]])
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
                Z(z[19])
                Z([3, 'openSPH'])
                Z(z[83])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'finderUserName']
                ])
                Z(z[54])
                Z([3, 'margin-right:10rpx;'])
                Z(z[78])
                Z([a, z[133][1]])
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
                Z([3, 'filter-group'])
                Z([3, 'filter-title'])
                Z([3, '查看范围'])
                Z([3, 'filter-options'])
                Z([
                    [7],
                    [3, 'scopeOptions']
                ])
                Z([3, 'value'])
                Z([3, 'onScopeChange'])
                Z([a, [3, 'filter-chip '],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currentScope']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'value']
                            ]
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'value']
                ])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'label']
                ]])
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
                Z(z[153])
                Z(z[154])
                Z([3, '会员筛选'])
                Z(z[156])
                Z([
                    [7],
                    [3, 'vipFilterOptions']
                ])
                Z(z[158])
                Z([3, 'onVipFilterChange'])
                Z([a, z[160][1],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currentVipFilter']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'value']
                            ]
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z(z[161])
                Z([a, z[162][1]])
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
                Z(z[153])
                Z(z[154])
                Z([3, '学员标记'])
                Z(z[156])
                Z([
                    [7],
                    [3, 'studentCategoryOptions']
                ])
                Z(z[158])
                Z([3, 'onStudentCategoryChange'])
                Z([a, z[160][1],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'currentStudentCategory']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'value']
                            ]
                        ],
                        [1, 'active'],
                        [1, '']
                    ]
                ])
                Z(z[161])
                Z([a, z[162][1]])
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
                Z(z[19])
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
                Z([3, 'good'])
                Z([3, '/images/good.png'])
                Z([3, 'userinfo'])
                Z([3, 'navToAdminManage'])
                Z([3, 'navToComment'])
                Z([3, 'avatar-info'])
                Z(z[22])
                Z([3, 'avatar'])
                Z([
                    [2, '?:'],
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
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'nweAvatar']
                        ]
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'nweAvatar']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'avatar']
                    ]
                ])
                Z(z[78])
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
                Z([3, 'vip-badge'])
                Z([3, 'VIP'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'studentCategoryLabel']
                ])
                Z([a, [3, 'student-category-badge '],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'studentCategory']
                    ]
                ])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'studentCategoryLabel']
                ]])
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
                Z([3, 'other-teacher-badge'])
                Z([3, '已有三方老师'])
                Z([3, 'name-text'])
                Z([a, [
                    [2, '?:'],
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
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'newNickname']
                        ]
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'newNickname']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'nickname']
                    ]
                ]])
                Z(z[89])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'displayTime']
                ]])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'checkinNum']
                ])
                Z([a, [3, '打卡'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'checkinNum']
                    ],
                    [3, '天']
                ])
                Z([3, 'likeClickHandle'])
                Z([3, 'like'])
                Z(z[22])
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
                Z([a, [
                    [2, '?:'],
                    [
                        [2, '>'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, 'like']
                        ],
                        [1, 0]
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'like']
                    ],
                    [1, '']
                ]])
                Z([3, 'user-audio'])
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
                Z(z[129])
                Z(z[54])
                Z([3, 'danger'])
                Z([3, '删除'])
                Z([3, 'showDeleteRuleTips'])
                Z([3, '24小时内可删除'])
                Z(z[236])
                Z([3, 'gray'])
                Z([3, 'question-o'])
                Z([3, '28rpx'])
                Z([
                    [7],
                    [3, 'hasNext']
                ])
                Z(z[13])
                Z([3, 'loadnore'])
                Z([3, 'loadMore'])
                Z(z[44])
                Z(z[78])
                Z([3, '加载更多'])
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
                Z([3, '打卡模式'])
                Z(z[112])
                Z([3, 'main'])
                Z(z[13])
                Z([3, 'progress'])
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
                Z([a, [3, '点击'],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'recording']
                        ],
                        [1, '结束'],
                        [1, '开始']
                    ],
                    [3, '录音'],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'recording']
                        ],
                        [
                            [2, '+'],
                            [
                                [2, '+'],
                                [
                                    [2, '+'],
                                    [
                                        [2, '+'],
                                        [1, '('],
                                        [
                                            [7],
                                            [3, 'recTotalTime']
                                        ]
                                    ],
                                    [1, '/']
                                ],
                                [
                                    [2, '/'],
                                    [
                                        [7],
                                        [3, 'maxDuration']
                                    ],
                                    [1, 1000]
                                ]
                            ],
                            [1, ')']
                        ],
                        [1, '']
                    ]
                ])
                Z(z[13])
                Z(z[226])
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
                Z([3, 'checkbox'])
                Z([3, 'onCheckBoxChange'])
                Z([3, 'square'])
                Z([
                    [7],
                    [3, 'needFeedback']
                ])
                Z([3, 'font-size:28rpx;color:#666;'])
                Z([3, '帮我纠音 1对1纠正发音'])
                Z([3, '(限免)'])
                Z([3, 'margin-bottom:15px;width:100%'])
                Z([3, 'checkinHandle'])
                Z(z[266])
                Z(z[55])
                Z([3, '提交打卡'])
                Z([3, 'hideModePanel'])
                Z(z[288])
                Z([3, '取消'])
                Z([
                    [7],
                    [3, 'showModePanel']
                ])
                Z([3, '打卡模式'])
                Z([3, 'setting-container'])
                Z([3, 'onChange'])
                Z([3, 'mode'])
                Z([
                    [7],
                    [3, 'mode']
                ])
                Z([3, 'setting-item'])
                Z([3, 'desc'])
                Z([3, '正常模式'])
                Z([3, '显示粤文+拼音'])
                Z(z[44])
                Z([3, '正常'])
                Z(z[297])
                Z(z[298])
                Z([3, '只显示粤文'])
                Z([3, '见字发音'])
                Z([3, 'cantonese'])
                Z([3, '粤文'])
                Z(z[297])
                Z(z[298])
                Z([3, '只显示拼音'])
                Z([3, '拼音强化练习'])
                Z([3, 'jyutping'])
                Z([3, '拼音'])
                Z(z[297])
                Z(z[298])
                Z([3, '只显示译文'])
                Z([3, '直接将普通话文字口译为粤语'])
                Z(z[16])
                Z([3, '译文'])
                Z([3, 'onClose'])
                Z(z[321])
                Z(z[290])
                Z([
                    [7],
                    [3, 'showSettingPanel']
                ])
                Z([3, '播放设置'])
                Z(z[293])
                Z(z[297])
                Z(z[298])
                Z([3, '整句循环播放次数'])
                Z(z[294])
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
                Z([3, 'bottom-panel-container'])
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
                Z(z[54])
                Z([3, '返回"粤语派APP"'])
                Z([3, 'showCheckin'])
                Z(z[78])
                Z([3, '我要打卡'])
                Z([
                    [2, '!=='],
                    [
                        [7],
                        [3, 'ohosHack']
                    ],
                    [1, true]
                ])
                Z([3, 'navToHistory'])
                Z([3, 'outline-btn history-btn'])
                Z([3, 'outline-btn__label'])
                Z([3, '往期打卡'])
                Z(z[349])
                Z([3, 'favHandle'])
                Z([3, 'outline-btn fav-btn'])
                Z([3, 'fav-btn__content'])
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
                Z(z[139])
                Z([3, 'fav-btn__label'])
                Z([a, [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'favId']
                    ],
                    [1, '已收藏'],
                    [1, '收藏']
                ]])
                Z([
                    [7],
                    [3, 'feedbackCount']
                ])
                Z([3, 'navToFeedback'])
                Z([a, z[364],
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
            var oLE = _mz(z, 'van-nav-bar', ['bind:click-left', 0, 'border', 1, 'customClass', 1, 'leftArrow', 2, 'leftText', 3, 'title', 4], [], e, s, gg)
            _(r, oLE)
            var eJE = _v()
            _(r, eJE)
            if (_oz(z, 6, e, s, gg)) {
                eJE.wxVkey = 1
                var xME = _mz(z, 'view', ['bind:tap', 7, 'class', 1], [], e, s, gg)
                var oRE = _v()
                _(xME, oRE)
                var cSE = function(lUE, oTE, aVE, gg) {
                    var eXE = _n('van-row')
                    var bYE = _n('van-col')
                    _rz(z, bYE, 'span', 13, lUE, oTE, gg)
                    var oZE = _n('view')
                    _rz(z, oZE, 'class', 14, lUE, oTE, gg)
                    var x1E = _v()
                    _(oZE, x1E)
                    if (_oz(z, 15, lUE, oTE, gg)) {
                        x1E.wxVkey = 1
                        var o2E = _n('view')
                        _rz(z, o2E, 'class', 16, lUE, oTE, gg)
                        var f3E = _oz(z, 17, lUE, oTE, gg)
                        _(o2E, f3E)
                        _(x1E, o2E)
                    }
                    var c4E = _v()
                    _(oZE, c4E)
                    var h5E = function(c7E, o6E, o8E, gg) {
                        var a0E = _mz(z, 'view', ['bind:tap', 20, 'class', 1, 'data-col', 2, 'data-p', 3, 'data-row', 4], [], c7E, o6E, gg)
                        var tAF = _mz(z, 'ruby-token', ['alternativeTokens', 25, 'blur', 1, 'displayPinyin', 2, 'displayStyle', 3, 'pinyinColor', 4, 'pinyinFontFamily', 5, 'pinyinFontSize', 6, 'pinyinFontWeight', 7, 'pinyinParts', 8, 'text', 9, 'textColor', 10, 'textFontFamily', 11, 'textFontSize', 12, 'textFontWeight', 13, 'variant', 14], [], c7E, o6E, gg)
                        _(a0E, tAF)
                        _(o8E, a0E)
                        return o8E
                    }
                    c4E.wxXCkey = 4
                    _2z(z, 18, h5E, lUE, oTE, gg, c4E, 'item', 'index', 'index')
                    x1E.wxXCkey = 1
                    _(bYE, oZE)
                    _(eXE, bYE)
                    _(aVE, eXE)
                    return aVE
                }
                oRE.wxXCkey = 4
                _2z(z, 11, cSE, e, s, gg, oRE, 'line', 'row', 'row')
                var oNE = _v()
                _(xME, oNE)
                if (_oz(z, 40, e, s, gg)) {
                    oNE.wxVkey = 1
                    var eBF = _n('view')
                    _rz(z, eBF, 'class', 41, e, s, gg)
                    var bCF = _mz(z, 'van-button', ['block', -1, 'round', -1, 'icon', 42, 'openType', 1, 'size', 2], [], e, s, gg)
                    var oDF = _oz(z, 45, e, s, gg)
                    _(bCF, oDF)
                    _(eBF, bCF)
                    _(oNE, eBF)
                }
                var xEF = _n('van-row')
                var oFF = _n('van-col')
                _rz(z, oFF, 'span', 46, e, s, gg)
                var fGF = _n('view')
                _rz(z, fGF, 'class', 47, e, s, gg)
                var cHF = _n('view')
                _rz(z, cHF, 'class', 48, e, s, gg)
                var hIF = _n('view')
                _rz(z, hIF, 'class', 49, e, s, gg)
                var lMF = _mz(z, 'van-button', ['round', -1, 'bind:tap', 50, 'customClass', 1, 'data-source', 2, 'icon', 3, 'size', 4, 'type', 5], [], e, s, gg)
                var aNF = _oz(z, 56, e, s, gg)
                _(lMF, aNF)
                _(hIF, lMF)
                var oJF = _v()
                _(hIF, oJF)
                if (_oz(z, 57, e, s, gg)) {
                    oJF.wxVkey = 1
                    var tOF = _mz(z, 'van-button', ['round', -1, 'bind:tap', 58, 'customClass', 1, 'data-source', 2, 'icon', 3, 'size', 4, 'type', 5], [], e, s, gg)
                    var ePF = _oz(z, 64, e, s, gg)
                    _(tOF, ePF)
                    _(oJF, tOF)
                }
                var bQF = _mz(z, 'van-button', ['round', -1, 'bind:tap', 65, 'customClass', 1, 'data-source', 2, 'icon', 3, 'size', 4, 'type', 5], [], e, s, gg)
                var oRF = _oz(z, 71, e, s, gg)
                _(bQF, oRF)
                _(hIF, bQF)
                var cKF = _v()
                _(hIF, cKF)
                if (_oz(z, 72, e, s, gg)) {
                    cKF.wxVkey = 1
                    var xSF = _mz(z, 'van-button', ['round', -1, 'bind:tap', 73, 'color', 1, 'data-uuid', 2, 'icon', 3, 'size', 4, 'type', 5], [], e, s, gg)
                    var oTF = _oz(z, 79, e, s, gg)
                    _(xSF, oTF)
                    _(cKF, xSF)
                }
                var oLF = _v()
                _(hIF, oLF)
                if (_oz(z, 80, e, s, gg)) {
                    oLF.wxVkey = 1
                    var fUF = _mz(z, 'van-button', ['round', -1, 'bind:tap', 81, 'color', 1, 'data-fid', 2, 'icon', 3, 'size', 4, 'type', 5], [], e, s, gg)
                    var cVF = _oz(z, 87, e, s, gg)
                    _(fUF, cVF)
                    _(oLF, fUF)
                }
                oJF.wxXCkey = 1
                oJF.wxXCkey = 3
                cKF.wxXCkey = 1
                cKF.wxXCkey = 3
                oLF.wxXCkey = 1
                oLF.wxXCkey = 3
                _(cHF, hIF)
                _(fGF, cHF)
                var hWF = _n('view')
                _rz(z, hWF, 'class', 88, e, s, gg)
                var oXF = _n('view')
                _rz(z, oXF, 'class', 89, e, s, gg)
                var cYF = _oz(z, 90, e, s, gg)
                _(oXF, cYF)
                _(hWF, oXF)
                var oZF = _n('view')
                _rz(z, oZF, 'class', 91, e, s, gg)
                var l1F = _mz(z, 'van-slider', ['activeColor', 92, 'barHeight', 1, 'bind:change', 2, 'bind:drag', 3, 'bind:drag-end', 4, 'disabled', 5, 'inactiveColor', 6, 'value', 7], [], e, s, gg)
                _(oZF, l1F)
                _(hWF, oZF)
                var a2F = _n('view')
                _rz(z, a2F, 'class', 100, e, s, gg)
                var t3F = _oz(z, 101, e, s, gg)
                _(a2F, t3F)
                _(hWF, a2F)
                _(fGF, hWF)
                var e4F = _n('view')
                _rz(z, e4F, 'class', 102, e, s, gg)
                var b5F = _v()
                _(e4F, b5F)
                if (_oz(z, 103, e, s, gg)) {
                    b5F.wxVkey = 1
                    var o6F = _oz(z, 104, e, s, gg)
                    _(b5F, o6F)
                } else if (_oz(z, 105, e, s, gg)) {
                    b5F.wxVkey = 2
                    var x7F = _oz(z, 106, e, s, gg)
                    _(b5F, x7F)
                } else if (_oz(z, 107, e, s, gg)) {
                    b5F.wxVkey = 3
                    var o8F = _oz(z, 108, e, s, gg)
                    _(b5F, o8F)
                }
                b5F.wxXCkey = 1
                _(fGF, e4F)
                var f9F = _n('view')
                _rz(z, f9F, 'style', 109, e, s, gg)
                var c0F = _mz(z, 'van-button', ['round', -1, 'bind:tap', 110, 'color', 1, 'icon', 2, 'size', 3], [], e, s, gg)
                var hAG = _oz(z, 114, e, s, gg)
                _(c0F, hAG)
                _(f9F, c0F)
                _(fGF, f9F)
                _(oFF, fGF)
                _(xEF, oFF)
                _(xME, xEF)
                var oBG = _n('van-row')
                var cCG = _n('van-col')
                _rz(z, cCG, 'span', 115, e, s, gg)
                var aFG = _n('view')
                _rz(z, aFG, 'class', 116, e, s, gg)
                var tGG = _n('text')
                _rz(z, tGG, 'class', 117, e, s, gg)
                var eHG = _oz(z, 118, e, s, gg)
                _(tGG, eHG)
                _(aFG, tGG)
                var bIG = _n('text')
                _rz(z, bIG, 'class', 119, e, s, gg)
                var oJG = _oz(z, 120, e, s, gg)
                _(bIG, oJG)
                _(aFG, bIG)
                _(cCG, aFG)
                var oDG = _v()
                _(cCG, oDG)
                if (_oz(z, 121, e, s, gg)) {
                    oDG.wxVkey = 1
                    var xKG = _n('view')
                    _rz(z, xKG, 'class', 122, e, s, gg)
                    var oLG = _n('view')
                    _rz(z, oLG, 'class', 123, e, s, gg)
                    var fMG = _oz(z, 124, e, s, gg)
                    _(oLG, fMG)
                    _(xKG, oLG)
                    var cNG = _n('view')
                    _rz(z, cNG, 'class', 125, e, s, gg)
                    var hOG = _v()
                    _(cNG, hOG)
                    var oPG = function(oRG, cQG, lSG, gg) {
                        var tUG = _mz(z, 'text', ['bind:tap', 128, 'data-uuid', 1], [], oRG, cQG, gg)
                        var eVG = _oz(z, 130, oRG, cQG, gg)
                        _(tUG, eVG)
                        _(lSG, tUG)
                        return lSG
                    }
                    hOG.wxXCkey = 2
                    _2z(z, 126, oPG, e, s, gg, hOG, 'item', 'index', 'uuid')
                    _(xKG, cNG)
                    _(oDG, xKG)
                }
                var lEG = _v()
                _(cCG, lEG)
                if (_oz(z, 131, e, s, gg)) {
                    lEG.wxVkey = 1
                    var bWG = _n('view')
                    _rz(z, bWG, 'class', 132, e, s, gg)
                    var oXG = _oz(z, 133, e, s, gg)
                    _(bWG, oXG)
                    _(lEG, bWG)
                }
                oDG.wxXCkey = 1
                lEG.wxXCkey = 1
                _(oBG, cCG)
                _(xME, oBG)
                var fOE = _v()
                _(xME, fOE)
                if (_oz(z, 134, e, s, gg)) {
                    fOE.wxVkey = 1
                    var xYG = _n('van-row')
                    var oZG = _n('van-col')
                    _rz(z, oZG, 'span', 135, e, s, gg)
                    var f1G = _mz(z, 'view', ['class', 136, 'style', 1], [], e, s, gg)
                    var c2G = _mz(z, 'van-icon', ['name', 138, 'size', 1], [], e, s, gg)
                    _(f1G, c2G)
                    var h3G = _oz(z, 140, e, s, gg)
                    _(f1G, h3G)
                    _(oZG, f1G)
                    var o4G = _n('view')
                    var c5G = _v()
                    _(o4G, c5G)
                    var o6G = function(a8G, l7G, t9G, gg) {
                        var bAH = _mz(z, 'van-button', ['round', -1, 'bind:tap', 143, 'data-fid', 1, 'data-fname', 2, 'size', 3, 'style', 4, 'type', 5], [], a8G, l7G, gg)
                        var oBH = _oz(z, 149, a8G, l7G, gg)
                        _(bAH, oBH)
                        _(t9G, bAH)
                        return t9G
                    }
                    c5G.wxXCkey = 4
                    _2z(z, 141, o6G, e, s, gg, c5G, 'item', 'index', 'index')
                    _(oZG, o4G)
                    _(xYG, oZG)
                    _(fOE, xYG)
                }
                var cPE = _v()
                _(xME, cPE)
                if (_oz(z, 150, e, s, gg)) {
                    cPE.wxVkey = 1
                    var xCH = _n('view')
                    _rz(z, xCH, 'class', 151, e, s, gg)
                    var oDH = _v()
                    _(xCH, oDH)
                    if (_oz(z, 152, e, s, gg)) {
                        oDH.wxVkey = 1
                        var hGH = _n('view')
                        _rz(z, hGH, 'class', 153, e, s, gg)
                        var oHH = _n('text')
                        _rz(z, oHH, 'class', 154, e, s, gg)
                        var cIH = _oz(z, 155, e, s, gg)
                        _(oHH, cIH)
                        _(hGH, oHH)
                        var oJH = _n('view')
                        _rz(z, oJH, 'class', 156, e, s, gg)
                        var lKH = _v()
                        _(oJH, lKH)
                        var aLH = function(eNH, tMH, bOH, gg) {
                            var xQH = _mz(z, 'view', ['bind:tap', 159, 'class', 1, 'data-value', 2], [], eNH, tMH, gg)
                            var oRH = _oz(z, 162, eNH, tMH, gg)
                            _(xQH, oRH)
                            _(bOH, xQH)
                            return bOH
                        }
                        lKH.wxXCkey = 2
                        _2z(z, 157, aLH, e, s, gg, lKH, 'item', 'index', 'value')
                        _(hGH, oJH)
                        _(oDH, hGH)
                    }
                    var fEH = _v()
                    _(xCH, fEH)
                    if (_oz(z, 163, e, s, gg)) {
                        fEH.wxVkey = 1
                        var fSH = _n('view')
                        _rz(z, fSH, 'class', 164, e, s, gg)
                        var cTH = _n('text')
                        _rz(z, cTH, 'class', 165, e, s, gg)
                        var hUH = _oz(z, 166, e, s, gg)
                        _(cTH, hUH)
                        _(fSH, cTH)
                        var oVH = _n('view')
                        _rz(z, oVH, 'class', 167, e, s, gg)
                        var cWH = _v()
                        _(oVH, cWH)
                        var oXH = function(aZH, lYH, t1H, gg) {
                            var b3H = _mz(z, 'view', ['bind:tap', 170, 'class', 1, 'data-value', 2], [], aZH, lYH, gg)
                            var o4H = _oz(z, 173, aZH, lYH, gg)
                            _(b3H, o4H)
                            _(t1H, b3H)
                            return t1H
                        }
                        cWH.wxXCkey = 2
                        _2z(z, 168, oXH, e, s, gg, cWH, 'item', 'index', 'value')
                        _(fSH, oVH)
                        _(fEH, fSH)
                    }
                    var cFH = _v()
                    _(xCH, cFH)
                    if (_oz(z, 174, e, s, gg)) {
                        cFH.wxVkey = 1
                        var x5H = _n('view')
                        _rz(z, x5H, 'class', 175, e, s, gg)
                        var o6H = _n('text')
                        _rz(z, o6H, 'class', 176, e, s, gg)
                        var f7H = _oz(z, 177, e, s, gg)
                        _(o6H, f7H)
                        _(x5H, o6H)
                        var c8H = _n('view')
                        _rz(z, c8H, 'class', 178, e, s, gg)
                        var h9H = _v()
                        _(c8H, h9H)
                        var o0H = function(oBI, cAI, lCI, gg) {
                            var tEI = _mz(z, 'view', ['bind:tap', 181, 'class', 1, 'data-value', 2], [], oBI, cAI, gg)
                            var eFI = _oz(z, 184, oBI, cAI, gg)
                            _(tEI, eFI)
                            _(lCI, tEI)
                            return lCI
                        }
                        h9H.wxXCkey = 2
                        _2z(z, 179, o0H, e, s, gg, h9H, 'item', 'index', 'value')
                        _(x5H, c8H)
                        _(cFH, x5H)
                    }
                    oDH.wxXCkey = 1
                    fEH.wxXCkey = 1
                    cFH.wxXCkey = 1
                    _(cPE, xCH)
                }
                var hQE = _v()
                _(xME, hQE)
                if (_oz(z, 185, e, s, gg)) {
                    hQE.wxVkey = 1
                    var bGI = _n('van-row')
                    _rz(z, bGI, 'customClass', 186, e, s, gg)
                    var xII = _v()
                    _(bGI, xII)
                    var oJI = function(cLI, fKI, hMI, gg) {
                        var cOI = _n('van-col')
                        _rz(z, cOI, 'span', 189, cLI, fKI, gg)
                        var oPI = _n('view')
                        _rz(z, oPI, 'class', 190, cLI, fKI, gg)
                        var lQI = _v()
                        _(oPI, lQI)
                        if (_oz(z, 191, cLI, fKI, gg)) {
                            lQI.wxVkey = 1
                            var tSI = _mz(z, 'image', ['class', 192, 'src', 1], [], cLI, fKI, gg)
                            _(lQI, tSI)
                        }
                        var eTI = _n('view')
                        _rz(z, eTI, 'class', 194, cLI, fKI, gg)
                        var bUI = _mz(z, 'view', ['bind:longpress', 195, 'bind:tap', 1, 'class', 2, 'data-index', 3], [], cLI, fKI, gg)
                        var oVI = _n('view')
                        _rz(z, oVI, 'class', 199, cLI, fKI, gg)
                        var xWI = _n('image')
                        _rz(z, xWI, 'src', 200, cLI, fKI, gg)
                        _(oVI, xWI)
                        _(bUI, oVI)
                        var oXI = _n('view')
                        _rz(z, oXI, 'class', 201, cLI, fKI, gg)
                        var fYI = _n('view')
                        _rz(z, fYI, 'class', 202, cLI, fKI, gg)
                        var cZI = _v()
                        _(fYI, cZI)
                        if (_oz(z, 203, cLI, fKI, gg)) {
                            cZI.wxVkey = 1
                            var c3I = _n('text')
                            _rz(z, c3I, 'class', 204, cLI, fKI, gg)
                            var o4I = _oz(z, 205, cLI, fKI, gg)
                            _(c3I, o4I)
                            _(cZI, c3I)
                        }
                        var h1I = _v()
                        _(fYI, h1I)
                        if (_oz(z, 206, cLI, fKI, gg)) {
                            h1I.wxVkey = 1
                            var l5I = _n('text')
                            _rz(z, l5I, 'class', 207, cLI, fKI, gg)
                            var a6I = _oz(z, 208, cLI, fKI, gg)
                            _(l5I, a6I)
                            _(h1I, l5I)
                        }
                        var o2I = _v()
                        _(fYI, o2I)
                        if (_oz(z, 209, cLI, fKI, gg)) {
                            o2I.wxVkey = 1
                            var t7I = _n('text')
                            _rz(z, t7I, 'class', 210, cLI, fKI, gg)
                            var e8I = _oz(z, 211, cLI, fKI, gg)
                            _(t7I, e8I)
                            _(o2I, t7I)
                        }
                        var b9I = _n('text')
                        _rz(z, b9I, 'class', 212, cLI, fKI, gg)
                        var o0I = _oz(z, 213, cLI, fKI, gg)
                        _(b9I, o0I)
                        _(fYI, b9I)
                        cZI.wxXCkey = 1
                        h1I.wxXCkey = 1
                        o2I.wxXCkey = 1
                        _(oXI, fYI)
                        var xAJ = _n('view')
                        _rz(z, xAJ, 'class', 214, cLI, fKI, gg)
                        var fCJ = _oz(z, 215, cLI, fKI, gg)
                        _(xAJ, fCJ)
                        var oBJ = _v()
                        _(xAJ, oBJ)
                        if (_oz(z, 216, cLI, fKI, gg)) {
                            oBJ.wxVkey = 1
                            var cDJ = _oz(z, 217, cLI, fKI, gg)
                            _(oBJ, cDJ)
                        }
                        oBJ.wxXCkey = 1
                        _(oXI, xAJ)
                        _(bUI, oXI)
                        _(eTI, bUI)
                        var hEJ = _mz(z, 'view', ['bind:tap', 218, 'class', 1, 'data-index', 2], [], cLI, fKI, gg)
                        var oFJ = _mz(z, 'van-icon', ['color', 221, 'name', 1, 'size', 2], [], cLI, fKI, gg)
                        _(hEJ, oFJ)
                        var cGJ = _n('text')
                        var oHJ = _oz(z, 224, cLI, fKI, gg)
                        _(cGJ, oHJ)
                        _(hEJ, cGJ)
                        _(eTI, hEJ)
                        _(oPI, eTI)
                        var lIJ = _n('view')
                        _rz(z, lIJ, 'class', 225, cLI, fKI, gg)
                        var aJJ = _mz(z, 'player', ['inactive', -1, 'bind:onPlay', 226, 'duration', 1, 'src', 2], [], cLI, fKI, gg)
                        _(lIJ, aJJ)
                        _(oPI, lIJ)
                        var aRI = _v()
                        _(oPI, aRI)
                        if (_oz(z, 229, cLI, fKI, gg)) {
                            aRI.wxVkey = 1
                            var tKJ = _n('view')
                            _rz(z, tKJ, 'class', 230, cLI, fKI, gg)
                            var eLJ = _mz(z, 'van-button', ['round', -1, 'bind:tap', 231, 'data-uuid', 1, 'size', 2, 'type', 3], [], cLI, fKI, gg)
                            var bMJ = _oz(z, 235, cLI, fKI, gg)
                            _(eLJ, bMJ)
                            _(tKJ, eLJ)
                            var oNJ = _n('text')
                            _rz(z, oNJ, 'bind:tap', 236, cLI, fKI, gg)
                            var xOJ = _oz(z, 237, cLI, fKI, gg)
                            _(oNJ, xOJ)
                            _(tKJ, oNJ)
                            var oPJ = _mz(z, 'van-icon', ['bind:tap', 238, 'color', 1, 'name', 2, 'size', 3], [], cLI, fKI, gg)
                            _(tKJ, oPJ)
                            _(aRI, tKJ)
                        }
                        lQI.wxXCkey = 1
                        aRI.wxXCkey = 1
                        aRI.wxXCkey = 3
                        _(cOI, oPI)
                        _(hMI, cOI)
                        return hMI
                    }
                    xII.wxXCkey = 4
                    _2z(z, 187, oJI, e, s, gg, xII, 'item', 'index', 'index')
                    var oHI = _v()
                    _(bGI, oHI)
                    if (_oz(z, 242, e, s, gg)) {
                        oHI.wxVkey = 1
                        var fQJ = _n('van-col')
                        _rz(z, fQJ, 'span', 243, e, s, gg)
                        var cRJ = _n('view')
                        _rz(z, cRJ, 'class', 244, e, s, gg)
                        var hSJ = _mz(z, 'van-button', ['plain', -1, 'round', -1, 'bind:tap', 245, 'size', 1, 'type', 2], [], e, s, gg)
                        var oTJ = _oz(z, 248, e, s, gg)
                        _(hSJ, oTJ)
                        _(cRJ, hSJ)
                        _(fQJ, cRJ)
                        _(oHI, fQJ)
                    }
                    oHI.wxXCkey = 1
                    oHI.wxXCkey = 3
                    _(hQE, bGI)
                }
                oNE.wxXCkey = 1
                oNE.wxXCkey = 3
                fOE.wxXCkey = 1
                fOE.wxXCkey = 3
                cPE.wxXCkey = 1
                hQE.wxXCkey = 1
                hQE.wxXCkey = 3
                _(eJE, xME)
            }
            var cUJ = _mz(z, 'van-popup', ['closeable', -1, 'round', -1, 'bind:close', 249, 'customClass', 1, 'overlay', 2, 'position', 3, 'show', 4], [], e, s, gg)
            var oVJ = _n('view')
            _rz(z, oVJ, 'class', 254, e, s, gg)
            var lWJ = _mz(z, 'view', ['bind:tap', 255, 'class', 1, 'style', 2], [], e, s, gg)
            var aXJ = _n('text')
            var tYJ = _oz(z, 258, e, s, gg)
            _(aXJ, tYJ)
            _(lWJ, aXJ)
            var eZJ = _n('van-icon')
            _rz(z, eZJ, 'name', 259, e, s, gg)
            _(lWJ, eZJ)
            _(oVJ, lWJ)
            var b1J = _n('view')
            _rz(z, b1J, 'class', 260, e, s, gg)
            var o2J = _n('view')
            var x3J = _n('van-row')
            var o4J = _n('van-col')
            _rz(z, o4J, 'span', 261, e, s, gg)
            var f5J = _n('view')
            _rz(z, f5J, 'class', 262, e, s, gg)
            var c6J = _mz(z, 'van-button', ['round', -1, 'bind:tap', 263, 'customStyle', 1, 'icon', 2, 'size', 3, 'type', 4], [], e, s, gg)
            var h7J = _oz(z, 268, e, s, gg)
            _(c6J, h7J)
            _(f5J, c6J)
            _(o4J, f5J)
            _(x3J, o4J)
            _(o2J, x3J)
            _(b1J, o2J)
            var o8J = _n('view')
            var c9J = _n('van-row')
            var o0J = _n('van-col')
            _rz(z, o0J, 'span', 269, e, s, gg)
            var lAK = _mz(z, 'player', ['inactive', -1, 'bind:onPlay', 270, 'duration', 1, 'id', 2, 'src', 3], [], e, s, gg)
            _(o0J, lAK)
            _(c9J, o0J)
            _(o8J, c9J)
            _(b1J, o8J)
            _(oVJ, b1J)
            var aBK = _n('view')
            _rz(z, aBK, 'class', 274, e, s, gg)
            var tCK = _v()
            _(aBK, tCK)
            if (_oz(z, 275, e, s, gg)) {
                tCK.wxVkey = 1
                var eDK = _n('view')
                _rz(z, eDK, 'class', 276, e, s, gg)
                var bEK = _mz(z, 'van-checkbox', ['bind:change', 277, 'shape', 1, 'value', 2], [], e, s, gg)
                var oFK = _n('view')
                _rz(z, oFK, 'style', 280, e, s, gg)
                var xGK = _oz(z, 281, e, s, gg)
                _(oFK, xGK)
                var oHK = _n('text')
                var fIK = _oz(z, 282, e, s, gg)
                _(oHK, fIK)
                _(oFK, oHK)
                _(bEK, oFK)
                _(eDK, bEK)
                _(tCK, eDK)
            }
            var cJK = _n('view')
            _rz(z, cJK, 'style', 283, e, s, gg)
            var hKK = _mz(z, 'van-button', ['block', -1, 'round', -1, 'bind:tap', 284, 'size', 1, 'type', 2], [], e, s, gg)
            var oLK = _oz(z, 287, e, s, gg)
            _(hKK, oLK)
            _(cJK, hKK)
            _(aBK, cJK)
            tCK.wxXCkey = 1
            tCK.wxXCkey = 3
            _(oVJ, aBK)
            _(cUJ, oVJ)
            _(r, cUJ)
            var cMK = _mz(z, 'van-action-sheet', ['bind:cancel', 288, 'bind:close', 1, 'cancelText', 2, 'show', 3, 'title', 4], [], e, s, gg)
            var oNK = _n('view')
            _rz(z, oNK, 'class', 293, e, s, gg)
            var lOK = _mz(z, 'van-radio-group', ['bind:change', 294, 'data-key', 1, 'value', 2], [], e, s, gg)
            var aPK = _n('view')
            _rz(z, aPK, 'class', 297, e, s, gg)
            var tQK = _n('view')
            _rz(z, tQK, 'class', 298, e, s, gg)
            var eRK = _n('text')
            var bSK = _oz(z, 299, e, s, gg)
            _(eRK, bSK)
            _(tQK, eRK)
            var oTK = _n('text')
            var xUK = _oz(z, 300, e, s, gg)
            _(oTK, xUK)
            _(tQK, oTK)
            _(aPK, tQK)
            var oVK = _n('van-radio')
            _rz(z, oVK, 'name', 301, e, s, gg)
            var fWK = _oz(z, 302, e, s, gg)
            _(oVK, fWK)
            _(aPK, oVK)
            _(lOK, aPK)
            var cXK = _n('view')
            _rz(z, cXK, 'class', 303, e, s, gg)
            var hYK = _n('view')
            _rz(z, hYK, 'class', 304, e, s, gg)
            var oZK = _n('text')
            var c1K = _oz(z, 305, e, s, gg)
            _(oZK, c1K)
            _(hYK, oZK)
            var o2K = _n('text')
            var l3K = _oz(z, 306, e, s, gg)
            _(o2K, l3K)
            _(hYK, o2K)
            _(cXK, hYK)
            var a4K = _n('van-radio')
            _rz(z, a4K, 'name', 307, e, s, gg)
            var t5K = _oz(z, 308, e, s, gg)
            _(a4K, t5K)
            _(cXK, a4K)
            _(lOK, cXK)
            var e6K = _n('view')
            _rz(z, e6K, 'class', 309, e, s, gg)
            var b7K = _n('view')
            _rz(z, b7K, 'class', 310, e, s, gg)
            var o8K = _n('text')
            var x9K = _oz(z, 311, e, s, gg)
            _(o8K, x9K)
            _(b7K, o8K)
            var o0K = _n('text')
            var fAL = _oz(z, 312, e, s, gg)
            _(o0K, fAL)
            _(b7K, o0K)
            _(e6K, b7K)
            var cBL = _n('van-radio')
            _rz(z, cBL, 'name', 313, e, s, gg)
            var hCL = _oz(z, 314, e, s, gg)
            _(cBL, hCL)
            _(e6K, cBL)
            _(lOK, e6K)
            var oDL = _n('view')
            _rz(z, oDL, 'class', 315, e, s, gg)
            var cEL = _n('view')
            _rz(z, cEL, 'class', 316, e, s, gg)
            var oFL = _n('text')
            var lGL = _oz(z, 317, e, s, gg)
            _(oFL, lGL)
            _(cEL, oFL)
            var aHL = _n('text')
            var tIL = _oz(z, 318, e, s, gg)
            _(aHL, tIL)
            _(cEL, aHL)
            _(oDL, cEL)
            var eJL = _n('van-radio')
            _rz(z, eJL, 'name', 319, e, s, gg)
            var bKL = _oz(z, 320, e, s, gg)
            _(eJL, bKL)
            _(oDL, eJL)
            _(lOK, oDL)
            _(oNK, lOK)
            _(cMK, oNK)
            _(r, cMK)
            var oLL = _mz(z, 'van-action-sheet', ['bind:cancel', 321, 'bind:close', 1, 'cancelText', 2, 'show', 3, 'title', 4], [], e, s, gg)
            var xML = _n('view')
            _rz(z, xML, 'class', 326, e, s, gg)
            var oNL = _n('view')
            _rz(z, oNL, 'class', 327, e, s, gg)
            var fOL = _n('view')
            _rz(z, fOL, 'class', 328, e, s, gg)
            var cPL = _n('text')
            var hQL = _oz(z, 329, e, s, gg)
            _(cPL, hQL)
            _(fOL, cPL)
            _(oNL, fOL)
            var oRL = _mz(z, 'van-stepper', ['bind:change', 330, 'buttonSize', 1, 'data-key', 2, 'inputWidth', 3, 'max', 4, 'min', 5, 'value', 6], [], e, s, gg)
            _(oNL, oRL)
            _(xML, oNL)
            _(oLL, xML)
            _(r, oLL)
            var bKE = _v()
            _(r, bKE)
            if (_oz(z, 337, e, s, gg)) {
                bKE.wxVkey = 1
                var cSL = _n('view')
                _rz(z, cSL, 'class', 338, e, s, gg)
                var oTL = _n('view')
                _rz(z, oTL, 'class', 339, e, s, gg)
                var lUL = _v()
                _(oTL, lUL)
                if (_oz(z, 340, e, s, gg)) {
                    lUL.wxVkey = 1
                    var bYL = _mz(z, 'van-button', ['round', -1, 'appParameter', 341, 'icon', 1, 'openType', 2, 'size', 3], [], e, s, gg)
                    var oZL = _oz(z, 345, e, s, gg)
                    _(bYL, oZL)
                    _(lUL, bYL)
                }
                var x1L = _mz(z, 'van-button', ['round', -1, 'bind:tap', 346, 'type', 1], [], e, s, gg)
                var o2L = _oz(z, 348, e, s, gg)
                _(x1L, o2L)
                _(oTL, x1L)
                var aVL = _v()
                _(oTL, aVL)
                if (_oz(z, 349, e, s, gg)) {
                    aVL.wxVkey = 1
                    var f3L = _mz(z, 'view', ['bind:tap', 350, 'class', 1], [], e, s, gg)
                    var c4L = _n('text')
                    _rz(z, c4L, 'class', 352, e, s, gg)
                    var h5L = _oz(z, 353, e, s, gg)
                    _(c4L, h5L)
                    _(f3L, c4L)
                    _(aVL, f3L)
                }
                var tWL = _v()
                _(oTL, tWL)
                if (_oz(z, 354, e, s, gg)) {
                    tWL.wxVkey = 1
                    var o6L = _mz(z, 'view', ['bind:tap', 355, 'class', 1], [], e, s, gg)
                    var c7L = _n('view')
                    _rz(z, c7L, 'class', 357, e, s, gg)
                    var o8L = _mz(z, 'van-icon', ['class', 358, 'color', 1, 'name', 2, 'size', 3], [], e, s, gg)
                    _(c7L, o8L)
                    var l9L = _n('text')
                    _rz(z, l9L, 'class', 362, e, s, gg)
                    var a0L = _oz(z, 363, e, s, gg)
                    _(l9L, a0L)
                    _(c7L, l9L)
                    _(o6L, c7L)
                    _(tWL, o6L)
                }
                var eXL = _v()
                _(oTL, eXL)
                if (_oz(z, 364, e, s, gg)) {
                    eXL.wxVkey = 1
                    var tAM = _mz(z, 'van-icon', ['bind:tap', 365, 'info', 1, 'name', 2, 'size', 3], [], e, s, gg)
                    _(eXL, tAM)
                }
                lUL.wxXCkey = 1
                lUL.wxXCkey = 3
                aVL.wxXCkey = 1
                tWL.wxXCkey = 1
                tWL.wxXCkey = 3
                eXL.wxXCkey = 1
                eXL.wxXCkey = 3
                _(cSL, oTL)
                _(bKE, cSL)
            }
            eJE.wxXCkey = 1
            eJE.wxXCkey = 3
            bKE.wxXCkey = 1
            bKE.wxXCkey = 3
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
            outerGlobal.__wxml_comp_version__ = 0.02
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
                if (typeof(outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof(outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
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
else __wxAppCode__['pages/checkin/index/index.wxml'] = $gwx0_XC_3('./pages/checkin/index/index.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/checkin/index/index.wxss'] = setCssToHead([".", [1], "container{padding:", [0, 20], " ", [0, 20], " 120px}\n.", [1], "container,.", [1], "sentence{box-sizing:border-box}\n.", [1], "sentence{display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;position:relative;width:100%}\n.", [1], "teacher-tip{background:#f7f8fa;border-radius:", [0, 16], ";color:#666;font-size:", [0, 26], ";margin:", [0, 16], " 0 ", [0, 24], ";padding:", [0, 20], " ", [0, 24], "}\n.", [1], "filter-panel{background:linear-gradient(180deg,#f7f8fa,#f3f6fb);border-radius:", [0, 20], ";margin:", [0, 18], " 0 ", [0, 24], ";padding:", [0, 20], "}\n.", [1], "filter-group + .", [1], "filter-group{margin-top:", [0, 16], "}\n.", [1], "filter-title{color:#666;display:block;font-size:", [0, 24], ";margin-bottom:", [0, 12], "}\n.", [1], "filter-options{display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;gap:", [0, 12], "}\n.", [1], "filter-chip{background:#fff;border:1px solid #d9dde4;border-radius:", [0, 999], ";color:#555;font-size:", [0, 24], ";padding:", [0, 10], " ", [0, 22], "}\n.", [1], "filter-chip.", [1], "active{background:#1f7a5b;border-color:#1f7a5b;color:#fff}\n.", [1], "current-word .", [1], "ruby-token__basic-pinyin,.", [1], "current-word .", [1], "ruby-token__final,.", [1], "current-word .", [1], "ruby-token__initial,.", [1], "current-word .", [1], "ruby-token__pinyin,.", [1], "current-word .", [1], "ruby-token__raw,.", [1], "current-word .", [1], "ruby-token__text,.", [1], "current-word .", [1], "ruby-token__tone-number{color:green}\n.", [1], "current-word .", [1], "ruby-token__tone-connector{background-color:green}\n.", [1], "chinese{background-color:#eee;border-radius:10px;color:#555;font-size:14px;margin-bottom:15px;margin-top:15px;padding:5px}\n.", [1], "chinese wx-text{overflow:hidden;position:relative}\n.", [1], "chinese-new{background:#eee;border-radius:", [0, 20], ";box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 5], ";margin-top:15px;padding:", [0, 20], "}\n.", [1], "chinese-new-title{font-family:STSongti-SC;font-weight:900;line-height:", [0, 30], "}\n.", [1], "chinese-new-content,.", [1], "chinese-new-title{color:#1d1e1e;font-size:", [0, 28], ";font-style:normal;text-align:left}\n.", [1], "chinese-new-content{font-family:SourceHanSerifCN;font-weight:400;line-height:", [0, 40], "}\n.", [1], "checkin-ruby-token{display:-webkit-inline-flex;display:inline-flex;-webkit-justify-content:center;justify-content:center;margin-bottom:", [0, 12], ";min-width:", [0, 100], "}\n.", [1], "checkin-ruby-token .", [1], "ruby-token__pinyin{font-family:inherit;font-weight:400}\n.", [1], "checkin-ruby-token .", [1], "ruby-token__basic-pinyin,.", [1], "checkin-ruby-token .", [1], "ruby-token__raw{color:#666}\n.", [1], "checkin-ruby-token .", [1], "ruby-token__text{color:inherit;font-weight:400;line-height:1.2;margin-top:0}\n.", [1], "play-btn{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;margin-top:15px}\n.", [1], "play-btn wx-van-button{margin-right:10px}\n.", [1], "play-btn wx-text{color:gray;font-size:13px}\n.", [1], "item{border-bottom:1px dashed #ddd;-webkit-flex-direction:column;flex-direction:column;margin-bottom:15px;padding-bottom:20px;position:relative}\n.", [1], "item,.", [1], "item .", [1], "good{display:-webkit-flex;display:flex}\n.", [1], "item .", [1], "good{-webkit-align-items:center;align-items:center;height:50px;-webkit-justify-content:center;justify-content:center;position:absolute;right:10%;rotate:8deg;top:0;width:50px}\n.", [1], "user-audio{margin-top:10px;padding-left:65px}\n.", [1], "userinfo{border-radius:8px;padding:5px}\n.", [1], "avatar-info,.", [1], "userinfo{display:-webkit-flex;display:flex}\n.", [1], "avatar-info{width:100%}\n.", [1], "userinfo .", [1], "avatar{border-radius:30px;margin-right:10px;overflow:hidden}\n.", [1], "userinfo .", [1], "avatar,.", [1], "userinfo .", [1], "avatar wx-image{height:55px;width:55px}\n.", [1], "userinfo .", [1], "info{color:#111;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;font-size:14px;-webkit-justify-content:space-evenly;justify-content:space-evenly}\n.", [1], "userinfo .", [1], "info .", [1], "name{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;font-size:16px;gap:", [0, 10], "}\n.", [1], "name-text{color:#111}\n.", [1], "userinfo .", [1], "info .", [1], "time{color:#666;font-size:14px}\n.", [1], "vip-badge{background:linear-gradient(135deg,#f7d27a,#e4a63a);color:#5f3b00;font-size:", [0, 20], ";font-weight:600;min-width:", [0, 48], ";padding:", [0, 2], " ", [0, 10], "}\n.", [1], "student-category-badge,.", [1], "vip-badge{-webkit-align-items:center;align-items:center;border-radius:", [0, 999], ";display:-webkit-inline-flex;display:inline-flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "student-category-badge{background-color:#eef1f6;color:#667085;font-size:", [0, 22], ";line-height:1.2;padding:", [0, 4], " ", [0, 10], "}\n.", [1], "student-category-badge.", [1], "active_member{background-color:#e8f7ef;color:#07c160}\n.", [1], "student-category-badge.", [1], "general_member{background-color:#eef6ff;color:#1989fa}\n.", [1], "student-category-badge.", [1], "inactive_member{background-color:#fff4e5;color:#b76500}\n.", [1], "other-teacher-badge{background-color:#fff1f0;border-radius:", [0, 999], ";color:#cf1322;display:-webkit-inline-flex;display:inline-flex;font-size:", [0, 22], ";-webkit-justify-content:center;justify-content:center;line-height:1.2;padding:", [0, 4], " ", [0, 10], "}\n.", [1], "like,.", [1], "other-teacher-badge{-webkit-align-items:center;align-items:center}\n.", [1], "like{display:-webkit-flex;display:flex;-webkit-justify-content:flex-end;justify-content:flex-end}\n.", [1], "like wx-text{font-size:13px;white-space:nowrap}\n.", [1], "record-panel{box-sizing:border-box;height:230px;padding-left:10px;padding-right:10px;padding-top:30px;position:relative;width:100%}\n.", [1], "main{-webkit-justify-content:flex-start;justify-content:flex-start}\n.", [1], "btn-bar,.", [1], "main{box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100px}\n.", [1], "btn-bar{-webkit-align-items:center;align-items:center;-webkit-justify-content:flex-end;justify-content:flex-end;padding-left:10px;padding-right:10px;width:100%}\n.", [1], "progress{-webkit-align-items:center;align-items:center;height:100%}\n.", [1], "checkbox,.", [1], "loadnore,.", [1], "progress{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "checkbox{position:relative;width:100%}\n.", [1], "checkbox wx-text{-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:changecol;animation-name:changecol;-webkit-animation-timing-function:linear;animation-timing-function:linear;color:red;font-size:", [0, 28], "}\n@-webkit-keyframes changecol{from{color:red}\nto{color:#ff7b00}\n}@keyframes changecol{from{color:red}\nto{color:#ff7b00}\n}.", [1], "checkbox .", [1], "help{-webkit-align-items:center;align-items:center;color:#666;display:-webkit-flex;display:flex;font-size:", [0, 25], ";position:absolute;right:5px}\n.", [1], "mt10,.", [1], "tips{margin-top:10px}\n.", [1], "tips{-webkit-align-items:center;align-items:center;background-color:#070707;color:#ffcd38;display:-webkit-flex;display:flex;font-size:", [0, 30], ";padding:", [0, 10], "}\n.", [1], "tips wx-text{text-decoration:underline}\n.", [1], "delete-tips{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;margin:", [0, 10], "}\n.", [1], "delete-tips wx-text{color:gray;font-size:", [0, 28], ";margin-left:", [0, 10], "}\n.", [1], "delete-tips wx-van-icon{margin-left:", [0, 8], "}\n.", [1], "setting-container{padding:", [0, 20], "}\n.", [1], "setting-item{-webkit-align-items:center;align-items:center;border-bottom:", [0, 1], " solid #efefef;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:", [0, 20], ";padding-top:", [0, 20], "}\n.", [1], "desc,.", [1], "setting-item{display:-webkit-flex;display:flex}\n.", [1], "desc{-webkit-flex-direction:column;flex-direction:column}\n.", [1], "desc wx-text:first-child{font-size:", [0, 30], ";font-weight:700}\n.", [1], "desc wx-text:last-child{font-size:", [0, 24], "}\n.", [1], "vocabularies{-webkit-align-items:flex-start;align-items:flex-start;background:rgba(95,170,251,.09);border:", [0, 1], " solid #5faafb;border-radius:", [0, 20], ";box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 15], ";margin-top:", [0, 30], ";padding:", [0, 20], ";width:100%}\n.", [1], "vocabularies-title{color:#626262;font-family:SourceHanSerifCN;font-size:", [0, 24], ";font-style:normal;font-weight:500;line-height:", [0, 35], ";margin-right:", [0, 10], ";text-align:left}\n.", [1], "vocabularies-list wx-text{border:", [0, 1], " solid #b6d2f7;border-radius:", [0, 10], ";padding:", [0, 5], " ", [0, 20], "}\n.", [1], "vocabularies-list{color:#1d1e1e;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;font-family:SourceHanSerifCN;font-size:", [0, 30], ";font-style:normal;font-weight:400;gap:", [0, 20], ";line-height:", [0, 49], ";text-align:left}\n.", [1], "sph{background-color:red;height:", [0, 1000], ";width:100%}\n.", [1], "teaching{background:#eee;border-radius:", [0, 20], ";box-sizing:border-box;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 15], ";margin-top:", [0, 30], ";padding:", [0, 20], "}\n.", [1], "teaching,.", [1], "teaching-play{display:-webkit-flex;display:flex}\n.", [1], "teaching-play{-webkit-flex-wrap:wrap;flex-wrap:wrap;gap:", [0, 20], "}\n.", [1], "teaching-info{color:#686565;font-family:SourceHanSerifCN;font-size:", [0, 22], ";font-style:normal;line-height:", [0, 34], ";text-align:left}\n.", [1], "teaching-info wx-text{font-size:", [0, 24], ";font-weight:700;text-decoration:underline}\n.", [1], "material-source{-webkit-align-items:center;align-items:center;color:#888;display:-webkit-flex;display:flex;font-size:", [0, 22], ";margin-top:", [0, 10], ";padding-left:", [0, 10], "}\n.", [1], "bottom-panel-container{bottom:0;box-shadow:0 ", [0, -8], " ", [0, 16], " hsla(0,0%,68%,.3);left:0;position:fixed;right:0;z-index:99}\n.", [1], "bottom-panel{display:-webkit-flex;display:flex;gap:", [0, 25], ";height:", [0, 150], ";padding:", [0, 30], " ", [0, 30], " ", [0, 40], "}\n.", [1], "bottom-panel,.", [1], "outline-btn{-webkit-align-items:center;align-items:center;background:#fff;box-sizing:border-box}\n.", [1], "outline-btn{border:", [0, 2], " solid #dcdfe6;border-radius:", [0, 999], ";display:-webkit-inline-flex;display:inline-flex;-webkit-flex-shrink:0;flex-shrink:0;height:", [0, 64], ";-webkit-justify-content:center;justify-content:center;padding:0 ", [0, 28], "}\n.", [1], "fav-btn__label,.", [1], "outline-btn__label{color:#323233;font-size:", [0, 28], ";line-height:1}\n.", [1], "fav-btn__content{display:-webkit-flex;display:flex;gap:", [0, 10], "}\n.", [1], "fav-btn__content,.", [1], "fav-btn__icon{-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center}\n.", [1], "fav-btn__icon{display:-webkit-inline-flex;display:inline-flex}\n.", [1], "player-controller{background:hsla(0,0%,100%,.9);border-bottom:", [0, 1], " solid #faf6f6;bottom:", [0, 150], ";box-shadow:0 ", [0, -8], " ", [0, 16], " hsla(0,0%,68%,.3);box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 20], ";padding:", [0, 40], ";position:absolute;width:100%}\n.", [1], "player-content{background-color:green;height:100%;width:100%}\n.", [1], "player-progress{width:90%}\n.", [1], "play-wrap{background:rgba(7,7,7,.747);border-radius:", [0, 20], ";-webkit-flex-direction:column;flex-direction:column;gap:", [0, 10], ";margin-top:", [0, 30], ";padding:", [0, 20], ";position:relative}\n.", [1], "play-wrap,.", [1], "player-progress{box-sizing:border-box;display:-webkit-flex;display:flex}\n.", [1], "player-progress{-webkit-align-items:center;align-items:center;gap:", [0, 30], ";-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 15], ";margin-top:", [0, 25], ";width:100%}\n.", [1], "player-progress-bar{width:90%}\n.", [1], "time{color:#fff;font-size:", [0, 24], "}\n.", [1], "content-tips{color:#9e9e9e;font-size:", [0, 22], "}\n.", [1], "teacher-name{font-weight:700;padding-left:", [0, 4], ";padding-right:", [0, 4], ";text-shadow:", [0, 1], " ", [0, 1], " #000}\n.", [1], "playing-btn{box-shadow:inset 0 3px 10px rgba(70,69,69,.92);scale:1.1;-webkit-transform:translateY(", [0, 2], ");transform:translateY(", [0, 2], ")}\n.", [1], "notice-wrap{-webkit-align-items:center;align-items:center;display:block;margin-top:", [0, 30], "}\n.", [1], "blur-pin .", [1], "ruby-token__pinyin-wrap,.", [1], "blur-zi .", [1], "ruby-token__text{-webkit-filter:blur(", [0, 5], ");filter:blur(", [0, 5], ");opacity:.02}\n.", [1], "shadow{box-shadow:0 ", [0, -8], " ", [0, 16], " rgba(0,0,0,.603)}\n.", [1], "mode-bar{-webkit-align-items:center;align-items:center;color:#666;-webkit-column-gap:", [0, 5], ";column-gap:", [0, 5], ";display:-webkit-flex;display:flex;font-size:", [0, 25], ";left:", [0, 30], ";position:absolute;top:", [0, 30], "}\n.", [1], "mandarin{color:#333;font-size:", [0, 40], ";letter-spacing:", [0, 5], ";line-height:150%;padding:", [0, 10], ";position:absolute}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/checkin/index/index.wxss:1:8202)", {
        path: "./pages/checkin/index/index.wxss"
    });
}