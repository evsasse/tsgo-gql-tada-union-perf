import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4013 } from "./fragment4013";
import type { FragmentToken4014 } from "./fragment4014";

export const FRAGMENT_4015 = gql(`
  fragment Fragment4015 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult4015 = ResultOf<typeof FRAGMENT_4015>;
type FragmentSelf4015 = NonNullable<FragmentResult4015>;

export type FragmentToken4015 =
  | FragmentSelf4015["__typename"]
  | FragmentSelf4015["typenameHint"] | FragmentToken4013 | FragmentToken4014;
