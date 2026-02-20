import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2705 } from "./fragment2705";
import type { FragmentToken2706 } from "./fragment2706";

export const FRAGMENT_2707 = gql(`
  fragment Fragment2707 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult2707 = ResultOf<typeof FRAGMENT_2707>;
type FragmentSelf2707 = NonNullable<FragmentResult2707>;

export type FragmentToken2707 =
  | FragmentSelf2707["__typename"]
  | FragmentSelf2707["typenameHint"] | FragmentToken2705 | FragmentToken2706;
