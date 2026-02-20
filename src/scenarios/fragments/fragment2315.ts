import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2313 } from "./fragment2313";
import type { FragmentToken2314 } from "./fragment2314";

export const FRAGMENT_2315 = gql(`
  fragment Fragment2315 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult2315 = ResultOf<typeof FRAGMENT_2315>;
type FragmentSelf2315 = NonNullable<FragmentResult2315>;

export type FragmentToken2315 =
  | FragmentSelf2315["__typename"]
  | FragmentSelf2315["typenameHint"] | FragmentToken2313 | FragmentToken2314;
