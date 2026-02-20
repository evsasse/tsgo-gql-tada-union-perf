import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken705 } from "./fragment705";
import type { FragmentToken706 } from "./fragment706";

export const FRAGMENT_707 = gql(`
  fragment Fragment707 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult707 = ResultOf<typeof FRAGMENT_707>;
type FragmentSelf707 = NonNullable<FragmentResult707>;

export type FragmentToken707 =
  | FragmentSelf707["__typename"]
  | FragmentSelf707["typenameHint"] | FragmentToken705 | FragmentToken706;
