import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4960 } from "./fragment4960";
import type { FragmentToken4961 } from "./fragment4961";

export const FRAGMENT_4962 = gql(`
  fragment Fragment4962 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult4962 = ResultOf<typeof FRAGMENT_4962>;
type FragmentSelf4962 = NonNullable<FragmentResult4962>;

export type FragmentToken4962 =
  | FragmentSelf4962["__typename"]
  | FragmentSelf4962["typenameHint"] | FragmentToken4960 | FragmentToken4961;
