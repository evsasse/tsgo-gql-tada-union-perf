import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2358 } from "./fragment2358";
import type { FragmentToken2359 } from "./fragment2359";

export const FRAGMENT_2360 = gql(`
  fragment Fragment2360 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult2360 = ResultOf<typeof FRAGMENT_2360>;
type FragmentSelf2360 = NonNullable<FragmentResult2360>;

export type FragmentToken2360 =
  | FragmentSelf2360["__typename"]
  | FragmentSelf2360["typenameHint"] | FragmentToken2358 | FragmentToken2359;
