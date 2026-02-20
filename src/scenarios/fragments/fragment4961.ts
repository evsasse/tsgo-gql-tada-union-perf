import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4959 } from "./fragment4959";
import type { FragmentToken4960 } from "./fragment4960";

export const FRAGMENT_4961 = gql(`
  fragment Fragment4961 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult4961 = ResultOf<typeof FRAGMENT_4961>;
type FragmentSelf4961 = NonNullable<FragmentResult4961>;

export type FragmentToken4961 =
  | FragmentSelf4961["__typename"]
  | FragmentSelf4961["typenameHint"] | FragmentToken4959 | FragmentToken4960;
