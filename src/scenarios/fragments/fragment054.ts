import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken052 } from "./fragment052";
import type { FragmentToken053 } from "./fragment053";

export const FRAGMENT_054 = gql(`
  fragment Fragment054 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult054 = ResultOf<typeof FRAGMENT_054>;
type FragmentSelf054 = NonNullable<FragmentResult054>;

export type FragmentToken054 =
  | FragmentSelf054["__typename"]
  | FragmentSelf054["typenameHint"] | FragmentToken052 | FragmentToken053;
