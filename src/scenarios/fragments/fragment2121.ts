import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2119 } from "./fragment2119";
import type { FragmentToken2120 } from "./fragment2120";

export const FRAGMENT_2121 = gql(`
  fragment Fragment2121 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult2121 = ResultOf<typeof FRAGMENT_2121>;
type FragmentSelf2121 = NonNullable<FragmentResult2121>;

export type FragmentToken2121 =
  | FragmentSelf2121["__typename"]
  | FragmentSelf2121["typenameHint"] | FragmentToken2119 | FragmentToken2120;
