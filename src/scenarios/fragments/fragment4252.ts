import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4250 } from "./fragment4250";
import type { FragmentToken4251 } from "./fragment4251";

export const FRAGMENT_4252 = gql(`
  fragment Fragment4252 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult4252 = ResultOf<typeof FRAGMENT_4252>;
type FragmentSelf4252 = NonNullable<FragmentResult4252>;

export type FragmentToken4252 =
  | FragmentSelf4252["__typename"]
  | FragmentSelf4252["typenameHint"] | FragmentToken4250 | FragmentToken4251;
