import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2698 } from "./fragment2698";
import type { FragmentToken2699 } from "./fragment2699";

export const FRAGMENT_2700 = gql(`
  fragment Fragment2700 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult2700 = ResultOf<typeof FRAGMENT_2700>;
type FragmentSelf2700 = NonNullable<FragmentResult2700>;

export type FragmentToken2700 =
  | FragmentSelf2700["__typename"]
  | FragmentSelf2700["typenameHint"] | FragmentToken2698 | FragmentToken2699;
