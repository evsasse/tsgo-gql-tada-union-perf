import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4655 } from "./fragment4655";
import type { FragmentToken4656 } from "./fragment4656";

export const FRAGMENT_4657 = gql(`
  fragment Fragment4657 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult4657 = ResultOf<typeof FRAGMENT_4657>;
type FragmentSelf4657 = NonNullable<FragmentResult4657>;

export type FragmentToken4657 =
  | FragmentSelf4657["__typename"]
  | FragmentSelf4657["typenameHint"] | FragmentToken4655 | FragmentToken4656;
