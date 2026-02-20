import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4104 } from "./fragment4104";
import type { FragmentToken4105 } from "./fragment4105";

export const FRAGMENT_4106 = gql(`
  fragment Fragment4106 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult4106 = ResultOf<typeof FRAGMENT_4106>;
type FragmentSelf4106 = NonNullable<FragmentResult4106>;

export type FragmentToken4106 =
  | FragmentSelf4106["__typename"]
  | FragmentSelf4106["typenameHint"] | FragmentToken4104 | FragmentToken4105;
