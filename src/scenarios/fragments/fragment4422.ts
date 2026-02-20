import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4420 } from "./fragment4420";
import type { FragmentToken4421 } from "./fragment4421";

export const FRAGMENT_4422 = gql(`
  fragment Fragment4422 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult4422 = ResultOf<typeof FRAGMENT_4422>;
type FragmentSelf4422 = NonNullable<FragmentResult4422>;

export type FragmentToken4422 =
  | FragmentSelf4422["__typename"]
  | FragmentSelf4422["typenameHint"] | FragmentToken4420 | FragmentToken4421;
