import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2539 } from "./fragment2539";
import type { FragmentToken2540 } from "./fragment2540";

export const FRAGMENT_2541 = gql(`
  fragment Fragment2541 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult2541 = ResultOf<typeof FRAGMENT_2541>;
type FragmentSelf2541 = NonNullable<FragmentResult2541>;

export type FragmentToken2541 =
  | FragmentSelf2541["__typename"]
  | FragmentSelf2541["typenameHint"] | FragmentToken2539 | FragmentToken2540;
