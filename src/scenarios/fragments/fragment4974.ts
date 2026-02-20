import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4972 } from "./fragment4972";
import type { FragmentToken4973 } from "./fragment4973";

export const FRAGMENT_4974 = gql(`
  fragment Fragment4974 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult4974 = ResultOf<typeof FRAGMENT_4974>;
type FragmentSelf4974 = NonNullable<FragmentResult4974>;

export type FragmentToken4974 =
  | FragmentSelf4974["__typename"]
  | FragmentSelf4974["typenameHint"] | FragmentToken4972 | FragmentToken4973;
