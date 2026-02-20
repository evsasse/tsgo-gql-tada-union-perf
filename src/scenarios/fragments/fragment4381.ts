import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4379 } from "./fragment4379";
import type { FragmentToken4380 } from "./fragment4380";

export const FRAGMENT_4381 = gql(`
  fragment Fragment4381 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult4381 = ResultOf<typeof FRAGMENT_4381>;
type FragmentSelf4381 = NonNullable<FragmentResult4381>;

export type FragmentToken4381 =
  | FragmentSelf4381["__typename"]
  | FragmentSelf4381["typenameHint"] | FragmentToken4379 | FragmentToken4380;
