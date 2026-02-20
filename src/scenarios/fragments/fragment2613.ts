import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2611 } from "./fragment2611";
import type { FragmentToken2612 } from "./fragment2612";

export const FRAGMENT_2613 = gql(`
  fragment Fragment2613 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult2613 = ResultOf<typeof FRAGMENT_2613>;
type FragmentSelf2613 = NonNullable<FragmentResult2613>;

export type FragmentToken2613 =
  | FragmentSelf2613["__typename"]
  | FragmentSelf2613["typenameHint"] | FragmentToken2611 | FragmentToken2612;
