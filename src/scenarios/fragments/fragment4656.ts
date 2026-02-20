import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4654 } from "./fragment4654";
import type { FragmentToken4655 } from "./fragment4655";

export const FRAGMENT_4656 = gql(`
  fragment Fragment4656 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult4656 = ResultOf<typeof FRAGMENT_4656>;
type FragmentSelf4656 = NonNullable<FragmentResult4656>;

export type FragmentToken4656 =
  | FragmentSelf4656["__typename"]
  | FragmentSelf4656["typenameHint"] | FragmentToken4654 | FragmentToken4655;
