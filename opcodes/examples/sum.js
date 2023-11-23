const player = new Player('730fff80e1413068a05b57d6a58261f07551163369787f349438ea38ca80fac6');

[
`
//
//
// Verifying the Sum of three u32 Commitments 
//
//

//
// Unlocking Script
//
`,

u32_state_unlock( player, 'my_varC', 0x77889955 ),
u32_state_unlock( player, 'my_varB', 0x33557744 ),
u32_state_unlock( player, 'my_varA', 0x44332211 ),

`

// ----------------------

//
// Program
//

`,
u32_state(player, 'my_varA'),
u32_toaltstack,
u32_state(player, 'my_varB'),
u32_fromaltstack,
u32_add_drop(0, 1),
u32_toaltstack,
u32_state(player, 'my_varC'),
u32_fromaltstack,
u32_equalverify,
1,

]
