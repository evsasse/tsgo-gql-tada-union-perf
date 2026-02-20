import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4446 } from "./fragment4446";
import type { FragmentToken4447 } from "./fragment4447";

export const FRAGMENT_4448 = gql(`
  fragment Fragment4448 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult4448 = ResultOf<typeof FRAGMENT_4448>;
type FragmentSelf4448 = NonNullable<FragmentResult4448>;

export type FragmentToken4448 =
  | FragmentSelf4448["__typename"]
  | FragmentSelf4448["typenameHint"] | FragmentToken4446 | FragmentToken4447;
