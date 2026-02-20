import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2241 } from "./fragment2241";
import type { FragmentToken2242 } from "./fragment2242";

export const FRAGMENT_2243 = gql(`
  fragment Fragment2243 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult2243 = ResultOf<typeof FRAGMENT_2243>;
type FragmentSelf2243 = NonNullable<FragmentResult2243>;

export type FragmentToken2243 =
  | FragmentSelf2243["__typename"]
  | FragmentSelf2243["typenameHint"] | FragmentToken2241 | FragmentToken2242;
