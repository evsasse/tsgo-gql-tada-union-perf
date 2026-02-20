import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4961 } from "./fragment4961";
import type { FragmentToken4962 } from "./fragment4962";

export const FRAGMENT_4963 = gql(`
  fragment Fragment4963 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult4963 = ResultOf<typeof FRAGMENT_4963>;
type FragmentSelf4963 = NonNullable<FragmentResult4963>;

export type FragmentToken4963 =
  | FragmentSelf4963["__typename"]
  | FragmentSelf4963["typenameHint"] | FragmentToken4961 | FragmentToken4962;
