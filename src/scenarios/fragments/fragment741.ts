import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken739 } from "./fragment739";
import type { FragmentToken740 } from "./fragment740";

export const FRAGMENT_741 = gql(`
  fragment Fragment741 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult741 = ResultOf<typeof FRAGMENT_741>;
type FragmentSelf741 = NonNullable<FragmentResult741>;

export type FragmentToken741 =
  | FragmentSelf741["__typename"]
  | FragmentSelf741["typenameHint"] | FragmentToken739 | FragmentToken740;
