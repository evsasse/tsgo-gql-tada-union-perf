import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4142 } from "./fragment4142";
import type { FragmentToken4143 } from "./fragment4143";

export const FRAGMENT_4144 = gql(`
  fragment Fragment4144 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult4144 = ResultOf<typeof FRAGMENT_4144>;
type FragmentSelf4144 = NonNullable<FragmentResult4144>;

export type FragmentToken4144 =
  | FragmentSelf4144["__typename"]
  | FragmentSelf4144["typenameHint"] | FragmentToken4142 | FragmentToken4143;
