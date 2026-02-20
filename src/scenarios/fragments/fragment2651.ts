import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2649 } from "./fragment2649";
import type { FragmentToken2650 } from "./fragment2650";

export const FRAGMENT_2651 = gql(`
  fragment Fragment2651 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult2651 = ResultOf<typeof FRAGMENT_2651>;
type FragmentSelf2651 = NonNullable<FragmentResult2651>;

export type FragmentToken2651 =
  | FragmentSelf2651["__typename"]
  | FragmentSelf2651["typenameHint"] | FragmentToken2649 | FragmentToken2650;
