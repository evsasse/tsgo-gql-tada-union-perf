import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3705 } from "./fragment3705";
import type { FragmentToken3706 } from "./fragment3706";

export const FRAGMENT_3707 = gql(`
  fragment Fragment3707 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult3707 = ResultOf<typeof FRAGMENT_3707>;
type FragmentSelf3707 = NonNullable<FragmentResult3707>;

export type FragmentToken3707 =
  | FragmentSelf3707["__typename"]
  | FragmentSelf3707["typenameHint"] | FragmentToken3705 | FragmentToken3706;
