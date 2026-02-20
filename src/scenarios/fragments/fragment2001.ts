import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1999 } from "./fragment1999";
import type { FragmentToken2000 } from "./fragment2000";

export const FRAGMENT_2001 = gql(`
  fragment Fragment2001 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult2001 = ResultOf<typeof FRAGMENT_2001>;
type FragmentSelf2001 = NonNullable<FragmentResult2001>;

export type FragmentToken2001 =
  | FragmentSelf2001["__typename"]
  | FragmentSelf2001["typenameHint"] | FragmentToken1999 | FragmentToken2000;
