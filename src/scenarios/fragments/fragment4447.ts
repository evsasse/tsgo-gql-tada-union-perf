import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4445 } from "./fragment4445";
import type { FragmentToken4446 } from "./fragment4446";

export const FRAGMENT_4447 = gql(`
  fragment Fragment4447 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult4447 = ResultOf<typeof FRAGMENT_4447>;
type FragmentSelf4447 = NonNullable<FragmentResult4447>;

export type FragmentToken4447 =
  | FragmentSelf4447["__typename"]
  | FragmentSelf4447["typenameHint"] | FragmentToken4445 | FragmentToken4446;
