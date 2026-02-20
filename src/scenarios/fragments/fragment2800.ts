import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2798 } from "./fragment2798";
import type { FragmentToken2799 } from "./fragment2799";

export const FRAGMENT_2800 = gql(`
  fragment Fragment2800 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult2800 = ResultOf<typeof FRAGMENT_2800>;
type FragmentSelf2800 = NonNullable<FragmentResult2800>;

export type FragmentToken2800 =
  | FragmentSelf2800["__typename"]
  | FragmentSelf2800["typenameHint"] | FragmentToken2798 | FragmentToken2799;
