import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4922 } from "./fragment4922";
import type { FragmentToken4923 } from "./fragment4923";

export const FRAGMENT_4924 = gql(`
  fragment Fragment4924 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult4924 = ResultOf<typeof FRAGMENT_4924>;
type FragmentSelf4924 = NonNullable<FragmentResult4924>;

export type FragmentToken4924 =
  | FragmentSelf4924["__typename"]
  | FragmentSelf4924["typenameHint"] | FragmentToken4922 | FragmentToken4923;
