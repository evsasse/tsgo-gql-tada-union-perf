import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4105 } from "./fragment4105";
import type { FragmentToken4106 } from "./fragment4106";

export const FRAGMENT_4107 = gql(`
  fragment Fragment4107 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult4107 = ResultOf<typeof FRAGMENT_4107>;
type FragmentSelf4107 = NonNullable<FragmentResult4107>;

export type FragmentToken4107 =
  | FragmentSelf4107["__typename"]
  | FragmentSelf4107["typenameHint"] | FragmentToken4105 | FragmentToken4106;
