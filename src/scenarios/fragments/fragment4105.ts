import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4103 } from "./fragment4103";
import type { FragmentToken4104 } from "./fragment4104";

export const FRAGMENT_4105 = gql(`
  fragment Fragment4105 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult4105 = ResultOf<typeof FRAGMENT_4105>;
type FragmentSelf4105 = NonNullable<FragmentResult4105>;

export type FragmentToken4105 =
  | FragmentSelf4105["__typename"]
  | FragmentSelf4105["typenameHint"] | FragmentToken4103 | FragmentToken4104;
