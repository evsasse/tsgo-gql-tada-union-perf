import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2791 } from "./fragment2791";
import type { FragmentToken2792 } from "./fragment2792";

export const FRAGMENT_2793 = gql(`
  fragment Fragment2793 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult2793 = ResultOf<typeof FRAGMENT_2793>;
type FragmentSelf2793 = NonNullable<FragmentResult2793>;

export type FragmentToken2793 =
  | FragmentSelf2793["__typename"]
  | FragmentSelf2793["typenameHint"] | FragmentToken2791 | FragmentToken2792;
