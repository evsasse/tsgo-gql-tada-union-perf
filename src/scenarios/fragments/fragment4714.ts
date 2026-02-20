import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4712 } from "./fragment4712";
import type { FragmentToken4713 } from "./fragment4713";

export const FRAGMENT_4714 = gql(`
  fragment Fragment4714 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult4714 = ResultOf<typeof FRAGMENT_4714>;
type FragmentSelf4714 = NonNullable<FragmentResult4714>;

export type FragmentToken4714 =
  | FragmentSelf4714["__typename"]
  | FragmentSelf4714["typenameHint"] | FragmentToken4712 | FragmentToken4713;
