import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4920 } from "./fragment4920";
import type { FragmentToken4921 } from "./fragment4921";

export const FRAGMENT_4922 = gql(`
  fragment Fragment4922 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult4922 = ResultOf<typeof FRAGMENT_4922>;
type FragmentSelf4922 = NonNullable<FragmentResult4922>;

export type FragmentToken4922 =
  | FragmentSelf4922["__typename"]
  | FragmentSelf4922["typenameHint"] | FragmentToken4920 | FragmentToken4921;
