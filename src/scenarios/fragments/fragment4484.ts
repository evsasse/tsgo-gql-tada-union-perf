import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4482 } from "./fragment4482";
import type { FragmentToken4483 } from "./fragment4483";

export const FRAGMENT_4484 = gql(`
  fragment Fragment4484 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult4484 = ResultOf<typeof FRAGMENT_4484>;
type FragmentSelf4484 = NonNullable<FragmentResult4484>;

export type FragmentToken4484 =
  | FragmentSelf4484["__typename"]
  | FragmentSelf4484["typenameHint"] | FragmentToken4482 | FragmentToken4483;
