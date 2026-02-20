import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2790 } from "./fragment2790";
import type { FragmentToken2791 } from "./fragment2791";

export const FRAGMENT_2792 = gql(`
  fragment Fragment2792 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult2792 = ResultOf<typeof FRAGMENT_2792>;
type FragmentSelf2792 = NonNullable<FragmentResult2792>;

export type FragmentToken2792 =
  | FragmentSelf2792["__typename"]
  | FragmentSelf2792["typenameHint"] | FragmentToken2790 | FragmentToken2791;
