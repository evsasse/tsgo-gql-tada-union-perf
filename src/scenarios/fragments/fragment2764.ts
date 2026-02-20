import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2762 } from "./fragment2762";
import type { FragmentToken2763 } from "./fragment2763";

export const FRAGMENT_2764 = gql(`
  fragment Fragment2764 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult2764 = ResultOf<typeof FRAGMENT_2764>;
type FragmentSelf2764 = NonNullable<FragmentResult2764>;

export type FragmentToken2764 =
  | FragmentSelf2764["__typename"]
  | FragmentSelf2764["typenameHint"] | FragmentToken2762 | FragmentToken2763;
