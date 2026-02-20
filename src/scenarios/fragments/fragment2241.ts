import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2239 } from "./fragment2239";
import type { FragmentToken2240 } from "./fragment2240";

export const FRAGMENT_2241 = gql(`
  fragment Fragment2241 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult2241 = ResultOf<typeof FRAGMENT_2241>;
type FragmentSelf2241 = NonNullable<FragmentResult2241>;

export type FragmentToken2241 =
  | FragmentSelf2241["__typename"]
  | FragmentSelf2241["typenameHint"] | FragmentToken2239 | FragmentToken2240;
