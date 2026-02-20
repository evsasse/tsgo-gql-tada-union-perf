import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken681 } from "./fragment681";
import type { FragmentToken682 } from "./fragment682";

export const FRAGMENT_683 = gql(`
  fragment Fragment683 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult683 = ResultOf<typeof FRAGMENT_683>;
type FragmentSelf683 = NonNullable<FragmentResult683>;

export type FragmentToken683 =
  | FragmentSelf683["__typename"]
  | FragmentSelf683["typenameHint"] | FragmentToken681 | FragmentToken682;
