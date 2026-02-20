import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2603 } from "./fragment2603";
import type { FragmentToken2604 } from "./fragment2604";

export const FRAGMENT_2605 = gql(`
  fragment Fragment2605 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult2605 = ResultOf<typeof FRAGMENT_2605>;
type FragmentSelf2605 = NonNullable<FragmentResult2605>;

export type FragmentToken2605 =
  | FragmentSelf2605["__typename"]
  | FragmentSelf2605["typenameHint"] | FragmentToken2603 | FragmentToken2604;
