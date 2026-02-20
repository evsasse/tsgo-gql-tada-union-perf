import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4015 } from "./fragment4015";
import type { FragmentToken4016 } from "./fragment4016";

export const FRAGMENT_4017 = gql(`
  fragment Fragment4017 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult4017 = ResultOf<typeof FRAGMENT_4017>;
type FragmentSelf4017 = NonNullable<FragmentResult4017>;

export type FragmentToken4017 =
  | FragmentSelf4017["__typename"]
  | FragmentSelf4017["typenameHint"] | FragmentToken4015 | FragmentToken4016;
