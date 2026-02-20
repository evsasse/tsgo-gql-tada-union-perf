import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2166 } from "./fragment2166";
import type { FragmentToken2167 } from "./fragment2167";

export const FRAGMENT_2168 = gql(`
  fragment Fragment2168 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult2168 = ResultOf<typeof FRAGMENT_2168>;
type FragmentSelf2168 = NonNullable<FragmentResult2168>;

export type FragmentToken2168 =
  | FragmentSelf2168["__typename"]
  | FragmentSelf2168["typenameHint"] | FragmentToken2166 | FragmentToken2167;
