import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2763 } from "./fragment2763";
import type { FragmentToken2764 } from "./fragment2764";

export const FRAGMENT_2765 = gql(`
  fragment Fragment2765 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult2765 = ResultOf<typeof FRAGMENT_2765>;
type FragmentSelf2765 = NonNullable<FragmentResult2765>;

export type FragmentToken2765 =
  | FragmentSelf2765["__typename"]
  | FragmentSelf2765["typenameHint"] | FragmentToken2763 | FragmentToken2764;
